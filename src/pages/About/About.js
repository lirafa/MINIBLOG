import styles from "./About.module.css";
import {Link} from "react-router-dom";
import UserGreeting from "../../components/userGreeting.js"; 

const About = () => {
  return (
      <div className={styles.about}>
      <h2>
        Sobre o Mimi <span>Blog</span>{" "}
      </h2>
      <p className="p_form">
        Este projeto consiste em um blog feito com React no front-end e Firebase
        no back-end.
      </p>
      <Link to="/posts/create" className={styles.btn}>
        Criar post
      </Link>
    </div>
     
  );
};

export default About;
