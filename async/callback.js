// 동기와 비동기
// callback && hoisting

console.log(1); //동기
setTimeout(() => console.log(2), 1000); //비동기
console.log(3);

//Synchronous callback
function ScallBack(Scall) {
  Scall();
}

ScallBack(() => console.log("hellow"));

// Asynchronous callback
function printWith(Acall, timeout) {
  setTimeout(Acall, timeout);
}

printWith(() => console.log("asunc callback"), 2000);

//Hell ex

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "jin" && password === "1234") ||
        (id === "won" && password === "5678")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "jin") {
        onSuccess({ name: "jin", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userWithRole => {
          alert(`Hellow ${user.name},you have a ${user.role} role`);
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
