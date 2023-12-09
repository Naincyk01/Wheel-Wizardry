import React from "react";
import aboutImg from "../../assets/all_images/cars_img/bmw_offer.png";

const AboutSection = () => {
  return (
    <section
      className="about__section"
    >
     <div className="flex w-full h-full justify-center items-center max-md:flex max-md:flex-col">
        
            <div className="h-full w-full flex flex-col items-center">
              <h4 className="text-[#f9a826] font-semibold text-xl">About Us</h4>
              <h2 className="text-[#000d6b] font-semibold text-3xl max-lg:text-2xl">Welcome to car rent service</h2>
              <p className="text-[#7c8a97] text-base leading-8 ml-2">
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

            <div className="about__img w-full h-full flex justify-center mt-10">
              <img src={aboutImg} alt="" className="" />
            </div>
          
       </div>
    </section>
  );
};

export default AboutSection;