import {capitalizeString} from './fetchPreference';
import faker from 'faker';

//testing out video encoding for better performance
// const alternateUrl =
//   'https://res.cloudinary.com/dhw4ovvnl/video/upload/v1579489539/sampleVid_vllbtc.mp4';
const videoUrls = [
  'https://testingtestingtestingtestingbyabe.s3.amazonaws.com/sampleVid.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
];

const thumbnailUrls = [
  'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
  'https://images.unsplash.com/photo-1568887628423-7c481b26dab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
  'https://images.unsplash.com/photo-1565084794475-e6c78c0d8574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80',
  'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
  'https://images.unsplash.com/photo-1568887628423-7c481b26dab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
  'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
];

export interface IVideoFetchResponse {
  id: string | number;
  url: string;
  viewsCount: string;
  title: string;
  proPicURL: string;
  thumbnail: string;
  proName: string;
}

export const fetchVideo = (): Array<IVideoFetchResponse> =>
  Array.from(
    {length: 2},
    () =>
      ({
        id: faker.random.uuid(),
        url:
          videoUrls[faker.random.number({min: 0, max: videoUrls.length - 1})],
        viewsCount: faker.random
          .number({min: 2000, max: 1000000000})
          .toString(),
        title: capitalizeString(faker.random.words(6)),
        proPicURL: faker.helpers.contextualCard().avatar,
        thumbnail:
          thumbnailUrls[
            faker.random.number({min: 0, max: thumbnailUrls.length - 1})
          ],
        proName: faker.name.findName(),
      } as IVideoFetchResponse),
  );
