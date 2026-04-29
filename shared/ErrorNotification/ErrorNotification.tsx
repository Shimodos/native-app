import { StyleSheet, Text, View } from 'react-native';
import { ErrorNotificationProps } from './ErrorNotificationProps';
import { useState, useEffect } from 'react';
import { FontSizes } from '../tokens';

export function ErrorNotification({ message }: ErrorNotificationProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!message) {
      return;
    }
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  if (!isVisible) {
    return <></>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  text: {
    color: 'white',
    fontSize: FontSizes.fs16,
    fontWeight: 'bold',
  },
});
