import React from 'react';


const VideoLinks = () => {
  const videoUrls = [
   
    {
      title: 'Pooja',
      url: 'https://youtu.be/yixiSxkoH2I?si=DnqyubLA3hNUeLnc',
    },

    {
      title: 'Temple History Documentary- V6 News Channels (2017)',
      url: 'https://www.youtube.com/watch?v=mIpwuLmo_88',
      
    },

 {
        title: 'Temple History Documentary- V6 News Channels (2025)',
        url: 'https://www.youtube.com/watch?v=TlEmQW7qGyQ',
        
      },
    {
        title: 'Temple Main Festival (2024)' ,
        url: 'https://www.youtube.com/watch?v=NIiX-y6_Qvg',
      },
   
      {
        title: 'Temple History Documentary- ETV Telangana News Channels (2024) ',
      
        url:"https://www.youtube.com/watch?v=uOJxYU1lREw"


      },

      {
        title: 'Temple History Documentary- ETV Telangana News Channels (2024) ',
      
        url:" https://www.youtube.com/watch?v=fFRyHnpdGCw"

      },
      {
        title: 'Temple History Documentary- T News Telugu News Channels (2024) ',
      
        url:"https://www.youtube.com/watch?v=JGDWA0P8-7U"
      },
    {
        title: 'Temple History Documentary-TV9 News Channels (2022) ',
      
        url:"https://www.youtube.com/watch?v=uL6GRYT7Nz0"
      },
        
  ];

  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      backgroundImage: 'url("https://images.tv9telugu.com/wp-content/uploads/2024/03/mellacheruvu-sri-swayambhu-shambhu-lingeswara-swamy.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      color: 'white',
      borderRadius: '8px',
      margin: '2rem 0',
      boxShadow: '0 4px 12px rgba(241, 18, 18, 0.2)',
      overflow: 'hidden'
    }}>
      {/* Overlay for better text readability */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      
        zIndex: 0
      }}></div>
      
      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ 
          color: '#ffffff',
          fontSize: '2rem',
          marginBottom: '1.5rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          శివాలయం వీడియోల లింకులు
        </h2>
        
        <ul style={{ 
          listStyleType: 'none',
          padding: 0,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {videoUrls.map((video, index) => (
            <li key={index} style={{ 
              marginBottom: '1.5rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(5px)',
              padding: '1rem',
              borderRadius: '4px',
              transition: 'transform 0.3s ease',
              ':hover': {
                transform: 'scale(1.02)'
              }
            }}>
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#ffeb3b',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  borderBottom: '2px solid #ff9800',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#ffffff'}
                onMouseLeave={(e) => e.target.style.color = '#ffeb3b'}
              >
                {video.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoLinks;
