import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from "@react-native-community/async-storage"

export function PlayerRegistRefuse({ params }) {
  const [isSelected, setSelection] = useState(false);
  const [refuseComment, setRefuseComment] = useState()
  const state = params.state

  const onInput = (e) => {
    const { text } = e.nativeEvent;
    setRefuseComment(text)
  }
  const onRefuse = () => {
      AsyncStorage.getItem("accessToken")
        .then((thing) => {
          ApiFetch({
            method: 'GET',
            url: `/admin/player-regist/{playerRegistId}`,
            headers: { 
              'content-type': 'application/json',
              'Authorization': 'Bearer ' + thing,
            },
            body: null,
          }).then(thing => {
            setData(thing);
          })
    })
  }
  return (
    <View>
      {state != 1 ?
        <View>
          <CheckBox value={isSelected} boxType='square' />
          <Text>반려 사유</Text>
          <TextInput
            value={refuseComment}
            placeholder={'내용을 입력해주세요.'}
            placeholderTextColor="#0E0E0E66"
            onChange={(e) => onInput(e)} />
        </View>
        :
        <View />
      }
      {state == 0 ?
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Text>승인</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>반려</Text>
          </TouchableOpacity>
        </View>
        :
        <View />
      }
    </View>
  );
}
