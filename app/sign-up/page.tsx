
import { Dispa8chLogo } from "@/public/icons";
import SignUpForm from "./_components/SignUpForm";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'Signup | Dispa8ch',
  description: 'Dispa8ch.io is a SaaS platform that helps facilitates the process of logistics businesses by providing services like package tracking and route optimization.',
};

export default function SignUp() {
  
  return (
    <main className='w-screen min-h-screen px-4 bg-gradient-to-br from-[#D1193E1A] to-[#FDA8001A] font-Inter_Medium flex flex-col items-center justify-center gap-7 md:py-4 md:px-0'>
      <section className='w-full h-fit flex justify-center '>
        <Dispa8chLogo size={1} />
      </section>
      <SignUpForm />
      <section className='h-fit w-full flex items-center justify-center gap-1 text-xl text-feintBlack font-Inter_Bold '>
        <p>Have an account?</p>
        <Link className='text-dispa8chRed-500 border-none focus:outline-none ' href={"/login"}>
          Sign in
        </Link>
      </section>
    </main>
  );
}
