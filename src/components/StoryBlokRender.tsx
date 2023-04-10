import { bindedComponents } from "../utils/binded-component";
import {
  apiPlugin,
  storyblokInit,
  useStoryblok,
  StoryblokComponent,
} from "@storyblok/react";
function StoryBlokRender({ token }: any) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  storyblokInit({
    accessToken: token,
    // bridge: true,
    use: [apiPlugin],
    components: bindedComponents,
  });
  const story = useStoryblok(urlParams.get("page") as string, { version: "draft" });
  if (!story.content) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export { StoryBlokRender };
