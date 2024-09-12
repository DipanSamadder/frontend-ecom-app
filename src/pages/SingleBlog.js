import React from "react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import Bradecrumb from "../components/Bradecrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";

const SingleBlog = () => {
  return (
    <>
      {" "}
      <Meta title="Single title" />
      <Bradecrumb title="Single" />{" "}
      <Container className="home-wrapper-2 blog-single py-5">
        <div className="row">
          <div className="col-md-12">
            <Link to="/blog">
              <MdArrowBack /> Back to blog
            </Link>
          </div>
          <div className="col-md-12">
            <h3 className="mb-0">
              How to Write a Blog Post Your Readers Will Love in 5 Steps
            </h3>
            <div className="text-body-tertiary mb-2">
              <small>July 20, 2024 | Seenu Rawat</small>
            </div>
            <img src="images/blog-1.jpg" className="img-fluid" alt="" />
            <p>
              Why the world would end without travel coupons. The 16 worst songs
              about spa deals. How daily me person. The 11 worst business
              software in history. Why latest electronic gadgets will make you
              question everything. The evolution of cool science experiments. 16
              facts about cool tech gadgets that'll keep you up at night. How
              carnival cruises can help you live a better life. Why you
              shouldn't eat cheap cruise in bed. 8 things about dog friendly
              hotels your kids don't want you to know. Smart people learn from
              everything Average people from their experiences Stupid people
              already have all the answers What You Need to Know about the
              Facebook Product Design Interview and What to do about it. Pug
              twee fam pour-over seitan single-origin coffee crucifix blue
              bottle aesthetic flexitarian. Four loko kale chips authentic, hell
              of green juice bespoke deep v next level migas. Woke bushwick
              prism live-edge austin tote bag.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
