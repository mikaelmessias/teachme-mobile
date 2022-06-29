import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, ScrollView, SafeAreaView, View, Text, FlatList } from 'react-native';
import SignUpHeader from '../../components/SignUpHeader/SignUpHeader';
import { Button } from 'react-native-paper';

import { styles, stylesFlatList } from './styles';

const ProfileScreen = () => {
  var [ isPressAbility, setIsPressAbility ] = React.useState(true);
  var [ isPressAvailability, setIsPressAvailability ] = React.useState(false);

  const nav = useNavigation();

  const list = [
    {
      title: "JavaScript",
      value: "R$ 13,00"
    },
    {
      title: "TypeScript",
      value: "R$ 14,00"
    },
    {
      title: "Kotlin",
      value: "R$ 20,00"
    },
    {
      title: "React",
      value: "R$ 15,00"
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}> 
        <SignUpHeader showBackButton />

        <Button 
          style = {styles.editButton}
          uppercase={false}
          mode="outlined" 
          color="#2A2A2A"> 
          Editar dados
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

        <View style={[styles.content, {marginBottom: 38}]}>
          <Text style={styles.title}>
            Bio
          </Text>

          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis nibh libero, ac tincidunt dui consequat quis.
          </Text>
        </View>

        <View style={styles.viewInfos}>
          <TouchableOpacity  
            style={{marginRight: 18}}
            onPress={() => {
              setIsPressAvailability(false)
              setIsPressAbility(true)}}
          >
            <Text 
              style={[styles.textButton, { color: isPressAbility? '#6717D1' : '#B5B5B5' }]}
            >
              Habilidades
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {
            setIsPressAvailability(true)
            setIsPressAbility(false)}}
          >
            <Text 
              style={[styles.textButton, { color: isPressAvailability? '#6717D1' : '#B5B5B5' }]}
            >
              Disponibilidade
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList 
            style={stylesFlatList.flatList}
            data={list}
            renderItem={({item}) => (
              <View style={stylesFlatList.content}>
                <View>
                  <Image
                    style={stylesFlatList.logoTech}
                    source={require('../../assets/jon-snow.jpeg')}
                  />
                </View>
                <View style={stylesFlatList.contentDescription}>
                  <Text style={stylesFlatList.title}>{item.title.toUpperCase()}</Text>
                  <Text style={stylesFlatList.value}>{item.value}</Text>
                </View>
              </View>
              
            )}
          />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
