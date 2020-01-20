const url =
  'https://testingtestingtestingtestingbyabe.s3.amazonaws.com/sampleVid.mp4';

//testing out video encoding for better perfomance
// const alternateUrl =
//   'https://res.cloudinary.com/dhw4ovvnl/video/upload/v1579489539/sampleVid_vllbtc.mp4';

export interface IVideoFetchResponse {
  id: string | number;
  url: string;
  viewsCount: string;
  title: string;
  proPicURL: string;
  thumbnail: string;
  proName: string;
}
export const fetchVideo = (): Array<IVideoFetchResponse> => {
  let videoList: any = [];

  // Just to generate 20 more of this
  Array.from(Array(20).keys()).map(
    _ =>
      (videoList = [
        ...videoList,
        {
          id: 1 + Math.random().toString(36),
          url: url,
          viewsCount: '2345465',
          title: 'How to throw a pass the right way the real way ',
          proPicURL:
            'https://images.unsplash.com/photo-1565084794475-e6c78c0d8574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80',
          thumbnail:
            'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
          proName: 'Craig Roh',
        },
        {
          id: 2 + Math.random().toString(36),
          url: url,
          viewsCount: '2345465',
          title: 'How to throw a pass the right way the real way ',
          proPicURL:
            'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
          thumbnail:
            'https://images.unsplash.com/photo-1568887628423-7c481b26dab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          proName: 'Craig Roh',
        },
        {
          id: 3 + Math.random().toString(36),
          url: url,
          viewsCount: '2345465',
          title: 'How to throw a pass the right way the real way ',
          proPicURL:
            'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
          thumbnail:
            'https://images.unsplash.com/photo-1565084794475-e6c78c0d8574?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80',
          proName: 'Craig Roh',
        },
        {
          id: 4 + Math.random().toString(36),
          url: url,
          viewsCount: '2345465',
          title: 'How to throw a pass the right way the real way ',
          proPicURL:
            'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
          thumbnail:
            'https://images.unsplash.com/photo-1568887628423-7c481b26dab8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          proName: 'Craig Roh',
        },
        {
          id: 5 + Math.random().toString(36),
          url: url,
          viewsCount: '2345465',
          title: 'How to throw a pass the right way the real way ',
          proPicURL:
            'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
          thumbnail:
            'https://images.unsplash.com/photo-1536456675602-3d631437006c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1591&q=80',
          proName: 'Craig Roh',
        },
      ]),
  );
  return videoList;
};
