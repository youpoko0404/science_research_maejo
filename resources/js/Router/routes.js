const routes = [
    {
        path: "/",
        name: "app",
        component: () => {
            let user_role = document.head.querySelector(
                'meta[name="user-role"]'
            ).content;
            switch (user_role) {
                case "user":
                    return import("../components/Home/Index.vue");
                default:
                    return import("../components/Home/Index.vue");
            }
        },
        meta: { title: "Home" },
    },
    {
        path: "/account",
        name: "account",
        component: () => import("../components/Account/Account.vue"),
    },
    {
        path: "/my-research",
        name: "my-research",
        component: () => import("../components/Research/MyResearch.vue"),
    },
    {
        path: "/edit-research",
        name: "edit-research",
        component: () => import("../components/Research/EditResearch.vue"),
    },
];

export default routes;
