class ImageFigure extends HTMLElement {
    constructor() {
        super();
        console.log("Costructed !");
    }

    connectedCallback() {
        console.log('Connected !');

        this.src = this.getAttribute("src") || null;
        this.alt = this.getAttribute("alt") || null;
        this.caption = this.getAttribute("caption") || null;

    }

    render(){
        this.innerHTML = `
            <figure>
                <img src="${this.src}" alt="${this.alt}"> 
                <figcaption>${this.caption}</figcaption>
            </figure>
        `;
    }

    attributeChangeCallback(name, oldValue, newValue){
        this[name] = newValue;
        this.render();
    }

    static get observedAttributes(){
        return["caption"];
    }
}

customElements.define("image-figure", ImageFigure);