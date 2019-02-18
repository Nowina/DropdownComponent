
import { LitElement } from '../../../node_modules/lit-element/lit-element';
import { DropdownHeader } from '../dropdown-header/dropdown-header';
import { DropdownElement } from '../dropdown-element/dropdown-element';

class Dropdown extends LitElement {
    elements: Array<DropdownElement>;
    mainElement: DropdownHeader;
    childsVisibility: boolean;
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