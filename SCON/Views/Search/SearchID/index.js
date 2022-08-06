import React, { useState } from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';

import ViewPlayer from './ViewPlayer';

import styles from './SearchID.styles';

function SearchID({ inputs, data, navigation }) {
  const { search } = inputs;
  const [more, setMore] = useState(false);
  const [nextFeed, setNextFeed] = useState(10)
  const onClickMore = () => {
    if (!more) setMore(true);
    else setMore(false);
  };

const onEndReached = () => {
  setNextFeed(nextFeed + 5)
  setMore(false)
}
  return (
    <View>
      <FlatList
        data={data}
        snapToAlignment="start"
        decelerationRate="fast"
        renderItem={({ item, index }) => (
          <ViewPlayer
            key={`view${index}`}
            player={item}
            navigation={navigation}
          />
        )}
        // onScroll={onScroll}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <TouchableOpacity onPress={() => onClickMore()}>
        <View style={styles.searchExpand}>
          {more ? (
            <Text style={styles.expandText}>결과 접기</Text>
          ) : (
            <Text style={styles.expandText}>결과 모두 보기</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default SearchID;
