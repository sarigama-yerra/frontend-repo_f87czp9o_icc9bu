import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1556228453-efd1e3f0f8ec?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1610986603169-3767b0c8590b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop'
]

function Gallery() {
  return (
    <section className="bg-[#F6F5F3]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 py-24 md:py-36">
        <h2 className="font-['Playfair Display',serif] text-[#0D0D0D] text-[clamp(32px,4vw,48px)] tracking-[0.08em] mb-10">
          A Space for Scent Culture.
        </h2>
        <p className="text-[#5B4A3C] max-w-2xl text-[17px] leading-[1.6] mb-10">
          Step into a world of refinement. Calm, intimate, and dedicated entirely to the art of fine perfumery.
        </p>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="overflow-hidden rounded-xl">
              <img src={src} alt="Store" className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
