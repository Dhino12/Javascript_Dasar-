class ImageFigure extends HTMLElement{
    constructor(){
        super();
        console.log("Costructed !");
    }

    connectedCallback(){
        console.log('Connected !');
    }

    disconnectedCallback(){
        console.log('Disconnected !');
    }

    adoptedCallback(){
        console.log('Adopted !');
    }

    attributeChangedCallback(name, oldValue, newValue){
        console.log(`Attribute : ${name} | change !`);
    }
    // digunakan untuk mengamati perubahan nilai attribute caption
    
     /* kita bisa menetapkan lebih dari satu atribut yang diamati.
        dengan memisahkan nama atribut menggunakan koma. Contoh: */
     // return ["caption", "title", "src", ...]
    static get observedAttributes(){
        return ['caption'];
    }
}

customElements.define("image-figure", ImageFigure);