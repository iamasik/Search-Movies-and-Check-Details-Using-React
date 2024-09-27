import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
function MovieVIew() {
    const [Result,setResult]=useState(null)
    const Value= useParams()
    const url="https://www.omdbapi.com/?apikey=faaa0cb7&i="+Value.id
    async function useGetData(url) {
        const AllInfo= await axios.get(url)
        console.log(AllInfo);
        setResult(AllInfo)
    }
    useEffect(()=>{
        useGetData(url)
    },[])
    if(Result===null){
        return <div className="Container">
            <h1>Nothing to show..</h1>
        </div>
    }
    else{
        return (
            <div className="Container">
                <div className="FullDetails">
                    <div className="Img">
                        <img src={Result.data?.Poster} alt="" />
                    </div>
                    <div className="Details">
                        <h1>{Result.data?.Title}</h1>
                        <p><b>Actors:</b> {Result.data?.Actors}</p>
                        <p><b>Awards:</b> {Result.data?.Awards}</p>
                        <p><b>BoxOffice:</b> {Result.data?.BoxOffice}</p>
                        <p><b>Director:</b> {Result.data?.Director}</p>
                        <p><b>Genre:</b> {Result.data?.Genre}</p>
                        <p><b>Plot:</b> {Result.data?.Plot}</p>
                        <p><b>Released:</b> {Result.data?.Released}</p>
                        <p><b>Runtime:</b> {Result.data?.Runtime}</p>
                        <p><b>imdbRating:</b> {Result.data?.imdbRating}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieVIew
