import React, { useEffect, useState } from 'react'
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import ProfileInfoScreenElement from './ProfileInfoScreenElement'
import styles from './ProfileInfoScreen.styles'
import { ApiFetch, PhotoPick } from '../../../Components'
import {
  backgroundPhotoPickStyles,
  profilePhotoPickStyles,
} from './MypagePhotoPick.styles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ImagePush } from './ImagePush'
import { useIsFocused } from '@react-navigation/native'
import { ImagePushAPI } from './ImagePushAPI'

export function ProfileInfoScreen({ navigation }) {
  const [mount, setMount] = useState()
  const isFocused = useIsFocused()
  const [data, setData] = useState()
  const [role, setRole] = useState('ROLE_MEMBER')
  const [loading, setLoading] = useState(false)
  const [userPhoto, setUserPhoto] = useState({
    asset: '',
    set: false,
    uri: 'https://profile-scon.s3.ap-northeast-2.amazonaws.com/profile/default_profilePic.jpg',
  })
  const [backPhoto, setBackPhoto] = useState({
    asset: '',
    set: false,
    uri: 'https://profile-scon.s3.ap-northeast-2.amazonaws.com/back/default_backPic.jpg',
  })

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(thing => {
      ApiFetch({
        method: 'GET',
        url: '/my-page/user-profile',
        headers: {
          'content-type': 'application/json',
          Authorization: 'Bearer ' + thing,
        },
        body: null,
      }).then(thing => {
        if (thing == 401) {
          navigation.navigate('RefreshTokenModal', { navigation: navigation })
        }
        else {
          setData(thing)
          setUserPhoto({
            ...userPhoto,
            ['uri']: thing.profilePic,
          })
          setBackPhoto({
            ...backPhoto,
            ['uri']: thing.profileBack,
          })
        }
      })
    })
    setLoading(false)
    AsyncStorage.getItem('role').then(role => {
      setRole(role)
    })
  }, [isFocused])

  const onImagePush = async () => {
    setLoading(true)
    if (userPhoto.set) {
      if (userPhoto.asset) {
        ImagePush(userPhoto, setUserPhoto, 'profile', '/my-page/user-profile-pic')
        .then(() =>{
          if (backPhoto.set) {
            if (backPhoto.asset)
            ImagePush(backPhoto, setBackPhoto, 'back', '/my-page/user-back-pic')
            .then(() => navigation.goBack())
            else
              ImagePushAPI(backPhoto.uri, '/my-page/user-back-pic')
              navigation.goBack()
          }
          else
            navigation.goBack()
        })
      }
      else {
        ImagePushAPI(userPhoto.uri, '/my-page/user-profile-pic')
          if (backPhoto.set) {
            if (backPhoto.asset) {
            ImagePush(backPhoto, setBackPhoto, 'back', '/my-page/user-back-pic')
            navigation.goBack()
            }
            else {
              ImagePushAPI(backPhoto.uri, '/my-page/user-back-pic')
              navigation.goBack()
            }
          }
          else
            navigation.goBack()
      }
    }
    else if (backPhoto.set) {
      if (backPhoto.asset) {
      ImagePush(backPhoto, setBackPhoto, 'back', '/my-page/user-back-pic')
      .then(() => navigation.goBack())
      }
      else {
        ImagePushAPI(backPhoto.uri, '/my-page/user-back-pic')
        navigation.goBack()
      }
    }
    else 
      navigation.goBack()
      
  }

  if (!data) return <View />
  return (
    <SafeAreaView>
      <ScrollView style={styles.profileScreenWrapper}>
        <View style={styles.profileImageWrapper}>
          <View style={styles.profileBackground}>
            <Image
              source={{ uri: backPhoto.uri }}
              style={styles.backgroundPhoto}
            />
            <PhotoPick
              styles={backgroundPhotoPickStyles}
              text="?????? ????????? ??????"
              photo={backPhoto}
              setPhoto={setBackPhoto}
              setMount={setMount}
            />
          </View>
          <View style={styles.profileImage}>
            <View style={styles.profileImageRelative}>
              <Image
                source={{ uri: userPhoto.uri }}
                style={styles.profilePhoto}
              />
              <PhotoPick
                styles={profilePhotoPickStyles}
                text="????????? ????????? ??????"
                photo={userPhoto}
                setPhoto={setUserPhoto}
                setMount={setMount}
              />
            </View>
          </View>
        </View>
        <View style={styles.formSection}>
          <ProfileInfoScreenElement label="??????" text={data.name} />
          <ProfileInfoScreenElement label="????????? ??????" text={data.email} />
          {role == 'ROLE_PLAYER' ? (
            <View>
              <ProfileInfoScreenElement label="????????????" text={data.birth} />
              <ProfileInfoScreenElement
                label="??????"
                text={data.gender == 'MALE' ? '??????' : '??????'}
              />
              <ProfileInfoScreenElement label="??????" text={data.sport} />
              <ProfileInfoScreenElement label="??????" text={data.belong} />
            </View>
          ) : (
            <View />
          )}
        </View>
        <View style={styles.RegistButtonWrapper}>
          <TouchableOpacity
            style={styles.RegistButton}
            disabled={loading}
            onPress={() => onImagePush()}>
            <Text style={styles.RegistButtonText}> ?????? </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
