// import { useEffect, useState } from "react"

import moment from 'moment'
import Organization from './Organization'
import PersonCard from './PersonCard'

function OpportunityCard(props) {
    // const [organizations, setOrgs] = useState([])
    // useEffect(()=>{
    //     console.log(props)
    //     setOrgs(props.opportunity.organizations)
    // },[])
    const opportunityType = (props.opportunity.type).replace("-"," ")
    const opportunityDeadline = moment(props.opportunity.deadline).format("MM/DD/YYYY")
    return (
        <div key={props.opportunity.id} className="Opportunity-card">
            
            <div >
                <div className="flex-row">
                    <img className="Organization-img"  src={props.opportunity.organizations[0].picture} alt=""/>
                    <div>
                        <p><b>{props.opportunity.objective}</b></p>
                        <p className="mt-5">@ {props.opportunity.organizations[0].name}</p>
                    </div>
                </div>
                <span className="Opportunity-type-tag">{opportunityType}</span>
            </div>
            <div className="flex-row">
                {props.opportunity.deadline && <p><b>Until {opportunityDeadline}</b></p>}
                {/* Now the Team members */}
                <div>

                </div>
            </div>
            
        </div>
    )
}

export default OpportunityCard