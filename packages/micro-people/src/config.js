import { registerApplication, start } from "single-spa";

registerApplication(
  "@hv-micro/people",
  () => System.import("@hv-micro/people"),
  () => true
);

start();
