var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, property, html } from '../../../node_modules/lit-element/lit-element';
import '../dropdown-header/dropdown-header.js';
import '../dropdown-element/dropdown-element.js';
let Dropdown = class Dropdown extends LitElement {
    constructor() {
        super();
        this.size = 25;
        this.headerText = "Dropdown";
        this.childsVisibility = false;
    }
    render() {
        return html `
            <dropdown-header @click ="${this.handleClick}" text="${this.headerText}" size="${this.size}"></dropdown-header>
            ${this.elements.map(item => {
            return html `<dropdown-element text="${item}" size="${this.size}" 
                    style="${this.childsVisibility ? `visibility: visible` : `visibility: hidden`}"> </dropdown-element>`;
        })}
        `;
    }
    handleClick() {
        this.childsVisibility = !this.childsVisibility;
        this.render();
    }
};
__decorate([
    property({ type: Number })
], Dropdown.prototype, "size", void 0);
__decorate([
    property({ type: Array })
], Dropdown.prototype, "elements", void 0);
__decorate([
    property({ type: String })
], Dropdown.prototype, "headerText", void 0);
__decorate([
    property({ type: Boolean })
], Dropdown.prototype, "childsVisibility", void 0);
Dropdown = __decorate([
    customElement('custom-dropdown')
], Dropdown);
export { Dropdown };
//# sourceMappingURL=dropdown.js.map