import { motion } from 'framer-motion'

function Testimonials() {
  return (
    <section className="bg-[#EAE6DE]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="grid gap-12">
          {[
            '“Unmatched consulting. A place where fragrance becomes art.”',
            '“Exceptional service and a selection found nowhere else.”'
          ].map((q, i) => (
            <motion.blockquote key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="font-['Playfair Display',serif] text-[clamp(28px,3.5vw,40px)] leading-[1.2] tracking-[0.06em] text-[#0D0D0D]">
              {q}
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
