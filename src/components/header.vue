<template>
  <header class="site-header" itemscope itemtype="https://schema.org/WPHeader">
    <div class="tc-wrapper">
      <div class="site-branding logo-text" itemscope itemtype="https://schema.org/Organization">
        <div class="site-logo"></div>
        <div class="site-title-wrap"></div>
      </div>
      <div class="header-r">
        <button type="button" class="toggle-btn">
          <svg
            class="svg-inline--fa fa-bars fa-w-14"
            aria-hidden="true"
            data-prefix="fa"
            data-icon="bars"
            role="img"
            style="margin-top:14px"
            height="18px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            data-fa-i2svg
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            />
          </svg>
          <!-- <i class="fa fa-bars"></i> -->
        </button>
        <div class="menu-wrap ps ps--active-y">
          <nav
            id="site-navigatio"
            class="main-navigation"
            itemscope
            itemtype="https://schema.org/SiteNavigationElement"
          >
            <ul id="primary-menu" class="nav-menu">
              <li
                id="menu-item-123"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home page_item page-item-5 menu-item-123 rtl"
              >
                <a href="/" style="direction:rtl;cursor: pointer;" aria-current="page">خانه</a>
              </li>
              <li
                id="menu-item-124"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-124"
              >
                <a href="/resume">رزومه</a>
              </li>
              <li
                id="menu-item-126"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-126"
              >
                <a href="/blog">بلاگ</a>
              </li>
              <li
                id="menu-item-514"
                class="menu-item menu-item-type-post_type menu-item-object-page menu-item-514"
              >
                <a href="/contact">تماس با من</a>
              </li>
            </ul>
          </nav>
          <div class="menu-search">
            <form
              role="search"
              method="get"
              id="search-form"
              class="searchform"
              action="https://rarathemesdemo.com/perfect-portfolio/"
            >
              <div>
                <label class="screen-reader-text" for="s">Search for:</label>
                <input
                  type="text"
                  class="search-field rtl"
                  placeholder="جستو جو ..."
                  value
                  name="s"
                />
                <input type="submit" id="searchsubmit" class="search-submit" value="Search" />
              </div>
            </form>
          </div>
          <div class="menu-text rtl">
            <p>من مدت زمان کوتاهیه که با خیلی چیزا آشنا شدم,مثه برنامه نویسی و موسیقی و فلسفه و ... اما سعی میکنم خودمو همیشه به روز نگه دارم و شما رو هم اینتو به روز کنم.</p>
          </div>
          <div class="menu-social">
            <ul class="social-icons">
              <li>
                <a href="https://www.github.com/camel-black" target="_blank" rel="nofollow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    height="25px"
                  >
                    <path
                      d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0"
                      fill="#FFFFFF"
                    />
                  </svg>

                  <!-- <i class="fa fa-facebook"></i> -->
                </a>
              </li>
              <li>
                <a href="https://www.t.me/kh_mfi" target="_blank" rel="nofollow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="1 -35 511.99993 511"
                    height="25px"
                  >
                    <path
                      d="m121.453125 253.171875 63.554687 158.886719 82.75-82.753906 141.535157 112.503906 102.707031-441.308594-512 205.480469zm-39.933594-47.640625 244.046875-97.945312-194.074218 117.363281zm287.535157-89.25-161.980469 148.1875-19.484375 73.425781-36.035156-90.085937zm-149.851563 219.230469 9.816406-36.996094 15.144531 12.035156zm171.65625 53.394531-147.386719-117.152344 221.902344-203.007812zm0 0"
                      fill="#FFFFFF"
                    />
                  </svg>

                  <!-- <i class="fa fa-youtube-square"></i> -->
                </a>
              </li>
              <li>
                <a href="https://www.soundcloud.com/khashayar_mafi" target="_blank" rel="nofollow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -121 512 512"
                    
                    height="25px"
                  >
                    <path d="m180 0h30v270h-30zm0 0" fill="#FFFFFF" />
                    <path d="m120 90h30v180h-30zm0 0" fill="#FFFFFF" />
                    <path d="m60 60h30v210h-30zm0 0" fill="#FFFFFF" />
                    <path d="m0 150h30v120h-30zm0 0" fill="#FFFFFF" />
                    <path
                      d="m512 180c0-49.625-40.375-90-90-90-2.542969 0-5.082031.105469-7.605469.320312-18.867187-53.082031-71.167969-90.320312-129.394531-90.320312-11.421875 0-22.773438 1.429688-33.738281 4.253906l-11.261719 2.898438v262.847656h182c49.625 0 90-40.375 90-90zm-242-148.9375c4.949219-.707031 9.964844-1.0625 15-1.0625 49.285156 0 93.097656 33.933594 104.175781 80.6875l3.5 14.773438c11.894531-2.664063 18.164063-5.460938 29.324219-5.460938 33.085938 0 60 26.914062 60 60s-26.914062 60-60 60h-152zm0 0"
                      fill="#FFFFFF"
                    />
                  </svg>

                  <!-- <i class="fab fa-pinterest"></i> -->
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/khashayar_mafi" target="_blank" rel="nofollow">
                  <svg
                    class="svg-inline--fa fa-instagram fa-w-14"
                    aria-hidden="true"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg
                  >
                    <path
                      fill="currentColor"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                  <!-- <i class="fa fa-instagram"></i> -->
                </a>
              </li>
            </ul>
          </div>
          <button type="button" class="toggle-button">
            <span class="toggle-bar"></span>
            <span class="toggle-bar"></span>
            <span class="toggle-bar"></span>
          </button>
          <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
            <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
          </div>
          <div class="ps__rail-y" style="top: 0px; height: 845px; right: 0px;">
            <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 655px;"></div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import jquery from "jquery";
import jq from "../assets/js/custom.js";
export default {
  name: "header",
  mounted() {
    jq(jquery);
  },
};
</script>

<style>
</style>