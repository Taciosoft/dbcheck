import React , {Component} from 'react'
import { RingLoader } from 'react-spinners'

class Spinner extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      }
    }
    render() {
      return (
        <div className='sweet-loading'>
          <RingLoader
            color={'#123abc'} 
            loading={this.state.loading} 
          />
        </div>
      )
    }
  }
 
export default Spinner;