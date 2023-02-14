import React, { useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { Container, Titulo, InputArea, InputTimes, Sortear, ButtonText} from './styles';
import { useNavigation } from '@react-navigation/native'



export default function Times() {
  
  const [jogadores, setJogadores] = useState("");
  const [words, setWords] = useState([]);
  const [times, setTimes] = useState('');
  const navigation = useNavigation();


  //func para embaralhar o dados que foram colocados para o usario
  function shuffle(array) {
    
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  const handleTextChange = (event) => {
    setJogadores(event.nativeEvent.text);
    setWords(event.nativeEvent.text.split(" "));
  };

  //func para distribuir os jogadores entre os times 
  function handleSortear(){
    
    const shuffledPlayers = shuffle(words);
    const numberOfTeams = times;
    let teams = [];
    let playersPerTeam = (shuffledPlayers.length / numberOfTeams);

   if(jogadores.length === 0){
    Alert.alert("Jogadores", "A Quantidade de jogadores é inválida !")
    return
   }
    
    if(times % 1 !== 0 || times === '' || times === '0' || times < 0){
      Alert.alert("Times", " A Quantidade de times é inválidada !");
      return
    }
    
    for (let i = 0; i < shuffledPlayers.length; i += playersPerTeam) {
      let team = shuffledPlayers.slice(i, i + playersPerTeam);
      team = team.filter(player => player.trim().length > 0);
      teams.push(team);
    }
    navigation.navigate('Sorteado', { teams });
  }


  

  return (
    
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{backgroundColor: "#363636"}}>
          <Container>
            <Titulo>Jogadores</Titulo>
            
            <InputArea 
              placeholder={"Obs: Separe o nome dos jogadores por ESPAÇO, mas não precione ESPAÇO após o último nome!"} 
              multiline
              style={{ textAlignVertical: "top"}}
              autoCorrect={false}
              value={jogadores}
              onChange={handleTextChange}
            />
          
            <InputTimes 
              placeholder= "Quant. Times"  
              keyboardType='numeric'
              value={times}
              onChangeText={setTimes}
            />
           
            <Sortear onPress={handleSortear}>
              <ButtonText>Sortear</ButtonText>
            </Sortear>
          </Container>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
    
  );
}
