import React, {FunctionComponent} from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles';

interface iNotificationProps {
  title: string;
  date: string;
  status: string;
}

const ItemNotification: FunctionComponent<iNotificationProps> = props => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/jon-snow.jpeg')}
      />

      <View style={styles.containerInfos}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{props.date}</Text>
        <Text style={styles.status}>{props.status}</Text>
      </View>
    </View>
  );
};

export default ItemNotification;
