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
        meta: { title: "หน้าแรก" },
    },
    {
        path: "/research",
        name: "research",
        component: () => import("../components/Home/DetailResearch.vue"),
        meta: { title: "รายละเอียดงานวิจัย" },
    },
    {
        path: "/account",
        name: "account",
        component: () => import("../components/Account/Account.vue"),
        meta: { title: "โปรไฟล์" },
    },
    {
        path: "/my-research",
        name: "my-research",
        component: () => import("../components/Research/MyResearch.vue"),
        meta: { title: "งานวิจัยของฉัน" },
    },
    {
        path: "/detail-research",
        name: "detail-research",
        component: () => import("../components/Research/DetailResearch.vue"),
        meta: { title: "รายละเอียดงานวิจัย" },
    },
];

export default routes;
