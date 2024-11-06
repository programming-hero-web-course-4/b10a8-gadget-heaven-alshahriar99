import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card/Card";
import { useEffect, useState } from "react";

const GadgetsCart = () => {
  const { category } = useParams();

  const allData = useLoaderData();

  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (category) {
      const filterCategory = [...allData].filter(
        (gadgets) => gadgets.category === category
      );
      setGadgets(filterCategory);
    } else {
      setGadgets(allData);
    }
  }, [allData, category]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 col-span-9">
      {gadgets.map((gadgets) => (
        <Card key={gadgets.id} gadgets={gadgets}></Card>
      ))}
    </div>
  );
};

export default GadgetsCart;
