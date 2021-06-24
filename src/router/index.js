import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Multi from "@/components/Multi";
import Thank from "@/components/Thank";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/multi-step",
            name: "Multi",
            component: Multi
        },
        {
            path: "/thank",
            name: "Thank",
            component: Thank
        }

    ]
});