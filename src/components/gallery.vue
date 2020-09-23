<template>
  <!-- eslint-disable -->
  <section id="gallery_section" class="gallery-section style1">
    <div class="tc-wrapper">
      <div class="button-group filter-button-group rtl">
        <button data-filter="*" @click="peopleSearchString=''" class="is-checked">همه</button>
        <button data-filter=".brand-strategy" @click="peopleSearchString='science'">علم</button>
        <button @click="peopleSearchString='technology'">تکنولوژی</button>
        <button data-filter=".photography">موسیقی</button>
        <button data-filter=".web-design">هوش مصنوعی</button>
      </div>
      
        <div :list="filteredPeople" class="gallery-wrap rows" style="position: relative;width:100%" >
          <div v-for="(post,index) in filteredPeople" :key="post.id" class="gallery-img  rtl">
              <a
                href="https://rarathemesdemo.com/perfect-portfolio/portfolio/luke-in-the-house-of-jelly-radio-fenzes-7/"
              >
                <img
                style="border-radius:10px"
                  width="800"
                  height="800"
                  :src="post.img"
                  class="attachment-perfect-portfolio-square size-perfect-portfolio-square wp-post-image lazyloaded"
                  alt
                  itemprop="image"
                  data-ll-status="loaded"
                />
              </a>
              <div class="text-holder" style="border-radius:10px">
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
      </div>
    

    <a
      href="https://rarathemesdemo.com/perfect-portfolio/portfolios/"
      class="btn-readmore"
    >بیشتر ببینید</a>
  </section>
</template>

<script>
/*eslint-disable*/
// import j from "jquery";
// import isotope from "isotope";
// import { filter } from "vue/types/umd";
import isotope from "vueisotope";
import axios from "axios";
import jq from "jquery"
export default {
  name: "gallery",
  components: {
    isotope,
  },
  created(){
    		var jqgrid1 = jq('.gallery-section:not(.style3) .gallery-wrap').imagesLoaded(function(){
			jqgrid1.isotope({
				itemSelector: '.gallery-img',
			});	
		});

		var jqinnergrid = jq('body.page-template-portfolio:not(.gal-carousel) .site-main .gallery-wrap').imagesLoaded(function(){
			jqinnergrid.isotope({
				itemSelector: '.gallery-img',
			});	
		});

	// filter items on button click
	jq('.filter-button-group').on('click', 'button', function() {
		var filterValue = jq(this).attr('data-filter');
		jqgrid1.isotope({ filter: filterValue });
		jqinnergrid.isotope({ filter: filterValue });
	});
// change is-checked class on buttons
jq('.button-group').each(function(i, buttonGroup) {
	var jqbuttonGroup = jq(buttonGroup);
	jqbuttonGroup.on('click', 'button', function() {
		jqbuttonGroup.find('.is-checked').removeClass('is-checked');
		jq(this).addClass('is-checked');
	});
});
  },
  data() {
    return {
      posts: {},
      idIterator: 6,
      people: [
        {
          id: 1,
          img: "https://picsum.photos/200",
          name: "science",
          //: "#faac3d"
        },
        {
          id: 2,
          img: "https://picsum.photos/200",
          name: "technology",
          //: "#04489b"
        },
        {
          id: 3,
          img: "https://picsum.photos/200",
          name: "philosophy",
          //: "#f75100"
        },
        {
          id: 4,
          img: "https://picsum.photos/200",
          name: "music",
          //: "#8cbce2"
        },
        {
          id: 5,
          img: "https://picsum.photos/200",
          name: "artifitialinteligence",
          //: "#089f4e"
        },
      ],

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
        console.log(`this is person.name ${searchRegex.test(person.name)}`);
        console.log(`this is person.id ${searchRegex.test(person.id)}`);
        return searchRegex.test(person.name) || searchRegex.test(person.id);
      });
    },
  },
  methods: {
    getPosts() {},
  },
};
</script>

<style>
.row{
    display: grid !important;
    grid-template-columns: repeat(8, 1fr) !important;
}
</style>