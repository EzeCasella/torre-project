import profileDefaultImage from '../assets/default-profile-picture.png'

function MemberPreview(props) {

    const getMemberImage = (position) => 
        props.members[position] ? props.members[position].picture || profileDefaultImage : null
    
    return (
        <div className="flex-row ">
            <div className="flex-row-align-center">
                {[0,1,2].map(memberPosition => {
                    const memberImage = getMemberImage(memberPosition);
                    return(
                        memberImage && 
                        <div className="tooltip" style={{ zIndex: 3-memberPosition}}>
                            <span className="tooltiptext">{props.members[memberPosition].name}</span>
                            <img 
                                className="Member-preview" 
                                src={memberImage} 
                                alt="" 
                                
                            />
                        </div>
                ); 
                })}
                <p className="ml-5"><b>{props.members.length}</b></p>
            </div>
        </div>
    )
}

export default MemberPreview