import React from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom'

export default function Launches({ launch }) {
  return (
		<div className='card card-body mb-3'>
			<div className='row'>
				<div className='col-md-9'>
					<h5>
						Mission:{' '}
						<span className={`${launch.launch_success ? 'text-success' : 'text-danger'}`}>
							{launch.mission_name}
						</span>
					</h5>
					<p>Date:{' '}
						<span>
							{moment(launch.launch_date_local).format('YYYY-MM-DD HH:mm')}
						</span>
					</p>
				</div>
				<div className='col-md-3'>
					<Link to={`/launch/${launch.flight_number}`} className='btn btn-secondary'>
						Launch Details
					</Link>
				</div>
			</div>
		</div>
	);
}
