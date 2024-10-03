import Element from "../constructor/Element.js";
import section from "./section.js";
import sidebar from "./sidebar.js";

const content = new Element('div', 'content');
content.append(section.get());
content.append(sidebar.get());

export default content;