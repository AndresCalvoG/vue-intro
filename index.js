const vm = Vue.createApp({
  data() {
    return {
      text: "Hola Vue",
    };
  },
}).mount("#app");

console.log(vm);
