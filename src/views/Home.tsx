import {Container} from "@mui/material";
import useCoinGeckoAPI from "../composables/apis/useCoinGeckoAPI.ts";
import DashboardTop from "../components/Dashboard/DashboardTop/DashboardTop.tsx";

const Home = () => {
    const [pairList, isLoading] =
        useCoinGeckoAPI<any>('simple/price?ids=bitcoin,ethereum,tether,binancecoin,pepe,solana&vs_currencies=usd&include_market_cap=true&include_24hr_change=true&include_24hr_vol=true')
    return (
        <>
            <Container maxWidth={'xl'} sx={{paddingTop: '82px', background: '#1C2127', paddingRight: '8px !important', paddingLeft: '8px !important'}}>
                {isLoading && <div>
                    Loading...
                </div>}
                {!isLoading && <DashboardTop list={pairList} />}
            </Container>
        </>
    )
}

export default Home
