import React, {useState} from 'react';
import { Container, Button, ButtonText, Logo } from './styles'
import { SafeAreaView, Alert } from 'react-native';





export default function Home({ navigation }) {
    
    const [showAlert, setShowAlert] = useState(true);

  const handleRedirect = () => {
    if (showAlert) {
      Alert.alert(
        'ATENÇÃO !!',
        'SEPARE O NOME DOS JOGADORES POR ESPAÇO, MAS NÃO PRECIONE ESPAÇO APÓS O ÚLTIMO NOME !',
        [
          { text: 'Não aparecer novamente', onPress: () => setShowAlert(false) },
          { text: 'Continuar', onPress: () => navigation.navigate('Times') },
        ],
        { cancelable: false }
      );
    } else {
      navigation.navigate('Times');
    }
  };
    
    return ( 
        <SafeAreaView style={{backgroundColor: "#363636"}}>
            <Container>
                <Logo source={require('../../assets/logo.png')}/>
                <Button onPress={handleRedirect}>
                        <ButtonText>Novo sorteio</ButtonText>
                </Button>
            </Container>
        </SafeAreaView>
    );
    }