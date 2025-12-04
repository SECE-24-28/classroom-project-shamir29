import React from "react";

const PromiseSection = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '48px', textAlign: 'center', color: 'black', marginBottom: '30px' }}>Our Promise</h1>
      <p style={{ fontSize: '20px', textAlign: 'center', color: '#555', marginBottom: '40px' }}>
        As part of our high quality service, we'd like to offer something extra too.
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>
        <div style={{ width: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ height: '4px', backgroundColor: '#43b3ae', marginBottom: '15px' }}></div>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>💻</div>
          <h3 style={{ fontSize: '24px', marginBottom: '10px', color: 'black' }}>Top Code Quality</h3>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.5' }}>Our commitment goes beyond mere code.</p>
        </div>
        
        <div style={{ width: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ height: '4px', backgroundColor: '#e3a72f', marginBottom: '15px' }}></div>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>📱</div>
          <h3 style={{ fontSize: '24px', marginBottom: '10px', color: 'black' }}>Responsive</h3>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.5' }}>We understand the value of responsiveness.</p>
        </div>
        
        <div style={{ width: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ height: '4px', backgroundColor: '#1e9edc', marginBottom: '15px' }}></div>
          <div style={{ fontSize: '32px', marginBottom: '10px' }}>👥</div>
          <h3 style={{ fontSize: '24px', marginBottom: '10px', color: 'black' }}>Rockstar Team</h3>
          <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.5' }}>Our expertise is our unique selling proposition.</p>
        </div>
      </div>
    </div>
  );
};

export default PromiseSection;
