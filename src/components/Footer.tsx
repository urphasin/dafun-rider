// src/components/Footer.tsx
import {
  
} from 'lucide-react';
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-backgroundDark text-center p-4 mt-auto">
      <div className="mt-2 flex justify-center gap-4 text-xs">
        <a className="hover:underline text-gray-400 dark:text-gray-500" href="/terms">Terms</a>
        <a className="hover:underline text-gray-400 dark:text-gray-500" href="/privacy">Privacy</a>
      </div>
      
      <p className="text-sm text-gray-500 dark:text-gray-500">
        &copy; 2025 <span className="font-medium text-brandBlue dark:text-brandOrange">Dafun</span> by OrbitRide
      </p>

      <SocialIcons />
    </footer>
  );
}

export default Footer;