// Routing
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div >
      <h1>Welcome to the Dashboard</h1>
      <button onClick={()=>router.push("/Login")} >Go To Login</button> <br /><br />
      <button onClick={()=>router.push("/About")} >Go To About</button> <br /><br />
      {/* <Link href="/About" >Go To About</Link> */}
    </div>
  );
}










// Linking
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div >
//       <h1>Welcome to the Dashboard</h1>
//       <Link href="/Login" >Go To Login</Link> <br /><br />
//       <Link href="/About" >Go To About</Link>
//     </div>
//   );
// }
