import React, { useState } from 'react';
import { IoReorderThreeSharp, IoClose } from "react-icons/io5";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        <div className="icon">
          {isOpen ? <IoClose /> : <IoReorderThreeSharp />}
        </div>
        {isOpen && (
          <div className="toggle-label">Menu</div>
        )}
      </button>
      {isOpen && (
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;
