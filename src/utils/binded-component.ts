import SomeComponent from "../components/SomeComponent.jsx"
import ContainerBackgroundSpace from "../components/layout/ContainerBackgroundSpace.jsx"
import Hero from "../components/index/Hero.jsx"
import Button from "../components/layout/Button.jsx"
import OurServices from "../components/index/OurServices.jsx"
import HeroServiceItem from "../components/index/HeroServiceItem.jsx"

const bindedComponents = {
  feature: SomeComponent,
  grid: SomeComponent,
  teaser: SomeComponent,
  ContainerBackgroundSpace: ContainerBackgroundSpace,
  Hero:Hero,
  OurServices:OurServices,
  HeroServiceItem:HeroServiceItem,
  Customers:SomeComponent,
  Team:SomeComponent,
  SomeNumbers:SomeComponent,
  ContactForm:SomeComponent,
  Button:Button
}

export {bindedComponents}