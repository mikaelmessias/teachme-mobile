import React, {FunctionComponent} from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import ItemNotification from '../../components/ItemNotification/ItemNotification';
import ItemSolicitation from '../../components/ItemSolicitation/ItemSolicitation';

import {styles} from './styles';

const solicitations = [
  {
    id: 1,
    name: 'Matheus',
    date: '12/07/2022',
    status: 'Atendimento cancelado',
  },
  {
    id: 2,
    name: 'Mikael',
    date: '12/07/2022',
    status: 'Atendimento cancelado',
  },
];

const NotificationScreen: FunctionComponent = () => {
  const handleAcceptPress = (id: number): any => {
    console.log(id);
  };

  const handleRefusePress = (id: number): any => {
    console.log(id);
  };

  return (
    <View style={styles.scrollView}>
      <Text style={styles.title}>Solicitações</Text>

      <FlatList
        scrollEnabled={false}
        data={solicitations}
        renderItem={({item}) => (
          <ItemSolicitation
            title={item.name}
            date={item.date}
            onPressAccept={handleAcceptPress(item.id)}
            onPressRefuse={handleRefusePress(item.id)}
          />
        )}
      />

      <Text style={styles.title}>Atualizações</Text>

      <FlatList
        scrollEnabled={false}
        data={solicitations}
        renderItem={({item}) => (
          <ItemNotification
            title={item.name}
            date={item.date}
            status={item.status}
          />
        )}
      />
    </View>
  );
};

export default NotificationScreen;
