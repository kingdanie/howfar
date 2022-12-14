import { Fragment, useState } from "react";
import AppHeader from "../components/AppHeader";
import OtherLayout from "./layout2";
import MCalendar from "../components/m-calendar";
import EditProfile from "../components/editProfile";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import PricingArrows from "./../public/pricing-arrows.svg";
import Transfer from "./../public/left-right-arrows.svg";
import Chain from "./../public/chain.svg";
import TransferModal from "../components/TransferModal";

export default function Pricing() {
  const [open, setOpen] = useState(false);

  const showModal = () => setOpen(true);
  const toggleTransferModal = () => {
    return setOpen(!open);
  };

  return (
    <OtherLayout>
      {/* Your content */}
      <div
        aria-labelledby="primary-heading"
        className="flex h-full min-w-0 flex-1 flex-col lg:order-first p-10"
      >
        <h1 id="primary-heading" className="sr-only">
          Pricing
        </h1>
        <section className="flex justify-between">
          <div className="flex flex-col justify-between">
            <AppHeader name="Pricing" />
          </div>
        </section>
        <section className="flex flex-col items-center border-4 border-dotted border-brdrcolor rounded-lg my-5 p-5">
          <div className="flex items-center space-x-5">
            <MagnifyingGlassIcon className="h-5" />{" "}
            <h3>Points conversion and meessage costs</h3>
          </div>
          <div className="mt-10 mb-2 h-0 w-4/5 border border-solid border-brdrcolor"></div>
          <div className="w-full">
            {[
              { name: " 1 Naira", points: "1" },
              { name: "  Naira", points: "4" },
              { name: "Single scheduled sms", points: "8" },
              { name: "Bulk Instant sms", points: "6" },
              { name: "Bulk Scheduled sms", points: "12" },
            ].map((plan) => (
              <div
                key={plan.name}
                className="grid grid-cols-12 my-5 gap-4 border 
                  border-solid border-gray-100 rounded-lg 
                  px-3 py-1 w-full"
              >
                <div className="col-span-5">
                  <span>{plan.name}</span>
                </div>
                <div
                  className="col-span-2 self-center 
                    justify-self-center text-center"
                >
                  {" "}
                  <Image
                    width={60}
                    height={60}
                    src={PricingArrows}
                    alt="pricing arrows"
                  ></Image>{" "}
                </div>
                <div className="col-span-5 text-end">
                  <span>
                    {plan.points} Point
                    {Number(plan.points) > 1 ? "s" : null}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="grid md:grid-cols-10 md:p-10 gap-10 md:space-y-0">
          <div
            className="md:col-span-4 flex flex-col 
            border border-solid border-bdrcolor 
            rounded-xl p-5 space-y-10"
          >
            <div
              className="flex items-center justify-center 
                rounded-full p-2 bg-filler w-10 h-10 text-white"
            >
              +
            </div>
            <h3 className="font-semibold text-gray-700">
              Add Points
            </h3>
            <p>
              Get points Directly from your bank account .
              Fast and secure.
            </p>
            <div>
              <button
                className="text-sm text-gray-600 font-semibold 
                    relative flex px-6 py-5 space-x-3
                    rounded-xl bg-accent
                    align-end justify-self-end"
              >
                <small>Add</small>
                <Image
                  src={Chain}
                  width={20}
                  height={20}
                  alt="chain"
                ></Image>
              </button>
            </div>
          </div>

          {/* empty div */}
          <div className="hidden md:block md:col-span-2 "></div>

          <div
            className="md:col-span-4  border border-solid 
              border-brdrcolor rounded-xl p-5 space-y-10"
          >
            <div
              className="flex items-center justify-center 
              rounded-full p-2 bg-accent w-10 h-10"
            >
              <Image
                src={Transfer}
                width={20}
                height={20}
                alt="transfer"
              ></Image>
            </div>
            <h3 className="font-semibold text-gray-700">
              Transfer points
            </h3>

            <p>
              Get points Directly from your bank account .
              Fast and secure.
            </p>

            <button
              onClick={() => showModal()}
              className="text-sm text-gray-600 font-semibold 
                    relative flex px-6 py-5 space-x-3
                    rounded-xl bg-accent"
            >
              <small>Transfer</small>

              <Image
                src={Chain}
                width={20}
                height={20}
                alt="chain"
              ></Image>
            </button>
          </div>
        </section>
        <div>
          <div className="flex justify-between"></div>
        </div>
      </div>

      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden lg:order-last lg:block lg:flex-shrink-0 pt-10">
        <div className="relative flex h-full w-84 flex-col px-2 items-center">
          {/* Your content */}
          <EditProfile />
          <MCalendar />
        </div>
      </aside>
      <TransferModal
        open={open}
        toggle={toggleTransferModal}
      />
    </OtherLayout>
  );
}
