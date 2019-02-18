import { LitElement, html, css} from 'lit-element';

export class DropdownElement extends LitElement{
  // text: string;
  // size: number;
  // visibility: boolean;
  constructor(){
    super();
    this.text = "Hello world again";
    this.size = 25;
    this.visibility = true;
  }
  static get properties(){
    return {
      text: {type: String},
      size: {type: Number},
      visibility: {type: Boolean}
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
  render(){
    return html`
    <div class="element" style = "height: ${this.size}px; width: ${this.size*6}px; 
     ${this.visibility ? 
      `visibility: visible` : `visibility: hidden`}" >
      <p class="box-text">${this.text}</p>
    </div>`;
  }
}
customElements.define('dropdown-element', DropdownElement);
