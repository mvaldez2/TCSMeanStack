class Nav extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <nav>
            <h1>Template</h1>
            <ul>
                <a href="index.html"><li>Home</li></a>
                <a href="about.html"><li>About</li></a>
                <a href="contact.html"><li>Contact</li></a>
            </ul>
        </nav>
        `
    }
}

customElements.define('nav-menu', Nav)