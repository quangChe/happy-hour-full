import React from 'react';
import colors from '../../styles/colors';
import './NavBar.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Logo from '../Utils/Logo';
import NavButton from './NavButton/NavButton';
import NavSlider from './NavSlider/NavSlider';

export class NavBar extends React.Component {

  state = {
    menuOpen: false,
  }

  openNavMenu = (open) => {
    console.log(open);
    this.setState({menuOpen: open})
  }

  renderLogo = () => {
    const { menuOpen } = this.state;
    return menuOpen 
      ? (<Logo/>)
      : (<Link to="/" style={{textDecoration: 'none'}}><Logo/></Link>);
  }

  render() {
    const { loading } = this.props;
    const { menuOpen } = this.state;

    return loading
      ? null
      : (
        <div id="navigation-container">
          <NavSlider opened={menuOpen}/>
          <div className="navbar" style={{color: colors.black}}>
            {this.renderLogo()}
              <NavButton onClick={(e) => this.openNavMenu(e)} open={false}/>
          </div>
        </div>
      );
  }
}

const mapStateToProps = ({businesses: {nearbyBusinesses}}) => {
  return {loading: nearbyBusinesses.loading};
}

export default connect(mapStateToProps)(NavBar);