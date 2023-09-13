import React from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const BlogList = () => {
  return (
    <>
      {blogData.map((item) => (
        <BlogItem item={item} key={item.id} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="border border-[#7c8a972e]">
        <img src={imgUrl} alt="" className="w-100 h-64" />
        <div className="blog__info p-3">
          <Link to={`/blogs/${title}`} className="no-underline text-[#000d6b] text-xl font-semibold hover:text-[#f9a826] transition-transform hover:scale-125 hover:duration-200">
            {title}
          </Link>
          <p className="text-[#7c8a97] text-base leading-8 mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="text-[#f9a826] font-semibold no-underline text-base hover:text-[#f9a826]">
            Read More
          </Link>

          <div className="pt-3 mt-3 flex items-center justify-between border-t border-t-[#7c8a972e]">
            <span className="text-[#000d6b] font-semibold">
              <i class="ri-user-line text-[#f9a826] font-medium"></i> {author}
            </span>

            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                <i class="ri-calendar-line"></i> {date}
              </span>

              <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                <i class="ri-time-line"></i> {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;