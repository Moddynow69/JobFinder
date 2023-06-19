import { useState, useEffect } from "react";
import axios from "axios";
import datafile from './datafile.json'
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': `${process.env.RAPID_API_KEY}`,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };
    const fetchData = async () => {
        setIsLoading(true);
        try {

    //API
            // const response = await axios.request(options);
            // setData(response.data.data);
            //JSON
            const response = datafile;
            setData(response.data);
            
            setIsLoading(false);
        } catch (error) {
            setError(error);
            alert("Error")
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data , isLoading , error , refetch};
}

export default useFetch;