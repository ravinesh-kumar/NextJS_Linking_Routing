"use client"
import Link from "next/link";

const page = () => {
    return (
        <div>
            <h1>Welcome to about College page</h1>
            <Link href="/About">go to About  </Link> <br /><br />
        </div>
    );
}



export default page;