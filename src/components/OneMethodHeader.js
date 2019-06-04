import React, { Component } from 'react';
import Link from './Link';

export default class OneMethodHeader extends Component {
    render() {
      return <h2>
        My partner and I use <Link link={this.props.link} title={this.props.title} />...
      </h2>
    }
}
