"use client"
import MeetupList from "@/components/meetups/MeetupList";
import React, { useState, useEffect } from "react";
const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://assets-global.website-files.com/5bd82da7b7abc53f312e765d/5c7565f1d885aa313b6db38e_iStock-680198122%20-%20Bremen%20Cathedral.jpg",
    address: "Some address 5, 1234, Some City California etc........",
    description: "this is my first Meetup with you",
  },
  {
    id: "m2",
    title: "Second meetup",
    image:
      "https://images.pexels.com/photos/9828321/pexels-photo-9828321.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "Some address 5, 1234, Some City Washigton etc........",
    description: "this is my Second Meetup with you",
  },
  {
    id: "m1",
    title: "Third meetup",
    image:
      "https://images.unsplash.com/photo-1474696100102-01b8519f06f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    address: "Some address 5, 1234, Some City Mumbai etc........",
    description: "this is my Third Meetup with you",
  },
];

const Home = (props) => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUP);
  }, []);
  return <MeetupList meetups={loadedMeetups} />;
};

export default Home;
