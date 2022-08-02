import React, {useEffect, useState} from 'react';
import {View, Image, Text} from 'react-native';

import { PhotoPick } from '../../../Components/PhotoPick';
import S3StorageUpload from '../../../Components/PhotoPick';

import ProfileInfoScreenElement from './ProfileInfoScreenElement';
import {DefaultProfileImage, SwimmingBackground} from '../../../Assets/Images';
import styles from './ProfileInfoScreen.styles';
import { ApiFetchOne } from '../../../Components/API/ApiFetch';
import { backgroundPhotoPickStyles, profilePhotoPickStyles} from './MypagePhotoPick.styles';
export function ProfileInfoScreen({ navigation }) {
  
  const [data, setData] = useState();
  useEffect(() => {
    ApiFetchOne({
      method: 'GET',
      url: 'http://localhost:1337/api/mypage-details/1',
      headers: { Authorization: 'token' },
      body: null,
    }).then(thing => {
      setData(thing);
    });
  }, []);

  console.log(data)
  
  const [userPhoto, setUserPhoto] = useState(DefaultProfileImage);
  const [backPhoto, setBackPhoto] = useState(SwimmingBackground);


  //TODO Image change
  if (!data) return <View/>
  return (
    <View style={styles.profileScreenWrapper}>
      <View style={styles.profileImageWrapper}>
        <View style={styles.profileBackground}>
          <Image source={backPhoto} style={styles.backgroundPhoto} />
          {/* <PhotoPick
            styles={backgroundPhotoPickStyles}
            text="배경 이미지 설정"
            photo={userPhoto}
            setPhoto={setBackPhoto}
          /> */}
        </View>
        <View style={styles.profileImage}>
          <View style={styles.profileImageRelative}>
            <Image source={userPhoto} style={styles.profilePhoto} />
            {/* <PhotoPick
              styles={profilePhotoPickStyles}
              text="프로필 이미지 설정"
              photo={backPhoto}
              setPhoto={setUserPhoto}
            /> */}
            <View><S3StorageUpload/></View>
          </View>
        </View>
      </View>
      <View style={styles.formSection}>
        <ProfileInfoScreenElement label="이름" text={data.name} />
        <ProfileInfoScreenElement label="이메일 계정" text={data.email} />
        <ProfileInfoScreenElement label="생년월일" text={data.birth} />
        <ProfileInfoScreenElement label="성별" text={data.gender == "MALE" ? "남자" : "여쟈"} />
        <ProfileInfoScreenElement label="종목" text={data.sport} />
        <ProfileInfoScreenElement label="소속" text={data.belong} />
      </View>
    </View>
  );
}
