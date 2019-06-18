import './Media.css';

import React, {Component} from 'react';
import {getVimeoOrYoutubeSrc} from 'dev-analise';
import {isInViewportPercentage} from '../utils/helper';

class Media extends Component {
  constructor (props) {
    super(props);
    this.refFigure = React.createRef();
  }

  componentDidMount () {
    document.querySelector('.gallery__modal').addEventListener('scroll', this.handleScroll);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount () {
    document.querySelector('.gallery__modal').removeEventListener('scroll', this.handleScroll);
    document.body.style.overflow = 'auto';
  }

  handleScroll = () => {
    const {currentMediaIndex, history} = this.props;
    if (isInViewportPercentage(this.refFigure, .4)) {
      // se for 20% a url da ultima imagem (se for pequena) nunca vai ser dela, por isso optamos por fingir que não vimos
      history.push({search: '?gallery=1#' + currentMediaIndex});
    }
  };

  render () {
    const {currentMedia, currentMediaIndex} = this.props;
    const vimeoOrYoutubeSrc = getVimeoOrYoutubeSrc(currentMedia.src);
    return (
      <figure
        className = "figure"
        id = {currentMediaIndex}
        ref = {this.refFigure}
      >
        {vimeoOrYoutubeSrc ? (
          <div className = "aspect__ratio__container">
            <iframe
              allowFullScreen = {true}
              className = "aspect__ratio__element"
              src = {vimeoOrYoutubeSrc}
              title = {currentMedia.src}
            />
          </div>
        ) : (
          <img alt = {currentMedia.caption} src = {currentMedia.src}/>
        )}
        <figcaption>{currentMedia.caption}</figcaption>
      </figure>
    );
  }
}

export default Media;
