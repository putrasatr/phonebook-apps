const firebase = require("firebase");

const getUser = (id, email) => {
  const userReference = firebase.database().ref(`/User/`);
  return new Promise((resolve, reject) => {
    userReference.on("value", (snapshot) => {
      const users = snapshot.val();
      if (email && users) {
        const isEmail = !!Object.keys(users).filter(
          (item) => users[item].email === email
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
  };
  const referencePath = `/User/${id}/`;
  const userReference = firebase.database().ref(referencePath);
  return new Promise(async (resolve, reject) => {
    try {
      const checkUser = await getUser(0, email);
      if (checkUser) {
        console.log("Email already used");
        resolve({
          ...body,
          error: "Email already used",
        });
        return;
      }
      userReference.set(body, (error) => {
        if (error) {
          reject("Data could not be deleted." + error);
        } else {
          resolve(body);
        }
      });
    } catch (error) {
      console.log("Error", error);
    }
  });
};

const loginUser = (params) => {
  return new Promise((resolve, reject) => {
    userReference.on("value", () => {
      resolve(userReference);
      userReference.off("value");
    });
  });
};

module.exports = {
  loginUser,
  createUser,
  getUser,
};
