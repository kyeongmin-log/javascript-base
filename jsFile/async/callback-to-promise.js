// Callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((onSuccess, onError) => {
      setTimeout(() => {
        if (
          (id === "kyeongmin" && password === "dream") ||
          (id === "coder" && password === "academy")
        ) {
          onSuccess(id);
        } else {
          onError(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((onSuccess, onError) => {
      setTimeout(() => {
        if (user === "kyeongmin") {
          onSuccess({ name: "kyeongmin", role: "admin" });
        } else {
          onError(new Error("no access"));
        }
      }, 1000);
    });
  }
}

// Callback Hell example(me)
const userStorage = new UserStorage();

//유저 정보
const userInfo = {
  id: "kyeongmin",
  password: "dream",
};

//promise
userStorage
  .loginUser(userInfo.id, userInfo.password)
  .then((id) => userStorage.getRoles(id))
  .then((user) =>
    console.log(`promise => name : ${user.name}, role: ${user.role}`)
  );

//async, await
(async function printRole() {
  const user = await userStorage.loginUser(userInfo.id, userInfo.password);
  const getRoleUser = await userStorage.getRoles(user);
  console.log(
    `async, await => name : ${getRoleUser.name}, role: ${getRoleUser.role}`
  );
})();

// Callback Hell example(ellie)
// Original code from Youtube course
// const userStorage = new UserStorage();
// const id = prompt("enter your id");
// const password = prompt("enter your passrod");
// userStorage
//   .loginUser(id, password)
//   .then(userStorage.getRoles)
//   .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
//   .catch(console.log);

//   // Homework Answer 🚀
//   async getUserWithRole(user, password) {
//     const user = await this.loginUser(user, password);
//     const role = await this.getRoles(user);
//     return role;
//   }
// }

// // Homework Answer 🚀
// userStorage
//   .getUserWithRole() //
//   .catch(console.log)
//   .then(console.log);
