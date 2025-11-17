import { motion } from 'framer-motion'

function FinalCTA() {
  return (
    <section className="bg-[#F6F5F3]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 py-24 md:py-36 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-['Playfair Display',serif] text-[#0D0D0D] text-[clamp(32px,4vw,48px)] tracking-[0.08em]">
          Explore the Art of Fine Perfumery.
        </motion.h2>
        <div className="mt-10 flex items-center justify-center gap-6">
          <a href="#footer" className="px-7 py-3 text-[15px] font-medium text-white bg-[#0D0D0D]" style={{ boxShadow: '0 0 0 1px #D5C4A1 inset' }}>Book a Consultation</a>
          <a href="#brands" className="group text-[15px] font-medium text-[#0D0D0D]"><span className="border-b border-transparent pb-0.5 group-hover:border-[#D5C4A1]">Browse Our Collections</span></a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
