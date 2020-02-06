import React, {MutableRefObject} from 'react';
import {
  FlatList,
  Platform,
  StyleSheet,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Dimensions,
  ViewToken,
} from 'react-native';

export interface IPaginatorProps {
  data: ReadonlyArray<any>;
  renderItem: any;
  keyExtractor?: (item: any, index: number) => string;
  contentContainerStyle?: StyleProp<ViewStyle>;
  itemHeight: number;
  currentVisibleIndex: (currentVisibleIndex: number | null) => void;
  extraData: any;
  onScrollCallback: (e: any) => void;
}

type onViewChange = {
  viewableItems: Array<ViewToken>;
  changed: Array<ViewToken>;
};

const IOS = Platform.OS === 'ios';

const Paginator: React.FC<IPaginatorProps> = ({
  data,
  renderItem,
  keyExtractor,
  contentContainerStyle,
  itemHeight,
  currentVisibleIndex,
  extraData,
  onScrollCallback,
}) => {
  const [dataIndex, setDataIndex] = React.useState<number>(0);
  const [visibleIndex, setVisibleIndex] = React.useState<number | null>(0);
  // const [index, setIndex] = React.useState<number>(0);

  const flatListRef: MutableRefObject<any | undefined> = React.useRef();
  const viewConfigRef = React.useRef({
    // viewAreaCoveragePercentThreshold: 80,
    itemVisiblePercentThreshold: 80,
  });

  const onViewChangedRef = React.useRef(
    ({viewableItems, changed}: onViewChange) => {
      if (viewableItems && viewableItems.length > 0) {
        setVisibleIndex(viewableItems[0].index);
        changed;
      }

      //   console.log(
      //     'viewableItems\n\n\n',
      //     JSON.stringify(viewableItems, null, 4),
      //   );

      //   console.log('changed\n\n\n', JSON.stringify(changed, null, 4), '\n\n\n');
    },
  );

  React.useEffect(() => {
    currentVisibleIndex(visibleIndex);
  }, [visibleIndex]);

  const isLegitIndex = (index: number, length: number) => {
    return index >= 0 && index < length ? true : false;
  };

  const getItemLayout = (_: Array<any> | null, index: number) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  });

  const calculateScrollDirectionIndex = (scrollSpeed: number) => {
    let scrollIndex;
    if (IOS) {
      if (scrollSpeed > 25 && isLegitIndex(dataIndex + 1, data.length)) {
        scrollIndex = dataIndex + 1;
        setDataIndex(scrollIndex);
      } else if (
        scrollSpeed < -10 &&
        isLegitIndex(dataIndex - 1, data.length)
      ) {
        scrollIndex = dataIndex - 1;
        setDataIndex(scrollIndex);
      }
    } else {
      if (scrollSpeed < -25 && isLegitIndex(dataIndex + 1, data.length)) {
        scrollIndex = dataIndex + 1;
        setDataIndex(scrollIndex);
      } else if (scrollSpeed > 10 && isLegitIndex(dataIndex - 1, data.length)) {
        scrollIndex = dataIndex - 1;
        setDataIndex(scrollIndex);
      }
    }
    console.log(scrollIndex);

    return scrollIndex;
  };

  const onScrollEndDrag = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log('scrollSpeed ', JSON.stringify(e.nativeEvent, null, 4));

    const scrollIndex = calculateScrollDirectionIndex(
      e!.nativeEvent!.velocity!.y,
    );
    if (scrollIndex) {
      flatListRef.current.scrollToIndex({
        index: scrollIndex,
        animated: false,
        viewPosition: 0,
      });
    }
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
        viewabilityConfig={viewConfigRef.current}
        onScrollEndDrag={onScrollEndDrag}
        onViewableItemsChanged={onViewChangedRef.current}
        extraData={extraData}
        snapToInterval={itemHeight}
        onScroll={onScrollCallback}
        decelerationRate={'fast'}
        removeClippedSubviews
      />
    </>
  );
};

const styles = StyleSheet.create({
  flatList: {
    flex: 1,
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
