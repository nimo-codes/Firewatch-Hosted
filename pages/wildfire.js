import Navbar from "@/components/navbar";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";

const wildfire = () => {
  const [displayImage, setDisplayImage] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [date, setDate] = useState();
  const [result, setResult] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const [imgUrl, setImgUrl] = useState();

  const options = [
    {
      message: "Fire Detected",
      name: "Amazon Forest",
      img: "/assets/amazon.jpeg",
    },
    {
      message: "No fire detected",
      name: "Tiaga Forest",
      img: "/assets/random.jpeg",
    },
    {
      message: "No fire detected",
      name: "New Guineau Rainforest",
      img: "/assets/random2.jpeg",
    },
    {
      message: "No fire detected",
      name: "Baratang",
      img: "/assets/random3.jpeg",
    },
    {
      message: "No fire detected",
      name: "SRM university KTR",
      img: "/assets/srm.jpeg",
    },
  ];
  const [drop, setDrop] = useState(options[0]);

  const callOutput = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShowOutput(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  const callLatOutput = async (e) => {
    e.preventDefault();
    setDrop({
      message: "No Fire Detected",
      name: "Sample",
      img: "/assets/sample.jpg",
    });
    setLoading(true);
    setShowOutput(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };
  const handleSwitch = () => {
    setShow((prev) => !prev);
    setLoading(false);
    setShowOutput(false);
  };
  const handleDropdown = (e) => {
    setShowOutput(false);
    setDrop(options[e.target.value]);
  };
  return (
    <div className="h-screen xl:overflow-x-hidden xl:overflow-y-hidden">
      <Navbar />
      <div className="h-full flex flex-col bg-gradient-to-r from-orange-500 to-red-500">
        <button
          className="text-white hover:scale-105 self-center my-8 mx-5 px-5 py-2 bg-white-500 bg-opacity-50 rounded-full xl:text-xl border-2"
          onClick={handleSwitch}
        >
          SWITCH
        </button>
        <div className="flex justify-center">
          {show ? (
            <>
              <form onSubmit={callOutput}>
                <select
                  className="text-2xl p-2 rounded-xl"
                  onChange={(e) => handleDropdown(e)}
                >
                  {options.map((option, index) => (
                    <option key={index} value={index}>
                      {`${option.name}`}
                    </option>
                  ))}
                </select>

                <button
                  className="text-white hover:scale-105 self-center my-8 mx-5 px-5 py-2 bg-white-500 bg-opacity-50 rounded-full xl:text-xl border-2"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col">
              <div className="flex flex-col">
                <form
                  className="flex items-center justify-center"
                  onSubmit={callLatOutput}
                >
                  <label
                    className="text-white text-2xl font-semibold mx-2"
                    htmlFor="lat"
                  >
                    latitude
                  </label>
                  <input
                    className="rounded-xl p-2"
                    step=".001"
                    type="number"
                    name="lat"
                    onChange={(e) => setLatitude(e.target.value)}
                  />
                  <label
                    className="text-2xl text-white mx-2 font-semibold"
                    htmlFor="lon"
                  >
                    longitude
                  </label>
                  <input
                    className="rounded-xl p-2"
                    step=".001"
                    type="number"
                    name="lon"
                    onChange={(e) => setLongitude(e.target.value)}
                  />
                  <input
                    className="font-semibold mx-6 rounded-xl p-2"
                    type="date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-2xl px-3 py-2 text-white rounded-3xl bg-white-400 border-2"
                  >
                    Submit
                  </button>

                  {/* violated DRY :[ */}
                </form>
              </div>
            </div>
          )}
        </div>
        {showOutput && (
          <>
            {!loading ? (
              <div className="flex justify-center items-center flex-col mt-5">
                <h1 className="text-5xl text-white font-semibold">
                  {drop.message}
                </h1>
                <Image
                  className="w-[500px] mt-5"
                  width={30}
                  height={30}
                  src={drop.img}
                  alt=""
                />
              </div>
            ) : (
              <div className="flex justify-center items-center">
                <ClimbingBoxLoader color="white" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default wildfire;
