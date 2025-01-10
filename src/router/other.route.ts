import type { RouteRecordRaw } from "vue-router";

const other= [
    { 
        path:'/',
        component: () => import("../layouts/user.vue"),
        children: [
            {
                path: '/:pathMatch(.*)*', 
                name: 'NotFound', 
                component:  () => import("../pages/notfound/pageError.page.vue")
            },
        ]
      
    },
]

export default other