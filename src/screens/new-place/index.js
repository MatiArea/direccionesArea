import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import ImageSelector from '../../components/image-selector'
import { placeActions } from '../../store/actions'
import { styles } from './styles'
import { useDispatch } from 'react-redux'

const NewPlace = ({ navigation }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [image, setImage] = useState('')

  const handleNameChange = (text) => setName(text)
  const handleSavePlace = () => {
    dispatch(placeActions.addPlace(name, image, 'dirección default', 'latitud', 'longitud'))
    navigation.navigate('Place')
  }
  const handleOnImage = (uri) => {
    setImage(uri)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}></Text>
        <ImageSelector onImage={handleOnImage} />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={handleNameChange}
          value={name}
        />
        <Button title="Guardar" onPress={() => handleSavePlace()} />
      </View>
    </ScrollView>
  )
}

export default NewPlace
