import { apiPlugin, storyblokInit, useStoryblok, StoryblokComponent } from "@storyblok/react";
import SomeComponent from "./SomeComponent.jsx"
function StoryBlokRender({token}) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

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
  const story = useStoryblok(urlParams.get('page'), { version: "draft" });
  if (!story.content) {
    return <div>Loading...</div>;
  }
  return (<>
  
    {story.content.body.map((blok,index)=><StoryblokComponent key={index} blok={blok} />)}
  </>);
}

export { StoryBlokRender }