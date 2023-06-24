import {createSvgIcon} from "@mui/material";

export default function VolumeIcon () {
    const Volume = createSvgIcon(<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.33329 2C1.70148 2 1.99996 2.29848 1.99996 2.66667V12C1.99996 12.3682 2.29844 12.6667 2.66663 12.6667H14.6666C15.0348 12.6667 15.3333 12.9651 15.3333 13.3333C15.3333 13.7015 15.0348 14 14.6666 14H2.66663C1.56206 14 0.666626 13.1046 0.666626 12V2.66667C0.666626 2.29848 0.965103 2 1.33329 2Z" fill="#A7B1BC"/>
            <path d="M12 3.33325C11.6319 3.33325 11.3334 3.63173 11.3334 3.99992V10.6666C11.3334 11.0348 11.6319 11.3333 12 11.3333C12.3682 11.3333 12.6667 11.0348 12.6667 10.6666V3.99992C12.6667 3.63173 12.3682 3.33325 12 3.33325Z" fill="#A7B1BC"/>
            <path d="M6.66671 4.66659C6.29852 4.66659 6.00004 4.96506 6.00004 5.33325V10.6666C6.00004 11.0348 6.29852 11.3333 6.66671 11.3333C7.0349 11.3333 7.33337 11.0348 7.33337 10.6666V5.33325C7.33337 4.96506 7.0349 4.66659 6.66671 4.66659Z" fill="#A7B1BC"/>
            <path d="M4.00004 8.66659C3.63185 8.66659 3.33337 8.96506 3.33337 9.33325V10.6666C3.33337 11.0348 3.63185 11.3333 4.00004 11.3333C4.36823 11.3333 4.66671 11.0348 4.66671 10.6666V9.33325C4.66671 8.96506 4.36823 8.66659 4.00004 8.66659Z" fill="#A7B1BC"/>
            <path d="M8.66671 6.66659C8.66671 6.2984 8.96518 5.99992 9.33337 5.99992C9.70156 5.99992 10 6.2984 10 6.66659V10.6666C10 11.0348 9.70156 11.3333 9.33337 11.3333C8.96518 11.3333 8.66671 11.0348 8.66671 10.6666V6.66659Z" fill="#A7B1BC"/>
        </svg>, 'volume')
    return <Volume />
}