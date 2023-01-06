
import { Parallax } from 'react-parallax'
import './App.css'
import img1 from './assets/fantasy-2049567_1920.jpg'
import img2 from './assets/new-york-city-2263343.jpg'
import img3 from './assets/city-5966606_1920.jpg'
import img4 from './assets/the-pilgrims-guide-4487889_1920.jpg'



function App() {

  return (
    <div className="App">
            <Parallax strength={300} bgImage={img4}>
      <div className="content">
        <div className="text-content">
           Normal parallax
        </div>
      </div>
      </Parallax>
      <Parallax strength={300} blur={{min:-15, max:15}} bgImage={img2}>
      <div className="content">
        <div className="text-content">
          Blur parallax
        </div>
      </div>
      </Parallax>
      <Parallax strength={-600} bgImage={img3}>
      <div className="content">
        <div className="text-content">
          Reverse parallax
        </div>
      </div>
      </Parallax>
            <Parallax strength={600} bgImage={img1}>
      <div className="content">
        <div className="text-content">
          Normal parallax
        </div>
      </div>
      </Parallax>

    </div>
  )
}

export default App
