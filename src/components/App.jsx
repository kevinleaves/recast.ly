import exampleVideoData from '../data/exampleVideoData.js'
import Search from './Search.js'
import VideoList from './VideoList.js'
import VideoPlayer from './VideoPlayer.js'

// create clone of imported exampleVideoData as state
var App = () => {
  const [videos, setVideos] = React.useState([...exampleVideoData])

  // // create current video state
  const [currentPlaying, setCurrentPlaying] = React.useState(exampleVideoData[0])

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer currentPlaying={currentPlaying}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} setCurrentPlaying={setCurrentPlaying}/>
        </div>
      </div>
    </div>
  )
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
