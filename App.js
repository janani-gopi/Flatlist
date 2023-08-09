import Cards from './Cards';
import { FlatList, StyleSheet,Text,View } from 'react-native';
import {data} from "./data"

export default function App() {
  return (
    <View style={styles.container}>
       <FlatList
         data={data}
         renderItem={({item}) =><Cards item={item} />}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a35',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:25
  }})

