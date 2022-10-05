import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div className="h-[100vh] overflow-y-auto">
      <div className="bg-[#EDF1FF] w-full md:w-[450px] flex flex-col mx-auto my-10 p-4 rounded-2xl">
        <div className="pt-2">
          <h1 className="text-[#031A6E] font-medium text-2xl">
            Choose Currency
          </h1>
          <h3>
            To complete your payment, please choose one of the following
            currency option
          </h3>
        </div>
        <div className="pt-4">
            <Link to='/gateway'>
                <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
                    <span className="pr-3">
                    <img src="Images/pi.svg" alt="Pi logo" className="max-h-[30px]" />
                    </span>
                    Pi
                </button>
            </Link>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/btc.svg"
                alt="Btc logo"
                className="max-h-[30px]"
              />
            </span>
            Btc
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/eth.svg"
                alt="Eth logo"
                className="max-h-[30px]"
              />
            </span>
            Eth
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/litecoin.svg"
                alt="Ltc logo"
                className="max-h-[30px]"
              />
            </span>
            Litecoin
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/dogecoin.svg"
                alt="Doge logo"
                className="max-h-[30px]"
              />
            </span>
            Dogecoin
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/shiba-inu.svg"
                alt="Shiba-inu logo"
                className="max-h-[30px]"
              />
            </span>
            Shiba Inu
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/usdt.svg"
                alt="Usdt logo"
                className="max-h-[30px]"
              />
            </span>
            Usdt
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/busd.svg"
                alt="Busd logo"
                className="max-h-[30px]"
              />
            </span>
            Busd
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/matic.svg"
                alt="Matic logo"
                className="max-h-[30px]"
              />
            </span>
            Matic
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/bnb.svg"
                alt="Bnb logo"
                className="max-h-[30px]"
              />
            </span>
            Bnb
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/tron.svg"
                alt="Tron logo"
                className="max-h-[30px]"
              />
            </span>
            Tron
          </button>
          <button className="flex items-center bg-white w-full my-2 p-2 rounded-lg hover:scale-95 transition duration-500">
            <span className="pr-3">
              <img
                src="Images/solana.svg"
                alt="Solana logo"
                className="max-h-[30px]"
              />
            </span>
            Solana
          </button>
        </div>
      </div>
    </div>
  );
};

export default Connect;
