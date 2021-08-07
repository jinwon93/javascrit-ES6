// Callback Hell example
class UserStorage {
    loginUser(id, password) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          
          if (
            (id === 'jin' && password === '1234') ||
            (id === 'won' && password === '5678')
          ) {
            resolve(id);
          } else {
            reject(new Error('not found'));
          }
        }, 2000);
      });
    }
  
    getRoles(user) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (user === 'jin') {
            resolve({ name: 'jin', role: 'admin' });
          } else {
            reject(new Error('no access'));
          }
        }, 1000);
      });
    }
  
    // async 복습 Promiss 내용확인
    async getUserWithRole(user, password) {
      const id = await this.loginUser(user, password);
      const role = await this.getRoles(id);
      return role;
    }
  }
  
  // Original code from Youtube course
  const userStorage = new UserStorage();
  const id = prompt('enter your id');
  const password = prompt('enter your passrod');
  
  
  // Homework Answer 🚀
  userStorage
    .getUserWithRole(id, password) //
    .catch(console.log)
    .then(console.log);