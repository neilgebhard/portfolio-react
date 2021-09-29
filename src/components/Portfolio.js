import { forwardRef } from "react";
import ExternalLinkIcon from "../assets/ExternalLinkIcon";
import GithubIcon from "../assets/GithubIcon";
import styles from "./Portfolio.module.css";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h1 className="heading">Portfolio</h1>
      <div className={styles.grid}>
        <div>
          <h3>
            <a href="http://neilsmovieapp.netlify.com">
              <ExternalLinkIcon height={30} /> Movie App
            </a>
          </h3>
          <p>
            <a href="https://github.com/neilgebhard/movie-app-react">
              <GithubIcon height={20} /> Github
            </a>
          </p>
          <p className="text-secondary">
            An app that displays movies. The Movie Database API, React, React
            Router. CSS written from scratch and applied with CSS modules.
            Deployed on Netlify.
          </p>
        </div>
        <div>
          <h3>
            <a href="https://neilscartapp.netlify.app/">
              <ExternalLinkIcon height={30} /> Shopping Cart
            </a>
          </h3>
          <p>
            <a href="https://github.com/neilgebhard/cart-react">
              <GithubIcon height={20} /> Github
            </a>
          </p>
          <p className="text-secondary">
            A simple shopping cart app. The Fake Store API, React, Redux
            Toolkit, and Material UI. Deployed on Netlify.
          </p>
        </div>
        <div>
          <h3>
            <a href="https://neilsauthapp.netlify.app/">
              <ExternalLinkIcon height={30} /> Auth App
            </a>
          </h3>
          <p>
            <a href="https://github.com/neilgebhard/auth-react">
              <GithubIcon height={20} /> Github
            </a>
          </p>
          <p className="text-secondary">
            A simple Auth app with login, signup, and change password. Firebase
            Authentication, React, React Router, Contexts, Reactstrap. Deployed
            on Netlify.
          </p>
        </div>
        <div>
          <h3>
            <a href="https://main.dwuhwwtuh84l8.amplifyapp.com/">
              <ExternalLinkIcon height={30} /> Todo App
            </a>
          </h3>
          <p>
            <a href="https://github.com/neilgebhard/todo-app-react">
              <GithubIcon height={20} /> Github
            </a>
          </p>
          <p className="text-secondary">
            A todo app with AWS Amplify for authentication, storage, and
            deployment. React, GraphQL, Framer Motion. CSS written from scratch
            and applied with CSS modules.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Portfolio;
