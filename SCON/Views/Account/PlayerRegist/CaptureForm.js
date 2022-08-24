import React, {Component, useState} from 'react'
import {View, Image} from 'react-native'
import {ImagePush} from '../../../Components'
import {PlayerPhotoPick} from './PlayerPhotoPick'
import styles from './CaptureForm.styles'

export function CaptureForm({playerPhoto, setPlayerPhoto, setMount}) {
  console.log(playerPhoto)
  return (
    <View style={styles.captureWrapper}>
      <Image source={{uri: playerPhoto.uri}} />
      <PlayerPhotoPick
        text="선수 이미지"
        photo={playerPhoto}
        setPhoto={setPlayerPhoto}
        setMount={setMount}
      />
    </View>
  )
}
