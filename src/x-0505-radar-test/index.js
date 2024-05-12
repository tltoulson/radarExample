import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss'; 

function getStyle(target, props) {
	let theta = target.direction * (Math.PI/180);
	let r = (target.distance / 100) * (props.radarSize / 2);
	let x = (r * Math.cos(theta)) + (props.radarSize / 2);
	let y = r * Math.sin(theta) + (props.radarSize / 2);

	return `bottom: ${y}px; left: ${x}px; background-color: ${target.color || 'red'};`;
}

const view = (state, {updateState}) => {
	let props = state.properties;

	return (
		<div attr-class="radarContainer" attr-style={`height: ${props.radarSize}px; width: ${props.radarSize}px;`}>
			{
			props.targets.map(function(target) {
				return (
					<div attr-class="target" attr-style={getStyle(target, props)}></div>
				);
			})
			}
		</div>
	);
};

createCustomElement('x-0505-radar-test', {
	renderer: {type: snabbdom},
	view,
	properties: {
		targets: { 
			schema: {
				type: 'array',
				items: {
					type: 'object',
					properties: {
						direction: { schema: { type: 'integer' } },
						distance: { shcema: { type: 'integer' } },
						color: { schema: { type: 'string' } },
					}
				}
			},
			default: []
		},
		radarSize: {
			schema: {
				type: 'integer',
			},
			default: 500,
		}
	},
	styles
});
