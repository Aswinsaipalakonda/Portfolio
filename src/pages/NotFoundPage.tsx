import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-[80vh] bg-transparent flex flex-col justify-center items-center relative overflow-hidden z-20 pt-20 pb-16">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#915EFF] rounded-full blur-[150px] opacity-20 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="flex flex-col items-center text-center z-10 px-4"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="mb-6 relative"
        >
          <h1 className="text-[120px] md:text-[180px] font-black leading-none text-transparent bg-clip-text bg-linear-to-br from-[#915EFF] to-purple-400 select-none">
            404
          </h1>
          <AlertCircle className="absolute top-4 -right-8 w-12 h-12 text-purple-400 opacity-60 hidden sm:block animate-pulse" />
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto mb-10">
          Oops! The page you're looking for seems to have vanished into the digital void. Let's get you back on track.
        </p>

        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#915EFF] hover:bg-purple-600 text-white px-8 py-4 rounded-full font-medium transition-colors border border-purple-500/50 shadow-[0_0_20px_rgba(145,94,255,0.4)]"
          >
            <Home className="w-5 h-5" />
            <span>Return to Homepage</span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
