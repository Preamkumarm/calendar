import { RiShoppingBasketFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import {Link} from 'react-router-dom'
import HomeContainer from './HomeContainer';
import Calendar from './Calendar';
import MainContainer from './MainContainer';


function Header()
{

    
    return(<div className='relative'>
        <header className="  z-50 w-screen p-3 px-10  md:px-16 lg:px-20 shadow-lg bg-[#EDE6F5]"
      style={{ boxShadow: '0 2px 6px 0 grey' }}>

<div className="hidden md:flex w-full h-full items-center justify-between px-4 md:px-0 max-w-6xl mx-auto">
        
          <img src={Logo} alt="logo" className="w-14 object-cover" />
          <p className="text-mainColor text-lg font-bold mr-auto ml-3 " >Lunch Mate</p>
        

        <div className="flex items-center gap-6">
            <h4 className='cursor-pointer hover:text-[#6d34ad] text-[#4B4453] font-semibold'>Home</h4>

            <h5 className='cursor-pointer hover:text-[#6d34ad] text-[#4B4453] font-semibold'>About us</h5>

            <h5 className='cursor-pointer hover:text-[#6d34ad] text-[#4B4453] font-semibold'>Menu</h5>

            <div>
            <RiShoppingBasketFill className="text-mainColor text-2xl cursor-pointer" />
            </div>

            <div className="relative">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={Avatar}
              alt="avatar"
              className="w-10 min-w-[40px] h-10  min-h-[40px] rounded-full drop-shadow-md cursor-pointer"
            />

           
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-violet-50 shadow-xl rounded-lg flex-column  absolute  top-12 right-0"
              >
              </motion.div>
            
          </div>
        </div>


        </div>
        </header>
        
        <div className='bg-white'>
        <Calendar/>
        <HomeContainer/>
        <MainContainer/>
        </div>
    </div>)
}
export default Header