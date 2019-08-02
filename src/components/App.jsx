import exampleVideoData from '../data/exampleVideoData.js';

import VideoList from './VideoList.js';

import VideoPlayer from './VideoPlayer.js';

import searchYouTube from '../lib/searchYouTube.js';

import Search from './Search.js';

class App extends React.Component {
  constructor(props) {

    super(props);

    this.state = {

      alone: exampleVideoData[0],
      inList: exampleVideoData,
      clicked: '',
      changed: ''

    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    console.log(e.target.textContent);
    for (var i = 0; i < exampleVideoData.length; i++) {
      if (exampleVideoData[i].snippet.title === e.target.textContent) {
        this.setState({
          alone: exampleVideoData[i]
        })
      }
    }
  }

  handleChange(e) {
    console.log('changing');
    this.setState({
      changed: e.target.value
    })
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
<<<<<<< HEAD
            < Search />
=======
            <Search changed = {this.state.changed} handleChange = {this.handleChange}/>
>>>>>>> 5d17ef1d601db7aa92ec06feaa330731e285a3b0
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.alone} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.inList} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }

}





// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
