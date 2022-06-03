const routes = [
    {
        path: "/",
        name: "app",
        component: () => {
            let user_role = document.head.querySelector(
                'meta[name="user-role"]'
            ).content;
            console.log(user_role);
            switch (user_role) {
                case "user":
                    return import("../components/Home/Index.vue");
                default:
                    // return import("../components/Index.vue");
                    return import("../components/Home/Index.vue");
            }
        },
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
    // {
    //     path: "/home",
    //     name: "home",
    //     component: () => import("../components/Home/Index.vue"),
    // },
];

export default routes;
