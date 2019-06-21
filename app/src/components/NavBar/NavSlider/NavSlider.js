import React from 'react';
import './NavSlider.scss';
// import { Link } from 'react-router-dom';

export default class NavSliderMenu extends React.Component {
  render() {
    const { opened } = this.props;
    const styles = ['nav-menu', opened ? null : 'nav-menu-close'].join(' ');

    return (
      <div className={styles}>
        <ul>
          <li>Popular Sips</li>
          <li>Saved Sips</li>
          <li>Profile</li>
          <li>Settings</li>
        </ul>
      </div>
    )
  }
}