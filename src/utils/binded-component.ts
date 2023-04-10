import ContainerBackgroundSpace from "../components/nestables/ContainerBackgroundSpace.jsx";
import Hero from "../components/nestables/Hero.jsx";
import Button from "../components/nestables/Button.jsx";
import OurServices from "../components/nestables/OurServices.jsx";
import HeroServiceItem from "../components/nestables/HeroServiceItem.jsx";
import Customers from "../components/nestables/Customers.jsx";
import CustomerItem from "../components/nestables/CustomerItem.jsx";
import SomeNumbers from "../components/nestables/SomeNumbers.jsx";
import SomeNumbersItem from "../components/nestables/SomeNumbersItem.jsx";
import ContactForm from "../components/nestables/ContactForm.jsx";
import PageTitle from "../components/nestables/PageTitle.jsx";
import ServiceItem from "../components/nestables/ServiceItem.jsx";
import Video from "../components/nestables/Video.jsx";
import Team from "../components/nestables/Team.tsx";
import TeamItem from "../components/nestables/TeamItem.tsx";
import OurHistoryItem from "../components/nestables/OurHistoryItem.jsx";
import Page from "../components/content-type/Page.jsx";
import BlogPost from "../components/content-type/BlogPost.jsx";
import Blog from "../components/nestables/Blog.jsx";
import DocumentComponent from "../components/nestables/DocumentComponent.jsx";
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
