const vm = Vue.createApp({
  data() {
    return {
      text: "Hola Vue data",
      title: "<h1>Soy un titulo</h1>",
    };
  },
  template: `<p>{{text}}</p>
            <p v-once v-text="text"></p>
            <div v-html="title"></div>`,
}).mount("#app");

console.log(vm);
