// export function helloWorld () {
//   console.log('Hello world!')
// }

import './hello-world.scss';
//refactor to a component - no React used!
export class HelloWorldButton {
  render () {
    const button = document.createElement('button');
    button.innerHTML = 'Hello World';
    //classList.add adds a css class to the element
    button.classList.add('hello-world-button');
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