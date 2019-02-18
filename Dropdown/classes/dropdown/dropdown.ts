
import { LitElement, customElement, property, html } from '../../../node_modules/lit-element/lit-element';
import '../dropdown-header/dropdown-header.js';
import '../dropdown-element/dropdown-element.js';

@customElement('custom-dropdown')
export class Dropdown extends LitElement {
    @property({type: Number}) size;
    @property({type: Array}) elements;
    @property({type: String}) headerText;
    @property({type: Boolean}) childsVisibility;
    constructor(){
        super();
        this.size = 25;
        this.headerText = "Dropdown";
        this.childsVisibility = false;
    }
 
    render(){
        return html`
            <dropdown-header @click ="${this.handleClick}" text="${this.headerText}" size="${this.size}"></dropdown-header>
            ${this.elements.map(
                item => {
                    return html`<dropdown-element text="${item}" size="${this.size}" 
                    style="${this.childsVisibility ? `visibility: visible` : `visibility: hidden`}"> </dropdown-element>`;
                }
            )}
        `;
    }
    handleClick(): void{
        this.childsVisibility = !this.childsVisibility;
        this.render();
    }
}