
import {Card }from "react-native-paper"
import { FlatList, StyleSheet, Text, View,Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function App() {
  return (
    <View style={styles.container}>
       <FlatList
         data={[
          { image:"https://picsum.photos/id/11/500",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est."
           },
          { image:"https://picsum.photos/id/10/500",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est."
          },
          { image:"https://picsum.photos/id/12/500",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est."
           },
          { image:"https://picsum.photos/id/13/500",
           text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est."
          },
          { image:"https://picsum.photos/id/16/500",
            text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est."
           }, 
        ]}
        renderItem={({item}) => ( <Card style={styles.card}>
                                    <Image style={styles.image} source={{uri:item.image}}/>
                                    <Text style={styles.text}>{item.text}</Text>
                                    <View style={styles.div}>
                                        <Text style={styles.smalltext}>small text</Text>
                                        <View style={styles.div}>
                                              <FontAwesome onPress={()=>{alert("clicked")}} name="heart-o" style={styles.icon}/>
                                              <FontAwesome onPress={()=>{alert("clicked")}} name="share-alt" style={styles.icon}/>
                                              <FontAwesome onPress={()=>{alert("clicked")}}name="ellipsis-v" style={styles.icon}/>
                                        </View>
                                    </View>
                                  </Card>)} />
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
  },
  card:{
    padding:23,
    width:"100%", 
    backgroundColor:"#282a35", 
    borderBottomWidth:1, 
    borderBottomColor:"gray"
  },
  image:{
    padding:10,
    height:200,
    borderRadius:25, 
    width:350
  },
  text:{
    padding:10 , 
    color:"white", 
    fontSize:20,
  },
  div:{
    display:"flex", 
    flexDirection:"row", 
    justifyContent:"space-between",
  },
  smalltext:{
    color:"white",
    padding:6
  },
  icon:{
    color:"gray",
    padding:15,
    fontSize:20
  }
});
