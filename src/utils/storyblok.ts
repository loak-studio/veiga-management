import { apiPlugin, storyblokInit } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: import.meta.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
});
export { storyblokApi };
