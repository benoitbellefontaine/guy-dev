// ProcessChildren.js
import React from 'react';
import { uniqueId } from 'lodash';
import ProcessTree from './ProcessTree';

const ProcessChildren = (items) => items.map((item, i) => {
    const { name, children, type } = item;
    const color = (children) ? 'red' : 'green';
    return (
        <li style={{color:color}} className="menu__item" key={uniqueId(`item-${i}-`)}>
            name: {name} (type:{type})
            {ProcessTree(children)}
        </li>
    );
});

export default ProcessChildren;