import React, {Component} from 'react'
import DogBreedImages from './DogBreedImages'
import request from 'superagent'
import { connect } from 'react-redux'


class DogBreedImagesContainer extends Component {
  state = { images: null }

  componentDidMount() {
    const breed = this.props.match.params.breed
    request
      .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
      .then(response => this.updateImages(response.body.message))
      .catch(console.error)
  }

  updateImages(images) {
    const tenImages = images.slice(0, 10)
    // turn into an action 

    const action = {
      type: 'UPDATE_IMAGES',
      payload: tenImages
    }

    this.props.dispatch(action)

  }

  render() {
    // console.log('Container props test:', this.props)
    return <DogBreedImages match={this.props.match} images={ this.state.images } />
  }
}

const mapStateToProps = (state) => {
  console.log('mapstatetoprops1', state)
  return {
    images: state
  }
}

export default connect(mapStateToProps)(DogBreedImagesContainer)