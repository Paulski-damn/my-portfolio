// ResumeModal.tsx
import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                >
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        className="bg-white dark:bg-gray-800 rounded-lg max-w-3xl w-full p-4 relative"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-red-500 text-xl font-bold"
                        >
                            ✕
                        </button>

                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            My Resume
                        </h2>

                        <iframe
                            src="/RESUME_RAMOS.pdf"
                            width="100%"
                            height="600px"
                            className="rounded-lg"
                            title="Resume"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
