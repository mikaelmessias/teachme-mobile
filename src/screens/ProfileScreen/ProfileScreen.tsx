import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ImageBackground, ScrollView, SafeAreaView, View} from 'react-native';
import {Button, Text} from 'react-native-paper';

import {styles} from './styles';

const ProfileScreen = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}> 
        <Button 
          style = {styles.editButton}
          mode="outlined" 
          color="#2A2A2A"> 
          Editar Dados
        </Button>

        <Image
          style={styles.imgProfile}
          source={require('../../assets/jon-snow.jpeg')}
        />
        
        <Text style={styles.name}>
          Jon Snow
        </Text>
        
        <Text style={styles.email}>
          snow@kingslayer.uk
        </Text>
        
        <View style={styles.content}>
          <Text style={styles.title}>
            DATA DE NASCIMENTO
          </Text>

          <Text style={styles.description}>
            12 de dezembro de 1996
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            CPF
          </Text>

          <Text style={styles.description}>
            123.456.789-00
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            Bio
          </Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis nibh libero, ac tincidunt dui consequat quis.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
