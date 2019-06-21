import React from 'react';
import './VenueCardList.scss';
import VenueCard from './VenueCard/VenueCard';

export default class VenueCardList extends React.Component {
  state = {
    width: window.innerWidth,
    scrollPosition: 0,
  }

  updateDimensions = () => {
    const carousel = this.refs[this.props.id];
    this.setState({ 
      width: window.innerWidth, 
    });
    return carousel.scrollTo(0, 0);
  }

  autoScroll = () => {
    const carousel = this.refs[this.props.id];
    const { width, scrollPosition} = this.state;
    if (scrollPosition < carousel.scrollWidth) {
      this.setState({scrollPosition: scrollPosition + width})
      return carousel.scrollBy(width/3, 0);  
    }
    this.setState({scrollPosition: 0});
    return carousel.scrollTo(0, 0);
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.AUTO_SCROLLING = window.setInterval(this.autoScroll, 8000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
    clearInterval(this.AUTO_SCROLLING);
  }

  render() {
    const { id, venues, venueClick } = this.props;
    const { width } = this.state; 

    return (
      <div className="venues-container">
        <div ref={id} className="venues-scrollbox">
          { venues && venues.map(venue =>
              <VenueCard handleClick={venueClick} key={venue.id} venue={venue} width={width}/>
            )   
          }
        </div>
      </div>
    )
  }

}
