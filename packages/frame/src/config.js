import { registerApplication, start } from "single-spa";

registerApplication(
  "@hv-mf/navbar",
  () => System.import("@hv-mf/navbar"),
  () => true
);

registerApplication(
  "@hv-mf/people",
  () => System.import("@hv-mf/people"),
  location => location.pathname.startsWith("/people"),
  { basename: "/people" }
);

start();
