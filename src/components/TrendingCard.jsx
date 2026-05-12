import React from "react";
 import plant2 from "../assets/image 2.png";
 import plant3 from "../assets/image 3.png";
import bag from "../assets/bag.png";
import plant1 from "../assets/heroPlant.png.png"

const TrendingCard = () => {
    return (


        <section className="    
    w-full
    
    mt-[-126px]
    px-10
    pt-40
    pb-32
    bg-cover
    bg-center
    bg-no-repeat
    flex
    flex-col
    items-center
    gap-8
  "
            style={{
                backgroundImage: `url(${plant1})`,
            }}>

            {/* HEADING */}
            <div className="  flex justify-center   ">

                <div className="relative inline-block top-[20px]">

                    {/* LEFT CORNER */}
                    <div
                        className="
        absolute
        -top-6
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
        -top-6
        -right-8
        w-[90px]
        h-[90px]
        border-r-[3px]
        border-t-[3px]
        border-[#FBD300]
        rounded-tr-[40px]
      "
                    />

                    {/* TEXT */}
                    <h2
                        className="
        text-white
        text-[50px]
        font-semibold
        leading-none
        px-12
      "
                    >
                        Our Trendy plants
                    </h2>

                </div>
            </div>

            {/* MAIN GLASS CARD */}
            <div
                className="
     
      relative
      
      w-[890px]
      h-[326px]
      mt-16
      rounded-[151px]
      overflow-hidden
      flex
      items-center
      justify-end
      px-24
    "
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                    border: "2px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                }}
            >

                {/* LEFT IMAGE */}
                <div className="absolute -top-20 left-4">

                    <img
                        src={plant2}
                        alt="plant"
                        className="w-[336px] h-[590px] object-contain"
                        style={{
                            filter:
                                "drop-shadow(0px 27px 80px rgba(0,0,0,0.20))",
                        }}
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className=" w-[420px] translate-x-[-60px]">

                    <h2 className="text-white text-[30px] font-semibold leading-tight">
                        For Your Desks Decorations
                    </h2>
                    <div className="w-100">

                        <p className="text-white/75 text-[15px] leading-8 mt-8">
                            I recently added a beautiful desk decoration plant to my
                            workspace, and it has made such a positive difference!
                        </p>
                    </div>

                    <h3 className="text-white text-[40px] font-bold mt-10">
                        Rs. 599/-
                    </h3>

                    {/* BUTTONS */}
                    <div className="flex items-center gap-6 mt-10">

                        {/* EXPLORE */}
                        <button
                            className="
            w-[155px]
            h-[60px]
            rounded-[18px]
            border
            border-white
            text-white
            text-[28px]
            hover:bg-black
            hover:text-white
            duration-300
          "
                        >
                            Explore
                        </button>

                        {/* BAG ICON */}
                        <button
                            className="
            w-[72px]
            h-[60px]
            rounded-[18px]
            border
            border-white
            flex
            items-center
            justify-center
            hover:bg-black
            hover:text-white
            duration-300
          "
                        >
                            <img
                                src={bag}
                                alt="bag"
                                className="w-8"
                            />
                        </button>

                    </div>
                </div>


            </div>



            {/* MAIN GLASS CARD */}
            <div
                className="
      
      relative
      w-[890px]
      h-[326px]
      
    
      rounded-[151px]
      overflow-hidden
      flex
      items-center
      justify-start
      px-24
    "
                style={{
                    background:
                        "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                    border: "2px solid rgba(255,255,255,0.18)",
                    backdropFilter: "blur(40px)",
                    WebkitBackdropFilter: "blur(40px)",
                }}
            >

                {/* LEFT IMAGE */}
                <div className="absolute -top-20 right-4">

                    <img
                        src={plant3}
                        alt="plant"
                        className="w-[336px] h-[590px] object-contain"
                        style={{
                            filter:
                                "drop-shadow(0px 27px 80px rgba(0,0,0,0.20))",
                        }}
                    />
                </div>

                {/* RIGHT CONTENT */}
                <div className=" w-[420px] translate-x-[80px]">

                    <h2 className="text-white text-[30px] font-semibold leading-tight">
                        For Your Desks Decorations
                    </h2>
                    <div className="w-100">

                        <p className="text-white/75 text-[15px] leading-8 mt-8">
                            The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming
                        </p>
                    </div>

                    <h3 className="text-white text-[40px] font-bold mt-10">
                        Rs. 399/-
                    </h3>

                    {/* BUTTONS */}
                    <div className="flex items-center gap-6 mt-10">

                        {/* EXPLORE */}
                        <button
                            className="
            w-[155px]
            h-[60px]
            rounded-[18px]
            border
            border-white
            text-white
            text-[28px]
            hover:bg-black
            hover:text-white
            duration-300
          "
                        >
                            Explore
                        </button>

                        {/* BAG ICON */}
                        <button
                            className="
            w-[72px]
            h-[60px]
            rounded-[18px]
            border
            border-white
            flex
            items-center
            justify-center
                  hover:bg-black
            hover:text-white
          "
                        >
                            <img
                                src={bag}
                                alt="bag"
                                className="w-8"
                            />
                        </button>

                    </div>
                </div>


            </div>
        </section>

    );
};

export default TrendingCard;