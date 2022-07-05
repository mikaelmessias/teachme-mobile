import React, { FunctionComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface iSolicitationProps {
  title: string;
  date: string;
  onPressAccept?: () => void;
  onPressRefuse?: () => void;
}

const ItemSolicitation: FunctionComponent<iSolicitationProps> = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfos}>
        <Image
          style={styles.logo}
          source={require('../../assets/jon-snow.jpeg')}
        />

        <View style={styles.containerTexts}>
          <Text style={styles.title}>
            {props.title}
          </Text>
          <Text style={styles.date}>
            {props.date}
          </Text>
        </View>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity 
          style={[styles.touchable, {borderEndWidth: 1}]}
          onPress={props.onPressAccept}
        >
          <Text style={{color: '#17D19E', fontWeight: '900'}}>
            ACEITAR
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.touchable}
          onPress={props.onPressRefuse}
        >
          <Text style={{color: '#D1173D', fontWeight: '900'}}>
            RECUSAR
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemSolicitation;
