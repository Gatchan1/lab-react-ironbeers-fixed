import Header from "../components/Header";
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function NewBeer({createBeer}) {

  const [name, setName] = useState("")
  const [tagline, setTagline] = useState("")
  const [description, setDescription] = useState("")
  const [first_brewed, setFirst_brewed] = useState("")
  const [brewers_tips, setBrewers_tips] = useState("")
  const [attenuation_level, setAttenuation_level] = useState("")
  const [contributed_by, setContributed_by] = useState("")

  const navigate = useNavigate()


  const clickHandler = (e) => {
    e.preventDefault();

    let newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    }

    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
    .then(() => {
      navigate("/beers")
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" className="form-control" id="name" aria-describedby="name" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="tagline" className="form-label">
            Tagline:
          </label>
          <input type="text" className="form-control" id="tagline" aria-describedby="tagline" value={tagline} onChange={(e)=>setTagline(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input type="text" className="form-control" id="description" aria-describedby="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="first_brewed" className="form-label">
            First brewed:
          </label>
          <input type="text" className="form-control" id="first_brewed" aria-describedby="first_brewed" value={first_brewed} onChange={(e)=>setFirst_brewed(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="brewers_tips" className="form-label">
            Brewers Tips:
          </label>
          <input type="text" className="form-control" id="brewers_tips" aria-describedby="brewers_tips" value={brewers_tips} onChange={(e)=>setBrewers_tips(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="attenuation_level" className="form-label">
            Attenuation Level:
          </label>
          <input type="number" className="form-control" id="attenuation_level" aria-describedby="attenuation_level" value={attenuation_level} onChange={(e)=>setAttenuation_level(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label htmlFor="contributed_by" className="form-label">
            Contributed By:
          </label>
          <input type="text" className="form-control" id="contributed_by" aria-describedby="contributed_by" value={contributed_by} onChange={(e)=>setContributed_by(e.target.value)}/>
        </div>
        <button className="btn btn-primary" onClick={clickHandler}>
          Submit
        </button>
      </form>
    </>
  );
}
