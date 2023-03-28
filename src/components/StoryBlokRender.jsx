import { bindedComponents } from "../utils/binded-component";
import {
  apiPlugin,
  storyblokInit,
  useStoryblok,
  StoryblokComponent,
} from "@storyblok/react";
function StoryBlokRender({ token }) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  storyblokInit({
    accessToken: token,
    // bridge: true,
    use: [apiPlugin],
    components: bindedComponents,
  });
  const story = useStoryblok(urlParams.get("page"), { version: "draft" });
  if (!story.content) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {story.content.body.map((blok, index) => (
        <StoryblokComponent key={index} blok={blok} />
      ))}
    </>
  );
}

export { StoryBlokRender };
