import { useContext } from "react";
import Banner from "./Banner";
import NavigationBar from "./NavigationBar";
import TemplateSec from "./TemplateSec";
import { UserContextApi } from "../../context/AuthContext";
import Footer from "./Footer";
import { Faq } from "./Faq";

export const Home = () => {
  const userContext = useContext(UserContextApi);
  const foundUser = userContext?.authState.payload;
  // const [user, setUser] = useState(foundUser)

  return (
    <>
      <section className="main-container">
        <NavigationBar foundUser={foundUser} />
        <Banner />
        <TemplateSec />
        <Faq />
        <Footer />
      </section>
    </>
  );
};
