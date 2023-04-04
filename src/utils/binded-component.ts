import SomeComponent from "../components/SomeComponent.jsx";
import ContainerBackgroundSpace from "../components/layout/ContainerBackgroundSpace.jsx";
import Hero from "../components/index/Hero.jsx";
import Button from "../components/layout/Button.jsx";
import OurServices from "../components/index/OurServices.jsx";
import HeroServiceItem from "../components/index/HeroServiceItem.jsx";
import Customers from "../components/index/Customers.jsx";
import CustomerItem from "../components/index/CustomerItem.jsx";
import SomeNumbers from "../components/index/SomeNumbers.jsx";
import SomeNumbersItem from "../components/index/SomeNumbersItem.jsx";
import ContactForm from "../components/global/ContactForm.jsx";
import PageTitle from "../components/global/PageTitle.jsx"
import ServiceItem from "../components/our-services/ServiceItem.jsx"
import Video from "../components/global/Video.jsx"
import Team from "../components/global/Team.tsx";
import TeamItem from "../components/global/TeamItem.tsx";
import OurHistoryItem from "../components/our-history/OurHistoryItem.jsx"
import Page from "../components/layout/Page.jsx"
import BlogPost from "../components/layout/BlogPost.jsx"
import Blog from "../components/blog/Blog.jsx"
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
  page:Page,
  "blog-post":BlogPost,
  Blog
};

export { bindedComponents };
