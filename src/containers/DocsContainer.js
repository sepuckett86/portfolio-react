import React, { Component } from 'react';
import Markdown from '../components/Markdown';

export default class DocsContainer extends Component {
  state = {
    markdown:
`
# Susan's Docs
## Work in progress
Hello, I am building out a docs page to keep track of coding tips I'd like to remember.
### Example of code snippet layout using Prism
~~~js
import React, { Component } from 'react';
import Markdown from '../components/Markdown';

...

render() {
  return (
    <Markdown content={this.state.markdown} />
  );
}
~~~

### More markdown features
A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* [ ] task list
* [x] checked item

A table:

| a | b |
| -: | :- |
| Yes | No |

---

\`code\`
`
  }

  render() {
    return (
      <Markdown content={this.state.markdown} />
    );
  }
}
