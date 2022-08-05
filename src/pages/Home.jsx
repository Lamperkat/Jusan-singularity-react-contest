import React from 'react';
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Posts } from '../posts/posts';
const Home = () => {
  return (
    <>
      <section className="heading">
        <h1>Ask a Question</h1>
        <p>Choose an option</p>
      </section>
      <Link to="/new-question" className="btn btn-reverse btn-block">
        <FaQuestionCircle />
        Create new Question
      </Link>
      <Link to="/questions" className="btn  btn-block">
        <FaTicketAlt /> View Questions
      </Link>
      <Posts/>
    </>
  );
};

export default Home;
