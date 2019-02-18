import {LitElement, html, css} from 'lit-element';

export class DropdownHeader extends LitElement{
    // text: string;
    // size: number;
    // visibility: boolean;
    // arrowDirection: boolean;
    constructor(){
        super();
        this.text = "Dropdown";
        this.size = 25;
        this.visibility = true;
        this.arrowDirection = true;
    }
    static get properties(){
        return {
          text: {type: String},
          size: {type: Number},
          visibility: {type: Boolean},
          arrowDirection: {type: Boolean} //true -> down, false -> up
        };
    }
    static get styles(){
        return css`
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
            }
            .down{
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
            }
            .up {
                transform: rotate(-135deg);
               -webkit-transform: rotate(-135deg);
            }
            :hover{
                background-color: rgb(153, 153, 153);
                border-width: 1.5px;
            }
        `;
      }
      changeArrowDirection(){
          this.arrowDirection = !this.arrowDirection;
          this.render();
      }
      render(){
        return html`
        <div class="element" style = "height: ${this.size}px; width: ${this.size*6 + 25}px; 
         ${this.visibility ? `visibility: visible` : `visibility: hidden`}" >
             <p class="box-text">${this.text} <a class = "${this.arrowDirection ? `arrow down`: `arrow up`}"></a></p>
        </div>`;
      }
}
customElements.define('dropdown-header',DropdownHeader);