import { createRouter, createWebHistory } from "vue-router";

// Import your components for each route
import NotPoundPage from "../pages/404.vue";
import AboutUsPage from "../pages/about_us.vue";
import AccountPage from "../pages/account.vue";
import StoreLocationPage from "../pages/store_location.vue";
import VerificationPage from "../pages/emai_verification.vue";
import FaqPage from "../pages/faq.vue";
import RegistrationPage from "../pages/email_registration.vue";
import OrderConfirmationPage from "../pages/email_confirmation.vue";
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
import IndexPage from "../pages/index.vue";
import BenefitsPage from "../pages/benefits.vue";
import CoffeePage from "../pages/coffee.vue";
import CoffeeDetailPage from "../pages/coffee_detail.vue";
import AccessoriesPage from "../pages/accessories.vue";
import AccessoriesDetailPage from "../pages/accessories_detail.vue";
import MachinesPage from "../pages/machines.vue";
import MachinesDetailPage from "../pages/machines_detail.vue";
import MachinesComparePage from "../pages/machines_compare.vue";
import ProfessionalDetailPage from "../pages/professional_detail.vue";
import ProfessionalPage from "../pages/professional.vue";
import CoffeeOriginalPage from "../pages/coffee_original.vue";

import ShoppingStep1 from "../containers/shopping_step_1.vue";
import ShoppingStep2 from "../containers/shopping_step_2.vue";
import ShoppingStep3 from "../containers/shopping_step_3.vue";
import ShoppingStep4 from "../containers/shopping_step_4.vue";
import ShoppingStep5 from "../containers/shopping_step_5.vue";

import SettingAddress from "../containers/setting_address.vue";
import SettingContact from "../containers/setting_contact.vue";
import SettingInfo from "../containers/setting_info.vue";
import SettingMachine from "../containers/setting_machine.vue";
import SettingOrder from "../containers/setting_order.vue";

import SustainabilityRecycling from "../containers/sustainability_recycling.vue";
import SustainabilityBcorp from "../containers/sustainability_bcorp.vue";
import sustainabilityCircularity from "../containers/sustainability_circularity.vue";
import SustainabilityClimate from "../containers/sustainability_climate.vue";
import SustainabilityCommunityPage from "../containers/sustainability_community.vue";

const routes = [
  // MAIN
  { path: "/", component: IndexPage }, //done
  { path: "/store_location", component: StoreLocationPage }, //done
  { path: "/service", component: ServicePage },
  { path: "/machines", component: MachinesPage }, //done
  { path: "/machines_detail", component: MachinesDetailPage }, //done
  { path: "/machines_compare", component: MachinesComparePage }, //done
  { path: "/professional", component: ProfessionalPage },
  { path: "/professional_detail", component: ProfessionalDetailPage },
  { path: "/accessories", component: AccessoriesPage }, //done
  { path: "/accessories_detail", component: AccessoriesDetailPage }, //done
  { path: "/coffee", component: CoffeePage }, //done
  { path: "/coffee_detail", component: CoffeeDetailPage }, //done
  { path: "/coffee_original", component: CoffeeOriginalPage }, //done
  { path: "/benefits", component: BenefitsPage },
  {
    path: "/sustainability",
    redirect: "sustainability/commitment", // Chuyển hướng mặc định đến
    component: () => import("@/pages/sustainability.vue"),
    children: [
      { path: "commitment", component: SustainabilityRecycling }, // done
      { path: "bcorp", component: SustainabilityBcorp }, // done
      { path: "circularity", component: sustainabilityCircularity }, // done
      { path: "climate", component: SustainabilityClimate }, // done
      { path: "community", component: SustainabilityCommunityPage }, // done
    ],
  },

  // SERVICE
  // done
  { path: "/about_us", component: AboutUsPage }, // done
  { path: "/contact_us", component: ContactUsPage }, // done
  { path: "/account", component: AccountPage }, // done
  { path: "/reset_password", component: ResetPasswordPage }, //done
  // EMAIL TEMPLATE
  { path: "/email_verification", component: VerificationPage }, //done
  { path: "/email_registration", component: RegistrationPage }, // done
  { path: "/email_confirmation", component: OrderConfirmationPage }, // done
  // SIGN UP
  { path: "/signUp_start", component: SignUpStartPage }, // done
  { path: "/signUp_private", component: signUpPrivatePage }, // done
  { path: "/signUp_company", component: signUpCompanyPage }, // done
  { path: "/signUp_private_1", component: signUpPrivate1Page }, // done
  { path: "/signUp_private_2", component: signUpPrivate2Page }, // done
  // SHOPPING
  {
    path: "/shopping",
    redirect: "shopping/step_1",
    component: () => import("@/pages/shopping.vue"),
    children: [
      { path: "step_1", component: ShoppingStep1 }, // done
      { path: "step_2", component: ShoppingStep2 }, // done
      { path: "step_3", component: ShoppingStep3 }, // done
      { path: "step_4", component: ShoppingStep4 }, // done
      { path: "step_5", component: ShoppingStep5 }, // done
    ],
  },
  // SETTING
  {
    path: "/setting",
    redirect: "/setting/order",
    component: () => import("@/pages/setting.vue"),
    children: [
      { path: "order", component: SettingOrder }, // done
      { path: "address", component: SettingAddress }, // done
      { path: "contact", component: SettingContact }, // done
      { path: "info", component: SettingInfo }, // done
      { path: "machine", component: SettingMachine }, // done
    ],
  },
  // 404  & NOT FOUND
  { path: "/:pathMatch(.*)*", component: NotPoundPage }, // done
  { path: "/not_found", component: NotFound2Page }, //done
  // FAQ  & PRIVACY POLICY & CONDITION OF SALE
  { path: "/faq", component: FaqPage }, // done
  { path: "/privacy_policy", component: PrivacyPolicyPage }, // done
  { path: "/condition_of_sale", component: ConditionOfSalePage }, //done
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes, // Verify that the routes array is correctly passed
});
export default router;
