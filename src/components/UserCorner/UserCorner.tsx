import UserAvatar from "../../assets/svgs/user-avatar.svg"
import {Avatar, Typography} from "@mui/material";
import styles from './user-corner.module.css'
import {ChevronRight} from "@mui/icons-material";
import GlobeIcon from "../Icons/GlobeIcon.tsx";
import LogoutIcon from "../Icons/LogoutIcon.tsx";

interface Props {
    name?: string
}

export default function UserCorner ({ name }: Props) {
    return (
        <div className={`flex items-center`}>
            <div className={`flex items-center px-4 py-2 ${styles.userCornerWrap}`}>
                <Avatar>
                    <img src={UserAvatar as string} alt="avatar"/>
                </Avatar>
                <div className="hidden items-center md:flex">
                    <Typography  className={`ml-4`}>{name || 'Olakunle Te...'}</Typography>
                    <ChevronRight />
                </div>
            </div>
            <div className={`ml-2`}>
                <GlobeIcon />
            </div>
            <div className={`ml-2`}>
                <LogoutIcon />
            </div>
        </div>
    )
}
