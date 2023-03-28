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
const bindedComponents = {
  ContainerBackgroundSpace,
  Hero,
  OurServices,
  HeroServiceItem,
  Customers,
  CustomerItem,
  Team: SomeComponent,
  SomeNumbers,
  SomeNumbersItem,
  ContactForm,
  Button: Button,
};

export { bindedComponents };
