import React from 'react';
import { connect } from 'react-redux';

import VenueCardList from '../../components/VenueCardList/VenueCardList';
import LoadingSpinner from '../../components/Utils/LoadingSpinner';

import { fetchById } from '../../store/actions';

export class HomeScreen extends React.Component {

  searchVenue = async (e) => {
    await this.props.fetchById(e);
    console.log(this.props);
  }

  render() {
    const { nearbyBusinesses } = this.props.businesses;
    const height = window.innerHeight;
    const randomNumber = Math.round(Math.random() * 1000000);
    
    const loadingView = (
      <div style={{height}}>
        <LoadingSpinner/>
      </div>
    );
    
    const completeView = (
      <div style={{height}}>
        <VenueCardList id={randomNumber} venues={nearbyBusinesses.data} venueClick={this.searchVenue}/>
      </div>
    );

    return nearbyBusinesses.loading ? loadingView : completeView;
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {fetchById})(HomeScreen);