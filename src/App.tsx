import React from 'react';
import {MyComponent} from "./MyComponent";

function App() {
  return (
    <div className="App">
      <MyComponent stringProp="String"
                   stringRequiredProp={"Required String"}
                   booleanProp={true}
                   booleanRequiredProp={false}
                   unionProp={"alpha"}
                   unionRequiredProp={"charlie"}
                   numberProp={0}
                   numberRequiredProp={1}
                   cssProp={{margin: "0px"}}>
        Content
      </MyComponent>
    </div>
  );
}

export default App;
