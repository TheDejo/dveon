import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app



class ImageLightBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      lightboxIsOpen: true
    };
  }

  closeLightbox = () => {
    this.props.onclose();
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const images = this.props.images;

    return (
      <div>
          <Lightbox
            onClick={this.state.lightboxIsOpen}
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={()=>this.closeLightbox()}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
      </div>
    );
  }
}

export default  ImageLightBox;