<script lang="ts">
import "../css/pages/sustainability-recycling.css";
import Header from "@/containers/Header.vue";
import Nav from "@/containers/Nav.vue";
import Footer from "@/containers/Footer.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "SustainabilityRecyclingPage",
  components: {
    Header,
    Nav,
    Footer,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-innner">
      <Header />
      <!-- Header -->
      <Nav />
      <!-- Navigation -->
      <section id="tabs">
        <div class="tabs">
          <a
            href="./sustainability-recycling.html"
            class="tabs_heading tab_active"
            >COMMITMENT</a
          >
          <a href="./bcorp-sustainability.html" class="tabs_heading">B CORP</a>
          <a href="./circularity-sustainability.html" class="tabs_heading"
            >CIRCULARITY</a
          >
          <a href="./climate-sustainability.html" class="tabs_heading"
            >CLIMATE</a
          >
          <a href="./communities-sustainability.html" class="tabs_heading"
            >COMMUNITY</a
          >
        </div>
      </section>
      <section id="commitment" class="commitment">
        <div class="background-1">
          <div class="commitment_frame-content container">
            <h3 class="commitment_frame-content-heading">
              DOING IS EVERYTHING
            </h3>
            <p class="commitment_frame-content-des">
              BECAUSE COFFEE CAN BE A FORCE FOR GOOD™
            </p>
          </div>
        </div>
        <div class="container">
          <div class="commitment_frame1">
            <h3 class="commitment_frame1-heading">
              NESPRESSO IS A FRESHLY CERTIFIEDB CORP™
            </h3>
            <p class="commitment_frame1-des">
              As a certified B Corp, Nespresso meets rigorous social and
              environmental standards.
            </p>
          </div>
          <div class="commitment_frame2">
            <div class="commitment_frame2-left">
              <h2 class="commitment_frame2-left-heading">
                AN INSPIRING JOURNEY
              </h2>
              <p class="commitment_frame2-left-des">
                For us and 4,500 other B Corps, it’s more than a label. It’s a
                movement and community of like-minded businesses looking to
                balance purpose and profit. This certification reflects 30 years
                of Nespresso commitments to sustainability and will inspire us
                as we continue this journey together.
              </p>
              <span class="commitment_frame2-left-find">FIND OUT MORE</span>
            </div>
            <div
              class="commitment_frame2-right"
              style="width: 100%; height: 100%"
            >
              <img
                src="../assets/images/sustainability&recycling/commitment_4.png"
                style="width: 100%; height: 100%"
              />
            </div>
          </div>
          <div class="container commitment_frame3-container">
            <h3 class="commitment_frame3-heading">CONTINUING TO CARE</h3>
            <p class="commitment_frame3-des">
              For over 30 years, this has guided us in creating shared value for
              all. There’s a long way to go, but the course has been set. As a B
              Corp, we are more committed than ever to climate, circularity, and
              communities.
            </p>
            <div>
              <div class="commitment_frame3-btn">
                <button>
                  <a href="#"> CHECK OUT OUR SUSTAINABILITY REPORT</a>
                  <img alt="logonew" src="../assets/images/LogoN.png" />
                </button>
              </div>
            </div>
          </div>
          <div class="commitment_frame3 container">
            <div class="commitment_frame3-item">
              <h3 class="commitment_frame3-item-heading">
                SUSTAINING <br />
                QUALITY
              </h3>
              <p class="commitment_frame3-item-des">
                Support 120,000+ farmers through our AAA Sustainable Quality™
                Program
              </p>
              <div class="commitment_frame3-item-img">
                <img
                  src="../assets/images/sustainability&recycling/commitment_12.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div class="commitment_frame3-item">
              <h3 class="commitment_frame3-item-heading">
                BUILDING <br />
                RESILIENCE
              </h3>
              <p class="commitment_frame3-item-des">
                Maximize AAA farmer livelihoods with partners like Fairtrade
              </p>
              <div class="commitment_frame3-item-img">
                <img
                  src="../assets/images/sustainability&recycling/commitment_11.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
            <div class="commitment_frame3-item">
              <h3 class="commitment_frame3-item-heading">
                REVIVING <br />ORIGINS
              </h3>
              <p class="commitment_frame3-item-des">
                Restore coffee production in regions where it has disappeared
              </p>
              <div class="commitment_frame3-item-img">
                <img
                  src="../assets/images/sustainability&recycling/commitment_10.png"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="background-2"></div>
        <div class="container commitment_frame3-container">
          <h3 class="commitment_frame3-heading">CARING FOR CLIMATE</h3>
          <p class="commitment_frame3-des">
            Using the power of coffee to regenerate land, help restore
            ecosystems, and build resilience against climate change
          </p>
          <div>
            <div class="commitment_frame3-btn">
              <button>
                <a href="#"> FIND OUT MORE</a>

                <img alt="logonew" src="../assets/images/LogoN.png" />
              </button>
            </div>
          </div>
        </div>
        <div class="commitment_frame3 container">
          <div class="commitment_frame3-item">
            <h3 class="commitment_frame3-item-heading">
              SUSTAINABLE <br />
              COFFEE SOURCING
            </h3>
            <p class="commitment_frame3-item-des">
              93% sourced via the AAA Sustainable Quality™ Program
            </p>
            <div class="commitment_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/commitment_9.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div class="commitment_frame3-item">
            <h3 class="commitment_frame3-item-heading">AGROFORESTRY <br /></h3>
            <p class="commitment_frame3-item-des">
              5.2 million+ trees planted with partners such as Pur Projet
            </p>
            <div class="commitment_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/commitment_8.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div class="commitment_frame3-item">
            <h3 class="commitment_frame3-item-heading">
              CARBON <br />NEUTRALITY
            </h3>
            <p class="commitment_frame3-item-des">
              Committed to making every cup of coffee carbon neutral by end 2022
            </p>
            <div class="commitment_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/commitment_7.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>

        <div class="background-3"></div>
        <div class="container commitment_frame3-container">
          <h3 class="commitment_frame3-heading">CARING FOR CLIMATE</h3>
          <p class="commitment_frame3-des">
            Using the power of coffee to regenerate land, help restore
            ecosystems, and build resilience against climate change
          </p>
          <div>
            <div class="commitment_frame3-btn">
              <button>
                <a href="#"> FIND OUT MORE</a>
                <img alt="logonew" src="../assets/images/LogoN.png" />
              </button>
            </div>
          </div>
        </div>
        <div class="container commitment_frame3">
          <div class="commitment_frame3-item">
            <h3 class="commitment_frame3-item-heading">
              MADE TO <br />
              BERECYCLED
            </h3>
            <p class="commitment_frame3-item-des">
              Capsule recycling scheme in 59 countries
            </p>
            <div class="commitment_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/commitment_6.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div class="commitment_frame3-item">
            <h3 class="commitment_frame3-item-heading">
              USING RECYCLED <br />
              ALUMINIUM
            </h3>
            <p class="commitment_frame3-item-des">
              Capsules made using 80% recycled aluminium in Original and Vertuo
            </p>
            <div class="commitment_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/commitment_5.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div class="commitment_frame3-item">
            <h3 class="commitment_frame3-item-heading">
              REDESIGN & <br />REFURBISHMENT
            </h3>
            <p class="commitment_frame3-item-des">
              Machines designed for refurbishment, efficiency of materials and
              energy use
            </p>
            <div class="commitment_frame3-item-img">
              <img
                src="../assets/images/sustainability&recycling/commitment_13.png"
                alt=""
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <!-- Footer -->
    </div>
  </div>
</template>
