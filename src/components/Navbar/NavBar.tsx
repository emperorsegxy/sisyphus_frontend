import React from "react";
import {AppBar, Toolbar} from "@mui/material";
import AppLogo from '../../assets/svgs/app-logo.svg'
import styles from './navbar.module.css'
import {Link} from "react-router-dom";
import UserCorner from "../UserCorner/UserCorner";

interface INavLink {
    name: 'Exchange' | 'Wallets' | 'Roqqu Hub'
    to: string
}

const navLinks: INavLink[] = [
    {
        name: 'Exchange',
        to: '/'
    },
    {
        name: 'Wallets',
        to: '/'
    },
    {
        name: 'Roqqu Hub',
        to: '/'
    }
]

const NavBar: React.FC = () => {
    return (<>
        <AppBar>
            <Toolbar sx={{height: 72}}>
                <div className={`${styles.navBarContent}`}>
                    <div className={`flex items-center`}>
                        <img src={AppLogo} width={121} alt="sisyphus" />
                        <div className={`ml-4 md:block hidden  ${styles.navLinksWrap}`}>
                            <ul>
                                {navLinks
                                    .map((link, index) =>
                                        (<li key={index}><Link to={link.to}>{link.name}</Link></li>)
                                    )}
                            </ul>
                        </div>
                    </div>
                    <UserCorner />
                </div>
            </Toolbar>
        </AppBar>
    </>)
}

export default NavBar
