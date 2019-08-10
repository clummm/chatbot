import router from "./router";

export default {
  openPlayerNewWindow: function(id) {
    let routeData = router.resolve({
      name: "playing",
      params: {
        id: id
      }
    });
    window.open(routeData.href);
  }
};
