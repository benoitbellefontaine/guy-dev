// ProcessTree.js
import React from 'react';
import ProcessChildren from './ProcessChildren';

const ProcessTree = (children) => {
    if (children && children.length > 0) {
        return (
            <ul className="menu__submenu">
                {ProcessChildren(children)}
            </ul>
        );
    }
}

export default ProcessTree;