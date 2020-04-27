// export function helloWorld () {
//   console.log('Hello world!')
// }

import './hello-world.scss';
//refactor to a component - no React used!
export class HelloWorldButton {
  //most browsers don't know how to use properties of class for css, only methods, so we will need Babel for
  //referencing a property in button.classList.add()
  buttonCssClass = 'hello-world-button';
  render () {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    //classList.add adds a css class to the element
    button.classList.add(this.buttonCssClass);
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'Hello Cipi!';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }
    const body = document.querySelector('body');
    body.appendChild(button);
  }

}