import React, {useEffect, useState} from 'react'
import {
    SafeAreaView,
    View,
    Image,
    Text,
    Alert,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import {ApiFetch} from '../../../Components/API/ApiFetch'
import {Head} from './Head'
import {Body} from './Body'
import AsyncStorage from '@react-native-community/async-storage'

export function AdminHome({navigation}) {
    const [data, setData] = useState([])
    useEffect(() => {
        AsyncStorage.getItem('accessToken').then(thing => {
            ApiFetch({
                method: 'GET',
                url: '/admin/insight',
                headers: {
                    'content-type': 'application/json',
                    Authorization: 'Bearer ' + thing,
                },
                body: null,
            }).then(thing => {
                setData(thing)
            })
        })
    }, [])
    if (!data) return <SafeAreaView />
    return (
        <SafeAreaView style={{flexDirection: 'column'}}>
            <Head data={data} />
            <Body data={data} />
        </SafeAreaView>
    )
}
