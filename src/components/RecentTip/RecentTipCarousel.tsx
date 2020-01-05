import React from 'react';
import {ScrollView} from 'react-native';
import RecentTipsCard from './RecentTipsCard';

const RecentTipCarousel = () => {
  return (
    <ScrollView horizontal>
      <RecentTipsCard />
      <RecentTipsCard />
      <RecentTipsCard />
      <RecentTipsCard />
    </ScrollView>
  );
};

export default RecentTipCarousel;
