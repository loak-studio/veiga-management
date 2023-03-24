import SomeComponent from "../components/SomeComponent.jsx"
import ContainerBackgroundSpace from "../components/layout/ContainerBackgroundSpace.jsx"
import Hero from "../components/index/Hero.jsx"
import { apiPlugin, storyblokInit, useStoryblok, StoryblokComponent } from "@storyblok/react";

const initStoryblok = ()=>{

  storyblokInit({
    accessToken: import.meta.env.STORYBLOK_TOKEN,
    // bridge: true,
    use: [apiPlugin],
    components: {
      feature: SomeComponent,
      grid: SomeComponent,
      teaser: SomeComponent,
      ContainerBackgroundSpace: ContainerBackgroundSpace,
      Hero:Hero,
      OurServices:SomeComponent,
      Customers:SomeComponent,
      Team:SomeComponent,
      SomeNumbers:SomeComponent,
      ContactForm:SomeComponent
    },

  });
}

export {initStoryblok}