import "./../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} My Ecom Store. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
