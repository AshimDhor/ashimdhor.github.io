const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400">
          {currentYear} Ashim Dhor | Designed with curiosity, built with code.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
