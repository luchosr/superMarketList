import { reject } from "q";

export default {
  todos: {
    get: function() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem("todos")));
        }, 1000);
      });
    }
  }
};

/*
agregar un metodo set con delay para setear el local storage.
*/
