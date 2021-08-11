import React, { useState } from "react";
import { FaShare, FaTwitter, FaPinterest } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

function App() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div className="min-h-screen w-full flex justify-center bg-light-grayish-blue font-manrope ">
      <section className=" w-96 h-auto rounded-xl bg-white shadow-2xl my-auto flex flex-col lg:flex lg:flex-row lg:w-4/5">
        <div className="lg:w-4/5 object-cover  row-span-full ">
          <img
            src="/images/drawers.jpg"
            alt="..."
            className="w-96 lg:w-full h-56 lg:h-full	 rounded-t-xl lg:rounded-t-none lg:rounded-l-xl mx-auto"
          />
        </div>
        <div>
          <div className="pt-10 mx-10 pb-4 font-semibold">
            <p className="text-very-dark-grayish-blue  lg:text-2xl">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </p>
          </div>

          <div className="mx-10">
            <p className="text-desaturated-dark-blue">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete
            </p>
          </div>

          <div className="flex w-full h-20 justify-between mt-6 lg:mt-12 rounded-b-xl lg:rounded-b-none relative ">
            <div className="flex pl-10 ">
              <img
                src="images/avatar-michelle.jpg"
                alt="author"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-gray-800 text-sm font-semibold">
                  Michelle Appleton
                </h3>
                <p className="text-sm text-gray-600">28 Jun 2020</p>
              </div>
            </div>

            <div className="flex items-center justify-center  pr-10 ">
              <FaShare
                onClick={() => setIsHidden(!isHidden)}
                className={
                  !isHidden
                    ? "text-white z-20 cursor-pointer lg:text-gray-900 "
                    : "text-gray-900 z-20 cursor-pointer"
                }
              />
            </div>

            <div
              className={
                isHidden
                  ? "hidden "
                  : "w-full  bg-very-dark-grayish-blue h-20 rounded-b-xl lg:rounded-xl  flex items-center absolute lg:-top-8 lg:right-1 lg:w-2/5 lg:h-10 modal"
              }
            >
              <div className="flex w-4/5 justify-evenly items-center ">
                <p className="text-white text-md font-light	">SHARE</p>
                <span>
                  <AiFillFacebook className="text-white" />
                </span>
                <span>
                  <FaTwitter className="text-white" />
                </span>
                <span>
                  <FaPinterest className="text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
