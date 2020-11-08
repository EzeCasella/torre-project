const BASE_URL = "https://"

const SEARCH_URL = BASE_URL + "search.torre.co/"
const BIO_URL = BASE_URL + "torre.bio/"
const TORRE_URL = BASE_URL + "torre.co/"

const OPPORTUNITIES_PER_PAGE = 9

class Api {

    static get = (url)=>
        fetch(BASE_URL+ url, {method: 'POST'}).then(response => response.json())

    static getOpportunities = (page) => {
        const offset = page? page * OPPORTUNITIES_PER_PAGE : 0;
        return fetch(`${SEARCH_URL}opportunities/_search/?offset=${offset}&size=${OPPORTUNITIES_PER_PAGE}`
        ,{method:'POST'})
        .then(response => 
            response.json()
        ).then((res) => ({
            opportunities:res.results,
            totalPages: Math.floor(res.total / 9)
        }))
    }
}

export default Api