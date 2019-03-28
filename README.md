# metaset

> This tiny library provides some functions for managing meta tag in your HTML document

<a href="https://travis-ci.org/fabioricali/metaset" target="_blank"><img src="https://travis-ci.org/fabioricali/metaset.svg?branch=master" title="Build Status"/></a>
<a href="https://opensource.org/licenses/MIT" target="_blank"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" title="License: MIT"/></a>

[Demo](https://fabioricali.github.io/metaset/demo/)

## Installation
```
npm install --save metaset
```

## Usage
```js
import Metaset from 'metaset'

const metaset = new Metaset();

// Set title
metaset.setTitle('The title');
// Get title
metaset.getTitle(); //The title

// Set meta tag description
metaset.setMetaName('description', 'A description...');
// Get metatag description
metaset.getMetaName('description'); //A description...

// Set OG meta tag
metaset.setMetaProperty('og:description', 'A description...');
// Get OG meta tag
metaset.getMetaProperty('og:description'); //A description...
```

## Changelog
You can view the changelog <a target="_blank" href="https://github.com/fabioricali/metaset/blob/master/CHANGELOG.md">here</a>

## License
Metaset is open-sourced software licensed under the <a target="_blank" href="http://opensource.org/licenses/MIT">MIT license</a>

## Author
<a target="_blank" href="http://rica.li">Fabio Ricali</a>