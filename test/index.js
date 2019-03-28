const Metaset = require('../');
const assert = require('assert');

const metaset = new Metaset();

describe('metaset', function () {

    beforeEach(function () {
        document.head.innerHTML = '';
    });

    describe('setTitle', function () {
        it('should be ok', function () {
            metaset.setTitle('My App');
            assert.strictEqual(document.querySelector('title').text, 'My App');
            console.log(document.head.innerHTML)
        });
    });

    describe('getTitle', function () {
        it('should be ok', function () {
            metaset.setTitle('My App');
            assert.strictEqual(metaset.getTitle(), 'My App');
        });
    });

    describe('setMetaName', function () {
        it('should be ok', function () {
            metaset.setMetaName('description', 'lorem ipsum');
            assert.strictEqual(document.querySelector('meta[name=description]').content, 'lorem ipsum');
            console.log(document.head.innerHTML)
        });
    });

    describe('getMetaName', function () {
        it('should be ok', function () {
            metaset.setMetaName('description', 'lorem ipsum');
            assert.strictEqual(metaset.getMetaName('description'), 'lorem ipsum');
        });
    });

    describe('setMetaProperty', function () {
        it('should be ok', function () {
            metaset.setMetaProperty('og:description', 'lorem ipsum');
            assert.strictEqual(document.querySelector('meta[property="og:description"]').content, 'lorem ipsum');
            console.log(document.head.innerHTML)
        });
    });

    describe('getMetaProperty', function () {
        it('should be ok', function () {
            metaset.setMetaProperty('og:description', 'lorem ipsum');
            assert.strictEqual(metaset.getMetaProperty('og:description'), 'lorem ipsum');
        });
    });

    describe('setMeta', function () {
        it('should be ok', function () {
            metaset.setMeta('charset', 'UTF-8');
            assert.strictEqual(document.querySelector('meta[charset]').getAttribute('charset'), 'UTF-8');
            console.log(document.head.innerHTML)
        });
    });

    describe('getMeta', function () {
        it('should be ok', function () {
            metaset.setMeta('charset', 'UTF-8');
            assert.strictEqual(metaset.getMeta('charset'), 'UTF-8');
        });
    });
});