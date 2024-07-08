import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ImageSlider.css'; // Import your CSS file for styling
import CoursePreview from './CoursePreview'; // Import the CoursePreview component
import FrogAnimation from './FrogAnimation'; // Import the FrogAnimation component
import NotesPreview from './NotesPreview';
import OwlAnimation from './OwlAnimation';

// Sample images (replace with your own images)
const images = [
  {
    url: 'https://en.idei.club/uploads/posts/2023-06/1686084469_en-idei-club-p-indian-college-students-dizain-instagram-2.jpg',
    buttonText: 'Visit',
    link: './courses',
    text: 'Explore our exciting college courses',
  },
  {
    url: 'https://img.freepik.com/free-photo/medium-shot-little-kids-studying-bible_23-2149613739.jpg',
    buttonText: 'Explore',
    link: '/explore-2',
    text: 'Indulge in the best academia for your children',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_1280.jpg',
    buttonText: 'Discover',
    link: '/discover-3',
    text: 'Discover learning experiences',
  },
  {
    url: 'https://codakid.com/wp-content/uploads/2023/06/stem-contest-1.jpg',
    buttonText: 'Join Now',
    link: '/competitions',
    text: 'Participate in global competition',
  },
];

// Sample previous year question papers with images
const previousYearQPs = [
  {
    title: '2023 Previous Year QP',
    description: 'Download the question paper for the year 2023 and prepare thoroughly.',
    downloadLink: '/qpapers',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEMNsRwJ99B-uuykQtnoFpD8jHfNveODYGA&s', // Replace with your QP image URL
  },
  {
    title: '2022 Previous Year QP',
    description: 'Review the question paper from 2022 to gauge your preparation level.',
    downloadLink: '/qpapers',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bFUdUlHsKiMIaLfPNGPaxsSn0p2werVTMA&s', // Replace with your QP image URL
  },
  {
    title: '2021 Previous Year QP',
    description: 'Explore the question paper from 2021 to understand exam patterns.',
    downloadLink: '/qpapers',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFVXFyIGdM362XLiVIYWQRgk88KJ-2JZCSw&s', // Replace with your QP image URL
  },
  {
    title: '2020 Previous Year QP',
    description: 'Access the question paper from 2020 to revise important topics.',
    downloadLink: '/qpapers',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7tGOunnqHhDwwlfmQTnm86la6Nc8UlKfumg&s', // Replace with your QP image URL
  },
];

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const nextIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(nextIndex);
  };

  return (
    <div>
      <div className="slider">
        <div className="slide-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={index === currentSlide ? 'slide active' : 'slide'}
              style={{ backgroundImage: `url(${image.url})` }}
            >
              <div className="slide-text">
                <h3>{image.text}</h3>
                <Link to={image.link}>
                  <button className="slide-button">{image.buttonText}</button>
                </Link>
              </div>
            </div>
          ))}
          <button className="prev" onClick={prevSlide}>&#10094;</button>
          <button className="next" onClick={nextSlide}>&#10095;</button>
          <div className="dot-container">
            {images.map((_, index) => (
              <span
                key={index}
                className={index === currentSlide ? 'dot active' : 'dot'}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
      
      <h3>College Courses for you</h3>
      <CoursePreview /> {/* Add the CoursePreview component */}
      
      <div className="frog-banner">
        <FrogAnimation /> {/* Frog animation integrated here */}
        <div className="banner-text">
          <h3>Discover Our Exclusive Special Offer!</h3>
          <h2>Unlock the Future of Learning with Us</h2>
          <p>Explore our diverse range of courses and empower your educational journey today. Whether you're enhancing your skills, preparing for exams, or exploring new passions,</p>
          <p>now is the perfect time to enroll.</p>
          <p>Enroll now and get 20% off on all courses.</p>
          <Link to="/special-offer">
            <button className="banner-button">Learn More</button>
          </Link>
        </div>
      </div>
      
      <h3>Previous Year Question Papers</h3>
      <div className="previous-year-qps-container">
        {previousYearQPs.map((qp, index) => (
          <div key={index} className="qp-card">
            <div className="qp-image-container">
              <img src={qp.imageUrl} alt={qp.title} className="qp-image" />
            </div>
            <div className="qp-card-content">
              <h4>{qp.title}</h4>
              <p>{qp.description}</p>
              <a href={qp.downloadLink}>
                <button className="qp-download-button">Click Here</button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="owl-banner">
        <OwlAnimation /> {/* Owl animation integrated here */}
        <div className="banner-text">
          <h3>Join Our Exciting Competition!</h3>
          <h2>Unlock Your Potential, Embrace the Challenge</h2>
          <p>Calling all students to participate in our thrilling global competition! Showcase your skills, ignite your creativity, and compete with peers from around the world.</p>
          <p>Don't miss out on this incredible opportunity to learn, grow, and win amazing prizes.</p>
          <p>Register now and pave the way to a brighter future!</p>
          <Link to="/competitions">
            <button className="owl-banner-button">Join Now</button>
          </Link>
        </div>
      </div>
      
      <h3>Notes</h3>
      <NotesPreview />
    </div>
  );
}

export default Home;
