import "./FoodItemsss.scss";
export const FoodItemss = (props) => {
  const changessHandler = (filter) => {
    props.onChangeFilter(filter);
  };
  return (
    <div className="FoodItemss">
      <ul className="FoodItemss_List">
        <li
          onClick={changessHandler.bind(null, "All")}
          className={props.currents === "All" ? "FoodItemReady" : ""}
        >
          All
        </li>
        <li
          onClick={changessHandler.bind(null, "Food")}
          className={props.currents === "Food" ? "FoodItemReady" : ""}
        >
          Food
        </li>
        <li
          onClick={changessHandler.bind(null, "Drinks")}
          className={props.currents === "Drinks" ? "FoodItemReady" : ""}
        >
          Drinks
        </li>
        <li
          onClick={changessHandler.bind(null, "Snacks")}
          className={props.currents === "Snacks" ? "FoodItemReady" : ""}
        >
          Snacks
        </li>
        <li
          onClick={changessHandler.bind(null, "Packages")}
          className={props.currents === "Packages" ? "FoodItemReady" : ""}
        >
          Packages
        </li>
      </ul>
    </div>
  );
};