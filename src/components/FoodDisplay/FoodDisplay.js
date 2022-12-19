import { FoodDisplayItems } from "../FoodDisplayItems/FoodDisplayItems";
import "./FoodDisplay.scss";
export const FoodDisplay = (props) => {
  const foodItems = props.foodItems;
  return (
    
    <div className="FoodDisplay">
      {foodItems.map((item) => (
        <FoodDisplayItems
          foodType={item.foodType}
          foodItems={item.foodItems}
          key={item.foodType}
        />
      ))}
    </div>
  );
};
