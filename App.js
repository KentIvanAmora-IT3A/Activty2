import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.main_container}>

                 <View style={styles.test}>
                 <Image style={styles.back_icon}
                 source={require("./image/back_icon.png")}/>
                 <Text style={styles.myname}>VALORANT</Text>
                 <Image style={styles.search_icon}
                 source={require("./image/search_icon.png")}/>
                 <Image style={styles.options_icon}
                 source={require("./image/options_icon.png")}/>              
                  </View>
    <Image style={styles.cover_page} source={require("./image/cover_page.png")}/>
    <Image style={styles.LOGO} source={require("./image/LOGO.jpg")}/>
                 <View style={styles.verified}> 
                 <Text style={styles.myname2}>VALORANT</Text>
                 <Image style={styles.verified_icon}
                 source={require("./image/verified_icon.png")}/>
                 </View>
    <Text style={styles.description}>@valorant  2.16M subscribers  186 videos</Text>
    <Text style={styles.description}>
    A 5v5 character-based tactical shooter from Riot Games. Available..
    </Text>
    <Text style={styles.description2}>playvalorant.com and 2 more links</Text>
                 <View style={styles.sub_buttonframe}> 
                 <Text style={styles.sub_button}>Subscribe</Text>
                 </View>
    <Image style={styles.bottom_half} source={require("./image/bottom_half.jpg")}/>



    </View>  
  );
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 28,
    flex: 1,
    backgroundColor: "#0f0f0f",

                  },

  back_icon: {
    height: 30,
    width: 30,
             },
  search_icon: {
    marginLeft: 180,
    height: 30,
    width: 30,
             },
  options_icon: {
    height: 30,
    width: 30,
             },
  cover_page: {
    alignSelf: 'center',
    height: 100,
    width: 424,
             }, 
  verified_icon: {
    alignSelf: "center",
    height: 18,
    width: 18,
                  },
  bottom_half: {
    marginTop: 21,
    alignSelf: 'center',
    height: 450,
    width: 424,

               },   
  test: {
    alignSelf: "center",
    flexDirection: 'row',
    gap: 10,
    height: 50,
    width: 424,
    backgroundColor: "#181818",
    padding: 10,
  },
  myname: {
    fontSize: 25,
    color: "white", },      
  myname2: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 25,
    color: "white",
  },
  description: {
    marginTop: 5,
    alignSelf: "center",
    fontSize: 13,
    color: "white", },
    description2: {
      fontWeight: 'bold',
      marginTop: 13,
      alignSelf: "center",
      fontSize: 13,
      color: "white", },
LOGO: {
  alignSelf: 'center',
  marginTop: 20,
  borderRadius: 80,
    height: 60,
    width: 60,
             },
verified: {
  marginTop: 10,
  alignSelf: "center",
    flexDirection: 'row',
    gap: 5,
          },
 sub_button: {
  alignSelf: "center",
    fontWeight: 'bold',
    fontSize: 20,
    color: "black",
 },
 sub_buttonframe: {
  marginTop: 15,
 justifyContent: "center",
    alignSelf: "center",
    flexDirection: 'row',
    gap: 10,
    height: 35,
    width: 404,
    backgroundColor: "white",
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
  },

});
