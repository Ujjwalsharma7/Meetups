import React from 'react'
import MeetupList from '../components/meetups/MeetupList'
import spot from '../public/next.svg'

const Dummy_MEETUPS = [
{id:'m1',
    title:'First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1200px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
    address: 'Taj Mahal , Agra'
},
{id:'m1',
    title:'First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Belgradstr._24_Muenchen-1.jpg/1024px-Belgradstr._24_Muenchen-1.jpg',
    address: 'Taj Mahal , Agra'
},
]

const Homepage = () => {
  return (
    
   <MeetupList meetups={Dummy_MEETUPS}/>
   
  )
}

export default Homepage
