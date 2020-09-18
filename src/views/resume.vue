<template>
  <div class="site" id="page">
    <Header></Header>
    <div id="content" class="site-content">
      <div class="resume-wrap">
        <section id="text-13" class="widget widget_text head-section">
          <h2 class="widget-title" itemprop="name">رزومه</h2>
          <div class="textwidget">
            <div class="page-description"> وقتی احتمال رخ دادن هر چیزی وجود داره, هیچ چیزی نشد نداره</div>
          </div>
        </section>
        <section id="text-20" class="widget widget_text">
          <h2 class="widget-title" itemprop="name">خلاصه</h2>
          <div class="textwidget">
            <p>در سالهای اخیر تلاش بسیاری کردم که بتونم رزومه برای خودم جمع کنم و خب در سه شرکت مختلف مشغول به کار شدم و تجربه های خوبی هم بدست آوردم.من برنامه نویس <span style="font-weight:bold">‌Back-end</span> هستم.</p>
          </div>
        </section>
        <section id="text-18" class="widget widget_text">
          <h2 class="widget-title" itemprop="name">جاهایی که کار کردم و پروژه هایی که زدم</h2>
          <div class="textwidget">
            <p>&nbsp;</p>
            <ul>
              <li>۱۳۹۶ - موسسه فرزان [تهران]</li>
              <li>۱۳۹۷ - شرکت سرو [بابلسر]</li>
              <li>۱۳۹۸ – شرکت سنتز [بابلسر]</li>
            </ul>
            <p>&nbsp;</p>
          </div>
        </section>
      </div>
    </div>
    <section id="cta_section" class="cta-section ease">
      <div class="v-center-inner">
        <div class="tc-wrapper">
          <section
            id="raratheme_companion_cta_widget-9"
            class="widget widget_raratheme_companion_cta_widget"
          >
            <div class="centered text" style="background:#05d584">
              <div class="raratheme-cta-container">
                <h2
                  class="widget-title rtl"
                  itemprop="name"
                >اگر ایده‌ای تو ذهنتونه که روی بستر کامپیوتر قابل اجراست, با من تماس بگیرید</h2>
                <div class="text-holder rtl">
                  <p>میتونید هر ایده‌ای رو عملی کنید</p>
                  <div class="button-wrap">
                    <a
                      href="https://rarathemesdemo.com/perfect-portfolio-pro/contact/"
                      class="btn-cta btn-1"
                    >تماس با من</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  name: "resume",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
</style>