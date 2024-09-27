import { ContextValue } from "../Components/Auth"
import MovieList from "../Components/MovieList";
function Home() {
    const {Data,inputValue,setinputValue}=ContextValue()
    return (
        <div className="Container">
            <div className="SearchForm">
                <form>
                    <input type="text" name="Search" onChange={(e)=>setinputValue(e.target.value)} id="Search" value={inputValue}/>
                    <button type="submit">Search</button>
                </form>
            </div>
            <div className="MovieBox">
                {inputValue==="" && <h1>Start search your movie...</h1>}
                {Data?.data?.Response==="False" && inputValue!="" && <h1>Something is wrong</h1>}
                {Data===null && <h1>Loading</h1>}
                {Data?.data?.Search && Data?.data?.Search.map(item=><MovieList key={item.imdbID} item={item}/>)}
            </div>
        </div>
    )
}

export default Home
