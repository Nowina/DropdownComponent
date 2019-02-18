var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, customElement, property } from '../../../node_modules/lit-element/lit-element';
let DropdownHeader = class DropdownHeader extends LitElement {
    constructor() {
        super();
        this.text = "Dropdown";
        this.size = 25;
        this.arrowDirection = true;
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
                border-width: 1px;
                border-radius: 4px;
                background-color: rgb(114, 114, 114);
                border-style: solid;
                border-color: rgb(134, 134, 134);
                border-spacing: 1px;
                border-width: 0.5px;
                z-index: 1;
            }
            .arrow{
                border: solid rgb(240, 236, 236);
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 2px;
                margin-left: 4px;
            }
            .down{
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
            }
            .up{
                transform: rotate(-135deg);
               -webkit-transform: rotate(-135deg);
            }
            :hover{
                background-color: rgb(153, 153, 153);
                border-width: 1.5px;
            }
        `;
    }
    render() {
        return html `
        <div @click = "${this.handleClick}" class="element" style = "height: ${this.size}px; width: ${this.size * 6 + 10}px;">
            <p class="box-text">${this.text} <a class = "${this.arrowDirection ? `arrow down` : `arrow up`}"></a></p>
        </div>`;
    }
    handleClick() {
        this.arrowDirection = !this.arrowDirection;
    }
};
__decorate([
    property({ type: String })
], DropdownHeader.prototype, "text", void 0);
__decorate([
    property({ type: Number })
], DropdownHeader.prototype, "size", void 0);
__decorate([
    property({ type: Boolean })
], DropdownHeader.prototype, "arrowDirection", void 0);
DropdownHeader = __decorate([
    customElement('dropdown-header')
], DropdownHeader);
export { DropdownHeader };
//# sourceMappingURL=dropdown-header.js.map