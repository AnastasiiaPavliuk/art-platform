//change when have strapi

// import { useLoaderData } from "react-router-dom";
// import { getCheeses } from "../services/cheese";
// import CheeseCard from "../components/CheeseCard";
//import styles from "./index.module.css";

// const loader = async () => {
//   const cheeses = await getCheeses();
//   return { cheeses };
// };

const Index = () => {
  // const { cheeses } = useLoaderData();
  // return (
  //   <ul className={`animatehero ${styles.list} `}>
  //     {cheeses.map((cheese) => (
  //       <li key={cheese.id}>
  //         <CheeseCard cheese={cheese} />
  //       </li>
  //     ))}
  //   </ul>
  // );

  return(
    <div>
      <h1>Art Platform</h1>
      <p>this is routes/index</p>
    </div>
  );
};

// Index.loader = loader;

export default Index;
