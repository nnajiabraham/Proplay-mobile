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

  const flatListRef: MutableRefObject<any | undefined> = React.useRef();
  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 60});

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

    // console.log('scrollSpeed ', JSON.stringify(e.nativeEvent, null, 4));

    if (IOS) {
      scrollSpeed > 1
        ? (nextIndex = dataIndex + 1)
        : (nextIndex = dataIndex - 1);
    } else {
      scrollSpeed < 1
        ? (nextIndex = dataIndex + 1)
        : (nextIndex = dataIndex - 1);
    }

    if (isLegitIndex(nextIndex, data.length)) {
      setDataIndex(nextIndex);
    }

    flatListRef.current.scrollToIndex({
      index: dataIndex,
      animated: true,
      viewPosition: 0,
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
        viewabilityConfig={viewConfigRef.current}
        onScrollEndDrag={onScrollEndDrag}
        onViewableItemsChanged={onViewChangedRef.current}
        extraData={extraData}
        onScroll={onScrollCallback}
        decelerationRate={'fast'}
        alwaysBounceVertical={false}
        snapToInterval={itemHeight}
        snapToAlignment={'center'}
        bounces={false}
        onLayout={e =>
          console.log('onLayout', JSON.stringify(e.nativeEvent, null, 5))
        }
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
