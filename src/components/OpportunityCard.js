// import { useEffect, useState } from "react"

import moment from 'moment'

import orgDefaultImage from '../assets/organization_default_logo.png'
import Organization from './Organization'
import PersonCard from './PersonCard'

function OpportunityCard(props) {
    // const [organizations, setOrgs] = useState([])
    // useEffect(()=>{
    //     console.log(props)
    //     setOrgs(props.opportunity.organizations)
    // },[])
    const organization = props.opportunity.organizations && props.opportunity.organizations.length && props.opportunity.organizations[0];
    const opportunityType = (props.opportunity.type).replace("-"," ")
    const opportunityDeadline = props.opportunity.deadline ? moment(props.opportunity.deadline).format("MM/DD/YYYY") : null
    const orgImageSource = organization && organization.picture || orgDefaultImage
    const orgName = organization && organization.name || "-"
    return (
        <div key={props.opportunity.id} className="Opportunity-card">
            
            <div >
                <div className="flex-row Card-header">
                    <img className="Organization-img"  src={orgImageSource} alt=""/>
                    <div>
                        <p><b>{props.opportunity.objective}</b></p>
                        <p className="mt-5">@ {orgName}</p>
                    </div>
                </div>
                <span className="Opportunity-type-tag">{opportunityType}</span>
            </div>
            <div className="flex-row">
                {opportunityDeadline && <p><b>Until {opportunityDeadline}</b></p>}
                {/* Now the Team members */}
                <div>

                </div>
            </div>
            
        </div>
    )
}

export default OpportunityCard