import React, { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const SidebarContexit = createContext();

const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <SidebarContexit.Provider value={{ isOpen , setIsOpen , handleClose }}>
      {children}
    </SidebarContexit.Provider>
  
};

export default SidebarProvider;
