import { Text, Pressable, View, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {

    const navigation = useNavigation()
    
    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {
            mealId: id,
        })
    }
    
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => (pressed? styles.buttonPressed : null)} onPress={selectMealItemHandler}>
        <View style={styles.innerContainer}>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
//separate shadow and corners with innerContainer and mealItem, because it wont work on IOs
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === 'android'? 'hidden' : 'visible',
  },
  innerContainer:{
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  buttonPressed:{
    opacity: 0.5
  }
});
