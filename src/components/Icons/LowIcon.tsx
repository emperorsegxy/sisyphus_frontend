import {createSvgIcon} from "@mui/material";

export default function LowIcon () {
    const Low = createSvgIcon(<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M10.4898 9.39388C10.7396 9.66443 10.7227 10.0862 10.4521 10.3359L8.11884 12.4898C7.86347 12.7255 7.46984 12.7255 7.21446 12.4898L4.88111 10.3359C4.61056 10.0862 4.59368 9.66444 4.84342 9.39389C5.09315 9.12334 5.51492 9.10647 5.78547 9.3562L6.99998 10.4773L6.99998 3.99992C6.99998 3.63173 7.29846 3.33325 7.66665 3.33325C8.03484 3.33325 8.33331 3.63173 8.33331 3.99992L8.33332 10.4772L9.54777 9.3562C9.81831 9.10647 10.2401 9.12334 10.4898 9.39388Z" fill="#A7B1BC"/>
        </svg>, 'low-icon')
    return <Low />
}
