<!-- eslint-disable -->
<template>
  <div>
    <section class="main-steps-part">
      <div class="container">
        <div id="wizard">
          <h2>First Step</h2>
          <section class="d-flex flex-wrap step-1">
            <div class="s1 d-flex flex-wrap mx-auto">
              <div class="w-50 pr-40">
                <h3 class="ds">Step 1</h3>
                <h2>
                  Welcome!
                  <br />Select your
                  meeting session time.
                </h2>
                <p class="mb-80">
                  We implement our vision of automation ‘cross-platform’. Follow
                  the short steps and we’ll talk soon.
                </p>
              </div>
              <div class="w-50 text-center s1-img">
                <img src="static/images/img2.png" alt title />
              </div>
            </div>
            <div class="d-flex flex-wrap minute-btn mx-auto w-100">
              <router-link id="go-next" to="#" class="btn-1 mr-40">
                15 minute meeting
                <img src="static/images/arrow.png" class="ds" />
                <img src="static/images/arrow-white.png" class="mb" width="25" />
              </router-link>

              <router-link id="go-next01" to="#" class="btn-1">
                30 minute meeting
                <img src="static/images/arrow.png" class="ds" />
                <img src="static/images/arrow-white.png" class="mb" width="25" />
              </router-link>
            </div>
          </section>
          <h2>Second Step</h2>
          <section class="s1 d-flex px-3 step-2">
            <div class="content">
              <h3 class="ds step-num">Step 2</h3>
              <h2 class="step-name">Select a Date & Time</h2>
              <div class="d-flex flex-wrap">
                <div class="mr-40 datepicker-main">
                  <div id="datepicker" class="mb-20" />
                  <div class="d-flex align-center flex-wrap mb-30 time-zone">
                    <img src="static/images/world.png" alt class="mr-10 mark" />
                    <select name="country-timezone" class="custom-input py-14" id="select-timezone">
                      <option value="israel">Israel Time(10:41)</option>
                      <option value="us">US Time(10:41)</option>
                      <option value="england">England Time(10:41)</option>
                    </select>
                  </div>
                </div>
                <div class="hr mb-100"></div>
                <div class="date-list">
                  <h4 class="text-center mb mb-30 selected-date">
                    You’ve selected:
                    <span class="primary-color">Thursday, April 30</span>
                  </h4>
                  <span class="mb-20 d-flex ds selected-date">Thursday, April 30</span>
                  <ul class="time-select">
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">10:00</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">10:15</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">10:30</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">10:45</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">11:00</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">11:15</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">11:30</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">11:45</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">12:00</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">12:15</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time">
                        <span class="mx-auto">12:30</span>
                        <img src="static/images/arrow.png" class="ds" />
                        <img src="static/images/arrow-white.png" class="mb" width="25" />
                      </router-link>
                    </li>
                    <li>
                      <router-link to="#" class="btn-1 time more">
                        <span class="mx-auto">more</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="text-center s1-img select-date-img">
              <img src="static/images/img3.png" alt title />
            </div>
          </section>
          <h2>3rd Step</h2>
          <section class="s1 d-flex reverse-mb flex-column step-3">
            <div class="s1 d-flex w-100 intro">
              <div class="w-60 pr-40">
                <h3 class="ds">Step 3</h3>
                <h2 class="mb-80">Personal Info</h2>
                <p class="mb-50">
                  We promise to protect your personal information
                  <br />in line with the most stringent policies and procedures.
                </p>
              </div>
              <div class="w-40 text-center s1-img select-date-img">
                <img src="static/images/img4.png" alt title />
              </div>
            </div>
            <div class="w-80 personal-info">
              <form id="step3" action="#">
                <ul class="flex-wrap d-flex">
                  <li class="input-grp w-50 mb-50">
                    <div>
                      <input
                        class="custom-input w-100"
                        id="firstName"
                        v-model="firstName"
                        type="text"
                        placeholder="First Name (required) "
                        name="firstName"
                        required
                      />
                    </div>
                  </li>
                  <li class="input-grp w-50 mb-50">
                    <div>
                      <input
                        class="custom-input w-100"
                        id="lastName"
                        v-model="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name (required)  "
                        required
                      />
                    </div>
                  </li>
                  <li class="input-grp w-50 mb-50 d-flex">
                    <div class="pre w-30">
                      <select
                        id="perfixPhoneNumber"
                        v-model="prefixPhoneNumber"
                        name="prefixPhoneNumber"
                        class="custom-input w-100 py-14"
                      >
                        <option value="+1">+1</option>
                        <option value="+2">+2</option>
                      </select>
                    </div>
                    <div class="w-80">
                      <input
                        class="custom-input w-100 h-100"
                        id="phoneNumber"
                        name="phoneNumber"
                        v-model="phoneNumber"
                        type="phone"
                        placeholder="Phone (required) "
                        required
                      />
                    </div>
                  </li>
                  <li class="input-grp w-50 mb-50">
                    <div>
                      <input
                        id="email"
                        class="custom-input w-100 h-100"
                        v-model="email"
                        name="email"
                        type="email"
                        placeholder="Email (required)  "
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                        required
                      />
                      <span v-if="msg.email">{{msg.email}}</span>
                    </div>
                  </li>
                </ul>
                <div class="text-left">
                  <input
                    id="priceProposal"
                    type="checkbox"
                    class="custom-check"
                    name="priceProposal"
                    v-model="checkedPriceProposal"
                  />
                  <label
                    for="priceProposal"
                    class="custom-label"
                  >Would you like to receive a price proposal?</label>
                </div>
                <div class="mb-80 text-left">
                  <input
                    id="cashierDemo"
                    type="checkbox"
                    class="custom-check"
                    name="cashierDemo"
                    v-model="checkedCashierDemo"
                  />
                  <label for="cashierDemo" class="custom-label">Click here to receive a cashier demo</label>
                </div>
                <div class="next-wrap">
                  <router-link id="go-next2" to="#" class="btn">Next</router-link>
                  <!-- <button id="go-next2" type="submit" class="btn">Next</button> -->
                </div>
              </form>
            </div>
          </section>
          <h2>4th Step</h2>
          <section class="s1 step-4">
            <div class="d-flex flex-wrap reverse-mb w-100">
              <div class="w-45 pr-40">
                <h3 class="ds">Step 4</h3>
                <h2 class="mb-50">Payment Solution</h2>
                <p class="mb-50">
                  Which Payment Solutions do you require?
                  <br />
                  <span class="orange">(you can select multiple regions)</span>
                </p>
              </div>
              <div class="w-55 text-center s1-img select-date-img">
                <img src="static/images/img5.png" alt title />
              </div>
            </div>
            <div class="w-100">
              <div class="ped-form">
                <form action>
                  <ul class="flex-wrap d-flex mb-50">
                    <li>
                      <div class="card-item">
                        <input id="id3" type="radio" name="cnt" class="custom-check" />
                        <label for="id3" class="custom-label">
                          <span>
                            Credit Cards
                            <img src="static/images/info.png" alt />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="card-item">
                        <input id="id10" type="radio" name="cnt" class="custom-check" />
                        <label for="id10" class="custom-label">
                          <span>
                            EU
                            <img src="static/images/EU.png" alt />
                            <img src="static/images/info.png" alt />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="card-item">
                        <input id="id4" type="radio" name="cnt" class="custom-check" />
                        <label for="id4" class="custom-label">
                          <span>
                            SEA
                            <img src="static/images/sea.png" />
                            <img src="static/images/info.png" alt />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="card-item">
                        <input id="id5" type="radio" name="cnt" class="custom-check" />
                        <label for="id5" class="custom-label">
                          <span>
                            China
                            <img src="static/images/china.png" alt />
                            <img src="static/images/info.png" alt />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="card-item">
                        <input id="id6" type="radio" name="cnt" class="custom-check" />
                        <label for="id6" class="custom-label">
                          <span>
                            Japan
                            <img src="static/images/japan.png" alt />
                            <img src="static/images/info.png" alt />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="card-item">
                        <input id="id7" type="radio" name="cnt" class="custom-check" />
                        <label for="id7" class="custom-label">
                          <span>
                            Africa
                            <img src="static/images/africa.png" />
                            <img src="static/images/info.png" alt />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="card-item">
                        <input id="id8" type="radio" name="cnt" class="custom-check" />
                        <label for="id8" class="custom-label">
                          <span>
                            Russia
                            <img src="static/images/rs.png" alt />
                            <img src="static/images/info.png" alt />
                          </span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <div class="card-item">
                        <input id="id9" type="radio" name="cnt" class="custom-check" />
                        <label for="id9" class="custom-label">
                          <span>
                            LATAM
                            <img src="static/images/LATAM.png" alt />
                            <img src="static/images/info.png" alt />
                          </span>
                        </label>
                      </div>
                    </li>
                  </ul>
                  <div class="next-wrap">
                    <router-link id="go-next3" to="#" class="btn">Next</router-link>
                  </div>
                </form>
                <span class="err-info" style="color:red;">You should select one option.</span>
              </div>
            </div>
          </section>
          <h2>5th Step</h2>
          <section class="s1 step-5">
            <div class="d-flex flex-wrap reverse-mb w-10`0">
              <div class="w-45 pr-40">
                <h3 class="ds">Step 5</h3>
                <h2 class="mb-80">Your Industry & Company</h2>
                <p class="mb-55">
                  WChoose your industry.
                  <br />Please provide us with a few more details.
                </p>
              </div>
              <div class="w-55 text-center s1-img select-date-img">
                <img src="static/images/img6.png" alt title />
              </div>
            </div>
            <div class="w-100">
              <div class="personal-info">
                <form action>
                  <ul class="flex-wrap d-flex">
                    <li class="input-grp w-30 mb-50">
                      <div>
                        <select
                          id="industry"
                          name="industry"
                          class="custom-input w-100"
                          v-model="industry"
                        >
                          <option value>Aerospace</option>
                          <option value>Transport</option>
                          <option value>Computer</option>
                          <option value>Telecommunication</option>
                          <option value>Agriculture</option>
                          <option value>Construction</option>
                          <option value>Energy</option>
                        </select>
                      </div>
                    </li>
                    <li class="input-grp w-30 mb-50">
                      <div>
                        <select
                          id="sub-industry"
                          name="subIndusry"
                          class="custom-input w-100"
                          v-model="subIndustry"
                        >
                          <option value="Sub Industry1">Energy Equipment & Services</option>
                          <option value="Sub Industry2">Oil, Gas & Consumable Fuels</option>
                          <option value="Sub Industry2">Chemicals</option>
                          <option value="Sub Industry2">Construction Materials</option>
                          <option value="Sub Industry2">Containers & Packaging</option>
                        </select>
                      </div>
                    </li>
                    <li class="input-grp w-30 mb-50">
                      <div>
                        <select
                          id="volume"
                          name="volume"
                          class="custom-input w-100"
                          v-model="volume"
                        >
                          <option value="volume1">Volume 1</option>
                          <option value="volume2">Volume 2</option>
                          <option value="volume2">Volume 3</option>
                          <option value="volume2">Volume 4</option>
                          <option value="volume2">Volume 5</option>
                          <option value="volume2">Volume 6</option>
                        </select>
                      </div>
                    </li>
                    <li class="input-grp w-30 mb-50">
                      <div>
                        <input
                          type="text"
                          id="companyUrl"
                          class="custom-input w-100"
                          name="companyUrl"
                          placeholder="URL (www.example.com)"
                          v-model="companyUrl"
                          pattern="www.*.com"
                          required
                        />
                      </div>
                    </li>
                    <li class="input-grp w-30 mb-50">
                      <div>
                        <select
                          id="country"
                          name="country"
                          class="custom-input w-100"
                          v-model="country"
                        >
                          <option value="country1">Afghanistan</option>
                          <option value="country2">Albania</option>
                          <option value="country2">Algeria</option>
                          <option value="country2">Andorra</option>
                          <option value="country2">Angola</option>
                          <option value="country2">Antigua and Barbuda</option>
                          <option value="country2">Argentina</option>
                          <option value="country2">Armenia</option>
                          <option value="country2">Australia</option>
                          <option value="country2">Austria</option>
                          <option value="country2">Austrian Empire</option>
                          <option value="country2">Azerbaijan</option>
                          <option value="country2">Baden*</option>
                          <option value="country2">Bahamas, The</option>
                          <option value="country2">Bahrain</option>
                          <option value="country2">Bangladesh</option>
                          <option value="country2">Barbados</option>
                          <option value="country2">Bavaria*</option>
                          <option value="country2">Belarus</option>
                          <option value="country2">Belgium</option>
                          <option value="country2">Belize</option>
                          <option value="country2">Benin (Dahomey)</option>
                          <option value="country2">Bolivia</option>
                          <option value="country2">Bosnia and Herzegovina</option>
                          <option value="country2">Botswana</option>
                          <option value="country2">Brazil</option>
                          <option value="country2">Brunei</option>
                          <option value="country2">Brunswick and Lüneburg</option>
                          <option value="country2">Bulgaria</option>
                          <option value="country2">Burkina Faso (Upper Volta)</option>
                          <option value="country2">Burma</option>
                          <option value="country2">Burundi</option>
                        </select>
                      </div>
                    </li>
                    <li class="input-grp w-50 mb-50">
                      <div>
                        <textarea
                          id="comment"
                          class="custom-input w-100"
                          name="comment"
                          cols="30"
                          rows="10"
                          placeholder="Comments"
                          v-model="comment"
                        />
                      </div>
                    </li>
                    <li class="input-grp w-30 mb-50">
                      <div class>
                        <h3 class="primary-color mb-0">Thursday, April 30, 2020 10:15 - 10:30</h3>
                        <div class="d-flex align-center flex-wrap mb-30 mb-jus-center">
                          <img src="static/images/world.png" alt class="mr-10" />
                          <span>Israel Time</span>
                        </div>
                        <div class="w-100">
                          <router-link id="final-btn" to="/thank" class="btn">Schedule the Meeting</router-link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      firstName: "",
      lastName: "",
      prefixPhoneNumber: "",
      phoneNumber: "",
      email: "",
      checkedPriceProposal: Boolean,
      checkedCashierDemo: Boolean,
      msg: [],
      industry: "",
      subIndustry: "",
      volume: "",
      companyUrl: "",
      country: "",
      comment: ""
    };
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    }
  },
  mounted() {
    const stepScript = document.createElement("script");
    stepScript.setAttribute("src", "../../../static/js/jquery-steps.js");
    document.head.appendChild(stepScript);

    const uiScript = document.createElement("script");
    uiScript.setAttribute("src", "../../../static/js/jquery-ui.js");
    document.head.appendChild(uiScript);

    var that = this;

    let today = new Date();
    let endDate = new Date();
    let startDate = new Date();
    startDate.setDate(today.getDate() - 2);

    $("#wizard").steps({
      headerTag: "h2",
      bodyTag: "section",
      transitionEffect: "fade",
      transitionEffectSpeed: 1000,
      stepsOrientation: "vertical",
      startIndex: 0,
      onStepChanging: function(event, currentIndex, newIndex) {
        return true;
      }
    });

    let compareDate = function(d1, d2) {
      if (d1.getFullYear() < d2.getFullYear()) {
        return 1;
      } else if (d1.getFullYear() > d2.getFullYear()) {
        return -1;
      } else if (d1.getMonth() < d2.getMonth()) {
        return 1;
      } else if (d1.getMonth() > d2.getMonth()) {
        return -1;
      } else if (d1.getDate() < d2.getDate()) {
        return 1;
      } else if (d1.getDate() > d2.getDate()) {
        return -1;
      } else {
        return 0;
      }
    };

    let validation = function(input) {
      if (
        input.type === "text" ||
        input.type === "phone" ||
        input.type === "email" ||
        input.type === "url"
      ) {
        if (!input.validity.valid) {
          $(input).addClass("required");
          return false;
        } else {
          $(input).removeClass("required");
          return true;
        }
      } else if (input.type === "checkbox") {
        let label = input.parentElement.getElementsByTagName("label")[0];
        if (!input.checked) {
          $(label).addClass("required");
          return false;
        } else {
          $(label).removeClass("required");
          return true;
        }
      }
    };

    $(function() {
      $("#datepicker")
        .datepicker({
          inline: true,
          showOtherMonths: true,
          dayNamesMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          beforeShowDay: function(date) {
            if (compareDate(date, startDate) === 0) {
              return [true, "start-date", ""];
            } else if (compareDate(date, endDate) === 0) {
              return [true, "end-date", ""];
            } else if (
              compareDate(date, startDate) === -1 &&
              compareDate(date, endDate) === 1
            ) {
              return [true, "booked-date", ""];
            }

            if (date == today) {
              return [true, "defaultDate", ""];
            }

            return [true, ""];
          },
          beforeShow: function() {
            console.log("beforshow");
            // setTimeout(function(){
            $(".start-date").append("<b>Appended text</b>");
            console.log($(".start-date"));
            // }, 100);
          }
        })
        .show();
    });

    $(".humberg-menu").click(function() {
      $("header nav").toggleClass("show-nav");
      $(this).toggleClass("change-menu");
    });
    $("#go-next").click(function() {
      $("a[href='#next']").trigger("click");
    });
    $("#go-next01").click(function() {
      $("a[href='#next']").trigger("click");
    });
    $("#go-next1").click(function() {
      $("a[href='#next']").trigger("click");
    });
    $("#go-next2").click(function() {
      let isValid = true;
      if (!validation(document.getElementById("firstName"))) {
        isValid = false;
      }
      if (!validation(document.getElementById("lastName"))) {
        isValid = false;
      }
      if (!validation(document.getElementById("phoneNumber"))) {
        isValid = false;
      }
      if (!validation(document.getElementById("email"))) {
        isValid = false;
      }
      if (!validation(document.getElementById("priceProposal"))) {
        isValid = false;
      }
      if (!validation(document.getElementById("cashierDemo"))) {
        isValid = false;
      }
      if (isValid) {
        $("a[href='#next']").trigger("click");
      }
    });
    $("#go-next3").click(function() {
      let isValid = true;
      isValid = $("input[name='cnt']:checked").val();
      if (isValid === "on") {
        $($(".ped-form .err-info")[0]).removeClass("required");
        $("a[href='#next']").trigger("click");
      } else {
        $($(".ped-form .err-info")[0]).addClass("required");
      }
    });
    $(".time").click(function() {
      $("a[href='#next']").trigger("click");
    });
    $("#final-btn").click(function(e) {
      if (!validation(document.getElementById("companyUrl"))) {
        return false;
      }

      var day = $(".ui-state-active").text();
      var month = $(".ui-state-active")
        .parent()
        .data("month");
      var year = $(".ui-state-active")
        .parent()
        .data("year");
      var startDate = year + "-" + month + "-" + day;
      var email = $("#email").val();
      that.fetch(startDate, email);
    });
  },
  methods: {
    async fetch(startDate, email) {
      await this.axios
        .post(
          "http://scrumwheel.com/events.php",
          { date: startDate, email: email },
          {
            // headers: {'Access-Control-Allow-Origin': '*'},
          }
        )
        .then(response => {
          /* eslint-disable */
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
    },
    checkStep3() {
      console.log("checkstpe");
      $(function() {
        // $("a[href='#next']").trigger("click");
      });
    },
    validateEmail(value) {
      console.log("validate email");
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
      } else {
        this.msg["email"] = "Invalid Email Address";
      }
    }
  }
};
</script>
<style scoped>
</style>