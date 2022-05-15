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
  faUpload,
  faAnglesLeft,
  faAnglesRight,
  faEye,
  faEyeSlash,
  faScrewdriverWrench,
  faPencil,
  faClone,
  faCheck,
  faSquareCheck,
  faEllipsis,
  faEllipsisVertical,
  faMinus,
  faPlus,
  faSliders,
  faTrash,
  faPenToSquare,
  faFolder,
  faFolderOpen,
  faFileZipper

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
  faUpload,
  faAnglesLeft,
  faAnglesRight,
  faEye,
  faEyeSlash,
  faScrewdriverWrench,
  faPencil,
  faClone,
  faCheck,
  faSquareCheck,
  faEllipsis,
  faEllipsisVertical,
  faMinus,
  faPlus,
  faSliders,
  faTrash,
  faPenToSquare,
  faFolder,
  faFolderOpen,
  faFileZipper
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
