import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const BASE_URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";

  const takeTutorials = async () => {
    try {
      const { data } = await axios(BASE_URL);
      // console.log(data.data)
      setTutorials(data);
    } catch (error) {
      console.log("There is an error here");
    }
  };

  //componentDidMount()
  useEffect(() => {
    takeTutorials();
  }, []);

  console.log(tutorials);

  // takeTutorials()
  return (
    <>
      <AddTutorial BASE_URL={BASE_URL} takeTutorials={takeTutorials} />
      <TutorialList  BASE_URL={BASE_URL} tutorials={tutorials} takeTutorials={takeTutorials} />
    </>
  );
};

export default Home;
