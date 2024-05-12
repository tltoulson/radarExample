import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

const view = (state, {updateState}) => {
    let targets = [
		{ direction: 0, distance: 0, color: 'blue' },
        { direction: 0, distance: 50 },
		{ direction: 270, distance: 25, color: 'green'}
    ];

	return (
		<x-0505-radar-test targets={targets}></x-0505-radar-test>
	);
};

createCustomElement('x-0505-radar-example', {
	renderer: {type: snabbdom},
	view,
});
