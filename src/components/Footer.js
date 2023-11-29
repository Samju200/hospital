import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      {" "}
      Copyright &copy; SAMJU HOSPITAL <span>{year}</span>{" "}
    </footer>
  );
}

export default Footer;
