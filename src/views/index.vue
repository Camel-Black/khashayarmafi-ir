<template>
  <div>
    <div class="page">
      <Header></Header>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import jquery from "jquery";
import jq from "../assets/js/custom.js";
import Gallery from "../components/gallery.vue";
import Footer from "../components/footer.vue";
import Header from "../components/header.vue";
export default {
  name: "index",
  components: {
    Gallery,
    Footer,
    Header
  },
  methods: {},
  mounted() {
    jq(jquery);
  },
};
</script>

<style>
@import url("../assets/css/style.css");
</style>