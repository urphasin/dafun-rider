const Header = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <div className="text-[#1F2937] text-xl font-bold">Dafun Riders</div>
      <nav className="flex gap-4">
        <a className="text-brandPrimaryTextLight hover:text-brandOrange" href="/">Home</a>
        <a className="text-brandPrimaryTextLight hover:text-brandBlue" href="/find">Find a Ride</a>
        <a className="text-brandPrimaryTextLight hover:text-brandBlue" href="/offer">Offer a Ride</a>
      </nav>
    </header>
  );
}

export default Header;
