import Vue from "vue";
import VuePlayer from "./VuePlayer.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(VuePlayer)
}).$mount("#vueplayer");
