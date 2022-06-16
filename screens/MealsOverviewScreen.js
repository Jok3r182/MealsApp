import { Text, View, StyleSheet, FlatList } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import { useRoute } from "@react-navigation/native"
import MealItem from "../components/MealItem"
import { useLayoutEffect } from "react"

//navigation prop if is registered
//route has params
//useRoute gives same as route

function MealsOverviewScreen({route, navigation}){

    
    //to remove side effect with useEffect, simultaniuosly render with component
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title 
        navigation.setOptions({
        title: categoryTitle
    })
    }, [catId, navigation])

   

    function renderMealItem(itemData){
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }
        return <MealItem {...mealItemProps}/>
    }

    const catId = route.params.categoryId
    const displayedMeals = MEALS.filter((mealItem) =>{
        return mealItem.categoryIds.indexOf(catId) >=0
    })

    return <View>
        <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
    </View>
}

 export  default MealsOverviewScreen

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
 })