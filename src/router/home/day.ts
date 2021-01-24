const day= [
  {
    path: "/home",
    name: "大屏监控",
    component: () => import("./../../view/day/index"),
    meta: {
      auth: true,
      title: "大屏监控",
      iocn: "hai",
      keepAlive: true
    }
  }
];
export default day
