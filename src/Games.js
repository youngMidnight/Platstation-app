import React, { Component } from "react";
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import img1 from "./assets/tls.jpg";
import "./style.css";
 
class Games extends Component {
  render() {
    return (
          <div className="contacts">
          <div className="contact-card">
              <img src="https://s3.gaming-cdn.com/images/products/6215/271x377/the-last-of-us-part-ii-cover.jpg"/>
              <h3> THE LAST OF US PART 2  </h3>
              <button onclick="https://www.thelastofus.playstation.com/';">
                View More
              </button>
          </div>
          <div className="contact-card">
              <img src="https://upload.wikimedia.org/wikipedia/en/b/b6/Ghost_of_Tsushima.jpg"/>
              <h3>Ghost of Tsushima</h3>
              <button onclick="window.location.href='https://w3docs.com';">
                View More
              </button>
              
          </div>
          <div className="contact-card">
              <img src="https://vignette.wikia.nocookie.net/sonicw/images/c/c0/Avengers_2020_cover_art.png/revision/latest?cb=20200301114548"/>
              <h3>Marvel's Avengers</h3>
              <button onclick="window.location.href='https://w3docs.com';">
                View More
              </button>
              
          </div>
          <div className="contact-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJpEasMppMFp-TldXzqMD3rKB6f60B5kt6ACymhysMlVJISnaL&usqp=CAU"/>
              <h3>CYBER PUNK 2077</h3>
              <button onclick="window.location.href='https://w3docs.com';">
                View more 
              </button>
            
          </div>
          </div>

          
          
          
  )
}
}

export default Games;