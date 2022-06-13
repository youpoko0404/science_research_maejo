import VueRouter from "vue-router";
import routes from "./routes";

import Vue from "vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ?? "Science Research";
    next();
});

export default router;
