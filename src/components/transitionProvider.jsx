'use client'
import { usePathname } from "next/navigation";
import NavBar from "./NavBar";
import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion'

const TransitionProvider = ({children}) => {
    
    const pathName = usePathname()

    return (
    <AnimatePresence>
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-50 to-blue-200">
        <motion.div
          className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "100vh" }}
          transition={{ duration: "0.5s", ease: "easeOut" }}
        />
        <div className="h-24">
          <NavBar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
