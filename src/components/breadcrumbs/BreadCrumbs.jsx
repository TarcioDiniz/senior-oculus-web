import { useLocation, Link } from "react-router-dom"
import {useTheme} from "@mui/material";
import {tokens} from "../../theme";

export default function Breadcrumbs() {
    const location = useLocation()

    let currentLink = ''


    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink} style={{
                        textDecoration: 'none',
                        fontSize: '1.2rem',
                        color:
                            theme.palette.mode === "dark"
                                ? colors.greenAccent[500]
                                : "black" }}
                    >{crumb}</Link>
                </div>
            )
        })

    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    )
}