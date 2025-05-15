import { NavLink } from "react-router-dom"

const links = [
    {
        path: "/",
        label: "Homepage",
    },
    {
        path: "/chisiamo",
        label: "Chi Siamo",
    },
    {
        path: "/products",
        label: "Products",
    },
];

function MainNavbar() {
  return (
    <>
        <header>
            <nav>
                <ul className="list-unstyled d-flex">
                    {links.map((link, index) => {
                        return (
                            <li key={index} className="mx-2">
                                <NavLink className="custom-link" to={link.path}>{link.label}</NavLink>
                            </li>
                        );
                    })}
                    {/* <li><NavLink to='/'>Homepage</NavLink></li>
                    <li><NavLink to='/chisiamo'>Chi Siamo</NavLink></li>
                    <li><NavLink to='/actors'>Actors</NavLink></li> */}
                </ul>
            </nav>
        </header>
    </>
  )
}

export default MainNavbar