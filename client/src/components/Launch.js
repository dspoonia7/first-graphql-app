import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LAUNCH_QUERY = gql`
	query LaunchQuery($flight_number: Int!) {
		launch(flight_number: $flight_number) {
			flight_number
			mission_name
			launch_year
			launch_success
			launch_date_local
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	}
`

export default function Launch(props) {
	const { flight_number } = props.match.params

	const { loading, error, data } = useQuery(LAUNCH_QUERY, {
		variables: {
			flight_number: parseInt(flight_number),
		}
	})

	console.log('data', data)

  if (loading) return <p className='m-5'>Loading...</p>;
  if (error) return <p className='m-5'>Error : ${error}</p>;

  const { launch } = data

  return (
		<Fragment>
			<hr />
			<h3 className='display-4 my-3'>
				<span className='text-dark'>Mission: </span> {launch.mission_name}
			</h3>

			<hr />
			<hr />
			<h4 className='mb-3'>
				Launch Details
			</h4>

			<ul className='list-group'>
				<li className='list-group-item'>
					Flight Number: {launch.flight_number}
				</li>
				<li className='list-group-item'>
					Launch Year: {launch.launch_year}
				</li>
				<li className='list-group-item'>
					Launch Status: {launch.launch_success ? 'Success' : 'Failure'}
				</li>
			</ul>

			<hr />
			<hr />
			<h4 className='mb-3'>
				Rocket Details
			</h4>

			<ul className='list-group'>
				<li className='list-group-item'>
					Rocket Name: {launch.rocket.rocket_name}
				</li>
				<li className='list-group-item'>
					Rocket Type: {launch.rocket.rocket_type}
				</li>
			</ul>

			<hr />
			<hr />
			<hr />
			<Link to={`/`} className='btn btn-secondary'>Back</Link>
		</Fragment>
	);
}
