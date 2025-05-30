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
        <nav>
            <ul className="list-unstyled d-flex justify-content-center py-3">
                {links.map((link, index) => (
                    <li key={index} className="mx-4">
                        <NavLink className="custom-link" to={link.path}>{link.label}</NavLink>
                    </li>
                    )
                )}
                {/* <li><NavLink to='/'>Homepage</NavLink></li>
                <li><NavLink to='/chisiamo'>Chi Siamo</NavLink></li>
                <li><NavLink to='/actors'>Actors</NavLink></li> */}
            </ul>
        </nav>
    </>
  )
}

export default MainNavbar