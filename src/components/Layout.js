import React, { Component } from "react";
import Geo from "./Geo";

class Layout extends Component {
  render() {
    return (
      <div>
        <article class="vh-100 dt w-100 bg-green">
          <div class="dtc v-mid tc white ph3 ph4-l">
            {/* <h1 class="f6 f2-m f-subheadline-l fw6 tc"> */}
            <h1 class="f3">
              <Geo />
              <span role="img" aria-label="Flower">
                🌺🌻🌲
              </span>
            </h1>
          </div>
        </article>
      </div>
    );
  }
}

export default Layout;
