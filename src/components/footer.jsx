

import logo from "../assets/logo.png.png";

const Footer = () => {
  return (
    <footer
      className="
        relative
        w-full
       
        overflow-hidden
        px-20
        py-24
     
      "
      style={{
        background: `
          radial-gradient(circle at 15% 25%, rgba(34,197,94,0.18) 0%, transparent 35%),
          radial-gradient(circle at 85% 30%, rgba(22,163,74,0.14) 0%, transparent 40%),
          linear-gradient(180deg, #06110B 0%, #020403 100%)
        `,
      }}
    >

      {/* MAIN GRID */}
      <div
        className="
          grid
          grid-cols-3
          gap-20
          items-start
        "
      >

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8 ">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="logo"
              className="w-[50px] object-contain"
            />

            <h2 className="text-white text-[42px] font-semibold">
              FloraVision.
            </h2>
          </div>

          {/* TEXT */}
          <p
            className="
              text-white/80
              text-[24px]
              leading-[38px]
              max-w-[500px]
            "
          >
            "From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to thrive and elevate your
            living environment."
          </p>

          {/* SOCIALS */}
          <div className="flex gap-12 mt-6">

            <span className="text-white text-[26px] font-semibold">
              FB
            </span>

            <span className="text-white text-[26px] font-semibold">
              TW
            </span>

            <span className="text-white text-[26px] font-semibold">
              LI
            </span>

          </div>
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-col gap-8">

          <h3 className="text-white text-[32px] font-semibold">
            Quick Link’s
          </h3>

          <div className="flex flex-col gap-5">

            <a href="#" className="text-white/80 text-[24px]">
              Home
            </a>

            <a href="#" className="text-white/80 text-[24px]">
              Type’s Of plant’s
            </a>

            <a href="#" className="text-white/80 text-[24px]">
              Contact
            </a>

            <a href="#" className="text-white/80 text-[24px]">
              Privacy
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-10">

          <h3 className="text-white text-[32px] font-semibold">
            For Every Update.
          </h3>

          {/* INPUT */}
          <div
            className="
              flex
              items-center
              overflow-hidden
              rounded-[12px]
              border
              border-white/40
              bg-white/5
              backdrop-blur-xl
            "
          >

            <input
              type="email"
              placeholder="Enter Email"
              className="
                w-full
                bg-transparent
                px-6
                py-5
                text-white
                outline-none
                placeholder:text-white/50
                text-[20px]
              "
            />

            <button
              className="
                bg-white
                text-black
                px-8
                py-5
                text-[18px]
                font-semibold
                hover:bg-[#d9ffd9]
                duration-300
              "
            >
              SUBSCRIBE
            </button>
          </div>

          {/* COPYRIGHT */}
          <p className="text-white/70 text-[22px] mt-10">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;