import useDarkMode from "../hooks/useDarkMode";
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <header className="bg-white dark:bg-backgroundDark shadow-md px-4 py-3 flex justify-between items-center">
      <div className="text-brandPrimaryTextLight dark:text-brandPrimaryTextDark text-xl font-bold">Dafun Riders</div>

      <nav className="flex gap-4">
        <a className="text-brandPrimaryTextLight dark:text-brandPrimaryTextDark hover:text-brandOrange dark:hover:text-brandOrange" href="/">Home</a>
        <a className="text-brandPrimaryTextLight dark:text-brandPrimaryTextDark hover:text-brandBlue dark:hover:text-brandBlue" href="/find">Find a Ride</a>
        <a className="text-brandPrimaryTextLight dark:text-brandPrimaryTextDark hover:text-brandBlue dark:hover:text-brandBlue" href="/offer">Offer a Ride</a>

        {/* Toggle Button */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-blue-500" />} 
        </button>
        
      </nav>
    </header>
  );
}

export default Header;
