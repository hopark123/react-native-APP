import React, {useEffect, useState} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

import {DefaultProfileImage} from '../../../Assets/Images/index'

export function PlayerRegistResultPage({data, navigation, code}) {
    const [type, setType] = useState(code)

    useEffect(() => {

    },[type])
    type >= 0
        ? {
            0: DefaultProfileImage,
            1: DefaultProfileImage,
            2: DefaultProfileImage,
        }[type]
        : null

    const head =
    type >= 0 ? (
        {
            0: '선수 등록 정보를\n심사하고 있습니다.',
            1: '선수 인증이\n승인되었습니다.',
            2: '선수 인증 신청이\n반려되었습니다.',
        }[type]
    ) : (
        <Text />
    )

    const board =
    type >= 0 ? (
        {
            0: '잠시만 기다려주세요!',
            1: '회원님의 계정이 선수 계정으로 전환되었어요!',
            2: '반려 된 이유를 확인하시고 재등록 해주세요.',
        }[type]
    ) : (
        <Text />
    )
    var content =
    type >= 0 ? (
        {
            0: '심사는 3~5일이 소요됩니다.\n팬들과의 만남이 얼마 남지 않았어요{`><!`}',
            1: '선수 계정만이 가진 특별한 기능을 통해 팬들과 더욱 자유롭게 소통하실 수 있어요! \n\n앞으로 라인업+와 함께 그려나갈 멋진 선수님의 모습 기대할께요^^',
        }[type]
    ) : (
        <Text />
        
    )
    if (type == 2)
        content = `반려 사유: ${data.refuseContent}`

    const onPress = () => {
        navigation.navigate('PlayerRegistForm')
    }
    return (
        <View style={{flexDirection: 'column'}}>
            <Image source={DefaultProfileImage} />
            <Text>{head}</Text>
            <Text>{board}</Text>
            <Text>{content}</Text>
            {type == 2 && (
                <TouchableOpacity onPress={() => onPress()}>
                    <Text>재등록</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}
