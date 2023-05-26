import {Link} from "react-router-dom"

export default function HomePage() {
  return (
    <div className="homePage">
    <Link to="/beers">All Beers</Link>
    <Link to="/random-beer">Random Beer</Link>
    <Link to="/new-beer">Add New Beer</Link>
    </div>
  )
}
