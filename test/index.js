const metaset = require('../');
const assert = require('assert');

describe('metaset', function () {

    describe('setTitle', function () {
        it('should be ok', function () {
            metaset.setTitle('My App');
            assert.strictEqual('My App', document.head.querySelector('title').text);
        });
    });

    describe('getTitle', function () {
        it('should be ok', function () {
            metaset.setTitle('My App');
            assert.strictEqual('My App', metaset.getTitle());
        });
    });

    describe('setMetaName', function () {
        it('should be ok', function () {
            metaset.setMetaName('description', 'lorem ipsum');
            assert.strictEqual('lorem ipsum', document.head.querySelector('meta[name=description]').content);
            console.log(document.head.innerHTML)
        });
    });
});