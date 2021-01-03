import {html} from "lit-html";
import "./MyTree.elem";
import "./MyLeaf.elem";
export default {
    parameters: {layout: "centered"}
};
export const myTree = () => html`<my-tree></my-tree>`;
export const myLeaf = () => html`<my-leaf></my-leaf>`;