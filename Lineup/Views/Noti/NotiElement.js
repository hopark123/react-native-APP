import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {ArrowIcon, UpIcon} from '../../Assets/svgs'

import styles from './NotiElement.styles'
import {Time} from '../../Components/Time'
function NotiElement({data}) {
  const [expand, setExpand] = useState(false)
  const onClick = () => {
    var temp = !expand
    setExpand(temp)
  }
  if (!data) return <View />
  return (
    <View>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.notiElementWrapper}>
          <View style={styles.notiElementLeft}>
            <Text style={styles.notiTitle}>{data.title}</Text>
            <Text style={styles.notiCreated}>
              <Time time={data.dateTime} separator="-" />
            </Text>
          </View>
          {expand ? (
            <UpIcon width={11} height={6} fill="#0E0E0E" />
          ) : (
            <ArrowIcon width={11} height={6} fill="#0E0E0E" />
          )}
        </View>
      </TouchableOpacity>
      {expand ? (
        <View style={styles.expanded}>
          <Text style={styles.expandedContent}>{data.content}</Text>
        </View>
      ) : (
        <View />
      )}
    </View>
  )
}

export default NotiElement
