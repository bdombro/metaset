function query(selector) {
    return document.head.querySelector(selector)
}

function createEl(tag) {
    return document.createElement(tag);
}

function append(el) {
    return document.head.appendChild(el);
}

function setTitle(text) {
    document.title = text
}

function getTitle() {
    return document.title;
}

function setMeta(type, key, value) {
    let el = query(`meta[${type}="${key}"]`);
    if (!el) {
        el = createEl('meta');
        append(el);
    }
    el.setAttribute(type, key);
    if (value)
        el.setAttribute('content', value);
}

function getMeta(type, key) {
    let el;
    if (typeof key === 'undefined') {
        el = query(`meta[${type}]`);
        if (el)
            return el.getAttribute(type);
    } else {
        el = query(`meta[${type}="${key}"]`);
        if (el)
            return el.getAttribute('content');
    }
}

function setMetaName(name, content) {
    setMeta('name', name, content);
}

function getMetaName(name) {
    return getMeta('name', name);
}

function setMetaProperty(property, content) {
    setMeta('property', property, content);
}

function getMetaProperty(property) {
    return getMeta('property', property);
}

module.exports = {
    setTitle,
    getTitle,
    setMetaName,
    getMetaName,
    setMetaProperty,
    getMetaProperty,
    setMeta,
    getMeta
};