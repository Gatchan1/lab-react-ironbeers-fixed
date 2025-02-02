import Header from "../components/Header"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function BeerDetails() {
    const {beerId} = useParams()
    const [beer, setBeer] = useState({})

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(({data})=>{
            setBeer(data)
        })
        .catch(err => console.log(err))
    },[])


  return (
    <>      
    <Header/>
    <div>
    <img src={beer.image_url} style={{height: "100px"}} className="card-img-top mx-auto" alt={beer.name} />
    <h2>{beer.name}</h2>
    <h4>{beer.tagline}</h4>
    <p className="attenuation">{beer.attenuation_level}
</p>
    <p className="firstBrewed">{beer.first_brewed
}</p>    
    <p className="description">{beer.description}</p>
    <p className="contributed">{beer.contributed_by}</p>
    </div>
    </>
  )
}
