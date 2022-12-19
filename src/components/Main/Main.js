import { Content } from "../Content/Content";
import { NavigationBar } from "../NavigationBar/NavigationBar";
import "./Main.scss";
export const Main = () => {
  return (
    <div className="Main">
      <NavigationBar />
      <Content />
    </div>
  );
};
