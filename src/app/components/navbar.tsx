import Link from "next/link"
export default function Navbar(){
    return(<nav className="bg-black text-white pt-6 text-center ">
        <div className=" p-4">
            <div>
                <img src="download.jpeg" alt="logo" width="500px" className="logo" />            </div>
            <Link href="/" className="mx-5  hover:bg-red-400 rounded-lg p-2 ">Home</Link>

            <Link href="/about" className="mx-5   hover:bg-red-400 rounded-lg p-2 ">About</Link>
        
            <Link href="/services" className="mx-5  hover:bg-red-400 rounded-lg p-2 ">Services</Link>
            
            <Link href="/contact"  className="mx-5  hover:bg-red-400 rounded-lg p-2 ">Contact Us</Link>
            
            <Link href="/apply" className="mx-5  hover:bg-red-400 rounded-lg p-2 ">Apply</Link>
        </div>
        </nav>
    
    )
}