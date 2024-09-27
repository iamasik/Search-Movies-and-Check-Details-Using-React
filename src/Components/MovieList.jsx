import { Link } from "react-router-dom";
function MovieList({item}) {
    const backgroundStyle = {
        backgroundImage: `url(${item.Poster})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat', 
      };
    return (
        <div className={"card"} style={backgroundStyle}>
            {/* <img src={item.Poster} alt={item.Title} /> */}
            <div className="CardDetails">
                <div className="innerBox">
                <p className="title">{item.Title}</p>
                <p>Year: {item.Year}</p>
                <Link to={`MovieView/${item.imdbID}`}><button>View More</button></Link>
                </div>
            </div>
        </div>
    )
}

export default MovieList
