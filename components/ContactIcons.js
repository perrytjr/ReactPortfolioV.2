import data from '../data/contact'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactIcons = ({ children }) => {
    return (
        <>
              <ul className="icons">
      {data.map((s) => (
        <li key={s.label}>
          <a href={s.link}>
            <FontAwesomeIcon icon={s.icon} />
          </a>
        </li>
      ))}
    </ul>
       
        </>
    )
}

export default ContactIcons

