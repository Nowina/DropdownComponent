
import { LitElement, customElement, property, html } from '../../../node_modules/lit-element/lit-element';
import { DropdownHeader } from '../dropdown-header/dropdown-header';
import { DropdownElement } from '../dropdown-element/dropdown-element';
import '../dropdown-header/dropdown-header.js'

@customElement('custom-dropdown')
export class Dropdown extends LitElement {
    @property({type: Number}) size;
    @property({type: Array}) elements;
    @property({type: String}) headerText;
    private childsVisibility:Boolean;
    constructor(){
        super();
        this.size = 25;
        this.headerText = "Dropdown";
        this.elements = ["Link1", "Link2"];
        this.childsVisibility = false;
    }
 
    render(){
        return html`
            <dropdown-header @click = "${this.handleClick}" text="${this.headerText}" size="${this.size}" ></dropdown-header>
        `;
    }
    handleClick(): void{
        this.childsVisibility = !this.childsVisibility;
        this.render();
    }
}