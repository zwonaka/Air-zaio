import React from "react";
import Banner from "./Banner/Banner";
import classes from "./Home.module.css";
import Card from "./Card/Card";


function Home() {
  return (
    <div>
      <Banner />
      <div className={[classes.home__section,classes.margin_top_40].join(" ")}>

      <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="unique homes"
                description="Cozy private accommodations, perfect for friends or family gatherings."
                 price="$116/night"
            />

            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Beautifull place"
                description="Extraordinary experiences guided by a diverse group of hosts, designed for us to enjoy together."
                 price="$206/night"
            />

           
           
            </div>
            <div className={classes.home__section}>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="1 Bedroom in Florida"
                description="Superhost offering breathtaking beachside views in Florida."
                price="$220/night"
            />

                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="2 Bedroom"
                    description="Exceptional host with outstanding amenities and a vibrant shopping district just around the corner."
                    price="$166/night"
                />

<Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="glam"
                description="Accommodations that offer more than just a bed."
                 price="$176/night"
            />

            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="penthouse"
                description="Experience breathtaking views of Hollywood from this exquisite penthouse."
                price="$650/night"
                />
               
            </div>
    </div>
  );
}

export default Home;
