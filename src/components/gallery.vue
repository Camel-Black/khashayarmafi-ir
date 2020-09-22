<template>
  <section id="gallery_section" class="gallery-section style1">
    <div class="tc-wrapper">
      <div class="button-group filter-button-group rtl">
        <button data-filter="*" class="is-checked">همه</button>
        <button data-filter=".brand-strategy" @click="peopleSearchString='Nick'">علم</button>
        <button data-filter=".digital-arts">تکنولوژی</button>
        <button data-filter=".photography">موسیقی</button>
        <button data-filter=".web-design">هوش مصنوعی</button>
      </div>
      <div id="vue">
        <h1>ROGUE #WOLFPACK</h1>
        <input v-model="peopleSearchString" placeholder="Search people" />
        <isotope :list="filteredPeople" id="root_isotope">
          <div v-for="(person, index) in filteredPeople" :key="person.id">
            <i class="fa fa-close" @click="removePerson(index)"></i>
            <p>{{person.name}}</p>
          </div>
        </isotope>
      </div>

      <div class="gallery-wrap" style="position: relative; height: 1399.83px;">
        <div
          class="gallery-img brand-strategy rtl"
          style="position: absolute; left: 0px; top: 0px;"
        >
          <a
            href="https://rarathemesdemo.com/perfect-portfolio/portfolio/luke-in-the-house-of-jelly-radio-fenzes-7/"
          >
            <img
              width="800"
              height="800"
              src="https://rarathemesdemo-147ed.kxcdn.com/perfect-portfolio/wp-content/uploads/sites/56/2018/05/photo-2586032_1920-1-800x800.jpg"
              class="attachment-perfect-portfolio-square size-perfect-portfolio-square wp-post-image lazyloaded"
              alt
              itemprop="image"
              sizes="(max-width: 800px) 100vw, 800px"
              srcset="https://rarathemesdemo-147ed.kxcdn.com/perfect-portfolio/wp-content/uploads/sites/56/2018/05/photo-2586032_1920-1-800x800.jpg 800w, https://rarathemesdemo-147ed.kxcdn.com/perfect-portfolio/wp-content/uploads/sites/56/2018/05/photo-2586032_1920-1-150x150.jpg 150w"
              data-ll-status="loaded"
            />
          </a>
          <div class="text-holder">
            <div class="text-holder-inner">
              <h2 class="gal-title">
                <a
                  href="https://rarathemesdemo.com/perfect-portfolio/portfolio/luke-in-the-house-of-jelly-radio-fenzes-7/"
                >علم به مثابه شومبول</a>
              </h2>
              <span class="sub-title">
                <a
                  href="https://rarathemesdemo.com/perfect-portfolio/portfolio-category/brand-strategy/"
                >
                  <span>شومبول را اینگونه دیده اند که باید به گونه ای باشند</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://rarathemesdemo.com/perfect-portfolio/portfolios/"
        class="btn-readmore"
      >بیشتر ببینید</a>
    </div>
  </section>
</template>

<script>
/*eslint-disable*/
// import j from "jquery";
// import isotope from "isotope";
// import { filter } from "vue/types/umd";
import isotope from "vueisotope";
export default {
  name: "gallery",
  components: {
    isotope,
  },
  data() {
    return {
      idIterator: 6,
      people: [
        {
          id: 1,
          name: "Paulus",
          //: "#faac3d"
        },
        {
          id: 2,
          name: "Nick",
          //: "#04489b"
        },
        {
          id: 3,
          name: "Aaron",
          //: "#f75100"
        },
        {
          id: 4,
          name: "Pavel",
          //: "#8cbce2"
        },
        {
          id: 5,
          name: "Weaver",
          //: "#089f4e"
        },
      ],
      newPerson: {
        id: 6,
        name: "Bubbles",
        //: ""
      },

      peopleSearchString: "",
    };
  },
  computed: {
    filteredPeople() {
      var self = this;

      return this.people.filter(function (person) {
        var searchRegex = new RegExp(
          self.peopleSearchString.replace(/[^a-zA-Z0-9 ]/g, ""),
          "i"
        );

        return searchRegex.test(person.name) || searchRegex.test(person.id);
      });
    },
  },
};
</script>

<style>
</style>