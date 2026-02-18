 

export default function OurWorksSection() {
  return (
    <section className="bg-gray-100 py-10 mt-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Side */}
          <div>
            <h2 className="flex items-baseline gap-3 flex-wrap">
              <span className="text-4xl md:text-5xl font-black uppercase text-transparent stroke-text">
                OUR
              </span>
              <span className="text-4xl md:text-5xl font-black uppercase text-black">
                WORKS
              </span>
            </h2>

            <p className="mt-3 text-sm font-semibold text-gray-500 leading-relaxed">
              Discover how we empower high-growth startups and global <br />
              enterprises at every stage with scalable, software solutions.
            </p>
          </div>

          {/* Right Side */}
          <a
            href="#case-studies"
            className="flex items-center gap-4 text-xs font-extrabold tracking-widest text-gray-600 hover:text-black transition"
          >
            <span>ALL CASE STUDIES</span>
            <span className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-black transition">
              →
            </span>
          </a>
        </div>

        {/* ===== Contact Form ===== */}
        {/* <div className="mt-14 bg-white p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label className="text-sm font-semibold mb-2">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div> */}
      </div>

      {/* Custom stroke style */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #d1d5db;
        }
      `}</style>
    </section>
  );
}
