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
    let el = query('title');
    if (!el) {
        el = createEl('title');
        el.text = text;
        append(el);
    } else {
        el.text = text;
    }
}

function getTitle() {
    const el = query('title');
    if (el) {
        return el.text;
    }
}

function setMetaName(name, content) {
    let el = query(`meta[name="${name}"]`);
    if (!el) {
        el = createEl('meta');
        el.name = name;
        el.content = content;
        append(el);
    } else {
        el.name = name;
        el.content = content;
    }
}

function getMetaName(name) {
    const el = query(`meta[name="${name}"]`);
    if (el) {
        return el.content;
    }
}

function setMetaProperty(name, content) {
    let el = query(`meta[property="${name}"]`);
    if (!el) {
        el = createEl('meta');
        el.property = name;
        el.content = content;
        append(el);
    } else {
        el.property = name;
        el.content = content;
    }
}

function getMetaProperty(name) {
    const el = query(`meta[property="${name}"]`);
    if (el) {
        return el.content;
    }
}

module.exports = {
    setTitle,
    getTitle,
    setMetaName,
    getMetaName,
    setMetaProperty,
    getMetaProperty
};