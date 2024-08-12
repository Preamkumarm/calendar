import { motion } from 'framer-motion';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { heroData } from '../utils/data';
// import MenuContainer from './MenuContainer';
function ListContainer()
{
    return(
    <div>
         <div
    >
      <div className='flex flex-row gap-4'>
     {
        heroData.map(item => (
          <div
            className=" h-[205px] md:w-299 md:min-w-[250px] backdrop-blur-xl mt-10 lg:mt-[2rem] mb-4 lg:mb-12 border-none rounded-lg p-4 cursor-pointer flex flex-col items-center justify-between bg-blue-200"
          >
            <div className="w-full flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageSrc}
                alt="image"
                className="w-35 h-[140px] -mt-12"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                
                className="w-8 h-8 group rounded-full bg-blue-200 flex items-center justify-center cursor-pointer"
              >
                <RiShoppingBasketFill className={`text-2xl text-white `} />
              </motion.div>
            </div>
            <div className="w-full flex flex-col gap-2 items-end justify-end">
              <p className="text-white font-semibold text-base md:text-lg">
               {item.name}
              </p>
              <p className="mt-1 text-black text-sm">
                 Calories
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-white font-semibold">
                  <span className="text-sm text-white">${item.price}</span> 
                </p>
              </div>
            </div>
          </div>
          ))
}
        </div>
    </div>
    {/* <MenuContainer/> */}
    </div>
    )
}
export default ListContainer