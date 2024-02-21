import { useContext } from "react";
import Banner from "./Banner";
import NavigationBar from "./NavigationBar";
import TemplateSec from "./TemplateSec";
import { UserContextApi } from "../../context/AuthContext";

export const Home = () => {
  const userContext = useContext(UserContextApi);
  const foundUser = userContext?.authState.payload;

  return (
    <>
      <section className="main-container">
        <NavigationBar foundUser={foundUser} />
        <Banner />
        <TemplateSec />
      </section>
    </>
  );
};
