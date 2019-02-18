import { LitElement } from '../../../node_modules/lit-element/lit-element';
class Dropdown extends LitElement {
    constructor() {
        super();
        this.childsVisibility = false;
    }
    static get properties() {
        return {
            elements: { type: Array },
            childsVisibility: { type: Boolean },
            childs: { type: Array }
        };
    }
    addElement() {
    }
    render() {
        return;
    }
}
//# sourceMappingURL=dropdown.js.map