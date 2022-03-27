import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="question-answer" id="q_a">
        <h1>
          How <span>React</span> Works?
        </h1>
        <p>
          <strong>Ans: </strong>React is a library that allows you to write
          JavaScript components. It uses a syntax similar to XML, and the markup
          of the components is a mix between HTML and XML.It uses a technology
          called the “Virtual DOM” to manage updates. Virtual DOM is just
          another way of saying a big object with all the components rendered on
          the page and their properties. Whenever one of them changes, React
          knows what to do.
        </p>
        <h1>
          Difference between <span>Props</span> and <span>State</span>
        </h1>
        <p>
          <strong>Ans: </strong>Props: 1. read only 2.immutable 3.Child
          Component has access 4.Data pass component to component and found as
          object. State: 1.Hold Information about components 2.Could be Change
          3.Muted 4.Child Component has not access.
        </p>
        <h1>
          How <span>UseState</span> Works?
        </h1>
        <p>
          <strong>Ans: </strong>Use state hook is a very common hook in react
          which is used to store and update any variable value on a component
          level. The reason why we would store the variable value inside the
          state is so that we can access those values without any sort of DOM
          manipulation which are not available in React JS.
        </p>
      </section>
    </div>
  );
};

export default Footer;
