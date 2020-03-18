import { registerApplication, start } from "single-spa";

registerApplication(
  "@hv-micro/frame",
  () => System.import("@hv-micro/frame"),
  () => true
);

registerApplication(
  "@hv-micro/frame-people",
  () => System.import("@hv-micro/frame-people"),
  location => location.pathname.startsWith("/people"),
  { basename: "/people" }
);

start();
