import React from 'react';
import { ScrollView } from 'react-native';
import { Container, Titulo, Jogadores, Content, Times } from './styles';

export default function Sorteado({route}) {
  const { teams } = route.params;
  return (
  
    <Container>
      <Titulo>Times:</Titulo>
      <ScrollView>
      {teams.map((team, index) => (
        <Content key={index}>      
          <Times>Time {String.fromCharCode(65 + index)}</Times>
          {team.map((player, playerIndex) => (
            <Jogadores key={playerIndex}> {player}</Jogadores>
          ))}
        </Content>  
      ))}
      </ScrollView>
    </Container>
  );
}



