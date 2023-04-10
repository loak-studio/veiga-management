import ContainerBackgroundSpace from "../components/nestables/ContainerBackgroundSpace.tsx";
import Hero from "../components/nestables/Hero.tsx";
import Button from "../components/nestables/Button.tsx";
import OurServices from "../components/nestables/OurServices.tsx";
import HeroServiceItem from "../components/nestables/HeroServiceItem.tsx";
import Customers from "../components/nestables/Customers.tsx";
import CustomerItem from "../components/nestables/CustomerItem.tsx";
import SomeNumbers from "../components/nestables/SomeNumbers.tsx";
import SomeNumbersItem from "../components/nestables/SomeNumbersItem.tsx";
import ContactForm from "../components/nestables/ContactForm.tsx";
import PageTitle from "../components/nestables/PageTitle.tsx";
import ServiceItem from "../components/nestables/ServiceItem.tsx";
import Video from "../components/nestables/Video.tsx";
import Team from "../components/nestables/Team.tsx";
import TeamItem from "../components/nestables/TeamItem.tsx";
import OurHistoryItem from "../components/nestables/OurHistoryItem.tsx";
import Page from "../components/content-type/Page.tsx";
import BlogPost from "../components/content-type/BlogPost.tsx";
import Blog from "../components/nestables/Blog.tsx";
import DocumentComponent from "../components/nestables/DocumentComponent.tsx";
const bindedComponents = {
  ContainerBackgroundSpace,
  Hero,
  OurServices,
  HeroServiceItem,
  Customers,
  CustomerItem,
  SomeNumbers,
  SomeNumbersItem,
  ContactForm,
  Button,
  ServiceItem,
  PageTitle,
  Video,
  Team,
  TeamItem,
  OurHistoryItem,
  page: Page,
  "blog-post": BlogPost,
  Blog,
  Document: DocumentComponent,
};

export { bindedComponents };
