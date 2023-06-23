import {createSvgIcon} from "@mui/material";

export default function GlobeIcon () {
    const Globe = createSvgIcon(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#A7B1BC"/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M13.7467 18.1766C14.4854 16.6992 15 14.5183 15 12C15 9.48174 14.4854 7.30077 13.7467 5.82336C12.9482 4.22632 12.2151 4 12 4C11.7849 4 11.0518 4.22632 10.2533 5.82336C9.51462 7.30077 9 9.48174 9 12C9 14.5183 9.51462 16.6992 10.2533 18.1766C11.0518 19.7737 11.7849 20 12 20C12.2151 20 12.9482 19.7737 13.7467 18.1766ZM12 22C14.7614 22 17 17.5228 17 12C17 6.47715 14.7614 2 12 2C9.23858 2 7 6.47715 7 12C7 17.5228 9.23858 22 12 22Z"
              fill="#A7B1BC"/>
        <path fillRule="evenodd" clipRule="evenodd"
              d="M21.9506 13C21.9833 12.6711 22 12.3375 22 12C22 11.6625 21.9833 11.3289 21.9506 11H2.04938C2.01672 11.3289 2 11.6625 2 12C2 12.3375 2.01672 12.6711 2.04938 13H21.9506Z"
              fill="#A7B1BC"/>
    </svg>, 'globe')
    return (<>
        <Globe />
    </>)
}