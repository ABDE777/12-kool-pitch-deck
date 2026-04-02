import { motion } from "framer-motion";

interface Props {
  icon: string;
  label: string;
  value: string;
  delay?: number;
}

const StatCard = ({ icon, label, value, delay = 0 }: Props) => (
  <motion.div
    className="bg-card border border-border rounded-lg p-6 text-center glow-box"
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
  >
    <span className="text-2xl">{icon}</span>
    <p className="font-display text-2xl md:text-3xl font-bold text-primary mt-3">{value}</p>
    <p className="text-muted-foreground text-sm mt-2">{label}</p>
  </motion.div>
);

export default StatCard;
