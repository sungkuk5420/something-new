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
    path: "/user-tall",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/UserTall.vue") }]
  },
  {
    path: "/hobby",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Hobby.vue") }]
  },
  {
    path: "/personality",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Personality.vue") }]
  },
  {
    path: "/smoke",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Smoke.vue") }]
  },
  {
    path: "/drink",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Drink.vue") }]
  },
  {
    path: "/chatlist",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/ChatList.vue") }]
  },
  {
    path: "/participationList",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ParticipationList.vue") }
    ]
  },
  {
    path: "/profileIntroduce",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/ProfileIntroduce.vue") }
    ]
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
