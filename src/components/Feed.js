import { useEffect, useState} from 'react'

import Api from '../ApiUtils'

function Feed() {

    const [names, setNames] = useState([]);

    const processResponse = (resp) => {
        setNames(resp.results);
    }

    useEffect(()=>{
        /**
         * api.get('url.com').then(response=>processResponse(response.data))
         */
        // console.log(Api.searchUrl)
        // Api.get("search.torre.co/opportunities/_search/?offset=0&size=15").then(data => processResponse(data))
        // fetch("https://search.torre.co/opportunities/_search/?offset=0&size=15",{method:'POST'})
        //     .then(response => response.json())
        //     .then(data => processResponse(data))
        Api.getOpportunities().then(data => processResponse(data))
    },[])

    return (
        <div>
            {names.map((name)=>
                (
                    <h4>{name.objective}</h4>
                )
            )}
        </div>
    )
}

export default Feed