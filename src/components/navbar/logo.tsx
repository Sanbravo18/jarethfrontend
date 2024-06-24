import React from "react";
import Link from "next/link";
function logo() {
  return (
    <div>
      <Link href="/">
        <img
          src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={50}
          height={50}
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default logo;
