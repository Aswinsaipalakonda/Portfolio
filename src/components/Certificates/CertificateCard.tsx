
import { motion } from 'framer-motion';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  onClick: () => void;
}

export const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  date,
  imageUrl,
  onClick,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#151030] rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className="text-white text-sm">Click to view</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-1">{issuer}</p>
        <p className="text-gray-500 text-xs">{date}</p>
      </div>
    </motion.div>
  );
};