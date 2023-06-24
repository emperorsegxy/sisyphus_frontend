import {useEffect, useState} from "react";
import {MenuItem, Select} from "@mui/material";
import {makeStyles} from '@mui/styles'
import BitcoinUSDPairIcon from "../../Icons/BitcoinUSDPairIcon.tsx";
import styles from './dashboard-top.module.css'
import ClockIcon from "../../Icons/ClockIcon.tsx";
import VolumeIcon from "../../Icons/VolumeIcon.tsx";
import HighIcon from "../../Icons/HighIcon.tsx";
import LowIcon from "../../Icons/LowIcon.tsx";

type PriceCoin = {
    usd: number,
    usd_market_cap: number
    usd_24h_vol: number
    usd_24h_change: number
}
interface Props {
    list: { [p: string]: PriceCoin }
}

const useStyles = makeStyles({
    root: {
        background: 'transparent',
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
        }
    }
})

const SelectedItem = ({ value }: { value: string }) => {
    const labels: Record<string, string> = {
        binancecoin: 'BNB/USDT',
        bitcoin: 'BTC/USDT',
        pepe: 'PEPE/USDT',
        ethereum: 'ETH/USDT',
        solana: 'SOL/USDT'
    }
    const spanStyles = {
        color: '#FFF',
        fontSize: '24px',
        fontWeight: 500
    }
    return (
        <>
            <div className={`flex items-center`}>
                <BitcoinUSDPairIcon />
                <span className={'ml-2'} style={spanStyles}>{labels[value] ?? value}</span>
            </div>
        </>
    )
}

const DashboardTop = ({list}: Props) => {
    const [pairs, setPairs] = useState<{name: string, usd: number, usd_24h_values: {vol: number, change: number, marketCap: number}}[]>([])
    const [value, setValue] = useState<string>('')
    const [usdValue, setUsdValue] = useState(0)
    const [usd24Values, setUsd24Values] = useState<Record<string, number>>({})
    const classes = useStyles()
    const currencyValues = [
        {
            text: '24h change',
            icon: ClockIcon(),
            key: 'change'
        },
        {
            text: '24h high',
            icon: HighIcon(),
            key: 'change'
        },
        {
            text: '24h low',
            icon: LowIcon(),
            key: 'change'
        },
        {
            text: '24h volume',
            icon: VolumeIcon(),
            key: 'vol'
        }
    ]

    useEffect(() => {
        if (list) {
            const listKeys = Object.keys(list)
            const _list = listKeys.map((key) => {
                return {
                    name: key,
                    usd: list[key].usd,
                    usd_24h_values: {
                        vol: list[key].usd_24h_vol,
                        change: list[key].usd_24h_change,
                        marketCap: list[key].usd_market_cap
                    }
                }
            })
            setPairs(_list)
            console.log(_list[0])
            setValue(_list[0].name)
        }
    }, [list])

    useEffect(() => {
        let _usdValue = usdValue
        let _usd24Values = usd24Values
        if (value && pairs) {
            const pair = pairs.find(_pair => _pair.name === value)
            if (pair) {
                _usdValue = pair.usd
                _usd24Values = pair.usd_24h_values
            }
        }
        setUsd24Values(_usd24Values)
        setUsdValue(_usdValue)
    }, [value, pairs, usdValue, usd24Values])

    return (
        <div className={`flex items-center flex-wrap ${styles.dashboardTopWrap}`}>
            <Select
                className={classes.root}
                value={value as string}
                renderValue={(value: string) => SelectedItem({value})}
                onChange={(e: any) => setValue(e.target.value)}>
                {pairs.map((p, index) => (<MenuItem value={p.name} key={index}>
                    <SelectedItem value={p.name} />
                </MenuItem>))}
            </Select>
            <div className={`${styles.currencyUSDValue} mr-2 md:mr-6`}>${usdValue.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
            <div className={`flex items-center ${styles.currencyValuesWrap}`}>
                {currencyValues.map((curr, index) => (<div key={index} className={`mr-4 px-6 md:px-10 ${styles.currencyValues}`}>
                    <div className={`flex items-center mb-1 ${styles.currencyValuesText}`}>
                        <span>{curr.icon}</span>
                        <span className={`ml-2`}>{curr.text}</span>
                    </div>
                    <div>
                        <span className={`${styles.currencyValues_Values} ${index === 0 ? `${styles.currencyValues_change}` : ''}`}>{usd24Values[curr.key]?.toLocaleString(undefined, {minimumFractionDigits: 2})} <span>{index !== currencyValues.length - 1 && '+1.25%'}</span></span>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

export default DashboardTop
