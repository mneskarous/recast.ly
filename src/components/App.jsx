import exampleVideoData from '../data/exampleVideoData.js';

import VideoList from './VideoList.js';

import VideoPlayer from './VideoPlayer.js'

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

      alone: exampleVideoData[0],
      inList: exampleVideoData,

    }
  }

  onVideoTitleClick() {
    this.setState({
      alone:
    })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.alone} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.inList} />
          </div>
        </div>
      </div>
    );
  }

}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
