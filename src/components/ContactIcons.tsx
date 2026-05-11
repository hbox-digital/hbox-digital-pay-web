import { FaPhoneAlt } from "react-icons/fa";

const ContactIcons = () => {
  return (
    <>
      <a
        href="tel:18884160804"
        className="fixed left-4 bottom-6 z-99999
                   w-12 h-12 rounded-full bg-[#ffc526]
                   flex items-center justify-center
                   text-white shadow-lg
                   animate-pulse"
        aria-label="Call us"
      >
        <FaPhoneAlt className="text-xl" />
      </a>
    </>
  );
};

export default ContactIcons;
