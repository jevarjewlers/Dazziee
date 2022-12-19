import { useState } from "react";
import { Card } from "../../components/Card/Card";
import { FoodDisplay } from "../../components/FoodDisplay/FoodDisplay";
import { FoodItemss } from "../../components/FoodItemss/FoodItemss";
import { Search } from "../../components/Search/Search";


const FOOD_ITEMS = [
  {
    foodType: "Food",
    foodItems: [
      {
        name: "Sashimi",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/sashmi.jpg",
      },
      {
        name: "Unagi - Grilled Eel",
        price: 22,
        trending: true,
        imageLoc: "./asset/img/Grilled.jpg",
      },
      {
        name: "Soba - Buckwheat Noodles",
        price: 22,
        trending: true,
        imageLoc: "./asset/img/Noodles.jpg",
      },
      {
        name: "Onigiri - Rice Balls",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/onigiri.jpg",
      },
      {
        name: "Yakitori - Grilled Chicken",
        price: 22,
        trending: true,
        imageLoc: "./asset/img/Yakitori.jpg",
      },
      {
        name: "Miso Soup",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/Miso Soup.jpg",
      },
    ],
  },
  {
    foodType: "Drinks",
    foodItems: [
      {
        name: "Amazake",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/amazake.jpg",
      },
      {
        name: "Royal Milk Tea",
        price: 22,
        trending: false,
        imageLoc: "./asset/img/Royal Milk Tea.jpg",
      },
      {
        name: "Flavored Soyamilk Drinks",
        price: 22,
        trending: true,
        imageLoc: "./asset/img/soya milk.jpg",
      },
    ],
  },
  {
    foodType: "Snacks",
    foodItems: [
      {
        name: "Vegetable-Gyozas",
        price: 10,
        trending: true,
        imageLoc: "./asset/img/Vegetable-Gyozas.jpg",
      },
      {
        name: "Senbei",
        price: 5,
        trending: true,
        imageLoc: "./asset/img/Senbei.jpg",
      },
      {
        name: "Harumaki-Roll",
        price: 5,
        trending: true,
        imageLoc: "./asset/img/harumaki.jpg",
      },
    ],
  },
  {
    foodType: "Packages",
    foodItems: [
      {
        name: "Sashimi + Soba - Buckwheat Noodles",
        price: 40,
        trending: false,
        imageLoc: "./asset/img/Sashimisoba.jpg",
      },
      {
        name: "Miso Soup + Onigiri - Rice Balls",
        price: 41,
        trending: false,
        imageLoc: "./asset/img/Miso Soup + Onigiri - Rice Balls.jpg",
      },
    ],
  },
];

export const FoodItems = () => {
  
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [foodItemsList, setFoodItemsList] = useState(FOOD_ITEMS);

  const filterChangeHandler = (filter) => {
    setSelectedFilter(filter);
    if (filter === "All") {
      setFoodItemsList(FOOD_ITEMS);
      return;
    }
    const newFoodItems = FOOD_ITEMS.filter(
      (item) => item.foodType === filter
    );
    setFoodItemsList(newFoodItems);
  };

  return (
    <Card>
    
      <Search />
    
      <FoodItemss
        onChangeFilter={filterChangeHandler}
        currentFilter={selectedFilter}
      />
      
      <FoodDisplay foodItems={foodItemsList} />
    </Card>
  );
};
