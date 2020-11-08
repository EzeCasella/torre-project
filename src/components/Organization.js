function Organization(props) {
    return (
        <div key={props.organization.id}>
            <img 
                src={props.organization.picture} 
                alt={props.organization.name}
            />
            <p>{props.organization.name}</p>
        </div>
    )
}

export default Organization