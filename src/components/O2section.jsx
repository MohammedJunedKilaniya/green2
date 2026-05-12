import plant1 from "../assets/image 1.png";

const O2section = () => {
  return (
    <>

<section
  className="
    relative
    w-full
    min-h-screen
    overflow-hidden
    top-[90px]
    py-24
    flex
    flex-col
    items-center
  "
  style={{
    background: `
      radial-gradient(circle at 15% 25%, rgba(34,197,94,0.18) 0%, transparent 35%),
      radial-gradient(circle at 85% 30%, rgba(22,163,74,0.14) 0%, transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(74,222,128,0.10) 0%, transparent 45%),
      linear-gradient(180deg, #06110B 0%, #020403 100%)
    `,
  }}
>

  {/* HEADING */}
  <div className="relative inline-block top-[50px]">

    {/* LEFT CORNER */}
    <div
      className="
        absolute
        -top-5
        -left-8
        w-[90px]
        h-[90px]
        border-l-[3px]
        border-b-[3px]
        border-[#FBD300]
        rounded-bl-[40px]
      "
    />

    {/* RIGHT CORNER */}
    <div
      className="
        absolute
        -top-5
        -right-8
        w-[90px]
        h-[90px]
        border-r-[3px]
        border-t-[3px]
        border-[#FBD300]
        rounded-tr-[40px]
      "
    />

    <h2 className="text-white text-[52px] font-semibold px-10">
      Our Best 02
    </h2>
  </div>

  {/* MAIN GLASS CARD */}
  <div
    className="
      relative
      w-[950px]
      h-[470px]
      top-[100px]
      rounded-[50px]
      overflow-hidden
      border
      border-white/20
      flex
      items-center
      justify-between
      px-20
    "
    style={{
      background:
        "linear-gradient(135deg, rgba(23,35,18,0.75), rgba(8,12,8,0.55))",
      backdropFilter: "blur(30px)",
      WebkitBackdropFilter: "blur(30px)",
      boxShadow: "0 0 40px rgba(72,255,120,0.08)",
    }}
  >

    {/* LEFT IMAGE */}
    <div className="absolute -left-15 bottom-25">
      <img
        src={plant1}
        alt="plant"
        className="
          w-[450px]
          object-contain
          drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
        "
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className=" absolute w-[530px] right-[60px]">

      {/* SMALL HEADING */}
      <h3 className="text-white text-[44px] font-semibold leading-tight">
        We Have Small And Best O2 Plants
      </h3>

      {/* DESCRIPTION */}
      <p className="text-white/70 text-[20px] leading-[28px] mt-6">
        Oxygen-producing plants, often referred to as “O2 plants,”
        are those that release oxygen into the atmosphere through
        the process of photosynthesis.
      </p>

      <p className="text-white/70 text-[20px] leading-[28px] mt-5">
        Many plants can help filter out pollutants and toxins from
        the air, such as formaldehyde, benzene, and trichloroethylene.
      </p>

      {/* BUTTON + SLIDER COUNT */}
      <div className=" flex items-center gap-16 ">

        <button
          className="
          w-[155px]
          h-[40px]
            
            rounded-[12px]
            border
            border-white
            text-white
            text-[16px]
            hover:bg-white
            hover:text-black
            duration-300
          "
        >
          Explore
        </button>

        <div className="flex items-center gap-4 text-white/70 text-[14px]">

          <span>{"<"}</span>

          <span>01/4</span>

          <span>{">"}</span>

        </div>
      </div>
    </div>

    {/* DOTS */}
    <div
      className="
        absolute
        bottom-8
        left-1/2
        -translate-x-1/2
        flex
        gap-3
      "
    >

      <div className="w-8 h-2 rounded-full bg-white" />

      <div className="w-2 h-2 rounded-full bg-white/50" />

      <div className="w-2 h-2 rounded-full bg-white/50" />

    </div>
  </div>
</section>

    </>
      );
};

export default O2section;