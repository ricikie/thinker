import React, { Component } from 'react';

// Additional
import Nav from './Components/Navbar/Navbar';
import Wrapper from './Components/Content/Wrapper';

import Signin from './Components/Auth/Signin';
import Register from './Components/Auth/Register';

// API
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '883d6bdfe6844ad0bcb92c85933e04c6'
 });


// Deployment
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      // can use library
      route:'signin',
      signedIn: false,
    }
  }

  calculateBoxFace = (data) => {
    const detectedFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const thumbnail = document.getElementById('thumbnailImg');
    const detectedWidth = Number(thumbnail.width);
    const detectedHeight = Number(thumbnail.height);
    return {
      leftCol: detectedFace.left_col * detectedWidth,
      topRow: detectedFace.top_row * detectedHeight,
      rightCol: detectedWidth - (detectedFace.right_col * detectedWidth),
      bottomRow: detectedHeight - (detectedFace.bottom_row * detectedHeight)
    }
  }

  setDetectedBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = (event) => {
    this.setState({imageUrl : this.state.input});
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.setDetectedBox(this.calculateBoxFace(response)))
    .catch(err => console.log(err));
  }


  // pageRoute
  onRouteChange = (route) => {
    this.setState({ route : route });
    if(route === 'home') {
      this.setState({signedIn : true})
    } else {
      this.setState({signedIn : false})
    }
  }

  render(){
    return(
      <div className="App">
        <Nav 
          onRouteChange={this.onRouteChange}
          isSignedin={this.state.signedIn}
        />
        { this.state.route ==='home'
          ? 
            <Wrapper
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              imageUrl={this.state.imageUrl}
              box={this.state.box}
            />          
          :( this.state.route === 'register' )
            ?
              <Register onRouteChange={this.onRouteChange}/>
            :
              <Signin onRouteChange={this.onRouteChange}/>
        }
      </div>
    );
  }
}
export default App;
