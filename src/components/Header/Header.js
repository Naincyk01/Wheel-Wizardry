import React, {useState,useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  
  const [sidebarVisible, setSidebarVisible] = useState(false);
  

  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const handleNavClick = () => {
    setSidebarVisible(false);
  };
  
  return (
    <header>
      {/* header top */}
      <div className="bg-[#000d6b] text-[#fff] py-[10px] px-0 max-md:hidden">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="flex items-center gap-x-4">
                <span className="text-sm">Need Help?</span>
                <span className="flex items-center gap-x-2">
                  <i class="ri-phone-fill bg-[#fff] text-[#000d6b] rounded-[50px] text-sm py-[2px] px-[4px]"></i>
                  +1-202-555-0149
                </span>
              </div>
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="flex items-center justify-end gap-4">
                <Link
                  to="#"
                  className="flex items-center gap-1 no-underline text-[#fff] text-base hover:text-[#fff]"
                >
                  <i class="ri-login-circle-line"></i> Login
                </Link>

                <Link
                  to="#"
                  className="flex items-center gap-1 no-underline text-[#fff] text-base hover:text-[#fff]"
                >
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* header middle */}

      <div className="py-[20px] px-0 max-md:hidden">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="">
                <h1 className="leading-4">
                  <Link
                    to="/home"
                    className="flex items-center gap-2 no-underline text-[#000d6b] font-bold"
                  >
                    <i class="ri-car-line text-4xl"></i>
                    <span className="text-2xl">
                      Wheel Wizardry <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="flex items-center gap-2">
                <span>
                  <i class="ri-earth-line text-4xl text-[#000d6b]"></i>
                </span>
                <div className="">
                  <h4 className="text-xl font-bold text-[#000d6b]">India</h4>
                  <h6 className="font-semibold">Mumbai City, India</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="flex items-center gap-2">
                <span>
                  <i class="ri-time-line text-4xl text-[#000d6b]"></i>
                </span>
                <div>
                  <h4 className="text-xl font-bold text-[#000d6b]">
                    Sunday to Friday
                  </h4>
                  <h6 className="font-semibold">10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className="flex items-center justify-end">
              <button className="bg-[#000d6b] py-[7px] px-[15px] border-none outline-none rounded-md text-[#fff] transition ease-in-out delay-150 hover:scale-110 hover:duration-300 hover:text-[#fff] hover:bg-[#000c6bd0] ">
                <Link
                  to="/contact"
                  className="flex items-center gap-x-2 no-underline text-[#fff] justify-end text-base hover:text-[#fff]"
                >
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* nav */}
      <div className="py-[15px] px-0 bg-[#000d6b]">
        <Container>
          <div className="navigation__wrapper flex items-center justify-between">
            <span className="max-md:block hidden max-md:visible">
              <i
                class="ri-menu-line text-[#fff] text-xl cursor-pointer"
                onClick={handleToggleSidebar}
              ></i>
            </span>


          <div className={`max-md:w-full max-md:h-full max-md:fixed max-md:top-0 max-md:left-0 max-md:z-[9999] max-md:bg-[#000d6b] max-md:bg-opacity-60 ${ sidebarVisible ? "" : "hidden"}`}>
              <div className="max-md:w-[250px] max-md:h-full max-md:bg-[#fff] max-md:flex max-md:items-center max-md:flex-col max-md:gap-y-8 max-md:justify-center">
                {navLinks.map((item, index) => (
                  <Link
                  to={item.path}
                  // className={(navClass) =>
                  //   navClass.isActive ? "nav__active nav__item" : "nav__item"
                  // }
                  key={index}
                  className="no-underline max-md:transition-transform max-md:hover:scale-125 max-md:hover:duration-200 max-md:hover:text-[rgb(249,168,38)] max-md:text-[#000d6b] max-md:font-semibold max-md:text-sm md:hidden"
                  onClick={handleNavClick}
                  >
                    {item.display}
                  </Link>
                ))}
            </div>
            </div>
                 {/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
              <div className="flex items-center gap-x-11 max-md:hidden">
                {navLinks.map((item, index) => (
                  <Link
                  to={item.path}
                  key={index}
                  className="text-[#fff] no-underline transition-transform hover:scale-125 hover:duration-200 hover:text-[rgb(249,168,38)]">
                    {item.display}
                  </Link>
                ))}
              </div>
           
                {/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& */}

            <div className="max-md:hidden">
              <div className="border border-[#e0f8ea2f] py-[7px] px-[12px] flex items-center rounded-2xl bg-[#020a4de9]">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none outline-none text-[#fff] cursor-pointer placeholder:text-sm"
                />
                <span>
                  <i class="ri-search-line cursor-pointer text-[#ffffff8c]"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
