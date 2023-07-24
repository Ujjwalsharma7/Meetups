import { Fragment } from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

import React from 'react'

const meetupDetails = () => {
  return (
   <MeetupDetails     image= 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153' title = "first meetup" address = "NBH , NIT , Hamirpur" description='This is the first meetup'/>
  )
}

export default meetupDetails;
