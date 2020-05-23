import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import LaunchItem from './LaunchItem'
import MissionInfo from './MissionInfo'

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number,
			mission_name,
			launch_date_local,
			launch_success 
		}
	}
`;

export default function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <p className='m-5'>Loading...</p>;
  if (error) return <p className='m-5'>Error : ${error}</p>;

  return (
		<div>
			<h1 className='display-4 my-3'>Launches</h1>
			<MissionInfo />

			{data.launches.map(launch =>
				<LaunchItem key={launch.flight_number} launch={launch} />
			)}
		</div>
	);
}
