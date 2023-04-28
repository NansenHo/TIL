# React 表单

在 React 里，HTML 表单元素的工作方式和其他的 DOM 元素有些不同，这是因为表单元素通常会保持一些内部的 `state`。例如这个纯 HTML 表单只接受一个名称：

```html
<form>
  <label>
    名字:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="提交" />
</form>
```

此表单具有默认的 HTML 表单行为，即在用户提交表单后浏览到新页面。

如果你在 React 中执行相同的代码，它依然是有效的。

大多数情况下，使用 JavaScript 函数可以更方便的处理表单的提交， 同时还可以访问用户填写的表单数据。

React 如果要实现同样的效果，标准方式是使用「受控组件」。

## 受控组件 `input` 标签

```jsx
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: '',
            textareaValue: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = () => {
        return (e) => {
            this.setState({
                textValue: e.target.value
            })
        }
    }

    handleSubmit = () => {
        return (e) => {
            // 取消提交事件的默认刷新页面动作
            e.preventDefault()
            // 收集表单提交的内容
            console.log(this.state.textValue);
        }
    }

    render() {
        return (
            // 取消提交事件的默认刷新页面动作
            <form onSubmit={this.handleSubmit()}>
                <input
                    type="text"
                    value={this.state.textValue}
                    onChange={this.handleChange()}
                />
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

export default App;
```

## 受控组件 `textarea` 标签

```jsx
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textareaValue: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
				this.handleAreaChange = this.handleAreaChange(this)
    }

    handleSubmit = () => {
        return (e) => {
						// 取消提交事件的默认刷新页面动作
            e.preventDefault()
            // 收集表单提交的内容
            console.log(this.state.textareaValue);
        }
    }

    handleAreaChange = () => {
        return (e) => {
            this.setState({
                textareaValue: e.target.value
            })
        }
    }

    render() {
        return (
            // 取消提交事件的默认刷新页面动作
            <form onSubmit={this.handleSubmit()}>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    // textarea 里面的内容原本是写在标签中的，
                    // 但如果要做成受控组件，就要写到 value 里
                    value={this.state.textareaValue}
                    onChange={this.handleAreaChange()}
                ></textarea>
                <br/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

export default App;
```

## 受控组件 `select` 标签

```jsx
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 默认是是 "1" ，对应即是 shanghai ；如果默认是 "3" 则对应 guangzhou。
            // 单选 ↓
            // selectValue: '1'
            // 多选 ↓
            selectValue: ['1', '2'] 
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
    }

    
    handleSubmit = () => {
        return (e) => {
            // 取消提交事件的默认刷新页面动作
            e.preventDefault()
            // 收集表单提交的内容
            console.log(this.state.selectValue);
        }
    }

    handleSelectChange = () => {
        return (e) => {
            this.setState({
                selectValue: e.target.value
            })
        }
    }

    render() {
        return (
            // 取消提交事件的默认刷新页面动作
            <form onSubmit={this.handleSubmit()}>
                <select name="" id=""
                        // 多选 ↓
                        multiple：{true}
                        value={this.state.selectValue}
                        onChange={this.handleSelectChange()}
                >
                    <option value="0">beijing</option>
                    <option value="1">shanghai</option>
                    <option value="2">guangzhou</option>
                </select>
                <br/>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}

export default App;
```

## 处理多个输入

```jsx
import React, {Component} from 'react';

class MultiPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: false,
            numberOfGuests: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange = () => {
        return (e) => {
            let name = e.target.name
            let value = name === "isGoing" ? e.target.checked : e.target.value
            this.setState({
                // 属性求值
                // name 是变量，其值为 "isGoing" / "numberOfGuests"
                // 记住这种写法
                [name]: value
            })
        }
    }

    handleClick = () => {
        return (e) => {
            // 阻止提交表单时的默认页面刷新动作
            e.preventDefault()
            console.log(this.state.isGoing);
            console.log(this.state.numberOfGuests);
        }
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        是否参加：
                        {/* 该组件不是受控组件，故不需要 value */}
                        <input type="checkbox"
                               name="isGoing"
                               checked={this.state.isGoing}
                               onChange={this.handleChange()}
                        />
                    </label>
                    <br/>
                    <label>
                        来宾人数：
                        <input type="number"
                               name="numberOfGuests"
                               value={this.state.numberOfGuests}
                               onChange={this.handleChange()}
                        />
                    </label>
                    <br/>
                    <button onClick={this.handleClick()}>click</button>
                </form>
            </div>
        );
    }
}

export default MultiPick;
```

## 文件 `input` 标签

在 HTML 中，`<input type="file">` 允许用户从存储设备中选择一个或多个文件，将其上传到服务器，或通过使用 JavaScript 的 File API 进行控制。

```html
<input type="file" />
```

因为其 `value` 只读，所以它是 React 中的一个非受控组件。

## 受控输入空值

```jsx
import React, {Component} from 'react';

class MultiPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text"
                           value={this.state.textValue}
                           onChange={() => {}}
                    />
                </form>
            </div>
        );
    }

    componentDidMount() {
        this.setState({
            // 如果 textValue: null / undefined，
						// 那这个组件就会由一个受控组件变成一个非受控组件
            textValue: null
        })
    }
}

export default MultiPick;
```

## 非受控组件

在大多数情况下，我们推荐使用受控组件来处理表单数据。在一个受控组件中，表单数据是由 React 组件来管理的。

另一种替代方案是使用非受控组件，这时表单数据将交由 DOM 节点来处理。

要编写一个非受控组件，而不是为每个状态更新都编写数据处理函数，你可以 [使用 ref](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html) 来从 DOM 节点中获取表单数据。

```jsx
import React, {Component, createRef} from 'react';

class File extends Component {
    constructor(props) {
        super(props);
        this.file = createRef()
    }

    handleClick = () => {
        return () => {
            {/*读到 current 才真正是拿到了对象的引用*/}
            console.log(this.file.current.files[0].name);
        }
    }

    render() {
        return (
            <div>
                <input type="file" ref={this.file} />
                <button onClick={this.handleClick()}>get filename</button>
            </div>
        );
    }
}

export default File;
```

[Ant Design - The world's second most popular React UI framework](https://ant.design/) - 基于 React 的最好的组件库，由蚂蚁金服开发