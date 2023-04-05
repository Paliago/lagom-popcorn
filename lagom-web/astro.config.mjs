import { defineConfig } from "astro/config";
import aws from "astro-sst/lambda";
import auth from "auth-astro";
import DiscordProvider from "@auth/core/providers/discord";
import { Config } from "sst/node/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: aws(),
  integrations: [
    auth({
      providers: [
        DiscordProvider({
          clientId: Config.DISCORD_CLIENT_ID,
          clientSecret: Config.DISCORD_CLIENT_SECRET,
        }),
      ],
    }),
  ],
});
