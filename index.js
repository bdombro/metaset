class Metaset {
    
    constructor(self = window) {
        this.window = self;
    }
    
    query(selector) {
        return this.window.document.head.querySelector(selector)
    }

    createEl(tag) {
        return this.window.document.createElement(tag);
    }

    append(el) {
        return this.window.document.head.appendChild(el);
    }

    setTitle(text) {
        this.window.document.title = text
    }

    getTitle() {
        return this.window.document.title;
    }

    setMeta(type, key, value) {
        let el = this.query(`meta[${type}="${key}"]`);
        if (!el) {
            el = this.createEl('meta');
            this.append(el);
        }
        el.setAttribute(type, key);
        if (value)
            el.setAttribute('content', value);
    }

    getMeta(type, key) {
        let el;
        if (typeof key === 'undefined') {
            el = this.query(`meta[${type}]`);
            if (el)
                return el.getAttribute(type);
        } else {
            el = this.query(`meta[${type}="${key}"]`);
            if (el)
                return el.getAttribute('content');
        }
    }

    setMetaName(name, content) {
        this.setMeta('name', name, content);
    }

    getMetaName(name) {
        return this.getMeta('name', name);
    }

    setMetaProperty(property, content) {
        this.setMeta('property', property, content);
    }

    getMetaProperty(property) {
        return this.getMeta('property', property);
    }

}

module.exports = Metaset;