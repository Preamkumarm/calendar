import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ListContainer from './ListContainer';

function MainContainer()
{
    return(<div>
      <div className="w-full h-auto flex flex-col items-center justify-center">

      <section
        className="bottom-4 w-full  p-6 px-10 mt-12 md:px-16 lg:px-20 py-4 relative
    before:w-full before:h-[1px] before:left-0 before:top-0 before:bg-mainTextGrey before:content before:absolute
    after:w-full after:h-[1px] after:left-0 after:bottom-0 after:bg-mainTextGrey after:content after:absolute
    "
      >
        <div className="bottom-36 flex flex-col w-full h-full items-center justify-between px-4 md:px-0 max-w-6xl mx-auto">
          <div className="w-full flex items-center justify-between bottom-2/4">
            <p className="text-2xl mb-12 font-semibold capitalize relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-br from-hoverColor to-logoColor text-mainColor transition-all ease-in-out duration-100">
              Our fresh &{' '}
              <span className="text-blue-900 ">healthy fruits</span>
            </p>

            <div className="hidden md:flex gap-3 items-center">
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-blue-900 hover:bg-logoColor hover:shadow-lg flex cursor-pointer items-center justify-center transition-all ease-in-out duration-100"
                
              >
                <MdChevronLeft className="text-lg text-white" />
              </motion.div>
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-lg bg-blue-900 hover:bg-logoColor hover:shadow-lg flex cursor-pointer items-center justify-center "
                
              >
                <MdChevronRight className="text-lg text-white" />
              </motion.div>
            </div>
          </div>
          <ListContainer/>
        </div>
      </section>
        </div>

    </div>)
}

export default MainContainer