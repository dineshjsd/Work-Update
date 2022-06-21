// our-domain.com/new-meetup
import { useRouter } from "next/router";
import React from "react";

import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Context-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }
  return <NewMeetUpForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUpPage;
