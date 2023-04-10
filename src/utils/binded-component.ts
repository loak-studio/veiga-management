import ContainerBackgroundSpace from "../components/nestables/ContainerBackgroundSpace";
import Hero from "../components/nestables/Hero";
import Button from "../components/nestables/Button";
import OurServices from "../components/nestables/OurServices";
import HeroServiceItem from "../components/nestables/HeroServiceItem";
import Customers from "../components/nestables/Customers";
import CustomerItem from "../components/nestables/CustomerItem";
import SomeNumbers from "../components/nestables/SomeNumbers";
import SomeNumbersItem from "../components/nestables/SomeNumbersItem";
import ContactForm from "../components/nestables/ContactForm";
import PageTitle from "../components/nestables/PageTitle";
import ServiceItem from "../components/nestables/ServiceItem";
import Video from "../components/nestables/Video";
import Team from "../components/nestables/Team";
import TeamItem from "../components/nestables/TeamItem";
import OurHistoryItem from "../components/nestables/OurHistoryItem";
import Page from "../components/content-type/Page";
import BlogPost from "../components/content-type/BlogPost";
import Blog from "../components/nestables/Blog";
import DocumentComponent from "../components/nestables/DocumentComponent";
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
