import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Gadgets from "../Gadgetes/Gadgets";
import Heading from "../Heading/Heading";

const Home = () => {
  const category = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <Heading></Heading>
      <div className="grid grid-cols-12 py-20 justify-between gap-8 ">
        <Gadgets category={category}></Gadgets>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
