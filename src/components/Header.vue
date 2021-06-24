<template>
  <div>
    <header class="main-header">
      <div class="container">
        <router-link
          class="main-logo"
          to="/"><img src="static/images/logo.png"></router-link>
        <router-link
          to="javascript:void(0)"
          class="humberg-menu"><span/></router-link>
        <nav class="main-nav">
          <ul class="main-menu">
            <li><router-link to="javascript:void(0)">Solutions</router-link></li>
            <li><router-link to="javascript:void(0)">Getway & Technology</router-link></li>
            <li><router-link to="javascript:void(0)">Products & Services</router-link></li>
            <li><router-link to="javascript:void(0)">Industries</router-link></li>
            <li><router-link to="javascript:void(0)">Risk Management</router-link></li>
            <li><router-link to="javascript:void(0)">About</router-link></li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- Sub header -->
    <section class="sub-header">
      <div class="container">
        <h3>Schedule Meeting</h3>
      </div>
    </section>
  </div>
</template>

<script>
    import $ from "jquery";
    export default {
        name: "Header",
        data () {
            return {

            };
        },
        mounted() {

        },
        created() {

        }
    };

</script>
