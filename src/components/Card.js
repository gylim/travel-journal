import React from 'react';
import pin from '../images/map_pin.png';

export default function Card(props) {
    return(
        <div className='card'>
            <img src={props.imageUrl} className="card-img"/>
            <div className='card-stuff'>
                <section className="card-row-1">
                    <img src={pin} className="card-pin"/>
                    <p className='card-loc'>{props.location}</p>
                    <a className='card-map' href={props.googleMapsUrl} >View on Google Maps</a>
                </section>
                <p className='card-title'>{props.title}</p>
                <p className='card-date'>{props.startDate} - {props.endDate}</p>
                <p className='card-desc'>{props.description}</p>
            </div>
        </div>
    )
}