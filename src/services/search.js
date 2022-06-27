const FETCH_OPTIONS = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '71648bafecmshf9adc750d6111aep15b543jsn998506e31c26',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
export default async function getItems(query) {
    const searchPromise = await fetch(
        `https://weatherapi-com.p.rapidapi.com/search.json?q=${query}`,
        FETCH_OPTIONS
    )
    const data = await searchPromise.json();
    return data;
}
