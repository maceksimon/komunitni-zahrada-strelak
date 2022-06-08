import { createApp, defineAsyncComponent } from "vue";
import lightGallery from "lightgallery";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

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

lightGallery(document.getElementById("lightgallery"), {
  plugins: [lgZoom, lgThumbnail],
  licenseKey: "your_license_key",
  selector: "a",
});
