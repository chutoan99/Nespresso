<script lang="ts">
import { defineComponent } from "vue";
//? APP
import FaqItem from "@/components/faq_item.vue";
import { data_top, data_vertuo, data_return } from "@/utils/data_faq";

export default defineComponent({
  name: "FaqPage",
  components: {
    FaqItem,
  },
  data() {
    return {
      dataTop: data_top,
      dataVertuo: data_vertuo,
      dataReturn: data_return,
    };
  },
});
</script>

<template lang="pug">
main#faq
  .customer-services-faq
    .customer-services-input
      form.customer-services-form(action='')
        input#query.customer-services-input(type='text' title='Search' name='query' value='' placeholder='Search')
        svg(width='16' height='16' viewbox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M15 1L1 15' stroke='#17171A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
          path(d='M15 15L1 1' stroke='#17171A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round')
        svg(width='23' height='23' viewbox='0 0 23 23' fill='none' xmlns='http://www.w3.org/2000/svg')
          path(d='M22.5608 20.4393L17.3278 15.2063C18.6404 13.3616 19.2119 11.091 18.9292 8.84469C18.6464 6.59837 17.5299 4.54031 15.801 3.07846C14.0722 1.61662 11.8572 0.857723 9.59509 0.952207C7.33302 1.04669 5.18902 1.98766 3.58809 3.58858C1.98717 5.18951 1.0462 7.33351 0.951719 9.59558C0.857235 11.8577 1.61613 14.0727 3.07798 15.8015C4.53982 17.5304 6.59788 18.6468 8.8442 18.9296C11.0905 19.2124 13.3611 18.6409 15.2058 17.3283L20.4388 22.5613C20.7202 22.8427 21.1019 23.0008 21.4998 23.0008C21.8978 23.0008 22.2794 22.8427 22.5608 22.5613C22.8422 22.2799 23.0003 21.8983 23.0003 21.5003C23.0003 21.1024 22.8422 20.7207 22.5608 20.4393ZM2.99983 10.0003C2.99983 8.61585 3.41037 7.26247 4.17954 6.11132C4.94871 4.96018 6.04196 4.06297 7.32104 3.53316C8.60012 3.00334 10.0076 2.86472 11.3655 3.13482C12.7233 3.40491 13.9706 4.0716 14.9496 5.05057C15.9285 6.02953 16.5952 7.27682 16.8653 8.63468C17.1354 9.99255 16.9968 11.4 16.467 12.6791C15.9372 13.9582 15.04 15.0514 13.8888 15.8206C12.7377 16.5898 11.3843 17.0003 9.99983 17.0003C8.14396 16.9982 6.36471 16.26 5.05242 14.9477C3.74012 13.6354 3.00194 11.8562 2.99983 10.0003Z' fill='#17171A')
    .customer-services-wrapper(style='background-color: #e6e6e6')
      h6.customer-services-title TOP 5 FAQ
      .customer-services-list
        FaqItem(v-bind:data='dataTop')
    .customer-services-wrapper
      h6.customer-services-title RETURNS
      .customer-services-list
        FaqItem(v-bind:data='dataReturn')
    .customer-services-wrapper
      h6.customer-services-title VERTUO
      .customer-services-list
        FaqItem(v-bind:data='dataVertuo')
    p.customer-services-message
      | If your question is not listed
      router-link(to='') please click here
      |         to contact us by phone or email.
</template>
