import { faMobileScreen, faLayerGroup, faUserGroup, faBolt, faHeart } from "@fortawesome/free-solid-svg-icons";
import { faUikit, faWebflow } from "@fortawesome/free-brands-svg-icons";
import Vitality from '../assets/images/Vitality1.jpg'
import Mindful from '../assets/images/Mindful.jpg'
import Gym from '../assets/images/Gym.jpg'
import Solution from '../assets/images/Solution.jpg'
import Tech from '../assets/images/Tech.jpg'
import Leaves from '../assets/images/Leaves.jpg'
import { Link } from "react-router-dom";
import vitalityImg from '../assets/images/Vitality.jpg';
import mindFulImg from '../assets/images/front.png';
import vitalityImg1 from '../assets/images/Vitality1.jpg';
import vitalityImg2 from '../assets/images/Vitality2.jpg';

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
const cores = [
    {
      icon: faLayerGroup,
      heading: "Integrity",
      paragraph:
        "We uphold the highest standards of integrity in all of our actions",
    },
    {
      icon: faUserGroup,
      heading: "Customer Commitment",
      paragraph:
        "We develop relationships that make a positive difference in our customers' lives",
    },
    {
      icon: faBolt,
      heading: "Innovation",
      paragraph:
        "We pioneer new technologies and solutions that drive progress for our clients",
    },
    {
      icon: faHeart,
      heading: "passion",
      paragraph:
        "We are passionate about what we do, and we're committed to helping our customers thrive",
    },
  ];
// src/data/portfolioData.js
const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};
export const healthWellnessProductsDetails = [
  {
    id: 'Vitality', // This will be used in the URL
    image: '../assets/images/Vitality.jpg', 
    heading: 'Vitality Boost',
    paragraph: 'A nutritional supplement designed to enhance energy levels and overall vitality.',
    // --- All new data for the detail page ---
    subtitle: 'A nutritional supplement designed to enhance energy levels and overall vitality.',
    galleryImages: [ 
      { type: 'image', url: vitalityImg },
      { 
          type: 'video', 
          // Use the embed URL (without the full iframe HTML)
          url: 'https://youtube.com/shorts/oZ67j0yAj5g?si=vO8r33GH4a2e4bVZ',
          // Extract ID and generate thumbnail URL
          thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId('https://www.youtube.com/embed/u_-oQx_4jvo')}/hqdefault.jpg`
      },
      { 
          type: 'video', 
          url: 'https://www.youtube.com/embed/oZ67j0yAj5g?enablejsapi=1&amp;wmode=opaque&amp;autoplay=0',
          thumbnailUrl: `https://img.youtube.com/vi/${getYouTubeVideoId('https://www.youtube.com/embed/oZ67j0yAj5g')}/hqdefault.jpg`
      },
      { type: 'image', url: vitalityImg1 },
      { type: 'image', url: vitalityImg2 },
    ],
    overview: 'Vitality Boost is a premium nutritional supplement developed by Thriveon 360 to naturally enhance energy levels, improve mental clarity, and support overall well-being. Our team conducted extensive research to formulate a blend of vitamins, minerals, and herbal extracts that work synergistically to deliver effective, sustainable results. The project encompassed everything from ingredient sourcing and formulation to branding, packaging design, and e-commerce platform development.',
    challenges: 'Finding reliable suppliers for pure, potent ingredients was a primary challenge. We meticulously vetted and audited partners, and partnered with certified organic farms and reputable extract providers to ensure the quality and efficacy of our formula.',
    solution: 'The supplement market is highly saturated. Our solution was to create a strong brand identity focused on transparency, scientific backing, and customer education. We developed a clean, professional packaging design and a content-rich website to build trust and authority.',
    results: 'Vitality Boost successfully launched with a highly positive reception. Customer testimonials have highlighted significant improvements in energy and focus. The product achieved a 30% reorder rate within the first six months of launch, exceeding initial projections. The strong online presence and branding have solidified Thriveon 360’s position in the wellness product market.',
    projectInfo: {
      client: 'Thriveon 360 (Internal Product)',
      category: 'Health & Wellness',
      technologies: ['Figma', 'React', 'Klaviyo']
    }
  },
  {
    id: 'Mindful', // This will be used in the URL
    image: mindFulImg, // Use the imported variable for the main card
    heading: 'Cocoon Child Care App',
    paragraph: 'Polished cross‑platform app empowering parents to monitor and manage child development.',
    
    // --- Detail Page Data ---
    subtitle: 'A cross-platform app for parents to monitor, manage, and support multiple children—featuring daily and weekly developmental tracking—backed by a powerful admin dashboard.',
    
    galleryImages: [ 
      // 1. Main image
      { type: 'image', url: mindFulImg },
      
      // 2. Video from your last request (CORRECTED URL AND THUMBNAIL)
      { 
          type: 'video', 
          url: 'https://www.youtube.com/embed/oZ67j0yAj5g?enablejsapi=1&amp;wmode=opaque&amp;autoplay=0',
          thumbnailUrl: 'https://img.youtube.com/vi/oZ67j0yAj5g/hqdefault.jpg'
      },
      
      // 3. Example Screenshot
      { type: 'image', url: mindFulImg }, 
    ],
    
    overview: 'Cocoon is a polished cross-platform mobile application developed using Flutter, GetX, and the MVVM architecture. It empowers parents to monitor, manage, and support the development of multiple children through daily and weekly developmental tracking, all synchronized with a powerful real-time admin dashboard.',
    
    challenges: 'Developing a cohesive parent experience to manage multiple child profiles with diverse needs (diet, sleep, milestones) and providing high-quality, personalized developmental content. \n\n**Parent App Features:** \n* Multi-child support (tracking diet, diaper, sleep, milestones). \n* Curated daily & weekly activity suggestions. \n* Insightful analytics and progress charts. \n* Expert guidance via articles, video classes, and consultation scheduling. \n* Monetization via seamless in-app purchases.',
    
    solution: 'We implemented a robust Admin Web Panel to provide real-time control over all application content and user data, reducing the need for app updates to deploy new content.\n\n**Admin Web Panel Features:** \n* User & profile management (approve, edit, remove accounts). \n* Analytics & reporting (view, filter, export user engagement statistics). \n* Content control hub (real-time management of activities, articles, classes, and videos).',
    
    results: 'The application successfully launched to a positive user base. It established a platform for scalable content delivery and efficient user management, demonstrating high performance across iOS and Android platforms.',
    
    projectInfo: {
      client: 'Your Client Name (or Internal Project)',
      category: 'Mobile App Development, Child Wellness',
      technologies: ['Flutter', 'GetX', 'MVVM']
    }
  },
  // ... other projects
];
export const healthWellnessProducts = [
  {
    image: Vitality,
    heading: "Vitality Boost",
    paragraph: "A nutritional supplement designed to enhance energy levels and overall vitality",
    link:"/Vitality"
  },
  {
    image: Mindful,
    heading: "Mindful Moments",
    paragraph: "A meditation app promoting mindfulness and stress reduction",
    link:"/Mindful"
  },
  {
    image: Gym,
    heading: "Active Life Gear",
    paragraph: "A line of fitness apparel and accessories for an active lifestyle",
    link:"/Gym"
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

export {services,cores}