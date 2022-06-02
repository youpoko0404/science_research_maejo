const routes = [
    {
        path: "/",
        name: "app",
        component: () => {
            let user_role = document.head.querySelector(
                'meta[name="user-role"]'
            ).content;
            // switch (user_role) {
            //     case "admin":
            //         return import("../pages/home.vue");
            // }
        }
    },
    // {
    //     path: "/announce",
    //     name: "announce",
    //     component: () => import("../components/Announcement/Announce.vue")
    // }
];

export default routes;
