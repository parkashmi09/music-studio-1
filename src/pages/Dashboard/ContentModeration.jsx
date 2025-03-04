import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion

const ContentModeration = () => {
  // Dummy data for music items
  const musicItems = [
    {
      id: 1,
      image: '/images/music/first.png',
      title: 'Yellow Vinyl Record',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 2,
      image: '/images/music/second.png',
      title: 'Red Vinyl Playing',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 3,
      image: '/images/music/third.png',
      title: 'Classic Record Player',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 4,
      image: '/images/music/fourth.png',
      title: 'Vintage Turntable',
      artist: 'Artist Name',
      created: '11/02/2025',
    }
  ];

  // Dummy data for lyrics items
  const lyricsItems = [
    {
      id: 1,
      image: '/images/lyrics/first.png',
      title: 'Music Sheet Notes',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 2,
      image: '/images/lyrics/second.png',
      title: 'Digital Lyrics',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 3,
      image: '/images/lyrics/third.png',
      title: 'Digital Sheet Music',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 4,
      image: '/images/lyrics/fourth.png',
      title: 'Piano Sheet Music',
      artist: 'Artist Name',
      created: '11/02/2025',
    }
  ];
  const videosItems = [
    {
      id: 1,
      image: '/images/video/first.png',
      title: 'Music Sheet Notes',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 2,
      image: '/images/video/first.png',
      title: 'Digital Lyrics',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 3,
      image: '/images/video/first.png',
      title: 'Digital Sheet Music',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 4,
      image: '/images/video/first.png',
      title: 'Piano Sheet Music',
      artist: 'Artist Name',
      created: '11/02/2025',
    }
  ];
  const merchandise = [
    {
      id: 1,
      image: '/images/merchandise/first.png',
      title: 'Music Sheet Notes',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 2,
      image: '/images/merchandise/first.png',
      title: 'Digital Lyrics',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 3,
      image: '/images/merchandise/first.png',
      title: 'Digital Sheet Music',
      artist: 'Artist Name',
      created: '11/02/2025',
    },
    {
      id: 4,
      image: '/images/merchandise/first.png',
      title: 'Piano Sheet Music',
      artist: 'Artist Name',
      created: '11/02/2025',
    }
  ];

  const navigate = useNavigate();

  // Card variants for Framer Motion animation
  const cardVariants = {
    initial: { scale: 1, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' },
    hover: { 
      scale: 1.05, 
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-white text-2xl font-orbitron">Content Moderation</h1>
        <button className="bg-red-gradient text-white px-4 py-2 rounded-lg">
          Select Time
        </button>
      </div>
      <p className="text-[#A0AEC0] mb-4">
        Lorem ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* Music Section */}
      <div className="mb-12 bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] rounded-[6px] px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-orbitron">Music</h2>
          <button onClick={() => navigate('/dashboard/all-music')} className="text-white hover:text-blue-400">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {musicItems.map(item => (
            <motion.div 
              key={item.id}
              className="rounded-xl w-[238px] h-[238px] overflow-hidden relative group" 
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full w-full object-contain"
              />
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <div className="bg-white bg-opacity-20 backdrop-blur-sm absolute bottom-0 left-0 right-0 p-2  flex justify-between items-center">
                <div className="">
                  <p className="text-[12px] font-medium text-black">{item.artist}</p>
                  <p className="text-[10px] text-black">Created on: {item.created}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                
                </div>
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lyrics Section */}
      <div className="mb-12 bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] rounded-[6px] px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-orbitron">Lyrics</h2>
          <button onClick={() => navigate('/dashboard/all-lyrics')} className="text-white hover:text-blue-400">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lyricsItems.map(item => (
            <motion.div 
              key={item.id}
              className="rounded-xl w-[238px] h-[238px] overflow-hidden relative group" 
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full w-full object-contain"
              />
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <div className="bg-white bg-opacity-20 backdrop-blur-sm absolute bottom-0 left-0 right-0 p-2  flex justify-between items-center">
                <div className="">
                  <p className="text-[12px] font-medium text-black">{item.artist}</p>
                  <p className="text-[10px] text-black">Created on: {item.created}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                
                </div>
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
       {/* videos Section */}
       <div className="mb-12 bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] rounded-[6px] px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-orbitron">Videos</h2>
          <button onClick={() => navigate('/dashboard/all-videos')} className="text-white hover:text-blue-400">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videosItems.map(item => (
            <motion.div 
              key={item.id}
              className="rounded-xl w-[238px] h-[238px] overflow-hidden relative group" 
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full w-full object-contain"
              />
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <div className="bg-white bg-opacity-20 backdrop-blur-sm absolute bottom-0 left-0 right-0 p-2  flex justify-between items-center">
                <div className="">
                  <p className="text-[12px] font-medium text-black">{item.artist}</p>
                  <p className="text-[10px] text-black">Created on: {item.created}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                
                </div>
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* merchndise Section */}
      <div className="mb-12 bg-gradient-to-b from-[rgba(6,11,40,0.74)] to-[rgba(10,14,35,0.71)] rounded-[6px] px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-xl font-orbitron">Merchandise</h2>
          <button onClick={() => navigate('/dashboard/all-merchandise')} className="text-white hover:text-blue-400">View all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchandise.map(item => (
            <motion.div 
              key={item.id}
              className="rounded-xl w-[238px] h-[238px] overflow-hidden relative group" 
              variants={cardVariants}
              initial="initial"
              whileHover="hover"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full w-full object-contain"
              />
              {/* Overlay that appears on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <div className="bg-white bg-opacity-20 backdrop-blur-sm absolute bottom-0 left-0 right-0 p-2  flex justify-between items-center">
                <div className="">
                  <p className="text-[12px] font-medium text-black">{item.artist}</p>
                  <p className="text-[10px] text-black">Created on: {item.created}</p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-white rounded-full p-2 transform -translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
                
                </div>
              
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentModeration;