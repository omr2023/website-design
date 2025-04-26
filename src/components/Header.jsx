import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { MdClose, MdMenu } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { SidebarContexit } from "../context/SidebarContexit";
import {CreateContext} from '../context/CartContext'
const Header = () => {
  const [menuOpened, setMeunOpened] = useState(false);

  const [isactive, setActive] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const navigete = useNavigate()

  const toggleMenu = () =>{
    setMeunOpened(!menuOpened)
  }

  useEffect(()=>{
    window.addEventListener("scroll" , ()=>{
      window.scrollY > 40 ? setActive(true) : setActive(false)
    })
  })

  const {isOpen , setIsOpen } = useContext(SidebarContexit);

  const {itemQauntity} = useContext(CreateContext)


  return (
    <header className={`${isactive ? "bg-white shadow-sm py-3" : "bg-transparent py-4"} fixed left-0 w-full z-10 transition-all duration-300 max-padd-container flexBetween`}>
      {/* logo */}
      <Link className="bold-24" to={"/"}>
        <h4 className="">
          Glam<span className="text-secondary">Store</span>
        </h4>
      </Link>
      <div className="flexBetween gap-x-20">
        {/* navbar desktop*/}
        <Navbar containerStyles={"hidden md:flex gap-x-5 xl:10 medium-15"} />
        {/* Navbar Mobile */}
        <Navbar
          containerStyles={
            `${menuOpened ? "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : "flex items-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 right-[100%]"}`}/>
      </div>
      {/* button s*/}
            <div className="flexBetween gap-x-3 sm:gap-x-8">
            {!menuOpened ? (
                <MdMenu onClick={toggleMenu} className="md:hidden cursor-pointer hover:text-secondary text-2x1"/>
        ) : (
          <MdClose onClick={toggleMenu} className="md:hidden cursor-pointer hover:text-secondary text-2x1"/>
        )}
            
        <div onClick={()=>setIsOpen(!isOpen)} className="flex relative cursor-pointer">
          <GiShoppingBag 
          className="text-[25px]"/>
          <span className="bg-secondary text-white texy-sm absolute -top-2.5 -right-2.5 flexCenter w-5 h-5 rounded-full shadow-md">{itemQauntity}</span>
        </div>
        <button className="btn-outline rounded-full">Login</button>
        </div>
    </header>
  );
};

export default Header;
