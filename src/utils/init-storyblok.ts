import SomeComponent from "../components/SomeComponent.jsx"
import { apiPlugin, storyblokInit, useStoryblok, StoryblokComponent } from "@storyblok/react";

const initStoryblok = ()=>{

  storyblokInit({
    accessToken: import.meta.env.STORYBLOK_TOKEN,
    // bridge: true,
    use: [apiPlugin],
    components: {
      feature: SomeComponent,
      grid: SomeComponent,
      teaser: SomeComponent
    },

  });
}

export {initStoryblok}