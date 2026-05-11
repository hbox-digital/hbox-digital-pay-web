'use client'

import { useBookCallModal } from "@/contexts/BookCallModalContext";

interface BookDiscoveryCallBtnProps {
  text?: string;
}

const BookDiscoveryCallBtn = ({ text = "Book A Discovery Call" }: BookDiscoveryCallBtnProps) => {
  const { openModal } = useBookCallModal();
  
  return (
    <div
      className="group flex items-center gap-4 cursor-pointer w-max"
      onClick={openModal}
    >
        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-2xl">
          <svg
            width="26"
            height="26"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:rotate-45"
          >
            <path
              d="M22.167 4.08337L5.83366 20.4167"
              stroke="black"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.167 16.065V4.08337H10.1853"
              stroke="black"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-white transition-colors duration-300 group-hover:text-yellow-400">
          {text}
        </h3>
      </div>
  );
};

export default BookDiscoveryCallBtn;