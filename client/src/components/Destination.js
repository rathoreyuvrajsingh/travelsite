import React from "react";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours gives you the oppturnity to explore</p>

      <DestinationData
        className='first-des'
        heading="KumbhalGarh,Rajasthan"
        text=" Located 84 kms north of Udaipur in the wilderness, Kumbhalgarh is
            the second most important citadel after Chittorgarh in the Mewar
            region. Cradled in the Aravali Ranges the fort was built in the 15th
            century AD by Rana Kumbha. The inaccessibility and hostility of the
            topography lends a semblance of invincibility to the fort. It served
            the rulers of Mewar as a refuge in times of strife. The fort also
            served as refuge to King Udai of Mewar in his early childhood when
            Banbir killed Vikramaditya and usurped the throne. It is of immense
            sentimental significance for the people being the birthplace of
            Mewar's legendary king Maharana Pratap. The fort is self-contained
            in all respect to withstand a protracted siege. Its defences could
            be breached only once by the combined armies of the Mughal and of
            Amber primarily for scarcity of drinking water. There is a
            magnificent array of temples built by the Mauryas of which the most
            picturesque place is the Badal Mahal or the palace of the clouds.
            The fort also offers a superb bird’s eye view of the surroundings.
            The fort's massive wall stretches some 36 kms with a width enough to
            take eight horses abreast. Maharana Fateh Singh renovated the fort
            in the 19th century. The fort's large compound has very interesting
            ruins and a walk around it can be very educative."
        img1="https://www.tripsavvy.com/thmb/WTeNf6nzcS1x7sj704RCRBV669U=/2119x1415/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-186361655-5c1b7361c9e77c00019049d3.jpg"
        img2="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Walls_of_Kumbhalgarh.jpg/1280px-Walls_of_Kumbhalgarh.jpg"
      />
      <DestinationData
        className='first-des-reverse'
        heading="Mt.Abu,Rajasthan"
        text="Rajasthan’s only hill station nestles among green forests on the state’s highest mountain at the southwestern end of the Aravalli Hills and close to the Gujarat border. Quite unlike anywhere else in Rajasthan, Mt Abu provides Rajasthanis, Gujaratis and a small number of foreign tourists with respite from scorching temperatures and arid terrain elsewhere. It’s a particular hit with honeymooners and middle-class families from Gujarat."
        img1="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Jessore-Sloth-Bear-Sanctuary-Mount-Abut-Rajasthan.jpg?w=1024&ssl=1"
        img2="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/02/Bera-Safari-Lodge-Mount-Abu-Rajasthan.jpg?w=1200&ssl=1"
      />
    </div>
  );
};

export default Destination;
