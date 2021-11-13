const firebase = require("firebase");

const getUser = (id, email, password) => {
  const userReference = firebase.database().ref(`/User/${id ? id : ""}`);
  return new Promise((resolve, reject) => {
    userReference.on("value", (snapshot) => {
      const users = snapshot.val();
      if (email && users) {
        const isEmail = !!Object.keys(users).filter(
          (item) =>
            users[item].email === email &&
            (password ? users[item].password === password : true)
        ).length;
        resolve(isEmail);
      } else resolve(false);
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
  const referencePath = `/User/${id}/`;
  const userReference = firebase.database().ref(referencePath);
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await getUser(0, email);
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
      const checkUser = await getUser(0, params.email, params.password);
      if (checkUser) {
        resolve(params);
        return;
      }
      resolve({ ...params, error: "User not found", status: false });
    } catch (error) {
      console.log("Error", error);
      reject(error);
    }
  });
};

module.exports = {
  loginUser,
  createUser,
  getUser,
};
