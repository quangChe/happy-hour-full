import React from 'react';
import './VenueCard.scss';

export default class VenueCard extends React.Component {
  
  render() {
    if (!this.props) return null;
    
    else {
      const { handleClick, venue, width } = this.props;
      const cardStyle = {
        width,
        backgroundImage: `url(${venue.image_url})`
      };
  
      return (
        <div className="venue-card"
            style={cardStyle} >
          <div className="card-overlay">
            <p onClick={() => handleClick(venue.id)} className="name">{venue.name}</p>
          </div>
        </div>
      )
    }
  }
}