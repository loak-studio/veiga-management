import { useStoryblok, StoryblokComponent } from "@storyblok/react";
import {initStoryblok} from "../utils/init-storyblok"
function StoryBlokRender() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  initStoryblok()
  const story = useStoryblok(urlParams.get('page'), { version: "draft" });
  if (!story.content) {
    return <div>Loading...</div>;
  }
  return (<>
    {story.content.body.map((blok,index)=><StoryblokComponent key={index} blok={blok} />)}
  </>);
}

export { StoryBlokRender }