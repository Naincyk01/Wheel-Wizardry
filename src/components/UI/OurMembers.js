import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all_images/ava_1.jpg";
import ava02 from "../../assets/all_images/ava_2.jpg";
import ava03 from "../../assets/all_images/ava_3.jpg";
import ava04 from "../../assets/all_images/ava_4.jpg";

const OUR__MEMBERS = [
  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "David Lisa",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Hilton King",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Jhon Doe",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava04,
  },
];

const OurMembers = () => {
  // const style = 'bg-red-300 border-4'

  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="border border-[#7c8a972d] rounded-md">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-full rounded" />

              <div className="single__member-social">
                {/* <Link to={item.fbUrl} className={`no-underline cursor-pointer hover:${style}`}> */}
                <Link to={item.fbUrl} className="no-underline cursor-pointer">
                  <i class="ri-facebook-line w-7 h-7 text-[#000d6b] flex items-center justify-center bg-[#fff] rounded-full text-sm font-semibold"></i>
                </Link>
                <Link to={item.twitUrl} className="no-underline cursor-pointer">
                  <i class="ri-twitter-line  w-7 h-7 text-[#000d6b] flex items-center justify-center bg-[#fff] rounded-full text-sm font-semibold"></i>
                </Link>

                <Link
                  to={item.linkedinUrl}
                  className="no-underline cursor-pointer"
                >
                  <i class="ri-linkedin-line  w-7 h-7 text-[#000d6b] flex items-center justify-center bg-[#fff] rounded-full text-sm font-semibold"></i>
                </Link>

                <Link to={item.instUrl} className="no-underline cursor-pointer">
                  <i class="ri-instagram-line  w-7 h-7 text-[#000d6b] flex items-center justify-center bg-[#fff] rounded-full text-sm font-semibold"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3 text-[#7c8a97]">
              {item.name}
            </h6>
            <p className="text-[#7c8a97] text-base leading-8 text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
