export const apiKey = "11b426369b869cfcd5679df119ee2792";

export const getTrendingAPI = () => {
    return fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
    )
        .then((response) => response.json())
        .then((results) => Promise.resolve(results));
};
