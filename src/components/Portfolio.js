import { forwardRef } from "react";
import GithubIcon from "../assets/GithubIcon";
import styles from "./Portfolio.module.css";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className={styles.heading}>Portfolio</div>
      <div className={styles.grid}>
        <div>
          <h3>
            <a href="http://neilsmovieapp.netlify.com">Movie App</a>
          </h3>
          <p>
            <a href="https://github.com/neilgebhard/movie-app-react">
              <GithubIcon height={20} /> Github
            </a>
          </p>
        </div>
        <div>
          <h3>
            <a href="https://learn-through-examples.netlify.app/">
              Code Examples
            </a>
          </h3>
          <a href="https://github.com/neilgebhard/learn-through-examples">
            <GithubIcon height={20} /> Github
          </a>
        </div>
        <div>
          <h3>
            <a href="https://neilscartapp.netlify.app/">Shopping Cart</a>
          </h3>
          <p>
            <a href="https://github.com/neilgebhard/cart-react">
              <GithubIcon height={20} /> Github
            </a>
          </p>
        </div>
        <div>
          <h3>
            <a href="https://neilsauthapp.netlify.app/">Auth App</a>
          </h3>
          <p>
            <a href="https://github.com/neilgebhard/auth-react">
              <GithubIcon height={20} /> Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
});

export default Portfolio;
