import { apiPlugin, storyblokInit } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: import.meta.env.PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
});
export { storyblokApi };
