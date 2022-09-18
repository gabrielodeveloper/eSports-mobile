import { useState, useEffect } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import { styles } from './styles';
import logoImg from '../../assets/logo-nlw-esports.png';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({id, title, bannerUrl}: GameCardProps) {
    navigation.navigate('games', {id, title, bannerUrl})
  }

  useEffect(() => {
    fetch('http://127.0.0.1:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data);
      })
  }, []);

  return (
    <Background>

      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu dou"
          subtitle="Selecione o game que você quer jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={ () => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          horizontal
        />
      </SafeAreaView>
    </Background>
  );
}