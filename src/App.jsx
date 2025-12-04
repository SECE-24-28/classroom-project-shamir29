import React from 'react';

const StarIcon = ({ fill = false }) => (
  <svg
    width="16" height="16"
    fill={fill ? "#fbbf24" : "none"}
    stroke="#fbbf24"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.637-.921 1.936 0l1.207 3.712a1 1 0 00.95.691h3.918c.983 0 1.385 1.258.591 1.815l-3.167 2.298a1 1 0 00-.363 1.118l1.207 3.712c.3.921-.755 1.688-1.54 1.134l-3.167-2.298a1 1 0 00-1.176 0l-3.167 2.298c-.784.554-1.84-.213-1.54-1.134l1.207-3.712a1 1 0 00-.363-1.118L2.553 9.145c-.794-.557-.392-1.815.591-1.815h3.918a1 1 0 00.95-.691l1.207-3.712z"
    />
  </svg>
);

const RatingStars = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<StarIcon key={i} fill={i < fullStars} />);
  }
  return <div style={{ display: 'flex', gap: '2px' }}>{stars}</div>;
};

const CourseCard = ({ course }) => {
  const formatPrice = (price) => {
    return `₹ ${price.toLocaleString('en-IN')}`;
  };
  
  const placeholderImages = {
    'Aptitude Complete Preparation': 'https://res.cloudinary.com/dotsjvnys/image/upload/v1715770719/AGH-Nov/HeroSection/aptitude_ch2mz0.jpg',
    'Technical Complete Preparation': 'https://res.cloudinary.com/dotsjvnys/image/upload/v1715770721/AGH-Nov/HeroSection/programming_e05rx7.png',
    'MERN Fullstack': 'https://res.cloudinary.com/dotsjvnys/image/upload/v1715770718/AGH-Nov/HeroSection/web-development_bfpidr.png',
  };

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden', border: '1px solid #e5e7eb', transition: 'all 0.3s ease' }}>
      
      <div style={{ height: '192px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb' }}>
        <img 
          src={placeholderImages[course.title] || 'https://via.placeholder.com/400x200/cccccc/333?text=Course+Image'}
          alt={course.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ backgroundColor: 'white', padding: '8px 12px', marginBottom: '16px', textAlign: 'center', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'black' }}>
            ₹{course.price.toLocaleString('en-IN')} + GST
          </span>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginBottom: '8px' }}>
            <RatingStars rating={course.rating} />
            <span style={{ color: '#6b7280', fontWeight: '600' }}>{course.rating}</span>
          </div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: 0, lineHeight: '1.3' }}>
            {course.title}
          </h3>
        </div>

        <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px' }}>
          <p style={{ margin: '0 0 4px 0' }}>
            <span style={{ fontWeight: '600' }}>Recommended:</span> {course.recommended}
          </p>
          <p style={{ margin: 0 }}>
            <span style={{ fontWeight: '600' }}>Duration:</span> {course.duration}
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px', marginTop: 'auto' }}>
          <p style={{ fontSize: '24px', fontWeight: '800', color: '#dc2626', margin: 0 }}>
            {formatPrice(course.price)}
            <span style={{ fontSize: '16px', fontWeight: 'normal', marginLeft: '4px' }}>+ GST</span>
          </p>
          <p style={{ fontSize: '16px', color: '#9ca3af', textDecoration: 'line-through', marginLeft: '12px', margin: 0 }}>
            {formatPrice(course.originalPrice)}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', fontWeight: 'bold', color: 'white', backgroundColor: '#dc2626', border: 'none', cursor: 'pointer', transition: 'background-color 0.15s ease' }}>
            Buy Now
          </button>
          <button style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', fontWeight: 'bold', color: '#374151', backgroundColor: '#f3f4f6', border: 'none', cursor: 'pointer', transition: 'background-color 0.15s ease' }}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const courses = [
    {
      title: "Aptitude Complete Preparation",
      rating: 5.0,
      recommended: "Final year students",
      duration: "1 Year",
      price: 12000,
      originalPrice: 24999,
    },
    {
      title: "Technical Complete Preparation",
      rating: 4.9,
      recommended: "Final year students",
      duration: "1 Year",
      price: 12000,
      originalPrice: 24999,
    },
    {
      title: "MERN Fullstack",
      rating: 4.4,
      recommended: "Final year students",
      duration: "1 year",
      price: 29999,
      originalPrice: 39999,
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', padding: '32px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', paddingTop: '48px' }}>
        
        <header style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>
            Our Courses
          </h1>
          <p style={{ fontSize: '18px', color: '#6b7280', maxWidth: '512px', margin: '0 auto' }}>
            Explore a wide range of curated courses for every learner. Structured to enhance knowledge, skills, and career growth.
          </p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;