import React from 'react'
import {TouchableOpacity, View, Text, Modal} from 'react-native'
import styles from './PlayerRegistModal.styles'

export function PlayerRegistModal({modal, setModal, navigation}) {
  const onPress = () => {
    navigation.goBack()
    setModal(false)
  }
  return (
    <Modal visible={modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <Text style={styles.titleStrong}>
              선수 인증 신청이 완료되었어요!
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => onPress()}
            style={styles.modalBottom}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
