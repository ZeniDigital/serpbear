import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useFetchChangelog } from '../../services/misc';
import ChangeLog from '../settings/Changelog';

interface FooterProps {
   currentVersion: string
}

const Footer = ({ currentVersion = '' }: FooterProps) => {
   const [showChangelog, setShowChangelog] = useState(false);
   const { data: changeLogs } = useFetchChangelog();
   const latestVersionNum = changeLogs && Array.isArray(changeLogs) && changeLogs[0] ? changeLogs[0].name : '';

   return (
      <footer className='text-center flex flex-1 justify-center pb-5 items-end'>
         
      </footer>
   );
};

export default Footer;
