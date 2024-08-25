"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { EventType } from "@/types";

type EventCardProps = {
  event: EventType;
};
export const EventCard = ({ event }: EventCardProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  return (
    <>
      <div
        role="button"
        className="relative sm:rounded-none md:rounded-xl border-transparent border-2 hover:border-white hover:border-2 hover:cursor-pointer"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Image
          src={event.image}
          alt={`Image for ${event.title}`}
          width={300}
          height={1000}
          className="w-full h-60 object-cover sm:rounded-none md:rounded-xl"
          loading="lazy"
        />
        <div className="w-full absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 text-center">
          <span className="text-xl font-semibold text-white dark:text-white bg-black/50 p-4">
            {event.title}
          </span>
        </div>
      </div>
      <div className={isCollapsed ? "collapsed" : "expanded"}>
        <p className="text-sm leading-4 font-medium text-white dark:text-slate-400">
          {event.description}
        </p>
      </div>
    </>
  );
};
