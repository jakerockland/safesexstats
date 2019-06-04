import React, { Component } from 'react';
import Link from './Link';

export default class TwoMethodHeader extends Component {
    render() {
        return <h2>
          My partner and I use <Link link={this.props.linkA} title={this.props.titleA} /> or <Link link={this.props.linkB} title={this.props.titleB} />...
        </h2>
    }
}
