import Image from "next/image";
import Navbar from "../components/Navbar";
import AuthenticateUser from "../components/AuthenticateUser";
import Footer from "../components/Footer";


export default function Authentication() {
  return (
    <div>
      <Navbar/>

      <AuthenticateUser/>

      <Footer/>
    </div>
  );
}
