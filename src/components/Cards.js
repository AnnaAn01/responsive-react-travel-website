import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-13.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img-14.jpg"
              text="Travel through the island of Bali"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-15.jpg"
              text="Set Sail in the Atlantic Ocean visiting uncharted Waters"
              label="Mystery"
              path="./services"
            />
            <CardItem
              src="images/img-16.jpg"
              text="Experience football on Top of the Himalayan Mountains"
              label="Adventure"
              path="./products"
            />
            <CardItem
              src="images/img-17.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="./sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
