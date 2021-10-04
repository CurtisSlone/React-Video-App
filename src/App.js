import './App.css';
import Video from './components/Video'

function App() {
  return (
    <div className="App">
      <div className="app__videos">
      <Video 
        url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
        channel="the_user1"
        description="A Short Video"
        likes={345}
        shares={200}
        messages={90}
      />
      <Video 
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
        channel="theUSER333"
        description="Another Short Video"
        likes={145}
        shares={20}
        messages={67}
      />
      </div>
    </div>
  );
}

export default App;
