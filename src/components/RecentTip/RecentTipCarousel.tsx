import React from 'react';
import {ScrollView} from 'react-native';
import VideoCard from '../VideoPlayer/VideoCard';
import {IVideoFetchResponse} from '../../api/fetchVideo';

interface IRecentTipCarouselProps {
  recentVideoTips: Array<IVideoFetchResponse>;
}

const RecentTipCarousel: React.FC<IRecentTipCarouselProps> = ({
  recentVideoTips,
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
        />
      ))}
    </ScrollView>
  );
};

export default RecentTipCarousel;
