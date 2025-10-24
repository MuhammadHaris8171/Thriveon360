// src/pages/PortfolioDetail.js (New File)
import React,{useState,useEffect,useRef} from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../assets/styles/PortfolioDetail.css'
import { healthWellnessProductsDetails } from '../utils/data';

// Import slick-carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SliderItem = ({ item, heading }) => {
  if (item.type === 'video') {
    return (
      <div className="slider-video-container">
        {/* Use the YouTube iframe embed */}
        <iframe
          title={`${heading} video`}
          src={item.url}
          allow="autoplay; encrypted-media"
          allowFullScreen
          frameBorder="0"
        />
      </div>
    );
  }
  
  // Default to image
  return (
    <img src={item.url} alt={`${heading} preview`} />
  );
};
// Import your page-specific CSS
// import '../assets/styles/PortfolioDetail.css'; 

function PortfolioDetail() {
// 1. References for the two sliders
  const [nav1, setNav1] = useState(null); // Main slider
  const [nav2, setNav2] = useState(null); // Thumbnail slider
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  // 2. Set the references once the components mount
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const { projectId } = useParams();
  const project = healthWellnessProductsDetails.find(p => p.id === projectId);
const mainSliderSettings = {
    asNavFor: nav2, // Tells this slider to be controlled by the nav2 (thumbnails) slider
    ref: slider1,
    dots: false, // Turn off dots since we use thumbnails
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  // 4. Thumbnail Slider Settings
  const thumbSliderSettings = {
    asNavFor: nav1, // Tells this slider to control the nav1 (main) slider
    ref: slider2,
    slidesToShow: project?.galleryImages.length > 4 ? 4 : project?.galleryImages.length, // Show up to 4, or fewer if less than 4
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: true,
    centerMode: false,
    speed: 300,
    dots: false,
    // Add responsive settings if needed for mobile
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
  };
  // Handle case where project isn't found
  if (!project) {
    return (
      <div className="PortfolioDetail-not-found">
        <h2>Project not found</h2>
        <Link to="/portfolio">← Back to Portfolio</Link>
      </div>
    );
  }

  // 4. Render the dynamic data
  return (
    <div className="PortfolioDetail"> {/* Add your styling */}
      
      <div className="PortfolioDetail-header">
        <Link to="/portfolio">← Back to Portfolio</Link>
        <h1>{project.heading}</h1>
        <p>{project.subtitle}</p>
      </div>

      {/* 5. The Image Slider */}
      <div className="PortfolioDetail-slider main-slider">
        <Slider {...mainSliderSettings}>
          {project.galleryImages.map((item, index) => (
            <div key={index}>
              {/* RENDER THE NEW COMPONENT */}
              <SliderItem item={item} heading={project.heading} />
            </div>
          ))}
        </Slider>
      </div>
<div className="PortfolioDetail-slider thumb-slider">
        <Slider {...thumbSliderSettings}>
          {project.galleryImages.map((item, index) => (
            <div key={index} className="thumb-container">
              {/* --- KEY CHANGE HERE --- */}
              <img 
                src={item.type === 'video' ? item.thumbnailUrl : item.url} 
                alt={item.type === 'video' ? `Video thumbnail for ${project.heading}` : `Thumbnail ${index + 1}`} 
                className="thumbnail-image"
              />
              {item.type === 'video' && <div className="video-play-icon">▶</div>} 
            </div>
          ))}
        </Slider>
      </div>
      <div className="PortfolioDetail-content-grid">
        <div className="PortfolioDetail-main">
          <h2>Project Overview</h2>
          <p>{project.overview}</p>

          <h2>Challenges & Solutions</h2>
          <p><strong>Challenges:</strong> {project.challenges}</p>
          <p><strong>Solution:</strong> {project.solution}</p>

          <h2>Outcomes & Results</h2>
          <p>{project.results}</p>
        </div>

        <aside className="PortfolioDetail-sidebar">
          <div className="ProjectInfo-box">
            <h3>Project Info</h3>
            <p>
              <strong>Client:</strong>
              <span>{project.projectInfo.client}</span>
            </p>
            <p>
              <strong>Category:</strong>
              <span>{project.projectInfo.category}</span>
            </p>
            <p>
              <strong>Technologies Used:</strong>
            </p>
            <div className="Technologies-tags">
              {project.projectInfo.technologies.map(tech => (
                <span key={tech} className="Tech-tag">{tech}</span>
              ))}
            </div>
            {/* You can add the "Visit Website" button here if needed */}
            {/* <a href={project.websiteLink} className="Visit-website-btn">Visit Website</a> */}
          </div>
        </aside>
      </div>

    </div>
  );
}

export default PortfolioDetail;