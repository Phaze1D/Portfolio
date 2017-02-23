import Handlebars from 'handlebars'
import { context } from './data.js'


let initHBS = () => {
  console.log(context);
  Handlebars.registerPartial('cardPartial', document.getElementById('card-partial').innerHTML);
  let source = document.getElementById('sections-template').innerHTML;
  let template = Handlebars.compile(source);
  let html = template(context);
  document.getElementById('sections-template').parentNode.innerHTML = html;
}


exports.initHBS = initHBS;
