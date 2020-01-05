import React from 'react';
import {ScrollView} from 'react-native';
import RecentTipsCard from './RecentTipsCard';
import {fetchVideo} from '../../api/fetchVideo';
const tips = fetchVideo();

const RecentTipCarousel = () => {
  let videoTips = tips.length >= 5 ? tips.slice(0, 5) : tips;
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {videoTips.map(tip => (
        <RecentTipsCard
          key={tip.id}
          videoTitle={tip.title}
          proName={tip.proName}
          proPicURL={tip.proPicURL}
          thumbnailUrl={tip.thumbnail}
        />
      ))}
    </ScrollView>
  );
};

export default RecentTipCarousel;
