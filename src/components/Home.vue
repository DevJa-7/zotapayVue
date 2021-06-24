<template>
  <div>
    <section class="main-steps-part">
      <div class="container">
        <div id="homepage">
          <h2>demo</h2>
          <section class="s1 d-flex flex-wrap">
            <div class="w-55 pr-40">
              <h2>Schedule Your Free Online Meeting
              with Our Payment Experts</h2>
              <p>Are you interested in taking your online business to the next level?
                <br>Do you want to expand your business and make it even more
                profitable and be able to collect funds across various regions
                as part of an endless payment method network?</p>
              <p>Thank you for your interest, we are very happy to be able to
                <span class="dark bold">secure your free 15-30 minute session with our professional
                payment team who can help your business to expand
                and supports a wide range of payment methods for your
                products or services, globally.</span></p>
              <p>In order to receive the best advice and for the free session with our
              payment experts to be as productive as possible, please ensure you
              answer the following questions: </p>
              <div class="mb st-mb">
                <router-link
                  to="/multi-step"
                  class="btn">START NOW &nbsp; <span>></span></router-link>
              </div>

            </div>

            <div class="w-45 text-center s1-img">
              <img
                src="static/images/img1.png"
                alt=""
                title="">
              <div class="ds">
                <router-link
                  to="/multi-step"
                  class="btn">START NOW ></router-link>
              </div>
            </div>
          </section>
          <h2>First Step</h2>
          <section class="s1 d-flex"/>
          <h2>Second Step</h2>
          <section class="s1 d-flex"/>
          <h2>3rd Step</h2>
          <section class="s1 d-flex reverse-mb"/>
          <h2>4th Step</h2>
          <section class="s1"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    const stepScript = document.createElement("script");
    stepScript.setAttribute("src", "../../../static/js/jquery-steps.js");
    document.head.appendChild(stepScript);

    const uiScript = document.createElement("script");
    uiScript.setAttribute("src", "../../../static/js/jquery-ui.js");
    document.head.appendChild(uiScript);

    $("#homepage").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "slide",
        stepsOrientation: "vertical",
        enablePagination:false,
        autoFocus: true,

    });
    $( ".first" ).addClass( "disabled" );
    $( ".first" ).removeClass( "current" );
  }
};
</script>