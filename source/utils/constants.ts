import { Dimensions } from 'react-native';

const useConstants = () => {
  const dim = Dimensions.get('screen');

  return {
    dim,
  };
};

export default useConstants;
