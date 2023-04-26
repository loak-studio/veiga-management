import { useEffect } from "react";
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
  const story = useStoryblok(urlParams.get("page") as string, {
    version: "draft",
  });
  useEffect(() => {
    console.log("story updated");
    const items = Array.from(
      document.querySelectorAll("main *")
    ) as HTMLElement[];
    items.forEach((item) => {
      item.style.opacity = "1";
    });
  }, [story]);
  if (!story.content) {
    return (
      <div className="loading">
        <div className="lds-circle">
          <div></div>
        </div>
      </div>
    );
  }
  return (
    <>
      <StoryblokComponent blok={story.content} />
    </>
  );
}

export { StoryBlokRender };
