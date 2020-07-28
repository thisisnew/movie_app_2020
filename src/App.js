import React from "react";
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "a",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2012/05/la_sticky_rice_cake_00-1-1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "b",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2020/06/Seafood_Tteokbokki_01-1-1.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "c",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2020/06/Spicy_Garlic_Chive_Pancake_01-.jpg",
    rating: 3.3,
  },
  {
    id: 4,
    name: "d",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2020/06/Cold_Cucumber_And_Sea_Mustard_Soup_01-.jpg",
    rating: 1.2,
  },
  {
    id: 5,
    name: "e",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2020/06/Steamed_Egg_Sidedish_01-.jpg",
    rating: 2.3,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
