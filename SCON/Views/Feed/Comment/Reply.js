import React, { useEffect, useState } from 'react';
import { ApiFetchOne } from '../../Components/API/ApiFetch';

import { View, Text, Image, TextInput } from 'react-native';

import { DefaultProfileImage } from '../../../Assets/Images';
import { ViewMore } from "../../../Assets/Icons/"
import { Time } from '../../../Components';

export function Reply({ reply }) {
	return (
		<View style={{ flexDirection: 'column' }}>
			<View style={{ flexDirection: 'row' }}>
				<Image source={DefaultProfileImage} />
				<Text>{reply.writer.닉네임}</Text>
				<Time time ={reply.commentDate} />
				<Image source={ViewMore} />
			</View>
			<Text>{reply.commentContent}</Text>
		</View>
	);
}