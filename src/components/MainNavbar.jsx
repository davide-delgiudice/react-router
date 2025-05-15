import { NavLink } from "react-router-dom"

function MainNavbar() {
  return (
    <>
        <header>
            <nav>
                <ul>
                    <li><NavLink to='/'>Homepage</NavLink></li>
                    <li><NavLink to='/chisiamo'>Chi Siamo</NavLink></li>
                    <li><NavLink to='/actors'>Actors</NavLink></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default MainNavbar