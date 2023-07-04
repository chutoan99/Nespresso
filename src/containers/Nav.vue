<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "../css/layouts/nav.css";
@Options({})
export default class Nav extends Vue {}
</script>

<template>
  <nav id="nav">
    <div class="nav">
      <ul class="nav_list">
        <li class="nav_list-item nav_list-item-coffee">
          <router-link class="nav_list-item-link" to="/coffee">
            <div class="img_coffee-w">
              <img
                alt="coffee"
                src="../assets/images/header/coffee-capsule.png"
              />
            </div>
            <div class="img_coffee-b">
              <img
                alt="coffee"
                src="../assets/images/header/coffee-capsule_b.png"
              />
            </div>
            <p>Coffee</p>
          </router-link>
          <div class="list_item-submenu" id="list-sub-coffee">
            <div class="list_item-submenu-inner">
              <div class="list_item-submenu-item">
                <div>
                  <router-link to="/coffee">
                    <img src="../assets/images/image_56_2.png" alt="" />
                  </router-link>
                </div>
                <div class="list_item-submenu-content">
                  <p>Order Your Capsules</p>
                  <p>Enjoy free delivery from 500,000đ</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div>
                  <img src="../assets/images/image_56.png" alt="" />
                </div>
                <div class="list_item-submenu-content">
                  <p>Discover the Range</p>
                  <p>Explore Nespresso coffee selection</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div
                class="list_item-submenu-item"
                style="display: flex; flex-direction: column"
              >
                <div style="display: flex; gap: 4px; align-items: center">
                  <div>
                    <img src="../assets/images/image_56_1.png" alt="" />
                  </div>
                  <div class="list_item-submenu-content">
                    <p>Our Coffee Stories</p>
                    <p>Journey to the perfect cup</p>
                  </div>
                </div>
                <span class="list_item-submenu-item-hr2"></span>
                <div style="display: flex; gap: 4px; align-items: center">
                  <div>
                    <img src="../assets/images/image_56_1.png" alt="" />
                  </div>
                  <div class="list_item-submenu-content">
                    <p>Recipes</p>
                    <p>Be your own barista</p>
                  </div>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div style="padding: 0 8px">
                  <img
                    alt=""
                    src="../assets/images/image_59.png"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav_list-item nav_list-item-machine">
          <router-link class="nav_list-item-link" to="/machines">
            <div class="img_machine-w">
              <img alt="machine" src="../assets/images/header/machine.png" />
            </div>
            <div class="img_machine-b">
              <img alt="machine" src="../assets/images/header/machine_b.png" />
            </div>
            <p>Machine</p>
          </router-link>
          <div class="list_item-submenu" id="list-sub-machine">
            <div class="list_item-submenu-inner">
              <div class="list_item-submenu-item">
                <div>
                  <router-link to="/machines">
                    <img src="../assets/images/machine_1.png" alt="" />
                  </router-link>
                </div>
                <div class="list_item-submenu-content">
                  <p>Order Your Machine</p>
                  <p>Free delivery for every machine purchase</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div>
                  <router-link to="/machines">
                    <img src="../assets/images/machine_1.png" alt="" />
                  </router-link>
                </div>
                <div class="list_item-submenu-content">
                  <p>Compare machine</p>
                  <p>Benefit from 2 years warranty</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div
                class="list_item-submenu-item"
                style="display: flex; flex-direction: column"
              >
                <div style="display: flex; gap: 4px; align-items: center">
                  <div>
                    <img src="../assets/images/machine_3.png" alt="" />
                  </div>
                  <div class="list_item-submenu-content">
                    <p>Descaling your machine regularly</p>
                  </div>
                </div>
                <span class="list_item-submenu-item-hr2"></span>
                <div style="display: flex; gap: 4px; align-items: center">
                  <div>
                    <img src="../assets/images/machine_2.png" alt="" />
                  </div>
                  <div class="list_item-submenu-content">
                    <p>Register your machine</p>
                  </div>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div style="padding: 0 8px">
                  <img
                    alt=""
                    src="../assets/images/image_59.png"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav_list-item nav_list-item-accessories">
          <router-link class="nav_list-item-link" to="/accessories">
            <div class="img_accessories-w">
              <img
                alt="accessories"
                src="../assets/images/header/accessories.png"
              />
            </div>
            <div class="img_accessories-b">
              <img
                alt="accessories"
                src="../assets/images/header/accessories_b.png"
              />
            </div>
            <p>Accessories</p>
          </router-link>
          <div class="list_item-submenu" id="list-sub-accessories">
            <div class="list_item-submenu-inner">
              <div class="list_item-submenu-item">
                <div>
                  <router-link to="/accessories">
                    <img src="../assets/images/accessories_1.png" alt="" />
                  </router-link>
                </div>
                <div class="list_item-submenu-content">
                  <p>Order Your Accessories</p>
                  <p>Save your Nespresso in style</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div>
                  <img src="../assets/images/accessories_3.png" alt="" />
                </div>
                <div class="list_item-submenu-content">
                  <p>Register your machine</p>
                  <p>
                    Create light or creamy, cold or hot coffee with our milk
                    frother
                  </p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div
                class="list_item-submenu-item"
                style="display: flex; flex-direction: column"
              >
                <div style="display: flex; gap: 4px; align-items: center">
                  <div>
                    <img src="../assets/images/accessories_2.png" alt="" />
                  </div>
                  <div class="list_item-submenu-content">
                    <p>Descaling Kit</p>
                    <p>Care for your coffee machine</p>
                  </div>
                </div>
                <span class="list_item-submenu-item-hr2"></span>
                <div style="display: flex; gap: 4px; align-items: center">
                  <div>
                    <img src="../assets/images/accessories_4.png" alt="" />
                  </div>
                  <div class="list_item-submenu-content">
                    <p>promote another accessories</p>
                  </div>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div style="padding: 0 8px">
                  <img
                    alt=""
                    src="../assets/images/image_60.png"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav_list-item nav_list-item-logonew">
          <router-link class="nav_list-item-link" to="">
            <div>
              <img alt="logonew" src="../assets/images/LogoN.png" />
            </div>
            <p>New To Nespresso</p>
          </router-link>
        </li>
        <li class="nav_list-item nav_list-item-service">
          <router-link class="nav_list-item-link" to="/service">
            <div class="img_service-w">
              <img alt="service" src="../assets/images/header/service.png" />
            </div>
            <div class="img_service-b">
              <img alt="service" src="../assets/images/header/service_b.png" />
            </div>
            <p>Service</p>
          </router-link>
          <div class="list_item-submenu" id="list-sub-service">
            <div class="list_item-submenu-inner">
              <div class="list_item-submenu-item">
                <div>
                  <router-link to="/service">
                    <img src="../assets/images/service_1.png" alt="" />
                  </router-link>
                </div>
                <div class="list_item-submenu-content">
                  <p>Order</p>
                  <p>Our coffee specialists are ready to assist you</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div>
                  <img src="../assets/images/service_1.png" alt="" />
                </div>
                <div class="list_item-submenu-content">
                  <p>Delivery</p>
                  <p>Learn about delivery terms</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div>
                  <img src="../assets/images/service_2.png" alt="" />
                </div>
                <div class="list_item-submenu-content">
                  <p>Customer care</p>
                  <p>Do you need assistance for your machine</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div style="padding: 0 8px">
                  <img
                    alt=""
                    src="../assets/images/image_61.png"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav_list-item nav_list-item-recycle">
          <router-link
            class="nav_list-item-link"
            to="/sustainability_recycling"
          >
            <div class="img_recycle-w">
              <img alt="recycle" src="../assets/images/header/recycle.png" />
            </div>
            <div class="img_recycle-b">
              <img alt="recycle" src="../assets/images/header/recycle_b.png" />
            </div>
            <p>Sustainability & Recycling</p>
          </router-link>
        </li>
        <li class="nav_list-item nav_list-item-location">
          <router-link class="nav_list-item-link" to="/store_location">
            <div class="img_location-w">
              <img alt="location" src="../assets/images/header/location.png" />
            </div>
            <div class="img_location-b">
              <img alt="professional" src="../assets/images/header/pro_b.png" />
            </div>
            <p>Store Locator</p>
          </router-link>
        </li>
        <li class="nav_list-item nav_list-item-contact">
          <router-link class="nav_list-item-link" to="/contact_us">
            <div class="img_contact-w">
              <img alt="contact" src="../assets/images/header/contact.png" />
            </div>
            <div class="img_contact-b">
              <img alt="contact" src="../assets/images/header/contact_b.png" />
            </div>
            <p>Contact</p>
          </router-link>
          <div class="list_item-submenu" id="list-sub-contact">
            <div class="list_item-submenu-inner">
              <div class="list_item-submenu-item">
                <div>
                  <router-link to="/contact_us">
                    <img src="../assets/images/service_2.png" alt="" />
                  </router-link>
                </div>
                <div class="list_item-submenu-content">
                  <p>FAQs</p>
                  <p>We answer your frequently asked questions</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div>
                  <img src="../assets/images/contact_1.png" alt="" />
                </div>
                <div class="list_item-submenu-content">
                  <p>Email us</p>
                  <p>Our coffee specialists are ready to help you</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div>
                  <img src="../assets/images/contact_2.png" alt="" />
                </div>
                <div class="list_item-submenu-content">
                  <p>Call us 1800 234 506</p>
                  <p>Lines are open Mon - Sat, from 8:30 am to 6pm</p>
                </div>
              </div>
              <span class="list_item-submenu-item-hr"></span>
              <div class="list_item-submenu-item">
                <div style="padding: 0 8px">
                  <img
                    alt=""
                    src="../assets/images/image_62.png"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="nav_list-item nav_list-item-professional">
          <router-link class="nav_list-item-link" to="/professional">
            <div class="img_professional-w">
              <img alt="professional" src="../assets/images/header/pro.png" />
            </div>
            <div class="img_professional-b">
              <img
                alt="location"
                src="../assets/images/header/location_b.png"
              />
            </div>
            <p>Professional</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="hide_on-pc show_on-tab">
      <div class="icon_hambuger">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1L1 15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 15L1 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>
