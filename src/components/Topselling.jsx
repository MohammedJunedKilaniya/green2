
 import plant1 from "../assets/image 1.png";
 import plant2 from "../assets/image 2.png";
 import plant3 from "../assets/image 4.png";
 import plant4 from "../assets/image 5.png";
 import plant5 from "../assets/image 6.png";
 import plant6 from "../assets/image 7.png";
import bag from "../assets/bag.png";


 const Topselling = () => {
    return (
        <>
        
 
            <div className="  flex justify-center   "
            
            >

                <div className="relative inline-block top-[50px] ">

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

<div className="w-full h-full  flex justify-evenly ">           
<div
  className="
    relative
    w-[430px]
    h-[540px]
    left-[20px]
    top-[100px]
    rounded-[60px]
    overflow-hidden
    border
    border-white/20
    flex
    flex-col
    items-center
    pt-10
    px-10
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

  {/* PLANT IMAGE */}
  <img
    src={plant1}
    alt="plant"
    className="
      w-[340px]
      object-contain
      drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
      
    "
  />

  {/* CONTENT */}
  <div className="w-full mt-4">

    {/* TITLE */}
    <h2 className="text-white text-[40px] font-light leading-none">
      Aglaonema plant
    </h2>

    {/* DESCRIPTION */}
    <p className="text-white/75 text-[16px] leading-[30px] mt-5">
      The Aglaonema plant, commonly known as Chinese Evergreen known
      for its attractive foliage and ease of care
    </p>

    {/* PRICE + BAG */}
    <div className="flex items-center justify-between mt-10">

      <h3 className="text-white text-[40px] font-light">
        Rs. 300/-
      </h3>

                        <button
            
            className="
            absolute
            left-[190px]
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



<div
  className="
    relative
    w-[430px]
    h-[540px]
    left-[20px]
    top-[100px]
    rounded-[60px]
    overflow-hidden
    border
    border-white/20
    flex
    flex-col
    items-center
    pt-10
    px-10
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

  {/* PLANT IMAGE */}
  <img
    src={plant2}
    alt="plant"
    className="
      w-[340px]
      object-contain
      drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
      
    "
  />

  {/* CONTENT */}
  <div className="absolute w-full top-[330px]">

    {/* TITLE */}
    <h2 className="text-white text-[40px] font-light leading-none">
      Plantain Lilies
    </h2>

    {/* DESCRIPTION */}
    <p className="text-white/75 text-[16px] leading-[30px] mt-5">
Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,
    </p>

    {/* PRICE + BAG */}
    <div className="flex items-center justify-between mt-10">

      <h3 className="text-white text-[40px] font-light">
        Rs. 380/-
      </h3>

                        <button
            
            className="
            absolute
            left-[190px]
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



<div
  className="
    relative
    w-[430px]
    h-[540px]
    left-[20px]
    top-[100px]
    rounded-[60px]
    overflow-hidden
    border
    border-white/20
    flex
    flex-col
    items-center
    pt-10
    px-10
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

  {/* PLANT IMAGE */}
  <img
    src={plant3}
    alt="plant"
    className="
      w-[340px]
      object-contain
      drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
      
    "
  />

  {/* CONTENT */}
  <div className="w-full mt-4">

    {/* TITLE */}
    <h2 className="text-white text-[40px] font-light leading-none">
      Cactus
    </h2>

    {/* DESCRIPTION */}
    <p className="text-white/75 text-[16px] leading-[30px] mt-5">
It is known for their ability to thrive in arid environments
    </p>

    {/* PRICE + BAG */}
    <div className="flex items-center justify-between mt-10">

      <h3 className="text-white text-[40px] font-light">
        Rs. 259/-
      </h3>

                        <button
            
            className="
            absolute
            left-[190px]
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
</div>



<div className="w-full h-full flex justify-evenly ">           
<div
  className="
    relative
    w-[430px]
    h-[540px]
    left-[20px]
    top-[100px]
    rounded-[60px]
    overflow-hidden
    border
    border-white/20
    flex
    flex-col
    items-center
    pt-10
    px-10
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

  {/* PLANT IMAGE */}
  <img
    src={plant4}
    alt="plant"
    className="
      w-[340px]
      object-contain
      drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
      
    "
  />

  {/* CONTENT */}
  <div className="w-full mt-4">

    {/* TITLE */}
    <h2 className="text-white text-[40px] font-light leading-none">
     Swiss cheese Plant
    </h2>

    {/* DESCRIPTION */}
    <p className="text-white/75 text-[16px] leading-[30px] mt-5">
It is a popular tropical houseplant known for its distinctive, perforated leaves
    </p>

    {/* PRICE + BAG */}
    <div className="flex items-center justify-between mt-10">

      <h3 className="text-white text-[40px] font-light">
        Rs. 400/-
      </h3>

                        <button
            
            className="
            absolute
            left-[190px]
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



<div
  className="
    relative
    w-[430px]
    h-[540px]
    left-[20px]
    top-[100px]
    rounded-[60px]
    overflow-hidden
    border
    border-white/20
    flex
    flex-col
    items-center
    pt-10
    px-10
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

  {/* PLANT IMAGE */}
  <img
    src={plant5}
    alt="plant"
    className="
      w-[340px]
      object-contain
      drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
      
    "
  />

  {/* CONTENT */}
  <div className="w-full mt-4">

    {/* TITLE */}
    <h2 className="text-white text-[40px] font-light leading-none">
    Sansevieria plant
    </h2>

    {/* DESCRIPTION */}
    <p className="text-white/75 text-[16px] leading-[30px] mt-5">
It is a popular indoor plant admired for its striking appearance and low-maintenance nature
    </p>

    {/* PRICE + BAG */}
    <div className="flex items-center justify-between mt-10">

      <h3 className="text-white text-[40px] font-light">
        Rs. 450/-
      </h3>

                        <button
            
            className="
            absolute
            left-[190px]
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



<div
  className="
    relative
    w-[430px]
    h-[540px]
    left-[20px]
    top-[100px]
    rounded-[60px]
    overflow-hidden
    border
    border-white/20
    flex
    flex-col
    items-center
    pt-10
    px-10
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

  {/* PLANT IMAGE */}
  <img
    src={plant6}
    alt="plant"
    className="
      w-[340px]
      object-contain
      drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]
      
    "
  />

  {/* CONTENT */}
  <div className="w-full mt-4">

    {/* TITLE */}
    <h2 className="text-white text-[40px] font-light leading-none">
      Agave plant
    </h2>

    {/* DESCRIPTION */}
    <p className="text-white/75 text-[16px] leading-[30px] mt-5">
The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.
    </p>

    {/* PRICE + BAG */}
    <div className="flex items-center justify-between mt-10">

      <h3 className="text-white text-[40px] font-light">
        Rs. 359/-
      </h3>

                        <button
            
            className="
            absolute
            left-[190px]
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

</div>

</>
    );
};

export default Topselling;