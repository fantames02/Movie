const API_KEY = ""; // Api Key goes here; Note: don't commit this we will learn a better way.
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

/**
 * Query API for Movies that match the search term.
 * @param {string} searchTerm Search term to find movies that match it.
 * @return {Promise} Returns a Promise that contains a List of movies that match search term.
 */
export const getMoviesBySearchTerm = async (searchTerm) => {
    try {
        const response = await fetch(`${API_URL}s=${searchTerm}`);
        const data = await response.json();
        if (data.Response === 'True') {
            return data.searchTerm;
        }
    } catch (error) {
        console.error(error);
    }
    return [];
};

/**
 * Query API for Movies that match the search term.
 * @param {string} id Search term to find movies that match it.
 * @return {Promise} Returns a Promise that contains a Movie that matches id, otherwise null.
 */
export const getMovieDetailsById = async (id) => {
    try {
        const response = await fetch(`${API_URL}s=${id}`);
        const data = await response.json();
        if (data.Response === 'True') {
            return data
        }
    } catch (error) {
        console.error(error);
    }
    return null;
}