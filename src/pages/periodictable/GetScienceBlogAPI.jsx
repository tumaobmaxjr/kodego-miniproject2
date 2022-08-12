import { useEffect, useState } from "react";
import ScienceBlog from "./ScienceBlog";


const GetScienceBlogAPI = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=fca0df5545064e5f8fe42a84aea93e6d')
            .then(response => {
                return response.json()
            })
            .then(result => {
                console.log(result)
                setData(result);
            })
            .catch(error => console.log('error', error));
    }, []);

    return (
        <>
            <ScienceBlog data={data} header={"BLOGS OF THE DAY!"} />
        </>
    );
}

export default GetScienceBlogAPI;