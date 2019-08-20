import * as ReactDOM from "react-dom";
import * as React from "react";
import Icon from "./icon";

const fn = () => {
  console.log('fn')
}

ReactDOM.render(<div>
  <Icon name="wechat-fill" onClick={fn}/>

</div>, document.querySelector('#app'));