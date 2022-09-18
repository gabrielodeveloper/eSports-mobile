import { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, View, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';
import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';

import { styles } from './styles';
import { THEME } from '../../theme';

import logoImg from '../../assets/logo-nlw-esports.png';

export function Games() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);

  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.headers}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />  

          <View style={styles.right} />
        </View>

          <Image
           source={{uri: game.bannerUrl}} 
           style={styles.banner} 
            resizeMode="cover"
           />

          <Heading
            title={game.title}
            subtitle="conecte-se e comece a jogar"
          />

          <FlatList 
            data={duos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <DuoCard data={item} onConnect={() => {}} />
            )}
            horizontal
            style={styles.containerList}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contentList}
          />

      </SafeAreaView>
    </Background>
  );
} 