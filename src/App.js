import React from "react";
import {FaShare} from 'react-icons/fa'

function App() {
  return (
    <div className="min-h-screen w-full flex justify-center bg-light-grayish-blue font-manrope">
      <section className=" w-96 mx-9 rounded-xl bg-white shadow-2xl my-auto ">
        <div className="">
          <img
            src="/images/drawers.jpg"
            alt="..."
            className="w-96 h-56 rounded-t-xl  mx-auto"
          />
        </div>

        <div className="px-10">


        <div className="pt-10 pb-4 font-semibold">
          <p>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
        </div>

        <div>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete
          </p>
        </div>

        <div className="flex w-full justify-between  mt-6 pb-6">
          <div className="flex">

          <img
            src="images/avatar-michelle.jpg"
            alt="author"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3>Michelle Appleton</h3>
            <p>28 Jun 2020</p>
          </div>
          </div>
          
          <div className="flex items-center">
            <FaShare />
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}

export default App;
