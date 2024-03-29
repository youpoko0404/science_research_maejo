const routes = [{
        path: "/",
        name: "app",
        component: () => {
            let user_role = document.head.querySelector(
                'meta[name="user-role"]'
            ).content;
            switch (user_role) {
                case "user":
                    return import ("../components/Home/Index.vue");
                default:
                    return import ("../components/Home/Index.vue");
            }
        },
        meta: { title: "หน้าแรก" },
    },
    {
        path: "/research",
        name: "research",
        component: () =>
            import ("../components/Home/DetailResearch.vue"),
        meta: { title: "รายละเอียดงานวิจัย" },
    },
    {
        path: "/account",
        name: "account",
        component: () =>
            import ("../components/Account/Account.vue"),
        meta: { title: "โปรไฟล์" },
    },
    {
        path: "/my-research",
        name: "my-research",
        component: () =>
            import ("../components/Research/MyResearch.vue"),
        meta: { title: "งานวิจัย" },
    },
    {
        path: "/manage-research",
        name: "manage-research",
        component: () =>
            import ("../components/Research/MyResearchAdmin.vue"),
        meta: { title: "งานวิจัย" },
    },
    {
        path: "/detail-research",
        name: "detail-research",
        component: () =>
            import ("../components/Research/DetailResearch.vue"),
        meta: { title: "รายละเอียดงานวิจัย" },
    },
    {
        path: "/user-expertise",
        name: "user_expertise",
        component: () =>
            import ("../components/Research/Expertise.vue"),
        meta: { title: "ความเชี่ยวชาญ" },
    },
    {
        path: "/user-permission",
        name: "user_permission",
        component: () =>
            import ("../components/UserPermission/UserPermission.vue"),
        meta: { title: "จัดการสิทธิ" },
    },
    {
        path: "/expertise-detail",
        name: "expertise_detail",
        component: () =>
            import ("../components/Research/ExpertiseDetail.vue"),
        meta: { title: "ข้อมูลความเชี่ยวชาญ" },
    },
    {
        path: "/user-management",
        name: "user_management",
        component: () =>
            import ("../components/Account/UserManagement.vue"),
        meta: { title: "จัดการข้อมูลผู้ใช้" },
    },
];

export default routes;