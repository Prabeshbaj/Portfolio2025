import { motion } from 'framer-motion';

const About = () => {
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
              Hi, I'm <span className="text-[#915EFF]">Prabesh</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium">
              Senior Software Engineer
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              I'm a passionate developer focused on creating beautiful and functional web applications. 
              With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#915EFF] hover:bg-[#915EFF]/90 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
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

          {/* Profile Image/3D Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-full h-[400px] sm:h-[500px] bg-[#915EFF]/10 rounded-2xl overflow-hidden">
              {/* Add your profile image or 3D model here */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Profile Image/3D Model Placeholder
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 