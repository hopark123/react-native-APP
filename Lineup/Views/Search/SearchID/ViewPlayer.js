import React from 'react'
import {Image, TouchableOpacity, View, Text} from 'react-native'
import styles from './ViewPlayer.styles'

function ViewPlayer({player, navigation}) {
  const {name, sport, belong} = player
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Player', {name:player.name, playerId: player.playerId})
      }>
      <View style={styles.viewPlayerWrapper}>
        <Image source={{uri:player.profilePic}} style={styles.viewPlayerImage} />
        <View style={styles.viewPlayerInfo}>
          <Text
            style={styles.playerName}
            numberOfLines={1}
            ellipsizeMode="tail">
            {name}
          </Text>
          <Text
            style={styles.playerDescription}
            numberOfLines={1}
            ellipsizeMode="tail">
            {sport} / {belong}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default ViewPlayer
