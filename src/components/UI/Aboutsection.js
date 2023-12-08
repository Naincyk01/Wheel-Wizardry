import React from "react";
import aboutImg from "../../assets/all_images/cars_img/bmw_offer.png";

const AboutSection = () => {
  return (
    <section
      className="about__section"
    >
     <div className="flex w-full h-full justify-center max-md:flex max-md:flex-col max-md:items-center">
        
            <div className="h-[450px] w-[700px] flex flex-col items-center max-md:h-full max-md:w-full">
              <h4 className="text-[#f9a826] font-semibold text-xl">About Us</h4>
              <h2 className="text-[#000d6b] font-semibold text-3xl max-lg:text-2xl">Welcome to car rent service</h2>
              <p className="text-[#7c8a97] text-base leading-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum blanditiis esse accusantium dignissimos labore
                laborum. Veniam, corporis mollitia temporibus, in quaerat vero
                deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
                neque sit ad temporibus quam similique dolor ipsam praesentium
                sunt.
              </p>
              
              <div className="flex items-center gap-x-12 max-lg:gap-x-3">
                <p className="text-[#7c8a97] text-base leading-8 flex items-center gap-2 max-lg:text-sm">
                  <i class="ri-checkbox-circle-line text-[#f9a826] text-lg "></i> Lorem ipsum dolor sit
                  amet.
                </p>
                <p className="text-[#7c8a97] text-base leading-8 flex items-center gap-2 max-lg:text-sm ">
                  <i class="ri-checkbox-circle-line text-[#f9a826] text-lg "></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="gap-x-12 flex items-center max-lg:gap-x-3">
                <p className="text-[#7c8a97] text-base leading-8 flex items-center gap-2 max-lg:text-sm">
                  <i class="ri-checkbox-circle-line text-[#f9a826] text-lg "></i> Lorem ipsum dolor sit
                  amet.
                </p>
                <p className="text-[#7c8a97] text-base leading-8 flex items-center gap-2 max-lg:text-sm">
                  <i class="ri-checkbox-circle-line text-[#f9a826] text-lg "></i> Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

            </div>

            <div className="about__img w-[400px] h-[300px] flex justify-center mt-10 ml-10 max-md:w-[600px] max-md:ml-0 border-2 border-black max-sm:w-[400px]">
              <img src={aboutImg} alt="" className="w-[400px] h-[300px] max-md:w-[500px] max-sm:w-[400px]" />
            </div>
          
       </div>
    </section>
  );
};

export default AboutSection;