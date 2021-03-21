import data from '../data/contact'
import './contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const ContactIcons = ({ children }) => {
    return (
        <>

            <ul  className=' flex flex-row mt-3 m-3 w-4 '>
                {data.map((s) => (
                    <li className='mr-5 opacity-70' key={s.label}>
                        <a  href={s.link}>
                            <FontAwesomeIcon icon={s.icon} className='' />
                        </a>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default ContactIcons

