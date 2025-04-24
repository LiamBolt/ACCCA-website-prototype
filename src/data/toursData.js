export const tours = [
  {
    id: 'heritage-day',
    title: 'Ankole Heritage Day Tour',
    description: 'A comprehensive day tour covering the cultural highlights of Ankole cattle traditions. Visit herding grounds, participate in a milking ceremony, and enjoy a traditional lunch with a local family.',
    image: '/src/assets/images/tours/heritage-day.jpg',
    duration: '8 hours',
    location: 'Central Conservation Area',
    maxGroupSize: 12,
    price: 95,
    category: 'full-day',
    includes: ['Professional guide', 'Transportation', 'Traditional lunch', 'Activities', 'Souvenir'],
    itinerary: [
      { time: '8:30 AM', activity: 'Pickup from meeting point' },
      { time: '9:00 AM', activity: 'Welcome ceremony and orientation' },
      { time: '10:00 AM', activity: 'Visit to herding grounds' },
      { time: '12:00 PM', activity: 'Traditional milking demonstration' },
      { time: '1:00 PM', activity: 'Lunch with local family' },
      { time: '2:30 PM', activity: 'Horn craft demonstration' },
      { time: '4:00 PM', activity: 'Cultural dance performance' },
      { time: '5:30 PM', activity: 'Return to meeting point' }
    ]
  },
  {
    id: 'morning-experience',
    title: 'Morning Herder Experience',
    description: 'Join local herders for a morning routine with the Ankole cattle. Learn about grazing patterns, herding techniques, and enjoy a traditional breakfast in the field.',
    image: '/src/assets/images/tours/morning-herder.jpg',
    duration: '4 hours',
    location: 'Eastern Grazing Lands',
    maxGroupSize: 8,
    price: 45,
    category: 'half-day',
    includes: ['Expert herder guide', 'Traditional breakfast', 'Herding participation', 'Photo opportunities'],
    itinerary: [
      { time: '5:30 AM', activity: 'Meet at the cattle kraal' },
      { time: '6:00 AM', activity: 'Morning cattle release and blessing' },
      { time: '6:30 AM', activity: 'Herding to grazing grounds' },
      { time: '8:00 AM', activity: 'Traditional breakfast in the field' },
      { time: '9:00 AM', activity: 'Learn herding techniques and cattle calls' },
      { time: '10:30 AM', activity: 'Return to conservation center' }
    ]
  },
  {
    id: 'conservation-insight',
    title: 'Conservation Insight Tour',
    description: 'Focused on the scientific and conservation aspects of our work, this tour takes you behind the scenes of our breeding programs, veterinary facilities, and research projects.',
    image: '/src/assets/images/tours/conservation.jpg',
    duration: '3 hours',
    location: 'Conservation Center',
    maxGroupSize: 10,
    price: 40,
    category: 'half-day',
    includes: ['Conservation expert guide', 'Access to research areas', 'Conservation booklet', 'Refreshments'],
    itinerary: [
      { time: '2:00 PM', activity: 'Introduction to conservation challenges' },
      { time: '2:30 PM', activity: 'Visit to breeding program facilities' },
      { time: '3:15 PM', activity: 'Veterinary center tour' },
      { time: '4:00 PM', activity: 'Genetic preservation presentation' },
      { time: '5:00 PM', activity: 'Q&A session with conservation team' }
    ]
  },
  {
    id: 'cultural-immersion',
    title: '3-Day Cultural Immersion',
    description: 'Live with an Ankole cattle keeping family for three days, fully immersing yourself in their daily lifestyle, rituals, and traditions. Experience authentic rural living while learning about sustainable cattle practices.',
    image: '/src/assets/images/tours/immersion.jpg',
    duration: '3 days',
    location: 'Rural Homesteads',
    maxGroupSize: 4,
    price: 275,
    category: 'multi-day',
    includes: ['Accommodation with local family', 'All meals', 'Cultural activities', 'Translation services', 'Transfer from/to nearest town'],
    itinerary: [
      { time: 'Day 1', activity: 'Morning welcome ceremony, orientation, afternoon cattle activities' },
      { time: 'Day 2', activity: 'Full day participating in family activities and cattle management' },
      { time: 'Day 3', activity: 'Morning activities, farewell ceremony, departure by noon' }
    ]
  },
  {
    id: 'sunset-tales',
    title: 'Sunset Tales & Traditions',
    description: 'Experience the magical evening atmosphere as cattle return home. Participate in evening milking, enjoy stories around the fire, and witness traditional music under the stars.',
    image: '/src/assets/images/tours/sunset.jpg',
    duration: '4 hours',
    location: 'Cultural Center',
    maxGroupSize: 15,
    price: 55,
    category: 'half-day',
    includes: ['Guide', 'Evening meal', 'Cultural performance', 'Storytelling session'],
    itinerary: [
      { time: '4:00 PM', activity: 'Meet at cultural center' },
      { time: '4:30 PM', activity: 'Watch cattle return from grazing' },
      { time: '5:00 PM', activity: 'Evening milking participation' },
      { time: '6:00 PM', activity: 'Traditional dinner' },
      { time: '7:00 PM', activity: 'Fireside stories and music' },
      { time: '8:30 PM', activity: 'Conclusion' }
    ]
  },
  {
    id: 'cattle-trail',
    title: 'Ancient Cattle Trail Trek',
    description: 'Follow the historic routes used by Ankole herders for centuries. This moderately challenging trek covers beautiful landscapes while explaining the nomadic traditions of cattle keeping communities.',
    image: '/src/assets/images/tours/trail.jpg',
    duration: '6 hours',
    location: 'Historic Trail Routes',
    maxGroupSize: 8,
    price: 70,
    category: 'full-day',
    includes: ['Experienced trekking guide', 'Packed lunch', 'Water', 'Walking stick', 'First aid'],
    itinerary: [
      { time: '8:00 AM', activity: 'Meet at trailhead' },
      { time: '8:30 AM', activity: 'Trek begins through savanna landscapes' },
      { time: '10:30 AM', activity: 'Visit ancient watering hole site' },
      { time: '12:00 PM', activity: 'Lunch at panoramic viewpoint' },
      { time: '1:30 PM', activity: 'Visit traditional cattle markers' },
      { time: '3:00 PM', activity: 'Trek through grazing territories' },
      { time: '4:30 PM', activity: 'Return to conservation center' }
    ]
  }
]; 