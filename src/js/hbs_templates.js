import Handlebars from 'handlebars'
import { context } from './data.js'

/*
  Renders the handlebars templates at runtime. This can be improved with precomplied
  templates but for simplicity I did it at runtime.
  @params: null
  @return: null
*/
let initHBS = () => {
  Handlebars.registerPartial('cardPartial', document.getElementById('card-partial').innerHTML);
  let source = document.getElementById('sections-template').innerHTML;
  let template = Handlebars.compile(source);
  let html = template(context);
  document.getElementById('sections-template').parentNode.innerHTML = html;
}


exports.initHBS = initHBS;
