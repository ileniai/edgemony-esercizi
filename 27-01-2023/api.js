const API_KEY = "b130743094e2ec9986e5b10108a7cabe";
const BASE_URL = "https://api.themoviedb.org/3/";

//https://api.themoviedb.org/3/tv/550seasons/1?api_key=<<api_key>>&language=

const GET = async(type = "tv", resource = "550") => {
    const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`)
    const data = await res.json();
    return data;
};

    const searchTvShow = async (searchInput) => {  
    const res = await 
    fetch(`https://api.themoviedb.org/3/search/tv?api_key=b130743094e2ec9986e5b10108a7cabe&query=${searchInput}`) 
    const data = await res.json()  
    return data}


export{GET, searchTvShow};