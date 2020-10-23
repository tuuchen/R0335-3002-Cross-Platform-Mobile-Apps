import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native'
import { firebase } from '../../firebase/config'
import { CommonActions } from '@react-navigation/native'
import styles from './styles'

function HomeScreen(props) {
  const [entityText, setEntityText] = useState('')
  const [entities, setEntities] = useState([])

  const entityRef = firebase.firestore().collection('entities')
  const userID = props.extraData.id

  useEffect(() => {
    entityRef
      .where('authorID', '==', userID)
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        (querySnapshot) => {
          const newEntities = []
          querySnapshot.forEach((doc) => {
            const entity = doc.data()
            entity.id = doc.id
            newEntities.push(entity)
          })
          setEntities(newEntities)
        },
        (error) => {
          alert(error)
        }
      )
  }, [])

  const onAddButtonPress = () => {
    if (entityText && entityText.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp()
      const data = {
        text: entityText,
        authorID: userID,
        createdAt: timestamp,
      }
      entityRef
        .add(data)
        .then((_doc) => {
          setEntityText('')
          Keyboard.dismiss()
        })
        .catch((error) => {
          alert(error)
        })
    }
  }

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        props.navigation.replace('Login')
      })
      .catch((error) => alert(error))
  }

  const renderEntity = ({ item, index }) => {
    return (
      <View style={styles.entityContainer}>
        <Text style={styles.entityText}>
          {index}. {item.text}
        </Text>
      </View>
    )
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add new entity"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEntityText(text)}
            value={entityText}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
        {entities && (
          <View style={styles.listContainer}>
            <FlatList
              data={entities}
              renderItem={renderEntity}
              keyExtractor={(item) => item.id}
              removeClippedSubviews={true}
            />
          </View>
        )}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default HomeScreen
