var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, customElement, property } from '../../../node_modules/lit-element/lit-element';
let DropdownElement = class DropdownElement extends LitElement {
    constructor() {
        super();
        this.text = "Hello world again";
        this.size = 25;
        this.visibility = true;
    }
    static get styles() {
        return css `
      .box-text{
        margin: 2px;
        font-size: 1em;
        text-align: left;
        color: rgb(240, 236, 236);
      }
      .element {
        padding: 2px;
        border-style: solid;
        border-color: rgb(134, 134, 134);
        border-spacing: 1px;
        border-width: 0.5px;
        border-radius: 2px;
        background-color: rgb(158, 158, 158);
        z-index: 1;
      }
      :hover{
        background-color: rgb(165, 165, 165);
        border-width: 1px;
      }
    `;
    }
    render() {
        return html `
    <div class="element" style = "height: ${this.size}px; width: ${this.size * 6}px; 
     ${this.visibility ?
            `visibility: visible` : `visibility: hidden`}" >
      <p class="box-text">${this.text}</p>
    </div>`;
    }
};
__decorate([
    property({ type: String })
], DropdownElement.prototype, "text", void 0);
__decorate([
    property({ type: Number })
], DropdownElement.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], DropdownElement.prototype, "visibility", void 0);
DropdownElement = __decorate([
    customElement('dropdown-element')
], DropdownElement);
export { DropdownElement };
//# sourceMappingURL=dropdown-element.js.map