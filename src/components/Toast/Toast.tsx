import React from 'react';
import {Animated} from 'react-native';

import {ToastPosition, useToast, useToastService} from '@services';

import {ToastContent} from './components/ToastContent';

const DEFAULT_DURATION = 2000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = React.useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitingAnimation = React.useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  React.useEffect(() => {
    if (toast) {
      runEnteringAnimation();

      setTimeout(() => {
        runExitingAnimation(hideToast);
        hideToast();
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, runEnteringAnimation, runExitingAnimation, toast]);

  if (!toast) {
    return null;
  }

  const position: ToastPosition = toast?.position || 'top';

  return (
    <Animated.View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        position: 'absolute',
        alignSelf: 'center',
        opacity: fadeAnim,
        [position]: 100,
      }}>
      <ToastContent toast={toast} />
    </Animated.View>
  );
}
