import { createRouter, createWebHistory } from "vue-router";

// Import your components for each route
import NotPoundPage from "../pages/404.vue";
import AboutUsPage from "../pages/about_us.vue";
import AccountPage from "../pages/account.vue";
import StoreLocationPage from "../pages/store_location.vue";
import VerificationPage from "../pages/verification.vue";
import FaqPage from "../pages/faq.vue";
import RegistrationPage from "../pages/registration.vue";
import OrderConfirmationPage from "../pages/order-confirmation.vue";
import ConditionOfSalePage from "../pages/condition_of_sale.vue";
import NotFound2Page from "../pages/not_found.vue";
import SignUpStartPage from "../pages/signUp_start.vue";
import signUpPrivatePage from "../pages/signUp_private.vue";
import signUpPrivate1Page from "../pages/signUp_private_1.vue";
import signUpPrivate2Page from "../pages/signUp_private_2.vue";
import ResetPasswordPage from "../pages/reset_password.vue";
import ContactUsPage from "../pages/contact_us.vue";
import signUpCompanyPage from "../pages/signUp_company.vue";
import ServicePage from "../pages/service.vue";
import PrivacyPolicyPage from "../pages/privacy_policy.vue";

import ShoppingStep1Page from "../pages/shopping_step_1.vue";
import ShoppingStep2Page from "../pages/shopping_step_2.vue";
import ShoppingStep3Page from "../pages/shopping_step_3.vue";
import ShoppingStep4Page from "../pages/shopping_step_4.vue";
import ShoppingStep5Page from "../pages/shopping_step_5.vue";

import SettingAddressPage from "../pages/setting_address.vue";
import SettingContactPage from "../pages/setting_contact.vue";
import SettingInfoPage from "../pages/setting_info.vue";
import SettingMachinePage from "../pages/setting_machine.vue";
import SettingOrderPage from "../pages/setting_order.vue";

const routes = [
  { path: "/404", component: NotPoundPage }, // done
  { path: "/not_found", component: NotFound2Page }, // done

  { path: "/about_us", component: AboutUsPage }, // done
  { path: "/contact_us", component: ContactUsPage }, // done
  { path: "/account", component: AccountPage }, //done
  { path: "/reset_password", component: ResetPasswordPage }, //done

  { path: "/faq", component: FaqPage }, //done
  { path: "/privacy_policy", component: PrivacyPolicyPage }, //done
  // Main
  { path: "/store_location", component: StoreLocationPage }, //done
  { path: "/service", component: ServicePage }, //done

  { path: "/verification", component: VerificationPage }, //done
  { path: "/registration", component: RegistrationPage }, //done
  { path: "/order-confirmation", component: OrderConfirmationPage }, //done

  { path: "/condition_of_sale", component: ConditionOfSalePage }, //done
  // Sign up
  { path: "/signUp_start", component: SignUpStartPage }, //done
  { path: "/signUp_private", component: signUpPrivatePage }, //done
  { path: "/signUp_company", component: signUpCompanyPage }, //done
  { path: "/signUp_private_1", component: signUpPrivate1Page }, //done
  { path: "/signUp_private_2", component: signUpPrivate2Page }, //done
  // Shopping
  { path: "/shopping_step_1", component: ShoppingStep1Page }, //done
  { path: "/shopping_step_2", component: ShoppingStep2Page }, //done
  { path: "/shopping_step_3", component: ShoppingStep3Page }, //done
  { path: "/shopping_step_4", component: ShoppingStep4Page }, //done
  { path: "/shopping_step_5", component: ShoppingStep5Page }, //done

  // Setting
  { path: "/setting_address", component: SettingAddressPage }, //done
  { path: "/setting_contact", component: SettingContactPage }, //done
  { path: "/setting_info", component: SettingInfoPage }, //done
  { path: "/setting_machine", component: SettingMachinePage }, //done
  { path: "/setting_order", component: SettingOrderPage }, //done
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes, // Verify that the routes array is correctly passed
});
export default router;
