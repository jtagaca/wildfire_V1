const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Fire Info</h2>  
            <ul>
                <li>TITLE: <strong>{ info.title }</strong></li>
                <li>ID: <strong>{ info.id }</strong></li>
                
                <li>DATE: <strong>{info.date}</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox



