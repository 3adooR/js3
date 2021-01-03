!function(e){function t(t){for(var i,l,a=t[0],d=t[1],s=t[2],u=0,f=[];u<a.length;u++)l=a[u],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(i in d)Object.prototype.hasOwnProperty.call(d,i)&&(e[i]=d[i]);for(c&&c(t);f.length;)f.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],i=!0,a=1;a<r.length;a++){var d=r[a];0!==n[d]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var i={},n={0:0},o=[];function l(t){if(i[t])return i[t].exports;var r=i[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=i,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(r,i,function(t){return e[t]}.bind(null,i));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],d=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var c=d;o.push([11,1]),r()}({11:function(e,t,r){"use strict";r.r(t),r.d(t,"myTree",(function(){return a})),r.d(t,"myLeaf",(function(){return d}));var i=r(5),n=r(4);class o extends n.a{static get styles(){return n.b`
            .my-leaf {
                display: block;
                margin: 0;
                padding: 0 7px;
                line-height: 1em;
                color: #369;
                font-weight: bold;
                border-left: 0.2em solid ${Object(n.d)("SaddleBrown")};
            }
            .my-leaf:before {
                position:relative;
                top: -1em;
                height: 2em;
                width: 12px;
                color: white;
                border-bottom: 0.2em solid ${Object(n.d)("SaddleBrown")};
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
                background-color: ${Object(n.d)("forestgreen")};
                border-radius: 2em 0px;
                text-align: center;
                color: #fff;
            }
        `}render(){let e=parseInt(this.id.replace("my-leaf-",""));return n.c`            
            <div class="my-leaf"><span>${e}</span></div>                  
        `}}customElements.define("my-leaf",o);class l extends n.a{static get styles(){return n.b`
            button {      
                cursor:pointer;
                padding: 1em;
                border: none;
                border-radius: 1em;
                background-color: ${Object(n.d)("DarkSlateBlue")};
                color: ${Object(n.d)("white")}      
            }   
            #tree {
                padding-top: 1em;
            }
            .leaf {                
                margin-left: 1em;                                                
            }
        `}static get properties(){return{items:{type:Object}}}constructor(){super(),this.items={id:1,items:[{id:2,items:[{id:4},{id:5},{id:6},{id:7}]},{id:3,items:[{id:8},{id:9}]}]}}tree(e,t,r){if(e.id){let i=this.leaf(e,t,r);if((t>0?this.shadowRoot.querySelector("#leaf-"+t):this.shadowRoot.querySelector("#tree")).appendChild(i),e.items){let t=e.items;if(t.length){let i=r+1;t.forEach(t=>this.tree(t,e.id,i))}}}}leaf(e,t,r){let i=document.createElement("div");i.setAttribute("class","leaf"),i.setAttribute("id","leaf-"+e.id),i.setAttribute("data-parent",t),i.setAttribute("data-lvl",r);let n=document.createElement("my-leaf");return n.setAttribute("id","my-leaf-"+e.id),i.appendChild(n),i}render(){return n.c`
            <button id="build-tree" @click="${this.clickHandler}">Build tree</button>
            <div id="tree"></div>                        
        `}clickHandler(e){this.shadowRoot.querySelector("#tree").innerHTML="",this.tree(this.items,0,0),this.render()}}customElements.define("my-tree",l);t.default={parameters:{layout:"centered"}};const a=()=>i.a`<my-tree></my-tree>`,d=()=>i.a`<my-leaf></my-leaf>`}});