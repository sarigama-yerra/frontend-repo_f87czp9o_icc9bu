import { motion } from 'framer-motion'

const products = [
  {
    title: 'Baccarat Rouge 540',
    brand: 'Maison Francis Kurkdjian',
    desc: 'Radiant, ambered, effortlessly iconic.',
    img: 'https://images.unsplash.com/photo-1605979257913-1704eb7b6240?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Santal 33',
    brand: 'Le Labo',
    desc: 'Smoky woods with city poetry.',
    img: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?q=80&w=1600&auto=format&fit=crop'
  },
  {
    title: 'Gypsy Water',
    brand: 'Byredo',
    desc: 'A luminous ode to wander.',
    img: 'https://images.unsplash.com/photo-1610986603169-3767b0c8590b?q=80&w=1600&auto=format&fit=crop'
  }
]

function Bestsellers() {
  return (
    <section className="bg-[#F6F5F3]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 py-24 md:py-36">
        <h2 className="font-['Playfair Display',serif] text-[#0D0D0D] text-[clamp(32px,4vw,48px)] tracking-[0.08em] mb-10">
          Bestsellers
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <motion.article key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group rounded-xl overflow-hidden bg-white/60 backdrop-blur-sm border border-[#EAE6DE]">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <h3 className="font-['Playfair Display',serif] text-[22px] tracking-[0.06em] text-[#0D0D0D]">{p.title}</h3>
                <p className="text-[#5B4A3C] mt-1">{p.brand}</p>
                <p className="text-[#5B4A3C] mt-2 text-[15px]">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center text-[#0D0D0D] border-b border-transparent hover:border-[#D5C4A1] pb-0.5">Discover Now</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bestsellers
