import React from "react";
import Card from "../components/Card";

const Body = () => {
  const fruits = [
    {
      id: 1,
      price: 10.98,
      name: "Banana",
      description: "Fresh Banana from Thailand",
    },
    {
      id: 2,
      price: 8.34,
      name: "Mango",
      description: "Fresh Mango from Myanmar",
    },
    {
      id: 3,
      price: 9,
      name: "Orange",
      description: "Fresh Orange from Thailand",
    },
    {
      id: 4,
      price: 6.99,
      name: "Kiwi",
      description: "Fresh Kiwi from Thailand",
    },
    {
        id: 5,
        price: 7,
        name: "Apple",
        description: "Fresh Apple from Thailand",
      },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <Card key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
};

export default Body;
