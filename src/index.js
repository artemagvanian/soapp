import Vue from "vue";

import Buefy from "buefy";
import "buefy/dist/buefy.css";

import App from "./App.vue";

Vue.use(Buefy);

new Vue({ el: "#app", render: (createElement) => createElement(App) });
