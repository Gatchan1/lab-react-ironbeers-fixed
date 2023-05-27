import Header from "../components/Header";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios";

export default function AllBeers() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/")
      .then(({ data }) => {
        setBeers(data);
        console.log("first beer: ", data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      {beers.map((beer) => {
        return (
          <div className="card" style={{width: "18rem"}}>
            <img src={beer.image_url} style={{height: "100px"}} className="card-img-top mx-auto" alt={beer.name} />
            <div className="card-body">
            <Link to={"/beers/" + beer._id}>{beer.name}</Link>
              <h5 className="card-title">{beer.tagline}</h5>
              <p className="card-text">Created by: {beer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
