import { Fragment, useState } from "react";
import AppHeader from "./components/AppHeader";
import SearchInput from "./components/SearchInput";
import OtherLayout from "./layout2";
import { LinkIcon } from "@heroicons/react/20/solid";
import PointCard from "./components/PointCard";
import Metrics from "./components/metrics";
import MCalendar from "./components/m-calendar";
import MsgCard from "./components/MsgCard";
import EditProfile from "./editProfile";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const layout = {
    width: "20%",
    color: "red",
  };
  const passages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 11, 12];
  return (
    <OtherLayout>
      <div
        aria-labelledby="primary-heading"
        className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-first p-10"
      >
        <h1 id="primary-heading" className="sr-only">
          Account
        </h1>
        <section className="flex justify-between">
          <div className="flex flex-col justify-between">
            <small>welcome</small>
            <AppHeader name="Username" />
          </div>
          <SearchInput></SearchInput>
        </section>
        <section className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-start md:space-x-10 py-14">
          <PointCard />
<Metrics />
       
        </section>
        <div>
          <div className="flex justify-between">
            <h3 className="font-bold ">Recents</h3>
            <h6>view full history</h6>
          </div>
          <div className="mx-auto mt-8 max-w-5xl pb-12">
                  <div className="mt-1 grid grid-cols-1 gap-4 ">
                    {passages.map((person) => (
                      <MsgCard message='' key={person}/>
                    ))}
                  </div>
        </div>

        </div>
        {/* Your content */}
      </div>

      {/* Secondary column (hidden on smaller screens) */}
      <aside className="hidden lg:order-last lg:block lg:flex-shrink-0 pt-10">
        <div className="relative flex h-full w-84 flex-col overflow-y-auto border-r border-gray-200 px-2 items-center">
          {/* Your content */}
          <EditProfile />
          <MCalendar />
        </div>
      </aside>
    </OtherLayout>
  );
}
