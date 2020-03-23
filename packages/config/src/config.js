import { registerApplication, start } from "single-spa";

registerApplication(
  "@hv-micro/navbar",
  () => System.import("@hv-micro/navbar"),
  () => true
);

registerApplication(
  "@hv-micro/people",
  () => System.import("@hv-micro/people"),
  location => location.pathname.startsWith("/people"),
  { basename: "/people" }
);

start();
