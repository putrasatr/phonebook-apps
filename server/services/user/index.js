const firebase = require("firebase");

const getRef = (id) => firebase.database().ref(`/User/${id ? id : ""}`);
const getUser = (id, email, password) => {
  const userReference = getRef(id);
  return new Promise((resolve, reject) => {
    userReference.on("value", (snapshot) => {
      const users = snapshot.val();
      if (users)
        if (email) {
          const result = Object.keys(users).filter(
            (item) =>
              users[item].email === email &&
              (password ? users[item].password === password : true)
          );
          resolve([!!result.length, result[0]]);
        } else {
          let arrUser = [users];
          if (!id)
            arrUser = Object.keys(users).map((item) => ({
              ...users[item],
            }));
          resolve(arrUser);
        }
      else resolve([false]);
      userReference.off("value");
    });
  });
};

//Create new instance
const createUser = (params) => {
  const { email, password, phone_number, username } = params;
  const id = username + Date.now();
  const body = {
    id,
    email,
    password,
    username,
    phone_number,
    is_online: false,
    profile_pic: "",
    token: "afdf",
    created_date: Date.now(),
    update_date: Date.now(),
    status: true,
  };
  const userReference = getRef(id);
  return new Promise(async (resolve, reject) => {
    try {
      const [checkUser] = await getUser(0, email);
      if (checkUser) {
        resolve({
          ...body,
          error: "Email already used",
          status: false,
        });
        return;
      }
      userReference.set(body, (error) => {
        if (error) reject("Data could not be deleted." + error);
        else resolve(body);
      });
    } catch (error) {
      console.log("Error", error);
    }
  });
};

const loginUser = (params) => {
  return new Promise(async (resolve, reject) => {
    try {
      const [checkUser, idUser] = await getUser(
        null,
        params.email,
        params.password
      );
      if (checkUser) {
        resolve({ ...params, status: true, id: idUser });
        return;
      }
      resolve({ ...params, error: "User not found", status: false });
    } catch (error) {
      console.log("Error", error);
      reject(error);
    }
  });
};

const logoutUser = (id) => {
  const userReference = getRef(id);
  return new Promise(async (resolve, reject) => {
    try {
      const [user] = await getUser(id);
      const body = { ...user, token: null, update_date: Date.now() };
      userReference.set(body, (err) =>
        err ? reject() : resolve({ ...body, status: true })
      );
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  loginUser,
  createUser,
  getUser,
  logoutUser,
};
