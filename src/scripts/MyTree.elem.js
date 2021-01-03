import {LitElement, html, css, unsafeCSS} from "lit-element";
import "./MyLeaf.elem";

class MyTree extends LitElement {

    /**
     * Styles
     * @returns {CSSResult}
     */
    static get styles() {
        const buttonBgColor = 'DarkSlateBlue';
        const buttonTextColor = 'white';
        return css`
            button {      
                cursor:pointer;
                padding: 1em;
                border: none;
                border-radius: 1em;
                background-color: ${unsafeCSS(buttonBgColor)};
                color: ${unsafeCSS(buttonTextColor)}      
            }   
            #tree {
                padding-top: 1em;
            }
            .leaf {                
                margin-left: 1em;                                                
            }
        `;
    }

    /**
     * Properties
     * @returns {{items: {type: ObjectConstructor}}}
     */
    static get properties() {
        return {
            items: {type: Object}
        };
    }

    /**
     * Constructor of class to creating Tree of elements
     */
    constructor() {
        super();
        this.items = {
            "id": 1,
            "items": [
                {
                    "id": 2,
                    "items": [
                        {"id": 4},
                        {"id": 5},
                        {"id": 6},
                        {"id": 7},
                    ]
                },
                {
                    "id": 3,
                    "items": [
                        {"id": 8},
                        {"id": 9},
                    ]
                }
            ]
        };
    }

    /**
     * Show the TREE of elements
     * @param elem
     * @param parent
     * @param lvl
     */
    tree(elem, parent, lvl) {
        if (elem.id) {
            // create new leaf and add it to tree
            let leaf = this.leaf(elem, parent, lvl);
            const treeElement = (parent > 0) ? this.shadowRoot.querySelector(`#leaf-${parent}`) : this.shadowRoot.querySelector(`#tree`);
            treeElement.appendChild(leaf);

            // check for subitems and showing them
            if (elem.items) {
                let items = elem.items;
                if (items.length) {
                    let subLevel = lvl + 1;
                    items.forEach(item => this.tree(item, elem.id, subLevel));
                }
            }
        }
    }

    /**
     * Creating LEAF
     * @param elem
     * @param parent
     * @param lvl
     * @returns {HTMLDivElement}
     */
    leaf(elem, parent, lvl) {
        let leaf = document.createElement(`div`);
        leaf.setAttribute(`class`, `leaf`);
        leaf.setAttribute(`id`, `leaf-${elem.id}`);
        leaf.setAttribute(`data-parent`, parent);
        leaf.setAttribute(`data-lvl`, lvl);
        let leafElem = document.createElement(`my-leaf`);
        leafElem.setAttribute(`id`, `my-leaf-${elem.id}`);
        leaf.appendChild(leafElem);
        return leaf;
    }

    /**
     * Render the Element
     * @returns {*}
     */
    render() {
        return html`
            <button id="build-tree" @click="${this.clickHandler}">Build tree</button>
            <div id="tree"></div>                        
        `;
    }

    /**
     * Action by Click on button
     * @param e
     */
    clickHandler(e) {
        this.shadowRoot.querySelector(`#tree`).innerHTML = '';
        this.tree(this.items, 0, 0);
        this.render();
    }
}

// Define my-tree element
customElements.define("my-tree", MyTree);