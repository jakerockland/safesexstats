import React, { Component } from 'react';

export default class Link extends Component {
    render() {
        return <a
          className="link"
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.props.title}
        </a>
    }
}
