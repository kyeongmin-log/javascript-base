"use strict";

// JavaScript is synchronous.
// Execute the code block by orger after hoisting.
// hoisting: var, function declaration
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log("hello"));

// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
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
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "kyeongmin") {
        onSuccess({ name: "kyeongmin", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// Callback Hell example(me)
const userStorage = new UserStorage();

//유저 정보
const userInfo = {
  id: "kyeongmin",
  password: "dream",
};

//😱 This is hell.
userStorage.loginUser(
  userInfo.id,
  userInfo.password,
  (userId) => {
    userStorage.getRoles(
      userId,
      (user) => console.log(user.role),
      (error) => console.log(error)
    );
  },
  (error) => console.log(error)
);

// Callback Hell example(ellie)
// const userStorage = new UserStorage();
// const id = prompt('enter your id');
// const password = prompt('enter your passrod');
// userStorage.loginUser(
//   id,
//   password,
//   user => {
//     userStorage.getRoles(
//       user,
//       userWithRole => {
//         alert(
//           `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//         );
//       },
//       error => {
//         console.log(error);
//       }
//     );
//   },
//   error => {
//     console.log(error);
//   }
// );
