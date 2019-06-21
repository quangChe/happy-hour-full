import React from 'react';
import './NavButton.scss';

export default class NavButton extends React.Component {
  state = {
    open: this.props.open ? this.props.open : false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({open: nextProps.open})
    }
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
    this.props.onClick(!this.state.open);
  }

  render() {
    const styles = {
      container: {
        background: this.state.open ? 'transparent' : '#dad3b8',
      },
      line: {
        background: this.state.open ? '#dad3b8' : '#333333',
      },
      lineTop: {
        transform: this.state.open ? 'translateX(3px) rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? 'translateX(16px)' : 'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateY(5px) translateX(2px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      }
    }

    return (
      <div className="nav-btn-container" style={styles.container}
        onClick={this.handleClick}>
        <div className="line" style={{...styles.line, ...styles.lineTop}}/>
        <div className="line" style={{...styles.line, ...styles.lineMiddle}}/>
        <div className="line" style={{...styles.line, ...styles.lineBottom}}/>
      </div>
    )
  }
}