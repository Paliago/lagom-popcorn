import { SSTConfig } from "sst";
import WebStack from "./stacks/WebStack";

export default {
  config(_input) {
    return {
      name: "lagom-popcorn",
      region: "eu-north-1",
    };
  },
  stacks(app) {
    app.stack(WebStack);
  },
} satisfies SSTConfig;
