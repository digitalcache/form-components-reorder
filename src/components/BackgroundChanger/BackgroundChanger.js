import React , { Component } from 'react'

const BackgroundChanger = (PassedComponent) =>
  class BackgroundChanger extends Component {
    render() {
        const hours = new Date().getHours()
        const isDayTime = hours > 6 && hours < 20
      return (
        <PassedComponent
          {...this.props}
          day={isDayTime}
          backgroundImage={'https://source.unsplash.com/user/erondu'}
        />
      )
    }
  }
  
export default BackgroundChanger
