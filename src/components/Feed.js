import { useEffect, useState} from 'react'
import Api from '../ApiUtils'

import Header from './Header'
import OpportunityCard from './OpportunityCard'

function Feed() {

    const [opportunities, setOpportunities] = useState([]);

    const processResponse = (resp) => {
        setOpportunities(resp);
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
        <div className="App-body">
            <Header/>
            <div className="Opportunities-container">
                {opportunities.map((opportunity)=>
                    (
                        <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                    )
                )}
            </div>
            
        </div>
    )
}

export default Feed