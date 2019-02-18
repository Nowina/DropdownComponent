// import { DropdownElement } from './dropdown-element/dropdown-element';
// import { DropdownElementMain } from './dropdown-main/dropdown-main';
import { LitElement } from 'lit-element';

class Dropdown extends LitElement {
    // elements: Array<DropdownElement>;
    // mainElement: DropdownElementMain;
    // childsVisibility: boolean;
    constructor(){
        super();
        this.childsVisibility = false;
    }
    static get properties(){
        return {
            elements: {type: Array},
            childsVisibility: {type: Boolean}, //defines whether drowdown is opened or not
            childs: {type: Array}
        };
    }
    addElement(){
        
    }
    render(){
        return;
    }
}