import {LitElement, html, css, unsafeCSS} from "lit-element";

class MyLeaf extends LitElement {

    /**
     * Styles
     * @returns {CSSResult}
     */
    static get styles() {
        const leafColor = 'forestgreen';
        const branchColor = 'SaddleBrown';
        return  css `
            .my-leaf {
                display: block;
                margin: 0;
                padding: 0 7px;
                line-height: 1em;
                color: #369;
                font-weight: bold;
                border-left: 0.2em solid ${unsafeCSS(branchColor)};
            }
            .my-leaf:before {
                position:relative;
                top: -1em;
                height: 2em;
                width: 12px;
                color: white;
                border-bottom: 0.2em solid ${unsafeCSS(branchColor)};
                content: "";
                display: inline-block;
                left: -7px;
            }
            .my-leaf span {
                position: relative;
                top: -3.2em;
                left: 0.4em;
                display: block;
                width: 2em; 
                height: 2em;
                line-height: 2em;
                background-color: ${unsafeCSS(leafColor)};
                border-radius: 2em 0px;
                text-align: center;
                color: #fff;
            }
        `;
    }

    /**
     * Render
     * @returns {*}
     */
    render() {
        let id = parseInt(this.id.replace(`my-leaf-`,``));
        return html`            
            <div class="my-leaf"><span>${id}</span></div>                  
        `;
    }
}

// Define my-leaf element
customElements.define("my-leaf", MyLeaf);