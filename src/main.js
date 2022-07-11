import { createApp } from "vue";
import App from "@/App.vue";

// import routes from routes.js //
import routes from "@/routes/routes";
import store from "@/store/index";
//import css styles //
import "@/sass/main.scss";

import BaseCard from "@/components/ui/BaseCard.vue";
import BaseDatepicker from "@/components/ui/BaseDatepicker.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";
import BaseRadio from "@/components/ui/BaseRadio.vue";
import BaseTable from "@/components/ui/BaseTable.vue";
import BaseModal from "@/components/ui/BaseModal.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import ButtonClose from "@/components/ui/ButtonClose.vue";
import PaymentButton from "@/components/ui/PaymentButton.vue";
import InformBanner from "@/components/ui/InformBanner.vue";

const app = createApp(App);

// imports global components
app.component("base-datepicker", BaseDatepicker);
app.component("base-table", BaseTable);
app.component("base-checkbox", BaseCheckbox);
app.component("base-radio", BaseRadio);
app.component("base-card", BaseCard);
app.component("base-modal", BaseModal);
app.component("base-input", BaseInput);
app.component("button-close", ButtonClose);
app.component("payment-button", PaymentButton);
app.component("inform-banner", InformBanner);

app.use(store);
app.use(routes);
app.mount("#app");
