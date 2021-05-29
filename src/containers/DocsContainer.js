import React, { Component } from 'react';
import Markdown from '../components/Markdown';

export default class DocsContainer extends Component {
  state = {
    markdown:
`
# Susan's Docs
Hello, welcome to my docs page I use to keep track of coding concepts useful to me (and hopefully to you as well).

## Notation
\`<Content in between arrow brackets like so>\` means to replace the brackets and content with what the content describes.
> Example: \`git show <SHA here>\` becomes \`git show 690c6ed86164e1b57b6e3cd397c5d611eba66654\`

## Definitions
**SHA or SHA-1**: Simple Hashing Algorithm or Secure Hash Algorithm that creates a unique 40 character identifier.
Every git commit has this identifier.
There is also a short version of this that you will see in the commit history of a repository on Github.

## Git
### Situations

#### My PR has merge conflicts with the main branch.
1. \`main\` git pull
1. \`my-branch\` git rebase main
1. Resolve merge conflicts and commit them
1. \`my-branch\` git push -f\\
    (Always double check you are in your branch when you force push with -f)
---

## Styling for this site
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

### More markdown features using react-markdown and Github markdown styles
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
