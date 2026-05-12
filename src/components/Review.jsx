import review1 from "../assets/review 1.png";
import review2 from "../assets/review 2.png";
import review3 from "../assets/review 3.png";
import plant1 from "../assets/heroPlant.png.png";
    






 const Review = () => {
    return (
        <>

{/* <section className="absolute w-full h-full  top-[2900px]"> */}
<section
  className="
    relative
    w-full
    min-h-screen
    top-[130px]
    overflow-hidden
    py-20
  "
  style={{
    background: `
      radial-gradient(circle at top left, rgba(42,77,42,0.45), transparent 35%),
      radial-gradient(circle at bottom right, rgba(34,90,34,0.35), transparent 35%),
      linear-gradient(
        135deg,
        #081208 0%,
        #102010 35%,
        #152815 60%,
        #0a120a 100%
      )
    `,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
  }}
>


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




















<div className="relative w-full h-[500px]   top-[150px] flex items-center justify-evenly">
<div
  className="
  
  w-[400px]
  h-[480px]
  
  rounded-[55px]
  flex
  flex-col
  
  items-center
  justify-center
  pt-24
  px-10
  overflow-hidden
  "
  style={{
      background:
     "linear-gradient(135deg, rgba(23,35,18,0.75), rgba(8,12,8,0.55))",
      border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
}}
>

<div className=" w-full h-[300px] flex flex-col gap-17">

{/* TOP SECTION */}
<div className="flex items-start w-full gap-5 ">

  {/* IMAGE */}
  <div
    className="
    w-[95px]
    h-[95px]
    rounded-full
    border-4
    border-black/20
    bg-center
    bg-no-repeat
    shrink-0
    "
    style={{
        backgroundImage: `url(${review1})`,
        backgroundSize: "300%",
        backgroundPosition: "50% 1.5%",
    }}
    />

  {/* RIGHT SIDE */}
  <div className="ml-6 mt-1">

    {/* NAME */}
    <h2 className="text-white text-[42px] font-semibold leading-none">
      Shelly Russel
    </h2>

    {/* STARS */}
    <div className="flex gap-1 mt-3 text-[#FFE600] text-[22px]">
      ★ ★ ★ ★ ★
    </div>

  </div>
</div>

  {/* REVIEW */}
  <p
    className="
    text-white/75
    text-[18px]
    
    leading-[25px]
    text-center
    
    "
    >
    Just got my hands on some absolutely awesome plants,
    and I couldn't be happier!
  </p>
  </div>
</div>






{/* 2 review */}

<div
  className="
  
  w-[400px]
  h-[480px]
  
  rounded-[55px]
  flex
  flex-col
  
  items-center
  justify-center
  pt-24
  px-10
  overflow-hidden
  "
  style={{
      background:
 "linear-gradient(135deg, rgba(23,35,18,0.75), rgba(8,12,8,0.55))",
      border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
}}
>

<div className=" w-full h-[300px] flex flex-col gap-17">

{/* TOP SECTION */}
<div className="flex items-start w-full gap-7 ">

  {/* IMAGE */}
  <div
    className="
    w-[95px]
    h-[95px]
    rounded-full
    border-4
    border-black/20
    bg-center
    bg-no-repeat
    shrink-0
    "
    style={{
        backgroundImage: `url(${review2})`,
        backgroundSize: "300%",
        backgroundPosition: "50% 1.5%",
    }}
    />

  {/* RIGHT SIDE */}
  <div className="ml-6 mt-1">

    {/* NAME */}
    <h2 className="text-white text-[42px] font-semibold leading-none">
      Lula Rolfson
    </h2>

    {/* STARS */}
    <div className="flex gap-1 mt-3 text-[#FFE600] text-[22px]">
      ★ ★ ★ ★ ★
    </div>

  </div>
</div>

  {/* REVIEW */}
  <p
    className="
    text-white/75
    text-[18px]
    
    leading-[25px]
    text-center
    
    "
    >
  Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.
  </p>
  </div>
</div>




{/* 3 review */}



<div
  className="
  
  w-[400px]
  h-[480px]
  
  rounded-[55px]
  flex
  flex-col
  
  items-center
  justify-center
  pt-24
  px-10
  overflow-hidden
  "
  style={{
      background:
 "linear-gradient(135deg, rgba(23,35,18,0.75), rgba(8,12,8,0.55))",
      border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
}}
>

<div className=" w-full h-[300px] flex flex-col gap-17">

{/* TOP SECTION */}
<div className="flex items-start w-full gap-7 ">

  {/* IMAGE */}
  <div
    className="
    w-[95px]
    h-[95px]
    rounded-full
    border-4
    border-black/20
    bg-center
    bg-no-repeat
    shrink-0
    "
    style={{
        backgroundImage: `url(${review3})`,
        backgroundSize: "300%",
        backgroundPosition: "50% 1.5%",
    }}
    />

  {/* RIGHT SIDE */}
  <div className="ml-6 mt-1">

    {/* NAME */}
    <h2 className="text-white text-[42px] font-semibold leading-none">
      Carol Huels
    </h2>

    {/* STARS */}
    <div className="flex gap-1 mt-3 text-[#FFE600] text-[22px]">
      ★ ★ ★ ★ ★
    </div>

  </div>
</div>

  {/* REVIEW */}
  <p
    className="
    text-white/75
    text-[18px]
    
    leading-[25px]
    text-center
    
    "
    >
It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!
  </p>
  </div>
</div>






</div>






      </section>
</>
    );
};

export default Review;