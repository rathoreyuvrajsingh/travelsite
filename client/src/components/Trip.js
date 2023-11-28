import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";
const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a4/4a/26/langkawi-from-above.jpg?w=700&h=-1&s=1"
          heading="Trip in Malaysia"
          text="The country of Malaysia is two separate areas of land known as Peninsular Malaysia and East Malaysia. The two regions are separated by the South China Sea by about 400 miles. Combined, they’d be roughly the size of the state of New Mexico."
        />
        <TripData
          image="https://www.indonesia.travel/content/dam/indtravelrevamp/home-revamp/bali-jack.jpg"
          heading="Trip in Indonesia"
          text="Having stopover in myriad places in Indonesia is what makes this country a wonderful place to visit. The beauty of scenic natural landscapes blended with various unique culture of its people. Enjoy the untouched beaches, mountains, lakes, and many more pleasing destinations as well as the magnificent city skylines throughout the country. And when you decide to see them all, a visit won’t be enough to embrace the wonders of Indonesia."
        />
        <TripData
          image="https://assets.thehansindia.com/h-upload/2023/04/12/1346371-kerala.webp"
          heading="Trip in Kerala"
          text="Kerala is a popular destination for both domestic as well as foreign tourists. Kerala is well known for its beaches, backwaters in Alappuzha and Kollam, mountain ranges and wildlife sanctuaries."
        />
      </div>
    </div>
  );
};

export default Trip;
