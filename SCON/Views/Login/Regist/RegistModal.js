import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  Modal,
} from 'react-native';
import styles from './RegistModal.styles';

import {WelcomeIcon} from '../../../Assets/Icons';

export function RegistModal({modal, setModal, navigation}) {
  const onPress = () => {
    navigation.navigate('LoginPage');
    setModal(false);
  };
  return (
    <Modal visible={modal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalTop}>
            <Image source={WelcomeIcon} style={styles.modalImage} />
            <Text style={styles.modalText}>라인업에 오신 것을 환영해요!</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.modalBottom} onPress={onPress}>
              <Text style={styles.modalText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
