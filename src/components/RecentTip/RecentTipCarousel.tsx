import React from 'react';
import {ScrollView} from 'react-native';
import {IVideoFetchResponse} from '../../api/fetchVideo';
import {SearchStackProps} from '../../navigations/paramTypes/SearchParams';
import VideoCard from '../VideoPlayer/VideoCard';

interface IRecentTipCarouselProps extends SearchStackProps<'Search'> {
  recentVideoTips: Array<IVideoFetchResponse>;
}

const RecentTipCarousel: React.FC<IRecentTipCarouselProps> = ({
  recentVideoTips,
  navigation,
  route,
}) => {
  let videoTips =
    recentVideoTips.length >= 5 ? recentVideoTips.slice(0, 5) : recentVideoTips;

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {videoTips.map(tip => (
        <VideoCard
          key={tip.id}
          videoTitle={tip.title}
          proName={tip.proName}
          proPicURL={tip.proPicURL}
          thumbnailUrl={tip.thumbnail}
          videoUrl={tip.url}
          navigation={navigation}
          route={route}
        />
      ))}
    </ScrollView>
  );
};

export default RecentTipCarousel;
