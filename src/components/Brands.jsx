import { motion } from 'framer-motion'

const brands = [
  {
    name: 'Maison Francis Kurkdjian',
    desc: 'Timeless French elegance, shaped with modern artistry.',
    img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Le Labo',
    desc: 'Sartorial rawness with poetic precision.',
    img: 'https://images.unsplash.com/photo-1610986603169-3767b0c8590b?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Byredo',
    desc: 'Sculpted minimalism, memory-made modern.',
    img: 'https://images.unsplash.com/photo-1605979257913-1704eb7b6240?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Diptyque',
    desc: 'Artful Parisian storytelling in scent.',
    img: 'https://images.unsplash.com/photo-1556228453-efd1e3f0f8ec?q=80&w=1600&auto=format&fit=crop'
  }
]

function Brands() {
  return (
    <section id="brands" className="bg-[#F6F5F3]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 py-24 md:py-36">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-['Playfair Display',serif] text-[clamp(32px,4vw,48px)] tracking-[0.08em] text-[#0D0D0D] mb-10"
        >
          Our Signature Brands
        </motion.h2>

        <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]" style={{ WebkitOverflowScrolling: 'touch' }}>
          <div className="flex gap-8 md:gap-12 min-w-max pr-8">
            {brands.map((b, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative w-[280px] md:w-[360px] aspect-[3/4] rounded-xl overflow-hidden bg-[#EAE6DE]"
              >
                <img src={b.img} alt={b.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-6 text-[#F6F5F3]">
                  <h3 className="font-['Playfair Display',serif] text-[22px] tracking-[0.06em]">{b.name}</h3>
                  <p className="mt-2 text-[14px] text-[#D5C4A1]">{b.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands
