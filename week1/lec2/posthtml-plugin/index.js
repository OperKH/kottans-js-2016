"use strict";

const fsp = require('fs-promise');
const posthtml = require('posthtml');

const pluginRemoveBootstrapClasses = tree =>
    tree.match({attrs: {class: true}}, node => {
        const allClassesArr = node.attrs.class.split(' ');
        const generalClassesArr = allClassesArr.filter(className => {
            const isBootstrapClass = /^col-(xs|sm|md|lg)(-(offset|push|pull))?-\d{1,2}$/.test(className) ||
                                    /^text-(left|center|right|justify|nowrap|lowercase|uppercase|capitalize)$/.test(className) ||
                                    /^panel(-(group|body|heading|title|default|primary|success|info|warning|danger))?$/.test(className) ||
                                    /^container(-fluid)?$/.test(className) ||
                                    /^pull-(left|right)?$/.test(className) ||
                                    /^row$/.test(className);

            return !isBootstrapClass;
        });

        node.attrs.class = generalClassesArr.length ? generalClassesArr.join(' ') : null;

        return node;
    });

const pluginChangeJsClassesToDataAttrs = tree =>
    tree.match({attrs: {class: /\bjs-/i}}, node => {
        const allClassesArr = node.attrs.class.split(' ');

        let jsDataAttrValuesArr = [],
            cssClassesArr = [];

        allClassesArr.forEach(className => {
            const isJs = /^js-/.test(className);
            if (isJs) {
                const daraAttrValue = className.replace(/^js-/, "");
                jsDataAttrValuesArr.push(daraAttrValue);
            } else {
                cssClassesArr.push(className);
            }
        });

        node.attrs['data-js'] =  jsDataAttrValuesArr.length ? jsDataAttrValuesArr.join(' ') : null;
        node.attrs.class = cssClassesArr.length ? cssClassesArr.join(' ') : null;

        return node;
    });



fsp.readFile('input.html', {
        encoding: 'utf-8'
    })
    .then(html => posthtml([pluginRemoveBootstrapClasses, pluginChangeJsClassesToDataAttrs]).process(html))
    .then(result => result.html)
    .then(html => {
        console.log("\nResult:");
        console.log(html);
        return fsp.writeFile('output.html', html);
    })
    .then(() => {
        console.log('\nFile successfully written!');
        console.log('\nAll Done!');
    })
    .catch(error => {
        console.error(error);
    });
