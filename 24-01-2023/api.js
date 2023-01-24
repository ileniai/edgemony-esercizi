const BASE_URL = "https://dummyjson.com/"

const GET = async (endpoint) => {
    const response = await fetch (BASE_URL + endpoint);
    const data = await response.json();
    return data;
};

export {GET}