import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 400], [0, -40])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#F6F5F3]">
      <div className="absolute inset-0">
        <motion.div style={{ y, opacity }} className="h-full w-full">
          <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F6F5F3]/90 via-[#F6F5F3]/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 flex items-center min-h-screen">
        <div className="max-w-2xl pr-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="font-[\'Playfair Display\',serif] text-[#0D0D0D] text-[clamp(40px,6vw,72px)] leading-[1.1] tracking-[0.06em]"
          >
            Exquisite Fragrances. Personal Expertise.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="mt-6 text-[17px] leading-[1.6] text-[#5B4A3C]"
          >
            Experience luxury perfumery in its purest form — curated scents, exceptional guidance, and timeless elegance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#consultation"
              className="relative inline-flex items-center justify-center px-7 py-3 text-[15px] font-medium text-white bg-[#0D0D0D] tracking-wide"
              style={{ boxShadow: '0 0 0 1px #D5C4A1 inset' }}
            >
              <span>Book Your Personal Consultation</span>
              <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-[#D5C4A1] opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#brands"
              className="group inline-flex items-center px-1.5 py-1 text-[15px] font-medium text-[#0D0D0D]"
            >
              <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-[#D5C4A1]">Explore Our Brands</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <div className="text-[11px] uppercase tracking-[0.3em] text-[#5B4A3C] mb-2">Scroll</div>
        <span className="block h-8 w-px bg-[#D5C4A1] animate-pulse" />
      </div>
    </section>
  )
}

export default Hero
