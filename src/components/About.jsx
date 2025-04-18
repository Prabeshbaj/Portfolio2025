import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import profileImage1 from '../assets/profile1.jpg';
import profileImage2 from '../assets/profile2.jpg';

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [profileImage1, profileImage2];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Hi, I'm <span className="text-[#737276]">Prabesh</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium">
              Senior Software Engineer
            </h2>
            <p className="text-base text-gray-600 leading-relaxed max-w-xl">
              Hi there! I'm an AWS Certified Cloud Practitioner who loves working with cutting-edge technologies. These days, I'm diving deep into AWS Bedrock for AI integration, creating infrastructure with CloudFormation, building containerized applications with ECS, developing intelligent agents, and refining my prompt engineering skills.
            </p>
            <p className="text-base text-gray-600 leading-relaxed max-w-xl">
              I enjoy the challenge of turning complex business problems into elegant technical solutions. Whether it's automating workflows with CloudFormation templates or designing AI-powered applications using AWS Bedrock, I'm passionate about building systems that are both powerful and practical.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#030208] hover:bg-[#737276]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                View Projects
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Contact Me
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">3+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">20+</h3>
                <p className="text-gray-600">Projects Done</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">10+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Profile Image with Manual Switch */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            <div className="w-full h-[500px] rounded-2xl overflow-hidden bg-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.2
                  }}
                  className="w-full h-full relative"
                >
                  <img
                    src={images[currentImage]}
                    alt="Prabesh"
                    className="w-full h-full object-cover rounded-2xl"
                    style={{ 
                      WebkitBackfaceVisibility: "hidden",
                      backfaceVisibility: "hidden"
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Switch Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <button
                  onClick={() => setCurrentImage(0)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === 0 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label="Show first photo"
                >
                </button>
                <button
                  onClick={() => setCurrentImage(1)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === 1 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label="Show second photo"
                >
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 