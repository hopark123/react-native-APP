import React, { useState } from 'react'

import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'

import styles from './InquiryScreen.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ApiFetch } from '../../Components'
import { InquiryModal } from './InquiryModal'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export function InquiryScreen({ navigation }) {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  })
  const [modal, setModal] = useState(false)
  const onChange = (keyvalue, e) => {
    const { text } = e.nativeEvent
    setInputs({
      ...inputs,
      [keyvalue]: text,
    })
  }

  const onSubmit = () => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'POST',
        url: '/inquiry',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: JSON.stringify(inputs),
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', {navigation : navigation})
        }
        else
          navigation.navigate('ModalPage', { text: '문의 내용이 전달 됐어요!', page: 'MyPageScreen' })
      })
    })
  }

  return (
    <View style={styles.inquiryScreenWrapper}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inquiryScreenInner}>
          <Text style={styles.inquiryScreenLabel}>제목</Text>
          <TextInput
            style={styles.titleInput}
            value={inputs.search}
            placeholder={'문의 제목을 입력해주세요'}
            placeholderTextColor="#C9C9C9"
            onChange={e => onChange('title', e)}
          />
          <Text style={styles.inquiryScreenLabel}>내용</Text>
          <TextInput
            multiline={true}
            style={styles.contentInput}
            value={inputs.search}
            placeholder={
              '정확한 답변을 드릴 수 있도록\n상세하게 내용을 작성해주세요.'
            }
            placeholderTextColor="#C9C9C9"
            onChange={e => onChange('content', e)}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => onSubmit()} style={styles.inquiryButton}>
        <Text style={styles.inquiryButtonText}> 제출하기 </Text>
      </TouchableOpacity>
      <InquiryModal modal={modal} setModal={setModal} navigation={navigation} />
    </View>
  )
}
