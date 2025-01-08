const Header = () => {
  return (
    <main>
      {/* Header Section */}
      <header className="bg-pink-200 py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-800">
          CONTACT DETAILS
        </h1>
        <nav className="mt-4 text-sm text-gray-600">
          <a href="/" className="hover:underline">
            HOME
          </a>{" "}
          &gt;{" "}
          <a href="/contact" className="hover:underline">
            CONTACT US
          </a>{" "}
          &gt; <span className="text-gray-500">CONTACT DETAILS</span>
        </nav>
      </header>
    </main>
  );
};

export default Header;
