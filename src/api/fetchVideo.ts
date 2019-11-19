let url =
  'https://testingtestingtestingtestingbyabe.s3.amazonaws.com/sampleVid.mp4';

export interface IVideoFetchResponse {
  id: string | number;
  url: string;
}
export const fetchVideo = (): Array<IVideoFetchResponse> => {
  return [
    {
      id: 1,
      url: url,
    },
    {
      id: 2,
      url: url,
    },
    {
      id: 3,
      url: url,
    },
    {
      id: 4,
      url: url,
    },
    {
      id: 5,
      url: url,
    },
  ];
};
