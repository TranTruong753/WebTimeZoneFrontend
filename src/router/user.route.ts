import type { RouteRecordRaw } from "vue-router";

const user: RouteRecordRaw[] = [
    {
        path:'/',
        component: () => import("../layouts/user.vue"),
        children: [
            {
                path: "/home",
                name: "user-home",
                alias: '/',
                component: () => import("../pages/user/home.page.vue")
            },
            {
                path: "/shop",
                name: "user-shop",
                component: () => import("../pages/user/shop.page.vue")
            },
        ]
    }
]

export default user