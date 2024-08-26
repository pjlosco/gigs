"use client";

import React, { useEffect, useState } from "react";
import { EventType } from "@/types";
import { EventCard } from "./EventCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const Events = () => {
  const { isPending, error, data, isFetching } = useQuery<{
    events: EventType[];
  }>({
    queryKey: ["events"],
    queryFn: async () => {
      // We could use server component instead of this API, which would make moving the service out
      // slightly easier if we wanted to at some point.
      const response = await fetch("/api/events");
      return await response.json();
    },
  });

  return (
    <>
      <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700" />
      {data?.events.map((event) => {
        return (
          <div className="mb-2">
            <EventCard event={event} />
          </div>
        );
      })}
    </>
  );
};
