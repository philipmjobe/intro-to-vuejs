// index.js
var app = new Vue({
  el: "#app",
  data: function () {
    message: "Hello from JavaScript!";
    movies: [
      { id: 1, title: "Saw" },
      { id: 2, title: "Halloween" },
      { id: 3, title: "Hellraiser" },
      { id: 4, title: "Terrifier" },
    ];
  },
});
