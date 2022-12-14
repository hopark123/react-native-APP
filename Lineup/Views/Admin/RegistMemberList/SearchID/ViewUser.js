import React from 'react'
import {TouchableOpacity, View, Text, Image} from 'react-native'

import styles from './ViewUser.styles'

function ViewUser({user, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FollowPage', {userId: user.memberId})
      }>
      <View style={styles.viewPlayerWrapper}>
        <Image source={{uri:user.profilePic}} style={styles.viewPlayerImage}/>
        <View style={styles.viewPlayerInfo}>
          <Text
            style={styles.playerName}
            numberOfLines={1}
            ellipsizeMode="tail">
            {user.nickname}
          </Text>
          <Text
            style={styles.playerDescription}
            numberOfLines={1}
            ellipsizeMode="tail">
            {user.email}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ViewUser
