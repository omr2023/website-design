import React, { useContext} from "react";
import { SidebarContexit } from "../context/SidebarContexit";
import { IoMdArrowForward } from "react-icons/io";
import { CreateContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { TbTrash } from "react-icons/tb";

const Sidebar = () => {
  const { isOpen, handleClose} = useContext(SidebarContexit);
  const { cart , clearCart , total, itemQauntity } = useContext(CreateContext);
  
  
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full bg-white fixed top-0 shadow-2xl sm:w-[35vw] md:max-w[44vw] xl:max-w[27vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flexBetween py-6 border-b ">
        <div className=" uppercase text-sm font-semibold">Shooing Bag ({itemQauntity})</div>
        {/* icon */}
        <div onClick={handleClose} className=" cursor-pointer w-8 h-8 flexCenter">
          <IoMdArrowForward className=" text-2xl font-semibold"/>
        </div>
      </div>
      {/* Cart item */}
      <div className="flex flex-col gap-y-2 h-[300px] overflow-auto overflow-x-hidden border-b mt-[10px] mb-[30px]">
        {cart.map((item)=>{
          return <CartItem item={item} key={item.id}/>
        })}
      </div>
      <div className="flexBetween mb-2">
        {/* Total */}
        <div className="flexBetween mb-2">
          <span className=" uppercase bold-16">Total = </span>
          <span>${parseFloat(total).toFixed(2)}</span>
        </div>
        {/* clear icon */}
        <div onClick={clearCart} className="text-2xl">
          <TbTrash className=" cursor-pointer"/>
        </div>
      </div>
        <div className="flex flex-col gap-2">
          <button  className="btn-light">View Cart</button>
          <button className="btn-dark">Checkout</button>
        </div>
    </div>
  );
};

export default Sidebar;
