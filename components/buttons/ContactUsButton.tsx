import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

/**
 * @todo change the contact us link.
 */
const ContactUsButton = () => {
  return (
    <div className='fit fixed z-20 bottom-6 right-6'>
      <Link
        href={"/contact-us"}
        className='fit column items-center justify-center text-[12px] gap-2 font-Inter'>
        <div className='fit p-3 rounded-full bg-[#A91432]'>
          <ChatBubbleOvalLeftEllipsisIcon
            width={26}
            height={26}
            className='text-white fill-none stroke-white'
          />
        </div>
        {/* <p>Contact Us</p> */}
      </Link>
    </div>
  );
};


export default ContactUsButton;