import { AstroSite, Config, StackContext } from "sst/constructs";

export default function WebStack({ stack }: StackContext) {
  const AUTH_SECRET = new Config.Secret(stack, "AUTH_SECRET");
  const DISCORD_CLIENT_ID = new Config.Secret(stack, "DISCORD_CLIENT_ID");
  const DISCORD_CLIENT_SECRET = new Config.Secret(
    stack,
    "DISCORD_CLIENT_SECRET"
  );

  // Create the Astro site
  const site = new AstroSite(stack, "Site", {
    path: "lagom-web/",
    bind: [AUTH_SECRET, DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET],
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url || "localhost",
  });
}
