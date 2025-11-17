function Footer() {
  return (
    <footer id="footer" className="bg-[#0D0D0D] text-[#F6F5F3]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-12 md:px-16 lg:px-24 py-20">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="font-['Playfair Display',serif] text-[24px] tracking-[0.08em]">Edith Lücke</h4>
            <p className="mt-3 text-[#D5C4A1]">Luxury Perfumery in Trier</p>
            <p className="mt-6 text-sm text-[#EAE6DE]">Copyright © {new Date().getFullYear()}</p>
          </div>

          <div>
            <h5 className="text-[#D5C4A1] mb-3">Address</h5>
            <p>Neustrasse 12, 54290 Trier</p>
            <p>Germany</p>
          </div>

          <div>
            <h5 className="text-[#D5C4A1] mb-3">Opening Hours</h5>
            <p>Mon–Fri: 10:00–18:30</p>
            <p>Sat: 10:00–16:00</p>
          </div>

          <div>
            <h5 className="text-[#D5C4A1] mb-3">Newsletter</h5>
            <form className="flex gap-3">
              <input type="email" placeholder="Your email" className="flex-1 bg-transparent border-b border-[#D5C4A1] px-0 py-2 focus:outline-none focus:ring-0 placeholder-[#EAE6DE]/70" />
              <button className="px-5 py-2 bg-[#F6F5F3] text-[#0D0D0D]" style={{ boxShadow: '0 0 0 1px #D5C4A1 inset' }}>Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-[#D5C4A1]/50 to-transparent" />

        <div className="mt-6 text-sm text-[#EAE6DE] flex flex-wrap gap-6">
          <a href="#" className="hover:text-[#D5C4A1]">Instagram</a>
          <a href="#" className="hover:text-[#D5C4A1]">Facebook</a>
          <a href="#" className="hover:text-[#D5C4A1]">Imprint</a>
          <a href="#" className="hover:text-[#D5C4A1]">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
