import { storyblokEditable } from "@storyblok/react";
import TeamItem from "./TeamItem";
import { useEffect } from "react";
import { loadSwiper } from "../../scripts/components/team";
import SliderArrow from "../../assets/slider-arrow.svg";
export default function Team(props: any) {
  useEffect(() => {
    loadSwiper();
  }, []);
  return (
    <div
      className={"team h2" + (props.blok.arrow ? " team__arrow" : "")}
      {...storyblokEditable(props.blok)}
    >
      <h2 className="team__title">{props.blok.title}</h2>
      <p className="team__description text">{props.blok.description}</p>

      <div className="team__slider">
        {!props.blok.display_all && (
          <>
            <button title="Précédent" data-slider-button="previous">
              <figure>
                <img width={30} height={30} src={SliderArrow} alt="" />
              </figure>
            </button>
            <div className="swiper">
              <div className="swiper-wrapper">
                {props.blok.members.map((member: any, index: number) => (
                  <div key={index} className="swiper-slide">
                    <TeamItem blok={member} />
                  </div>
                ))}
              </div>
            </div>
            <button title="Suivant" data-slider-button="next">
              <figure>
                <img width={30} height={30} src={SliderArrow} alt="" />
              </figure>
            </button>
          </>
        )}
        {props.blok.display_all && (
          <div className="team__list">
            {props.blok.members.map((member: any, index: number) => (
              <TeamItem key={index} blok={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
