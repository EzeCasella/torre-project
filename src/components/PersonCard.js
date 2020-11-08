function PersonCard(props) {
    return (
        <div className="card">
            <img src="" />
            <div >
                <h4><b>{props.person.name}</b></h4>
                <p>{props.person.professionalHeadline}</p>
            </div>
        </div>
    )
}

export default PersonCard