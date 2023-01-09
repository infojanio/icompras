import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container } from 'native-base';

export function List() {


 const [products, setProducts] = useState([])

  //carrega usuários do github
  function getProducts() {


    //useEffect(()=> {
    //fetch('https://api.github.com/users') //
     // .then((response) => response.json())
      //.then(data = console.log(data))
      // .then((json) => {
      //  setUsers(json)
      //})
useEffect(()=> {      
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((json) => {
  setProducts(json.images)
})


useEffect(() => {
  getProducts()
}, [])



return (
    function renderProduct(item: any) {
    <SafeAreaView style={styles.container}>
      <Text>Produtos</Text>
      <FlatList
        showsVerticalScrollIndicator={false}

        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => renderProduct(item)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})
