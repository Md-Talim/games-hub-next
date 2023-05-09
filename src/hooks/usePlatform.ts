import usePlatforms from './usePlatforms';

const usePlatform = (id?: number) => {
  const { data: platforms } = usePlatforms();
  const platform = platforms.results.find((platform) => platform.id === id);
  return platform;
};

export default usePlatform;
