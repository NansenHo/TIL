# `dangerouslySetInnerHTML`

```jsx
import React, {Component} from 'react';

const data = '<h1>hello</h1>' // 富文本数据

class App extends Component {
    render() {
        return (
            // 这样才可以将富文本数据渲染出来
            <div dangerouslySetInnerHTML={{__html: data}}>
            {/* React 为防止第三方数据的 XSS 攻击，就都转成字符串了 */}
            {/*{data} // <h1>hello</h1> */}
            </div>
        );
    }
}

export default App;
```