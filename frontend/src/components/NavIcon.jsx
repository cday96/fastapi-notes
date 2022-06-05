import { Link } from "react-router-dom"

const NavIcon = ({ to, icon, tooltip = "tooltip 💡" }) => (
    <Link to={to}>
        <div className="nav-icon group">
            {icon}
            <span className="nav-tooltip group-hover:scale-100">{tooltip}</span>
        </div>
    </Link>
)

export default NavIcon
