import React from "react";
import "./mainsection.css";
import Link from "next/link";
import { LuInstagram } from "react-icons/lu";

function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 border-t">
      <div className="hidden md:grid grid-cols-4 grid-rows-1 auto-cols-fr auto-rows-fr gap-5 max-w-[700px] mx-auto border-b">
        <div>
          <h3>Conóceme</h3>
          <Link href="/about">Mi historia</Link>
        </div>
        <div>
          <h3>Series</h3>
          <Link href="/series">Ver Series</Link>
        </div>
        <div>
          <h3>Blog</h3>
          <Link href="/blog">Artículos</Link>
        </div>
        <div>
          <h3>Otros</h3>
          <Link href="/terms">Términos de uso</Link>
        </div>
      </div>
      <div className="max-w-[700px] mx-auto flex flex-row-reverse flex-wrap-reverse justify-between px-6 py-3">
        <Link href="https://www.instagram.com/jfernandezjacob/">
          <LuInstagram className="h-10 w-10" />
        </Link>
        <div className=" flex justify-center items-center ">
          <span className="sr-only">Footer</span>© 2024 Jareth
        </div>
      </div>
    </footer>
  );
}

export default Footer;
