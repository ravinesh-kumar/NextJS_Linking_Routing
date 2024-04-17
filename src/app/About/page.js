"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

function page() {
    const router= useRouter();

    const navigation=(name)=>{
      
        router.push(name)
       
    }
    return (
        <div>
            <h1>Welcome to About page</h1>
         
            <div style={{borderWidth:2}}>
            <Link href="/">go to home  </Link> <br /><br />
            <button onClick={()=>navigation("/About/AboutStudent")}>go to About Student  </button> <br /><br />
            <button onClick={()=>navigation("/About/AboutCollege")}>go to About college  </button> <br /><br />
            <button onClick={()=>navigation("/Login")} >go to Login </button><br /><br />
            <button onClick={()=>navigation("/Login/LoginCollege")} >go to LoginCollege </button><br /><br />
            <button onClick={()=>navigation("/Login/LoginStudent")} >go to LoginStudent </button><br /><br />
            {/* <Link href="/">go to home  </Link> <br /><br />
            <Link href="/About/AboutStudent">go to About Student  </Link> <br /><br />
            <Link href="/About/AboutCollege">go to About college  </Link> <br /><br />
            <Link href="/Login" >go to Login </Link><br /><br />
            <Link href="/Login/LoginCollege" >go to LoginCollege </Link><br /><br />
            <Link href="/Login/LoginStudent" >go to LoginStudent </Link><br /><br /> */}
            </div>
        </div>
    );
}



export default page;