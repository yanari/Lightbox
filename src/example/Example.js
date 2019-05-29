import React, {Fragment, useState} from 'react';
import Lightbox from '../Lightbox/index';

import './Example.css';

function Example () {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const imagesList = [
    {caption: 'sa;daslkdha;klsdh salkdhalsd sahdas', src: 'https://images.unsplash.com/photo-1556909172-8c2f041fca1e'},
    {caption: 'aslkjd lskja lksjd jal', src: 'https://images.unsplash.com/photo-1558208846-f197910b7707'},
    {caption: 'Linda imagem parabéns!!!!', src: 'https://images.unsplash.com/photo-1558197385-575ecbf37bef'},
    {caption: 'Outra maravilhosa imagem', src: 'https://images.unsplash.com/photo-1558239184-be7815bc8965'},
  ];

  const handleOpenImage = (index) => {
    setCurrentImage(index);
    setShow(!show);
  };

  return (
    <Fragment>
      {imagesList.map((data, index) => {
        return (
          <button className = "thumbnail" onClick = {() => handleOpenImage(index)}>
            <img alt = {data.caption} src = {data.src}/>
          </button>
        );
      })}
      <Lightbox
        currentImage = {imagesList[currentImage]}
        images = {imagesList}
        onClickNext = {() => setCurrentImage(currentImage + 1)}
        onClickPrev = {() => setCurrentImage(currentImage - 1)}
        onClose = {() => setShow(false)}
        isOpen = {show}
      />
    </Fragment>
  );
}

export default Example;
