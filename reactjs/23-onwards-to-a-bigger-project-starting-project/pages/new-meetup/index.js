// our-domain.com/new-meetup

import React from "react";

import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetupHandler(enteredMeetUpData) {
    console.log(enteredMeetUpData);
  }
  return <NewMeetUpForm onAddMeetUp={addMeetupHandler} />;
}

export default NewMeetUpPage;
