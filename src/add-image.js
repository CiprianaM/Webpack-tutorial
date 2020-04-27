//import the image url
import Doggie from './doggie.jpg';

//create img element and append it to the DOM
export function addImage () {
  const img = document.createElement('img');
  img.alt = 'doggie';
  img.width = 300;
  img.src = Doggie;
  const body = document.querySelector('body');
  body.appendChild(img);
}