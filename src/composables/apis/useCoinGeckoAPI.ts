import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const useCoinGeckoAPI = <T>(url: string): [T | null, boolean] => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<T> = await axios.get('https://api.coingecko.com/api/v3/' + url);
                setData(response.data);
                console.log(response.data)
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [url]);

    return [data, isLoading];
};

export default useCoinGeckoAPI
