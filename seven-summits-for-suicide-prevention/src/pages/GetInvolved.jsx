import React from 'react';
import LogomarkStarburst from '../assets/graphics/LogomarkStarburst.png';
import { Icon } from 'semantic-ui-react'

export default class GetInvolved extends React.Component {
  render() {
    return (
      <div id="destinationsPage">
        <div className="hero">

        </div>
        <div className="scroll-link">
          <a href="#scroll-anchor">
            <Icon color='white' name='angle double down' size='big' />
          </a>
        </div>
        <div id="scroll-anchor">

        </div>
      </div>
    )
  }
}