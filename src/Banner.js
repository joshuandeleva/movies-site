import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import './Banner.css'
function Banner() {
	//set of states needed to be passed in the api to get moovie and also movie description
	const [movie, setMovie] = useState([]);
	//fetching of random movies from the api showed on the banner
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length)
				]
			);
		}
		fetchData();
    }, []);
	console.log(movie)
	//truncates the movie description in the heading
    function truncate(str, n) {
        return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
	}
	//banner description ofnthe movie after refreshing your browser
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
			}}
		>
			<div className="banner_contents">
				<h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
				<div className="banner_buttons">
					<button className="banner_button">Play</button>
					<button className="banner_button">My List</button>
                </div>
                <h1 className="banner_description">
                   {truncate(movie?.overview , 150)}
                    
                </h1>
            </div>
            <div className="banner--fadeBottom">
                
            </div>
		</header>
	);
}

export default Banner;
