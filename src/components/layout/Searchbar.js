import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { searchLogs } from '../../actions/logActions';

const Searchbar = ({ searchLogs }) => {
	const text = useRef('');
	const handleChange = e => {
		searchLogs(text.current.value )
	}
	return (
		<div>
			<nav style={{ marginBottom: '30px' }} className="blue">
				<div className="nav-wrapper">
					<form>
						<div className="input-field">
							<input id="search" type="search" required  ref={text} onChange={handleChange}/>
							<label className="label-icon" htmlFor="search">
								<i className="material-icons">search</i>
							</label>
							<i className="material-icons">close</i>
						</div>
					</form>
				</div>
			</nav>
		</div>
	);
};

Searchbar.propTypes = {
	searchLogs: PropTypes.func.isRequired,
};

export default connect(
	null,
	{ searchLogs }
)(Searchbar);
