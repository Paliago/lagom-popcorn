import { SolidStartSite, StackContext } from "sst/constructs";

export default function WebStack({ stack }: StackContext) {
  // Create the SolidStart site
  const site = new SolidStartSite(stack, "Site", {
    path: "popcorn-web/",
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url || "localhost",
  });
}
