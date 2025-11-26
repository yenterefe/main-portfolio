import { Link as RouterLink } from "react-router";
import { Link as ScrollLink } from "react-scroll";
import GitHub from "../assets/GitHub.png";
import LinkedIn from "../assets/LinkedIn.png";

interface ListInterface {
  divClassName: string;
  className: string;
}

const ListComponentSmall = (props: ListInterface) => {
  return (
    <ul className={props.divClassName}>
      <li className={props.className}>
        <RouterLink to="/Home">Home</RouterLink>
      </li>
      <li className={props.className}>
        <RouterLink to="/Portfolio">Portfolio</RouterLink>
      </li>
      <li className={props.className}>
        <RouterLink to="/Blog">Blog </RouterLink>
      </li>
      <li className={props.className}>
        <ScrollLink to="contact" smooth={true} duration={500}>
          Contact
        </ScrollLink>
      </li>
      <li className={props.className}>
        <img className="h-5 px-1" src={LinkedIn} alt="LinkedIn logo" />
      </li>
      <li className={props.className}>
        <img className="h-6" src={GitHub} alt="GitHub logo" />
      </li>
    </ul>
  );
};

export default ListComponentSmall;
