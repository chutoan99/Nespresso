<script lang="ts">
import { defineComponent } from "vue";
//? APP

export default defineComponent({
  name: "AboutUsPage",

  mounted() {
    const links = [...document.querySelectorAll(".tab-menu")];
    links.forEach((tab) => {
      tab.addEventListener("click", () => {
        if (!tab.classList.contains("tab-menu--selected")) {
          links.forEach((othertab) => {
            othertab.classList.remove("tab-menu--selected");
          });
          tab.classList.add("tab-menu--selected");
        }
      });
    });
  },
});
</script>

<template lang="pug">
main#about_us
  section.product-nav
    ul.menu-list
      li.tab-menu
        router-link(to='') COMMITMENT
      li.tab-menu.tab-menu--selected
        router-link(to='') B CORP
      li.tab-menu
        router-link(to='') CIRCULARITY
      li.tab-menu
        router-link(to='') CLIMATE
      li.tab-menu
        router-link(to='') COMMUNITY
  section.banner.background-1
    .banner__context
      h5.banner__context-heading
        | WE WANT TO HAVE A POSITIVE IMPACT
      h3.banner__context-title WHO WE ARE
  section#hero
    .container.context-left
      .caption
        h3.caption-title OUR COFFEE EXPERTISE
        span.caption-subtitle WE LIKE TO DO THINGS DIFFERENTLY
        p.caption-paragraph
          | Who we are and what we stand for is rooted in our coffee expertise,
          | our innovative spirit and the farmers we work with.
          br
          |             We&rsquo;ve spent the last 30 years fine-tuning our know-how, partnering
          |             with the finest craftsmen along the way. We want to work with people
          |             who care as much about the little details as we do. Because in the
          |             end, that&rsquo;s what makes the difference.
          br
          |             Throughout our coffee value chain &ndash; from our skilled agronomists and
          |             farmers to our in-house coffee development experts, factory teams
          |             and coffee ambassadors, right through to our customers &ndash; we&rsquo;ve
          |             assembled a team of coffee experts that share our obsession with
          |             uncompromising quality.
      .cover
        img(src='assets/images/about-us/cover.png' alt='')
  section#hero
    .container.context-right
      .cover
        img(src='assets/images/about-us/cover-1.png' alt='')
      .caption
        p.caption-paragraph
          | Together, we&rsquo;ve developed a range of exceptional coffees, machines
          | and services tailored to every preference, and developed to meet the
          | strictest quality standards. 
          br
          |             We have 30 Original coffees, 35 Vertuo coffees, and 17 Professional
          |             coffees, as well as Limited Editions that showcase rare varieties
          |             from around the world.
          br
          |             We have a range of convenient and revolutionary coffee systems that
          |             consistently deliver the perfect cup of coffee, whether it&rsquo;s an
          |             espresso, a long cup or a milk-based coffee.
          br
          |             We have a range of personalised services to anticipate your every
          |             need including next day delivery, mobile apps for coffee ordering
          |             and an exclusive loyalty program, &ldquo;Nespresso &amp; You&rdquo;.
  section#hero
    .container.context-left
      .caption
        h3.caption-title OUR SYSTEM RANGE
        span.caption-subtitle FOR EVERY TASTE
        p.caption-paragraph
          | Our suite of Original, Vertuo and Professional machines combine
          | technology, quality and design to deliver a barista-like experience.
          | Our Original coffees cater for those of you who love a powerful and
          | intense short cup. Our Vertuo coffees brew a variety of coffees,
          | from ristrettos to altos. And our Professional solutions give
          | businesses the ability to provide their customers a truly memorable
          | experience.
      .cover
        img(src='assets/images/about-us/cover-2.png' alt='')
  section#context
    h3.context-heading
      | &quot;Every cup of Nespresso coffee should 
      br
      | have a positive impact&quot;
  section#hero
    .container.context-left
      .caption
        h3.caption-title SUSTAINABILITY COMMITMENT
        span.caption-subtitle WE WANT TO HAVE A POSITIVE IMPACT
        p.caption-paragraph
          | Sustainability is rooted in the heart of everything we do. That&rsquo;s
          | because we believe doing good is simply good business. We&rsquo;ve built
          | our company, our products and our practices on one simple premise:
          | that every cup of Nespresso should have a positive impact. 
          br
          |             Whether it is in supporting the people who nurture, grow and harvest
          |             our coffee beans, to our choice of materials, production processes
          |             and what we do to help people recycle our coffee capsules &ndash; every
          |             aspect of our value chain is designed to unlock shared value for our
          |             partners, employees and customers.
      .cover
        img(src='assets/images/about-us/cover-3.png' alt='')
  section#hero
    .container.context-right
      .cover
        img(src='assets/images/about-us/cover-4.png' alt='')
      .caption
        p.caption-paragraph
          | At the heart of this lies our Nespresso AAA Sustainable Quality&trade;
          | Program. Developed with our NGO partner the Rainforest Alliance back
          | in 2003, it is a coffee sourcing program that works directly with
          | farmers to implement sustainable farming practices through free
          | technical assistance. 
          br
          |             Thanks to the program, more than 120,000 farmers across 15 countries
          |             are committed to improving the quality and productivity of their
          |             coffee trees while protecting the environment and preserving their
          |             communities against wider social and economic challenges.
          br
          | Through the Nespresso AAA Sustainable Quality&trade; Program we
          |             develop lasting relationships with farming communities and work
          |             together to develop innovative solutions that make them stronger and
          |             more resilient.
  section#hero-short
    .container
      .intro
        .intro__image
          img(height='100%' width='100%' src='assets/images/about-us/background.png' alt='')
        .intro__card.intro__right
          h4.intro__card-heading
            | FIND OUT MOREON OURSUSTAINABILITY PAGE
          button.intro__card-btn
            router-link(to='#')
              svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M7.16272 6.05139C7.37968 5.83443 7.73143 5.83443 7.94839 6.05139L13.5039 11.6069C13.7209 11.8239 13.7209 12.1757 13.5039 12.3926L7.94839 17.9482C7.73143 18.1651 7.37968 18.1651 7.16272 17.9482C6.94576 17.7312 6.94576 17.3795 7.16272 17.1625L12.3254 11.9998L7.16272 6.83706C6.94576 6.62011 6.94576 6.26835 7.16272 6.05139Z' fill='white')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M10.4957 6.05139C10.7127 5.83443 11.0644 5.83443 11.2814 6.05139L16.837 11.6069C17.0539 11.8239 17.0539 12.1757 16.837 12.3926L11.2814 17.9482C11.0644 18.1651 10.7127 18.1651 10.4957 17.9482C10.2788 17.7312 10.2788 17.3795 10.4957 17.1625L15.6584 11.9998L10.4957 6.83706C10.2788 6.62011 10.2788 6.26835 10.4957 6.05139Z' fill='white')
      .intro
        .intro__image
          img(height='100%' width='100%' src='assets/images/about-us/background.png' alt='')
        .intro__card.intro__left
          h4.intro__card-heading NESPRESSO STORIES
          p.intro__card-content
            | Interested in receiving our latest news? Subscribe here.
          button.intro__card-btn
            router-link(to='#')
              svg(width='24' height='24' viewbox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M7.16272 6.05139C7.37968 5.83443 7.73143 5.83443 7.94839 6.05139L13.5039 11.6069C13.7209 11.8239 13.7209 12.1757 13.5039 12.3926L7.94839 17.9482C7.73143 18.1651 7.37968 18.1651 7.16272 17.9482C6.94576 17.7312 6.94576 17.3795 7.16272 17.1625L12.3254 11.9998L7.16272 6.83706C6.94576 6.62011 6.94576 6.26835 7.16272 6.05139Z' fill='white')
                path(fill-rule='evenodd' clip-rule='evenodd' d='M10.4957 6.05139C10.7127 5.83443 11.0644 5.83443 11.2814 6.05139L16.837 11.6069C17.0539 11.8239 17.0539 12.1757 16.837 12.3926L11.2814 17.9482C11.0644 18.1651 10.7127 18.1651 10.4957 17.9482C10.2788 17.7312 10.2788 17.3795 10.4957 17.1625L15.6584 11.9998L10.4957 6.83706C10.2788 6.62011 10.2788 6.26835 10.4957 6.05139Z' fill='white')
  section#socials
    .social-media
      span.social-media-title Follow Nespresso on
      ul.social-media-list
        li.social-media-item
          router-link(to='https://www.facebook.com/nespresso/')
            svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M16.921 8.853H13.991V7.525C13.991 6.901 14.399 6.755 14.686 6.755H16.737V4.01L13.766 4C11.071 4 10.559 6.048 10.559 7.358V8.853H8.5V11.64H10.56V20H13.991V11.64H16.635L16.921 8.853Z' fill='black')
        li.social-media-item
          router-link(to='https://twitter.com/Nespresso')
            svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M20.5 7.51501C19.8999 7.77683 19.2643 7.94836 18.614 8.02401C19.2972 7.62399 19.8107 6.98813 20.058 6.23601C19.424 6.60601 18.721 6.87601 17.973 7.02101C17.6637 6.69723 17.2919 6.43974 16.88 6.26422C16.468 6.0887 16.0247 5.99881 15.577 6.00001C13.764 6.00001 12.295 7.44701 12.295 9.23101C12.295 9.48501 12.325 9.73101 12.38 9.96701C11.0795 9.90533 9.80621 9.57326 8.64125 8.99199C7.47629 8.41072 6.44528 7.593 5.614 6.59101C5.32284 7.08301 5.16948 7.64431 5.17 8.21601C5.17 9.33601 5.75 10.326 6.63 10.906C6.10941 10.8897 5.59998 10.7509 5.143 10.501V10.541C5.143 12.108 6.274 13.414 7.776 13.71C7.2925 13.8399 6.78592 13.8591 6.294 13.766C6.50897 14.412 6.91962 14.9751 7.469 15.3772C8.01838 15.7792 8.67926 16.0004 9.36 16.01C8.19208 16.9107 6.75787 17.3976 5.283 17.394C5.019 17.394 4.757 17.379 4.5 17.349C6.00601 18.2996 7.75108 18.8028 9.532 18.8C15.57 18.8 18.87 13.876 18.87 9.60601C18.87 9.46601 18.867 9.32601 18.861 9.18801C19.5024 8.73212 20.0574 8.1656 20.5 7.51501Z' fill='black')
        li.social-media-item
          router-link(to='https://www.instagram.com/nespresso.belux/?utm_source=Email&utm_medium=EM&utm_content=EM%7CORI%7CRN%7CCRM%7Corder_confirmation%7CAlways-on%7CLinkAd%7CV1%7CLCL%7CDNP%7CNA%7CNA%7COther%7CNA%7Clink%20footer_social_link_3&utm_campaign=HQ%7C2021Sep%7CB2C%7CINT%7CTransactionalEmailGlobal%7CRecurrent%7CCON%7CCAP%7CAO%7CNo')
            svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(d='M8.39298 12C8.39298 10.9105 8.82578 9.8656 9.59618 9.09521C10.3666 8.32481 11.4115 7.892 12.501 7.892C13.5905 7.892 14.6354 8.32481 15.4058 9.09521C16.1762 9.8656 16.609 10.9105 16.609 12C16.609 13.0895 16.1762 14.1344 15.4058 14.9048C14.6354 15.6752 13.5905 16.108 12.501 16.108C11.4115 16.108 10.3666 15.6752 9.59618 14.9048C8.82578 14.1344 8.39298 13.0895 8.39298 12ZM9.83398 12C9.83398 12.7073 10.115 13.3857 10.6151 13.8859C11.1153 14.386 11.7936 14.667 12.501 14.667C13.2083 14.667 13.8867 14.386 14.3868 13.8859C14.887 13.3857 15.168 12.7073 15.168 12C15.168 11.2927 14.887 10.6143 14.3868 10.1141C13.8867 9.61399 13.2083 9.333 12.501 9.333C11.7936 9.333 11.1153 9.61399 10.6151 10.1141C10.115 10.6143 9.83398 11.2927 9.83398 12ZM9.20298 4.048C8.35098 4.087 7.76998 4.222 7.26098 4.42C6.72713 4.62093 6.24355 4.93593 5.84398 5.343C5.39898 5.787 5.12498 6.233 4.92098 6.76C4.72298 7.269 4.58798 7.85 4.54898 8.702C4.50998 9.555 4.50098 9.827 4.50098 12C4.50098 14.173 4.51098 14.445 4.54898 15.298C4.58798 16.15 4.72298 16.731 4.92098 17.24C5.12498 17.766 5.39898 18.213 5.84398 18.657C6.28798 19.102 6.73398 19.376 7.26098 19.58C7.76998 19.778 8.35098 19.913 9.20298 19.952C10.056 19.99 10.328 20 12.5 20C14.672 20 14.945 19.99 15.798 19.952C16.65 19.913 17.231 19.778 17.74 19.58C18.2738 19.379 18.7574 19.064 19.157 18.657C19.602 18.212 19.876 17.767 20.08 17.24C20.278 16.731 20.413 16.15 20.452 15.298C20.491 14.445 20.5 14.173 20.5 12C20.5 9.827 20.49 9.555 20.452 8.702C20.413 7.85 20.278 7.269 20.08 6.76C19.879 6.22617 19.564 5.74259 19.157 5.343C18.7574 4.93593 18.2738 4.62093 17.74 4.42C17.231 4.222 16.65 4.087 15.798 4.048C14.946 4.01 14.674 4 12.501 4C10.328 4 10.056 4.01 9.20298 4.048ZM16.77 8.69C16.5154 8.69 16.2712 8.58886 16.0912 8.40882C15.9111 8.22879 15.81 7.98461 15.81 7.73C15.81 7.47539 15.9111 7.23121 16.0912 7.05118C16.2712 6.87114 16.5154 6.77 16.77 6.77C17.0246 6.77 17.2688 6.87114 17.4488 7.05118C17.6288 7.23121 17.73 7.47539 17.73 7.73C17.73 7.98461 17.6288 8.22879 17.4488 8.40882C17.2688 8.58886 17.0246 8.69 16.77 8.69Z' fill='black')
        li.social-media-item
          router-link(to='https://www.youtube.com/user/nespresso')
            svg(width='25' height='24' viewbox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg')
              path(fill-rule='evenodd' clip-rule='evenodd' d='M12.9351 4C14.2631 4.007 19.4031 4.062 20.8251 4.477C21.7281 4.739 22.4401 5.514 22.6821 6.497C23.0601 8.034 23.1121 11.011 23.1191 11.802L23.1201 11.987V12.197C23.1121 12.989 23.0601 15.965 22.6811 17.502C22.4401 18.485 21.7281 19.26 20.8251 19.523C20.1351 19.724 18.5721 19.84 16.9931 19.908L16.4011 19.931C14.8311 19.987 13.3531 19.998 12.8251 20H12.4151C11.8861 19.998 10.4081 19.987 8.83812 19.93L8.24812 19.908C6.66812 19.84 5.10412 19.724 4.41512 19.523C3.51112 19.26 2.80012 18.485 2.55812 17.502C2.18012 15.965 2.12812 12.989 2.12012 12.197V11.802C2.12812 11.011 2.18012 8.034 2.55812 6.498C2.80012 5.514 3.51112 4.739 4.41512 4.477C5.83712 4.062 10.9771 4.007 12.3051 4H12.9351ZM10.4721 8.623V15.377L15.9601 12L10.4701 8.623H10.4721Z' fill='black')
</template>
