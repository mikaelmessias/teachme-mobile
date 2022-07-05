import React, { FunctionComponent } from 'react';
import { FlatList, ScrollView, Text } from 'react-native';
import ItemNextAppointment from '../../components/ItemNextAppointment/ItemNextAppointment';

import {styles} from './styles';


const solicitations = [
  {
    id: 1,
    name: "Matheus",
    date: "12/07/2022",
    status: "Atendimento cancelado"
  },
  {
    id: 2,
    name: "Mikael",
    date: "12/07/2022",
    status: "Atendimento confirmado"
  },
  {
    id: 3,
    name: "Giuvane",
    date: "12/07/2022",
    status: "Solicitação pendente"
  }
]

const handleAcceptPress = (id: number): any => {
  console.log(id)
};

const handleRefusePress = (id: number): any => {
  console.log(id)
};

const handleCancelPress = (id: number): any => {
  console.log(id)
};

const NextAppointmentsScreen = () => {

  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>
        Próximos atendimentos
      </Text>

      <FlatList 
        scrollEnabled={false}
        data={solicitations}
        renderItem={({item}) => (
          <ItemNextAppointment
            title={item.name}
            date={item.date}
            status={item.status}
            onPressAccept={handleAcceptPress(item.id)}
            onPressRefuse={handleRefusePress(item.id)}
            onPressCancel={handleCancelPress(item.id)}
          />
        )}
      />
    </ScrollView>
  );
};

export default NextAppointmentsScreen;
