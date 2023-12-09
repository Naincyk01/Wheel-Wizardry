import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";

import commentImg from "../assets/all_images/ava_1.jpg";


const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="border-2 w-[600px]" />
                <h2 className="text-[#000d6b] font-semibold text-3xl mt-4">{blog.title}</h2>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#000d6b] font-semibold">
                    <i class="ri-user-line text-[#f9a826] font-medium"></i> {blog.author}
                  </span>

                  <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                    <i class="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className="flex items-center gap-1 text-[#7c8a97] text-base leading-8">
                    <i class="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="text-[#7c8a97] text-base leading-8">{blog.description}</p>
                <h6 className="border-5 font-normal ps-4">
                  <blockquote className="leading-9 text-lg">{blog.quote}</blockquote>
                </h6>
                <p className="text-[#7c8a97] text-base leading-8">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="flex gap-3">
                  <img src={commentImg} alt="" className="w-[70px] h-[70px] rounded-[50%] border border-[#000d6b] object-cover" />
                  <div className="comment__content">
                    <h6 className="font-bold">David Visa</h6>
                    <p className="text-[#7c8a97] text-base leading-8 mb-0">14 July, 2022</p>
                    <p className="text-[#7c8a97] text-base leading-8">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos nobis totam eius laborum molestias itaque minima
                      distinctio, quae velit tempore!
                    </p>

                    <span className="text-[#000d6b] font-semibold cursor-pointer flex items-center gap-1">
                      <i class="ri-reply-line text-[#f9a826]"></i> Replay
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>
                  <p className="text-[#7c8a97] text-base leading-8">
                    You must sign-in to make or comment a post
                  </p>

                  <Form>
                    <FormGroup className="flex gap-3">
                      <Input type="text" placeholder="Full name" className="border border-[#000c6b]" />
                      <Input type="email" placeholder="Email" className="border border-[#000c6b]" />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3 focus:outline-none border border-[#000c6b]"
                        placeholder="Comment..."
                      ></textarea>
                    </FormGroup>

                    <button className="bg-[#000d6b] py-[7px] px-[15px] border-none outline-none rounded-md text-[#fff] transition ease-in-out delay-150 hover:scale-110 hover:duration-300 hover:text-[#fff] hover:bg-[#000c6bd0] mt-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4 mt-8">
                <h5 className=" font-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`} className="no-underline font-semibold text-[#000d6b]">{blog.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;