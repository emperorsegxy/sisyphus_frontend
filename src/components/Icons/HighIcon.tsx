import {createSvgIcon} from "@mui/material";

export default function HighIcon () {
    const High = createSvgIcon(<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11.1566 6.60612C11.4063 6.33557 11.3894 5.9138 11.1189 5.66406L8.78559 3.51021C8.53021 3.27448 8.13659 3.27448 7.88121 3.51021L5.54785 5.66406C5.27731 5.91379 5.26043 6.33556 5.51017 6.60611C5.7599 6.87666 6.18167 6.89353 6.45222 6.6438L7.66673 5.52273L7.66673 12.0001C7.66673 12.3683 7.96521 12.6667 8.3334 12.6667C8.70159 12.6667 9.00006 12.3683 9.00006 12.0001L9.00006 5.52275L10.2145 6.6438C10.4851 6.89353 10.9068 6.87666 11.1566 6.60612Z" fill="#A7B1BC"/>
        </svg>, 'high-icon')
    return <High />
}
