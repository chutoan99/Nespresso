export default {
  title: "Style/Icon",
  component: {},
  parameters: {
    layout: "fullscreen",
  },
};
import IconPage from "./Icon.vue";
export const ListIcon = {
  render: () => ({
    components: { IconPage },
    template: "<icon-page />",
  }),
};
