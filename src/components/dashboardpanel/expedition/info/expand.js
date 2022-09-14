import React from 'react';
import { connect } from 'react-redux';
import { chartExpandAction } from '../../../../store/actions/dashboardAction';

const Expand = ({ chartExpandAction, chartExpand }) => {
	return (
		<div className='expand_div'>
			<div className='form-check' style={{ paddingLeft: '100%' }}>
				<input
					className='form-check-input'
					type='checkbox'
					checked={chartExpand}
					id='flexCheckDefault'
					onChange={(_) => {
						chartExpandAction(_.target.checked);
					}}
				/>
			</div>
			<p className='expand_heading fs-20'>Voir ces expéditions</p>
		</div>
	);
};
const mapStateToProps = (state) => ({
	chartExpand: state.dashboard.chartExpand,
});

export default connect(mapStateToProps, {
	chartExpandAction,
})(Expand);
