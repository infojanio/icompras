//import ListItem from '@components/ListItem';

import React, { useEffect, useState } from 'react';
import {
  Text,
  Image,
  FlatList, 
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios'

export default function App () {

const baseURL = 'https://api.github.com'
const perPage = 20

const [data, setData] = useState([])
const [loading, setLoading] = useState(false)
const [page, setPage] = useState(1)

useEffect(()=> {
loadProducts()
},[])

async function loadProducts(){
if(loading) return;

setLoading(true)

const response = await axios.get(`${baseURL}/search/repositories?q=react&per_page=${perPage}&page=${page}`)

setData([...data, ...response.data.items])
setPage(page+1)
setLoading(false)
}

  return (

      <View style={styles.container}>
       <FlatList 
        style={{marginTop:35}}
        contentContainerStyle={{marginHorizontal:20}}
        data={data}
        keyExtractor={item=> String(item.id)}
        renderItem={({ item }) => <ListItem data={item}/> }
        onEndReached={loadProducts}
        onEndReachedThreshold={0.4}
        ListFooterComponent={<FooterList load={loading} />}
       />
      </View>   

  );
};

function ListItem({item, data}) {
  return(
  <View style={styles.listItem}>
    <Image style={styles.image} source={{uri: data?.image_avatar}}/>
    <Text style={styles.listText}>{data.id}</Text>
    <Text style={styles.listText}>{data.login}</Text>
    <Text style={styles.listText}>{data.url}</Text>

  </View>
  )
}

function FooterList({load}) {
  if(!load) return null;
  return(
    <View style= {styles.loading}>
      <ActivityIndicator size={25} color="#121212"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  listItem: {
    backgroundColor: '#121212',
    padding: 30,
    marginTop: 20,
    borderRadius: 10,

  },

  listText: {
    fontSize: 16,
    color: '#fff'
  }, 

  loading: {
    padding: 10
  },

  image: {
    fontSize: 18,
    borderRadius: 24
  }



});



