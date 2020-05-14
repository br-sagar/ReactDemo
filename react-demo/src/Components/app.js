

import React, { Component } from "react";
import Counters from "../Components/counters";
import Navbar from "../Components/navbar";
import FormData from "../Components/userInformation";
import SplitPane from "./splitPane";
import HandleHttpRequest from "./handleFetchMethod";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="mt-3 mb-3 bg-secondary" >
        <Navbar />
        <Counters />
        <div className="row justify-content-center">
          <FormData />
        </div>
        <div className="container-fluid">
          <SplitPane image="https://image.shutterstock.com/image-illustration/covid19-coronavirus-outbreak-virus-floating-600w-1662701254.jpg">
            <article>
              <h4 className="text-uppercase">COVID-19</h4>
              <p className="paragraph">
                Coronavirus disease (COVID-19) is an infectious disease caused
                by a newly discovered coronavirus. Most people who fall sick
                with COVID-19 will experience mild to moderate symptoms and
                recover without special treatment.
              </p>
            </article>
          </SplitPane>
          <SplitPane image="https://i.pinimg.com/736x/55/3c/50/553c50be9b34f7c4d04fb2445091a280.jpg">
            <article>
              <h4 className="text-uppercase">ELON MUSK</h4>
              <p className="paragraph">
                Elon Reeve Musk FRS is an engineer, industrial designer,
                technology entrepreneur, scientist and philanthropist. He is a
                citizen of South Africa, the United States, and Canada
              </p>
            </article>
          </SplitPane>
          <SplitPane image="https://wallpapertag.com/wallpaper/full/2/2/8/990628-free-vintage-desktop-wallpapers-1920x1080.jpg">
            <article>
              <h4 className="text-uppercase">The Eiffel Tower</h4>
              <p className="paragraph">
                The Eiffel Tower is a wrought-iron lattice tower on the Champ de
                Mars in Paris, France. It is named after the engineer Gustave
                Eiffel, whose company designed and built the tower
              </p>
            </article>
          </SplitPane>
        </div>
        <div className="row justify-content-center  bg-info">
          <HandleHttpRequest />
        </div>
      </div>
    );
  }
}

export default App;
