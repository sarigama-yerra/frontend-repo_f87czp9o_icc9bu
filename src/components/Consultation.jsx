import { motion } from 'framer-motion'

function Consultation() {
  return (
    <section id="consultation" className="bg-[#EAE6DE]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-['Playfair Display',serif] text-[#0D0D0D] text-[clamp(32px,4vw,48px)] tracking-[0.08em] leading-[1.1]">
            Your Personal Fragrance Signature.
          </h2>
          <p className="mt-6 text-[#5B4A3C] text-[17px] leading-[1.6] max-w-xl">
            Let our experts guide you to a scent that reflects who you truly are — deeply personal, carefully curated, and unforgettable.
          </p>
          <a href="#footer" className="mt-10 inline-flex items-center justify-center px-7 py-3 text-[15px] font-medium text-white bg-[#0D0D0D]" style={{ boxShadow: '0 0 0 1px #D5C4A1 inset' }}>
            Schedule Your Consultation
          </a>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img src="https://images.unsplash.com/photo-1518352724948-729151797553?q=80&w=1600&auto=format&fit=crop" alt="Consultation" className="w-full rounded-xl shadow-lg" />
        </motion.div>
      </div>
    </section>
  )
}

export default Consultation
