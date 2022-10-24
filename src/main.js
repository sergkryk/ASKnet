import { createApp } from "vue";
import App from "@/App.vue";

// import routes from routes.js //
import routes from "@/routes/routes";
import store from "@/store/index";
//import css styles //
import "@/sass/main.scss";

import BaseCard from "@/components/ui/BaseCard.vue";
import BaseLogo from "@/components/ui/BaseLogo.vue";
import BaseDatepicker from "@/components/ui/BaseDatepicker.vue";
import BaseCheckbox from "@/components/ui/BaseCheckbox.vue";
import BaseRadio from "@/components/ui/BaseRadio.vue";
import BaseTable from "@/components/ui/BaseTable.vue";
import BaseModal from "@/components/ui/BaseModal.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
import BaseInput from "@/components/ui/BaseInput.vue";
import BaseLink from "@/components/ui/BaseLink.vue";
import BaseFilter from "@/components/ui/BaseFilter.vue";
import BaseImage from "@/components/ui/BaseImage.vue";
import ButtonClose from "@/components/ui/ButtonClose.vue";
import PaymentButton from "@/components/ui/PaymentButton.vue";
import InformBanner from "@/components/ui/InformBanner.vue";
import RootSection from "@/components/layout/RootSection.vue";

const app = createApp(App);

// imports global components
app.component("base-datepicker", BaseDatepicker);
app.component("base-table", BaseTable);
app.component("base-checkbox", BaseCheckbox);
app.component("base-radio", BaseRadio);
app.component("base-card", BaseCard);
app.component("base-logo", BaseLogo);
app.component("base-modal", BaseModal);
app.component("base-button", BaseButton);
app.component("base-link", BaseLink);
app.component("base-input", BaseInput);
app.component("base-image", BaseImage);
app.component("base-filter", BaseFilter);
app.component("button-close", ButtonClose);
app.component("payment-button", PaymentButton);
app.component("inform-banner", InformBanner);
app.component("root-section", RootSection);

app.use(routes);
app.use(store);
app.mount("#app");
