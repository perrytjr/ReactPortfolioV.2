import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faFile } from '@fortawesome/free-solid-svg-icons';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/perrytjr',
    label: 'Github',
    icon: faGithub,
  },
  
  {
    link: 'https://www.linkedin.com/in/perry-theobald',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://docs.google.com/document/d/1wxamqZSnOwPxJlC-gVm_YhAyGvRkLoF1jeVkgrQ5-XY/edit?usp=sharing',
    label: 'Resume',
    icon: faFile,
  },

  {
    link: 'perrytjr@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;