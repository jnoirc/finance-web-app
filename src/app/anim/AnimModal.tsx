import { motion } from 'framer-motion';
interface AnimProps {
  children: React.ReactNode;
}
export default function AnimModal({ children }: AnimProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {children}
    </motion.div>
  );
}
