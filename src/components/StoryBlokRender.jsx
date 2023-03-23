import { apiPlugin, storyblokInit, useStoryblok, StoryblokComponent } from "@storyblok/react";
import SomeComponent from "./SomeComponent.jsx"
function StoryBlokRender({token}) {
  storyblokInit({
    accessToken: token,
    // bridge: true,
    use: [apiPlugin],
    components: {
      feature: SomeComponent,
      grid: SomeComponent,
      teaser: SomeComponent
    },

  });
  const story = useStoryblok("home", { version: "draft" });
  if (!story.content) {
    return <div>Loading...</div>;
  }
  return (<>
  
    {story.content.body.map((blok,index)=><StoryblokComponent key={index} blok={blok} />)}
  </>);
}

export { StoryBlokRender }