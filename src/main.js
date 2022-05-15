import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faBarcode,
  faDesktop,
  faMobileScreenButton,
  faFloppyDisk,
  faBars,
  faXmark,
  faDownload,
  faAnglesLeft,
  faAnglesRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(
  faPhone,
  faBarcode,
  faDesktop,
  faMobileScreenButton,
  faFloppyDisk,
  faBars,
  faXmark,
  faDownload,
  faAnglesLeft,
  faAnglesRight
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
