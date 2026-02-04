'use client';

import { useState } from "react";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


type AuthInputElementProps = {
  inputName: string;
  placeHolder: string;
}


type AuthFormBlockProps = {
  title: string;
  descriptionElement: React.ReactNode;
  inputArr: AuthInputElementProps[];
  anyExtraComponent?: React.ReactNode;
  submitButtonText: string;
  onSubmit?: () => void;
};

const AuthFormBlockEx:AuthFormBlockProps = {
  title: "Recruiter",
  descriptionElement: 
    <>
      <div className="text-gray-500 mb-2 text-sm">
        <span className="text-blue-500 mr-1">
          bsharshith1808@gmail.com
        </span>
        <span>
          (account exists)
        </span>
      </div>
      <div className="text-gray-500 mb-2 text-sm">
        some description
      </div>
    </> ,
  inputArr: [
    {
      inputName:"email",
      placeHolder: "",
    },
    {
      inputName:"enter password",
      placeHolder: "",
    },
  ],
  anyExtraComponent: <div className="flex items-end justify-between">
        <span className="text-sm mb-1 text-blue-500 cursor-pointer hover:underline ml-70">
          forgot password?
        </span>
      </div>,
  submitButtonText: "Submit",
};


const AuthFormBlock = ({
  title,
  descriptionElement,
  inputArr,
  anyExtraComponent,
  submitButtonText,
  onSubmit,
}: AuthFormBlockProps) => {


  return (
    <span className={poppins.className}>
    <span className="flex flex-col bg-white w-132 items-center justify-center">
      <div className="text-4xl font-bold text-stone-600 m-4 mt-8">
        {title}
      </div>
      {descriptionElement}
      

      {inputArr.map((inputElem, index) => {
          return (
            <div key={index} className="mb-2 mt-2">
              <div className="flex text-sm text-gray-400 items-end justify-between">
                {inputElem.inputName}
              </div>
              <div className="relative">
                <input
                  placeholder={inputElem.placeHolder}
                  className="bg-gray-200 p-2 w-100 h-14 text-black border-gray-50
                            focus:outline-1 focus:outline-gray-300"
                />
              </div>
            </div>
          );
        })
      }


      {anyExtraComponent}
      

      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}>
        <button className="group flex items-center justify-center gap-2 h-12
                          bg-black text-white px-4 py-2 w-100 m-4 mb-8
                          cursor-pointer active:scale-98">
          <span className="font-semibold text-xl">
                {submitButtonText}
          </span>
          <span className="transition-transform duration-200 group-hover:translate-x-1 font-extrabold">
            →
          </span>
        </button>
      </form>
    </span>
    </span>
  )
}

export default AuthFormBlock;