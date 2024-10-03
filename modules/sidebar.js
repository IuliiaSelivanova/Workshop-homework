import Element from "../constructor/Element.js";

const smallCardData = [
  'Small card 1',
  'Small card 2',
  'Small card 3',
  'Small card 4',
  'Small card 5',
];

const smallCards = smallCardData.map(el => new Element('div', 'smallCard', el).get());

const sidebar = new Element('div', 'sidebar', smallCards); 

export default sidebar;