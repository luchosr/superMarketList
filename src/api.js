export default {
  todos: {
    get: function () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem("todos")));
        }, 1000);
      });
    },
  },
};
