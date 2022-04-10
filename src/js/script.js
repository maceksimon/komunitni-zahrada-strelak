import { createApp, defineAsyncComponent } from "vue";
// TODO: add animations
// import gsap from "gsap";

const Modal = defineAsyncComponent(() => import("./Modal.vue"));

const appId = "app";

const App = {
  components: {
    Modal,
  },
  data() {
    return {};
  },
};

const el = document.getElementById(appId);
if (el) {
  createApp(App).mount(`#${appId}`);
}
