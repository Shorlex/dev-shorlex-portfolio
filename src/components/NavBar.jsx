"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/about",
    title: "About",
  },
  {
    id: 3,
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    id: 4,
    url: "/contact",
    title: "Contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const firstVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const middleVariant = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const lastVariant = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const menuVarient = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: "0",
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };
  const menuListVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* LOGO */}
      <div>
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">HayBK</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* NavLinks */}
      <div className="hidden md:flex gap-4 text-xl">
        {links.map((link) => (
          <NavLink link={link} key={link.id} />
        ))}
      </div>
      {/* Social Icons */}
      <div className="hidden md:flex gap-4">
        <Image src={"/github.png"} width={24} height={24} alt="git" />
        <Image src={"/x-logo.png"} width={24} height={24} />
        <Image src={"/linkedin.png"} width={24} height={24} />
      </div>
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={firstVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={middleVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={lastVariant}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={menuVarient}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-full h-full bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-10"
          >
            {links.map((link) => (
              <motion.div variants={menuListVariant}>
                <Link href={link.url} key={link.id}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
