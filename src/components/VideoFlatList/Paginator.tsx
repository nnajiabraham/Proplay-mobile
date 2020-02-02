import React, {MutableRefObject} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  /*ListRenderItem,*/
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
} from 'react-native';

export interface IPaginatorProps {
  data: ReadonlyArray<any>;
  renderItem: any;
  keyExtractor?: (item: any, index: number) => string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  itemHeight: number;
}

const IOS = Platform.OS === 'ios';

const VIEWABILITY_CONFIG = {
  viewAreaCoveragePercentThreshold: 50,
};

const Paginator: React.FC<IPaginatorProps> = ({
  data,
  renderItem,
  keyExtractor,
  contentContainerStyle,
  itemHeight,
}) => {
  const [dataIndex, setDataIndex] = React.useState<number>(0);
  const flatListRef: MutableRefObject<any | undefined> = React.useRef();

  const isLegitIndex = (index: number, length: number) => {
    if (index < 0 || index >= length) return false;
    return true;
  };

  const getItemLayout = (_: Array<any> | null, index: number) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  });

  const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    let nextIndex;
    const scrollSpeed = e!.nativeEvent!.velocity!.y;

    console.log('scrollSpeed ', scrollSpeed);

    if (IOS) {
      scrollSpeed > 0
        ? (nextIndex = dataIndex + 1)
        : (nextIndex = dataIndex - 1);
    } else {
      scrollSpeed < 0
        ? (nextIndex = dataIndex + 1)
        : (nextIndex = dataIndex - 1);
    }

    if (isLegitIndex(nextIndex, data.length)) {
      setDataIndex(nextIndex);
    }

    flatListRef.current.scrollToIndex({
      index: dataIndex,
      animated: true,
      viewPosition: 1,
    });
  };

  return (
    <>
      <FlatList
        data={data}
        style={styles.flatList}
        renderItem={renderItem}
        contentContainerStyle={contentContainerStyle}
        keyExtractor={keyExtractor}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        viewabilityConfig={VIEWABILITY_CONFIG}
        onScrollEndDrag={onScrollEndDrag}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
    // backgroundColor: '#',
    // height: Dimensions.get('window').height,
    width: Dimensions.get('screen').width,
  },

  animationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 8,
  },

  indicator: {
    height: 7,
    width: 7,
    borderRadius: 2,
  },
});

export default Paginator;
