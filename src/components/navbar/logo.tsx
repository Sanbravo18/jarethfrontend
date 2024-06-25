import React from "react";
import Link from "next/link";
import Image from "next/image";
function logo() {
  return (
    <div>
      <Link href="/">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={50}
          height={50}
          className="bg-white min-h-12 rounded"
        />
      </Link>
    </div>
  );
}

export default logo;
