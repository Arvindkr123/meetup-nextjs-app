"use client";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const NewMeetUp = () => {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }
  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
};

export default NewMeetUp;
