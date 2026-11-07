import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-8">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-8 h-8 border-4 border-max-orange/20 border-t-max-orange rounded-full"
      />
    </div>
  )
}
