import { motion } from 'framer-motion'
import { Star, Crown, Sparkles } from 'lucide-react'

const items = [
  {
    icon: Crown,
    title: 'Curated Luxury Selection',
    body: 'Exclusive niche brands, chosen with precision.'
  },
  {
    icon: Sparkles,
    title: 'Personal Fragrance Consulting',
    body: 'Discover your scent identity — refined and individual.'
  },
  {
    icon: Star,
    title: 'Heritage & Excellence',
    body: 'Over six decades of craftsmanship and expertise.'
  }
]

function ValueProps() {
  return (
    <section className="bg-[#F6F5F3] text-[#0D0D0D]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-[#EAE6DE] bg-white/60 backdrop-blur-sm p-8 md:p-10 shadow-sm hover:shadow-md transition-all will-change-transform"
              style={{ boxShadow: '0 1px 0 0 #EAE6DE inset' }}
            >
              <div className="flex items-start gap-4">
                <item.icon className="h-6 w-6 text-[#5B4A3C]" strokeWidth={1.5} />
                <div>
                  <h3 className="font-['Playfair Display',serif] text-[24px] md:text-[28px] tracking-[0.08em] leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-[1.6] text-[#5B4A3C]">
                    {item.body}
                  </p>
                  <span className="mt-4 inline-block h-[2px] w-0 bg-[#D5C4A1] transition-all duration-300 group-hover:w-24" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ValueProps
