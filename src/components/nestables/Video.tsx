import {
  renderRichText,
  StoryblokComponent,
  storyblokEditable,
} from "@storyblok/react";
export default function Video(props: any) {
  function youtube_parser(url: string) {
    var regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  const titleHtml = renderRichText(props.blok.title);
  const descriptionHtml = renderRichText(props.blok.description);
  return (
    <div className="video" {...storyblokEditable(props.blok)}>
      <h2
        className="video__title h2 richtext"
        dangerouslySetInnerHTML={{ __html: titleHtml }}
      />
      <div
        className="video__description text richtext"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />
      <div
        className="video__iframe"
        data-src={
          "https://www.youtube-nocookie.com/embed/" +
          youtube_parser(props.blok.youtubeLink.url) +
          "?autoplay=1"
        }
        data-title="YouTube video player"
        data-frame-border="0"
        data-allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        data-allow-fullscreen
      >
        <button title="Jouer la vidéo" className="video__play-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 4v16l13 -8z" />
          </svg>
        </button>
        <img
          width={1280}
          height={720}
          className="video__iframe-thumbnail"
          src={
            "https://i3.ytimg.com/vi/" +
            youtube_parser(props.blok.youtubeLink.url) +
            "/maxresdefault.jpg"
          }
          alt=""
        />
      </div>
      {props.blok.caption && (
        <span className="text video__caption">{props.blok.caption}</span>
      )}
      <div className="video__buttons">
        {props.blok.buttons.map((button: any, index: number) => (
          <StoryblokComponent blok={button} key={index} />
        ))}
      </div>
    </div>
  );
}
