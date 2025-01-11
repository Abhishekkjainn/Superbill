import { useState } from 'react';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header">
        <div className="company">
          <div className="companylogo">
            <img src="./superbill.png" alt="Logo" className="companylogoimg" />
          </div>
          <div className="companyname">Superbill</div>
        </div>
        <div className="links">
          <div className="link">Home</div>
          <div className="link">About Us</div>
          <div className="link">Features</div>
          <div className="link">FAQ's</div>
          <div className="link">Contact</div>
        </div>
        <div className="buttons">
          <div className="primarybutton">
            <div className="buttontag">Register As Vendor</div>
            <img
              src="/arrow-white.png"
              alt="Arrow"
              className="primaryarrowicon"
            />
          </div>
        </div>
        <div className="menuicon">
          <img
            src="./menu.png"
            alt="Menu Icon"
            className="menuiconimage"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && <div className="menudivoverlay" onClick={toggleMenu}></div>}

      <div className={menuOpen ? 'menudiv' : 'menudivhidden'}>
        <div className="closebutton" onClick={toggleMenu}>
          ×
        </div>
        <div className="menucontent">
          <div className="link">Home</div>
          <div className="link">About Us</div>
          <div className="link">Features</div>
          <div className="link">FAQ's</div>
          <div className="link">Contact</div>
        </div>
      </div>
    </>
  );
}
