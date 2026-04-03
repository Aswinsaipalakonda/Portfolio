
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  altText?: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ isOpen, onClose, imageUrl, altText }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative max-w-5xl w-full flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
            >
              <X size={24} />
            </button>
            <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={imageUrl}
                alt={altText || "Certificate"}
                className="w-full h-full object-contain max-h-[85vh]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};