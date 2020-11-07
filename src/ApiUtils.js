const BASE_URL = "https://"

const SEARCH_URL = "search.torre.co/"
const BIO_URL = "torre.bio/"
const TORRE_URL = "torre.co/"

class Api {

    static get = (url)=>
        fetch(BASE_URL+ url, {method: 'POST'}).then(response => response.json())

    static getOpportunities = () => 
        fetch(BASE_URL + SEARCH_URL+"opportunities/_search/?offset=0&size=5",{method:'POST'})
        .then(response => response.json())
    
}

export default Api