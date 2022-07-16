import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';
import { SafeAreaView } from 'react-native';
import { PlayerProfile, PlayerFeeds, PlayerFollow } from "./"

export function PlayerScreen({ navigation, route }) {
	const [data, setData] = useState([])
	useEffect(() => {
		ApiFetchOne({
			method: 'GET',
			url: `http://localhost:1337/api/player-homes/${route.params.playerId}`,
			headers: { "Authorization": "token" },
			body: null
		})
			.then((thing => {
				setData(thing)
			}))
	}, [])

	if (data)
		return (
			<SafeAreaView>
				<PlayerProfile data={data} navigation={navigation} />
				<PlayerFollow data={data} navigation={navigation} />
				<PlayerFeeds playerId={route.params.playerId} navigation={navigation}/>
			</SafeAreaView>
		);
	else
		return (<SafeAreaView />)
}