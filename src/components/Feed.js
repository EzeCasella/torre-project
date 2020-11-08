import { useEffect, useState} from 'react'
import Api from '../ApiUtils'

import Header from './Header'
import OpportunityCard from './OpportunityCard'

function Feed() {

    const [opportunities, setOpportunities] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    const processResponse = (resp) => {
        setOpportunities(resp.opportunities);
        setTotalPages(resp.totalPages)
    }

    const navigateToStart = () => getOpportunitiesByPage(0)   
    const navigateToEnd = () => getOpportunitiesByPage(totalPages)   

    const navigateBackwards = () => currentPage > 0 && getOpportunitiesByPage(currentPage-1)
    const navigateForward = () => currentPage < totalPages && getOpportunitiesByPage(currentPage+1)   
    
    const getOpportunitiesByPage = (page) => {
        Api.getOpportunities(page)
                .then(data => {
                    processResponse(data)
                    setCurrentPage(page)
                })
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
            <div className="flex-row Pager">
                <p 
                    className="Navigator-item Navigator-arrow"
                    onClick={navigateToStart}>
                        {"<<"}
                </p>
                
                <p 
                    className="Navigator-item Navigator-arrow" 
                    onClick={navigateBackwards}>
                        {"<"}
                </p>
                
                <p 
                    className="Navigator-item">
                    {currentPage+1}...{totalPages+1}
                </p>
                
                <p 
                    className="Navigator-item Navigator-arrow" 
                    onClick={navigateForward}>
                        {">"}
                </p>
                
                <p 
                    className="Navigator-item Navigator-arrow"
                    onClick={navigateToEnd}>
                        {">>"}
                </p>
            </div>
        </div>
    )
}

export default Feed