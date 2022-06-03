// /* SplashScreen으로 진입 후 로그인 스크린으로 가도록 설정, 회원가입은 로그인 스크린안에 존재한다. */
// /* isRegistraionSuccess 이라는 hook을 사용해서 true일시, 회원가입이 완료되었다는 화면과 함꼐 로그인하기 버튼이 나오고 LoginScreen 으로 navigation을 이용해 이동한다. */

// import React, {useState, createRef} from 'react';

// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

// import 'react-native-gesture-handler';
// import RNPickerSelect from 'react-native-picker-select';
// import Loader from './Components/Loader';

// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   Keyboard,
//   Modal,
//   ScrollView,
// } from 'react-native';

// const RegisterScreen = (props) => {
//   const [userName, setUserName] = useState('');
//   const [userId, setUserId] = useState('');
//   const [userGrade, setUserGrade] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [userPasswordchk, setUserPasswordchk] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [errortext, setErrortext] = useState('');
//   const [errortext2, setErrortext2] = useState('');
//   const [isRegistraionSuccess, setIsRegistraionSuccess] = useState(false);

//   const idInputRef = createRef();
//   const gradeInputRef = createRef();
//   const passwordInputRef = createRef();
//   const passwordchkInputRef = createRef();
//   const nameInputRef = createRef();

//   const placeholder = {
//     label: '학년을 선택헤주세요',
//     value: null,
//     color: '#9EA0A4',
//   };

//   const handleSubmitButton = () => {
//     setErrortext('');

//     if (!userName) {
//       alert('이름을 입력해주세요');
//       return;
//     }
//     if (!userId) {
//       alert('id를 입력해주세요');
//       return;
//     }
//     if (!userGrade) {
//       alert('학년을 선택해주세요');
//       return;
//     }

//     if (!userPassword) {
//       alert('비밀번호를 입력해주세요');
//       return;
//     }
//     if (userPasswordchk != userPassword) {
//       alert('비밀번호가 일치하지 않습니다');
//       return;
//     }
//     //Show Loader
//     setLoading(true);

//     var dataToSend = {
//       stu_nick: userName,
//       stu_id: userId,
//       stu_grade: userGrade,
//       password: userPassword,
//     };
//     var formBody = [];
//     for (var key in dataToSend) {
//       var encodedKey = encodeURIComponent(key);
//       var encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');

//     fetch('http://localhost:3001/api/user/register', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Hide Loader
//         setLoading(false);
//         setErrortext2('');
//         console.log(responseJson);
//         // If server response message same as Data Matched
//         if (responseJson.status === 'success') {
//           setIsRegistraionSuccess(true);
//           console.log('Registration Successful. Please Login to proceed');
//         } else if (responseJson.status === 'duplicate') {
//           setErrortext2('이미 존재하는 아이디입니다.');
//         }
//       })
//       .catch((error) => {
//         //Hide Loader
//         setLoading(false);
//         console.error(error);
//       });
//   };

//   if (isRegistraionSuccess) {
//     return (
//       <View style={styles.container}>
//         <View style={{flex: 1}} />
//         <View style={{flex: 2}}>
//           <View
//             style={{
//               height: hp(13),
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Image
//               source={require('../src/success.png')}
//               style={{
//                 height: wp(20),
//                 resizeMode: 'contain',
//                 alignSelf: 'center',
//               }}
//             />
//           </View>
//           <View
//             style={{
//               height: hp(7),
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text style={{color: 'black', fontSize: wp('4%')}}>
//               회원가입이 완료되었습니다.
//             </Text>
//           </View>

//           <View style={{height: hp(20), justifyContent: 'center'}}>
//             <View style={styles.btnArea}>
//               <TouchableOpacity
//                 style={styles.btn}
//                 activeOpacity={0.5}
//                 onPress={() => props.navigation.navigate('Login')}>
//                 <Text style={{color: 'white', fontSize: wp('4%')}}>
//                   로그인하기
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </View>
//     );
//   }
//   return (
//     <View style={styles.container}>
//       <Loader loading={loading} />
//       <View style={styles.topArea}>
//         <View style={styles.titleArea}>
//           <Image
//             source={require('../src/Register.png')}
//             style={{width: wp(40), resizeMode: 'contain'}}
//           />
//         </View>
//         <View style={styles.TextArea}>
//           <Text style={styles.Text}>회원가입하여 나만의 공부 도우미</Text>
//           <Text style={styles.Text}>viva를 사용해보세요 ‍📘</Text>
//         </View>
//       </View>

//       <View style={styles.formArea}>
//         <TextInput
//           style={styles.textFormTop}
//           placeholder={'아이디(5자 이상, 영문, 숫자)'}
//           onChangeText={(userId) => setUserId(userId)}
//           ref={idInputRef}
//           returnKeyType="next"
//           onSubmitEditing={() =>
//             passwordInputRef.current && passwordInputRef.current.focus()
//           }
//           blurOnSubmit={false}
//         />
//         <TextInput
//           style={styles.textFormMiddle}
//           secureTextEntry={true}
//           placeholder={'비밀번호(8자 이상)'}
//           onChangeText={(UserPassword) => setUserPassword(UserPassword)}
//           ref={passwordInputRef}
//           returnKeyType="next"
//           onSubmitEditing={() =>
//             passwordchkInputRef.current && passwordchkInputRef.current.focus()
//           }
//           blurOnSubmit={false}
//         />
//         <TextInput
//           style={styles.textFormBottom}
//           secureTextEntry={true}
//           placeholder={'비밀번호 확인'}
//           onChangeText={(UserPasswordchk) =>
//             setUserPasswordchk(UserPasswordchk)
//           }
//           ref={passwordchkInputRef}
//           returnKeyType="next"
//           onSubmitEditing={() =>
//             nameInputRef.current && nameInputRef.current.focus()
//           }
//           blurOnSubmit={false}
//         />
//       </View>

//       <View style={{flex: 0.5, justifyContent: 'center'}}>
//         {userPassword !== userPasswordchk ? (
//           <Text style={styles.TextValidation}>
//             비밀번호가 일치하지 않습니다.
//           </Text>
//         ) : null}
//       </View>

//       <View style={styles.formArea2}>
//         <TextInput
//           style={styles.textFormTop}
//           placeholder={'닉네임'}
//           onChangeText={(UserName) => setUserName(UserName)}
//           ref={nameInputRef}
//           returnKeyType="next"
//           onSubmitEditing={() =>
//             gradeInputRef.current && gradeInputRef.current.focus()
//           }
//           blurOnSubmit={false}
//         />
//         <RNPickerSelect
//           style={{...pickerSelectStyles}}
//           onValueChange={(userGrade) => setUserGrade(userGrade)}
//           placeholder={placeholder}
//           items={[
//             {label: '1학년', value: 1},
//             {label: '2학년', value: 2},
//             {label: '3학년', value: 3},
//           ]}
//         />
//       </View>

//       <View style={{flex: 0.7, justifyContent: 'center'}}>
//         {errortext2 !== '' ? (
//           <Text style={styles.TextValidation}>{errortext2}</Text>
//         ) : null}
//       </View>

//       <View style={{flex: 0.75}}>
//         <View style={styles.btnArea}>
//           <TouchableOpacity style={styles.btn} onPress={handleSubmitButton}>
//             <Text style={{color: 'white', fontSize: wp('4%')}}>회원가입</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={{flex: 3}} />
//     </View>
//   );
// };