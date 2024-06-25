import './style.css';
import app from './app'

// "root node" element
const appDiv = document.querySelector('#app'); //grabs app element
app(appDiv); //invokes app function giving it this appDiv
