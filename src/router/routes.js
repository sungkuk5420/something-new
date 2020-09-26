const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  {
    path: "/main",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Main.vue") }]
  },
  {
    path: "/setting",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Setting.vue") }]
  },
  {
    path: "/user-profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/UserProfile.vue") }]
  },
  {
    path: "/user-location",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/UserLocation.vue") }]
  },
  {
    path: "/userlist",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/UserList.vue") }]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}


export default routes;
