import { faMobileScreen } from "@fortawesome/free-solid-svg-icons";
import { faUikit, faWebflow } from "@fortawesome/free-brands-svg-icons";
import Vitality from '../assets/images/Vitality1.jpg'
import Mindful from '../assets/images/Mindful.jpg'
import Gym from '../assets/images/Gym.jpg'
import Solution from '../assets/images/Solution.jpg'
import Tech from '../assets/images/Tech.jpg'
import Leaves from '../assets/images/Leaves.jpg'

const services = [
    {
      icon: faWebflow,
      heading: "Web Development",
      paragraph:
        "Crafting responsive, high-performance websites and web applications tailored to your business needs.",
    },
    {
      icon: faMobileScreen,
      heading: "Mobile App Development",
      paragraph:
        "Building intuitive and feature-rich mobile applications for both iOS and Android platforms.",
    },
    {
      icon: faUikit,
      heading: "UI/UX Design",
      paragraph:
        "Creating visually stunning and user-friendly interfaces that enhance user engagement and satisfaction.",
    },
  ];
// src/data/portfolioData.js

export const healthWellnessProducts = [
  {
    image: Vitality,
    heading: "Vitality Boost",
    paragraph: "A nutritional supplement designed to enhance energy levels and overall vitality",
  },
  {
    image: Mindful,
    heading: "Mindful Moments",
    paragraph: "A meditation app promoting mindfulness and stress reduction",
  },
  {
    image: Gym,
    heading: "Active Life Gear",
    paragraph: "A line of fitness apparel and accessories for an active lifestyle",
  },
]

export const clientProjects = [
  {
    image: Solution,
    heading: "EcoLiving Solutions",
    paragraph: "Sustainable home products for eco-conscious consumers",
  },
  {
    image: Tech,
    heading: "TechConnect Innovations",
    paragraph: "Innovative tech solutions for seamless connectivity",
  },
  {
    image: Leaves,
    heading: "Creative Minds Studio",
    paragraph: "A creative agency specializing in branding and design",
  },
]
// src/data/servicesData.js

export const servicesData = [
  {
    heading: "Mobile App Development",
    paragraph:
      "We create custom mobile applications that integrate seamlessly with our health and wellness products. Our apps provide users with personalized insights, progress tracking, and direct access to our services.",
    listItems: [
      { text: "Personalized Insights" },
      { text: "Progress Tracking" },
      { text: "Service Access" },
    ],
  },
  {
    heading: "Backend Solutions",
    paragraph:
      "Our robust backend infrastructure ensures the reliability and security of our products and services. We handle data management, user authentication, and API integrations to provide a seamless user experience.",
    listItems: [
      { text: "Data Security" },
      { text: "Reliable Infrastructure" },
      { text: "Seamless Integrations" },
    ],
  },
  {
    heading: "Web Development",
    paragraph:
      "We design and develop responsive websites that showcase our products and services. Our websites are user-friendly, informative, and optimized for performance across all devices.",
    listItems: [
      { text: "Responsive Design" },
      { text: "Performance Optimized" },
      { text: "User-Friendly Interface" },
    ],
  },
]

export {services}