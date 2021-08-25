const baseURL = "https://api.unsplash.com/";

const API_KEY = "d4JNVJ_lF02T4dT3s38yYxLbgauT77X2qoFopvAH2Vo";

// for Get images
export const Trending = async() => {
    try{
        const res =await fetch(`${baseURL}/photos?per_page=30`, {
            headers : {
                Authorization: `Client-ID ${API_KEY}`
            }
        });

        if(!res.ok){
            console.error("failed", res.status);
            return;
        }
        const json = await res.json();
        // console.log(json);
        return json;
    }
    catch(error){
        console.log(error);
    }
}

// for Search Images
export const SearchImages = async(query) => {

    const url = new URL(`${baseURL}/search/photos`); 
    url.search = new URLSearchParams({
        per_page :30,
        query: query,
    }); 
    try{
        const res =await fetch(url, {
            headers : {
                Authorization: `Client-ID ${API_KEY}`
            }
        });

        if(!res.ok){
            console.error("failed", res.status);
            return;
        }
        const json = await res.json();
        // console.log(json);
        return json.results;
    }
    catch(error){
        console.log(error);
    }
}