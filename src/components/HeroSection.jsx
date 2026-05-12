// src/components/HeroBanner.jsx

import bgPlant from "../assets/heroPlant.png.png";
import plant1 from "../assets/image 1.png";
import girl from "../assets/girl.png";
const HeroBanner = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${bgPlant})`,
        backgroundPosition: "center top",
      }}
    >
        <div className="relative z-10">

        <div className="w-[802px] h-[280px] absolute top-[252px] left-[39px]">

  {/* Heading */}
  <h1 className="text-white text-[96px] leading-[95px] font-bold">
    Earth’s Exhale
  </h1>

  {/* Description */}
  <p className="text-white text-[24px] leading-[36px] mt-5 max-w-[760px]">
    "Earth Exhale" symbolizes the purity and vitality of the Earth's
    natural environment and its essential role in sustaining life.
  </p>

  {/* Buttons */}
  <div className="flex items-center gap-8 mt-10">

    {/* Buy Button */}
    <button className="w-[190px] h-[72px] border-2 border-white rounded-[18px] text-white text-[32px] font-medium hover:bg-white hover:text-black transition duration-300">
      Buy Now
    </button>

    {/* Play Button */}
    <div className="flex items-center gap-5 cursor-pointer group">

      <div className="w-[78px] h-[78px] rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white transition duration-300">

        <span className="text-white text-[34px] ml-1 group-hover:text-black">
          ▶
        </span>
      </div>

      <p className="text-white text-[28px] font-light">
        Live Demo...
      </p>
    </div>
  </div>
</div>







<div className="absolute top-[150px] right-[60px] w-[400px] h-[480px]">

  {/* CARD */}
  <div
    className="
      relative
      w-full
      h-full
      rounded-[55px]
      border
      border-white/20
      bg-white/[0.05]
      backdrop-blur-[15px]
      overflow-hidden
    "
  >

    {/* GREEN BLUR */}
    <div className="absolute top-[120px] right-[-50px] w-[220px] h-[180px] bg-green-500/20 blur-[120px] rounded-full"></div>

    {/* PLANT IMAGE */}
    <img
      src={plant1}
      alt="plant"
      className="
        absolute
        top-[-60px]
        left-1/2
        -translate-x-1/2
        w-[300px]

        object-contain
        z-20
      "
    />

    {/* TEXT AREA */}
    <div className="absolute left-[40px] right-[40px] bottom-[40px]">

      {/* SMALL TEXT */}
      <p className="text-white/80 text-[28px] font-light text-[5px]">
        Indoor Plant
      </p>

      {/* TITLE */}
      <div className="flex items-start justify-between mt-3">

        <h2 className="text-white text-[30px] leading-[58px] font-light">
          
          Aglaonema
          plant
        </h2>

        <span className="text-white text-[60px] ">
          ›
        </span>
      </div>

      {/* BUTTON */}
      <button
        className="
          w-[200px]
          h-[58px]
          border
          border-white
          rounded-[20px]
          text-white
          text-[34px]
          font-light
          hover:bg-white
          hover:text-black
          transition-all
          duration-300
        "
      >
        Buy Now
      </button>
      <br></br>
      <br></br>

      {/* DOTS */}
      <div className="flex justify-center items-center gap-4 ">

        <div className="w-[48px] h-[9px] rounded-full bg-white"></div>

        <div className="w-[9px] h-[9px] rounded-full bg-white/50"></div>

        <div className="w-[9px] h-[9px] rounded-full bg-white/50"></div>
      </div>
    </div>
  </div>
</div>






<div
  className="
    absolute
    top-[605px]
    left-[43px]
    w-[409px]
    h-[237px]
    rounded-[45px]
    overflow-hidden
    backdrop-blur-[15px]
    bg-white/[0.05]
    border
    border-white/20
  "
>

  {/* GRADIENT OVERLAY */}
  <div
    className="
      absolute inset-0
      bg-gradient-to-br
      from-[#263326]/50
      via-[#161d16]/70
      to-[#0d120d]/90
    "
  />

  {/* GREEN LIGHT RIGHT */}
  <div
    className="
      absolute
      right-[-40px]
      top-[40px]
      w-[120px]
      h-[120px]
      bg-green-400/20
      blur-[70px]
      rounded-full
    "
  />

  {/* GREEN LIGHT BOTTOM */}
  <div
    className="
      absolute
      right-[10px]
      bottom-[-20px]
      w-[100px]
      h-[100px]
      bg-green-300/20
      blur-[60px]
      rounded-full
    "
  />

  {/* CONTENT */}
  <div className="relative z-20 p-7">

{/* TOP */}
<div className="flex items-center w-full">

  {/* IMAGE */}
  <img
    src={girl}
    alt="girl"
    className="
      min-w-[92px]
      min-h-[92px]
      max-w-[92px]
      max-h-[92px]
      rounded-full
      object-cover
    "
  />

  {/* RIGHT SIDE */}
  <div className="ml-6">

    {/* NAME */}
    <h2 className="text-white text-[26px] leading-none font-light whitespace-nowrap">
      Ronnie Hamill
    </h2>

    {/* STARS */}
    <div className="flex items-center gap-1 mt-3 text-yellow-300 text-[20px]">
      ★ ★ ★ ★ ★
    </div>
  </div>
</div>

    {/* REVIEW */}
    <p className="text-white/80 text-[17px] leading-[34px] mt-7">
      I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
    </p>
  </div>
</div>



</div>
    </section>
  );
};

export default HeroBanner;