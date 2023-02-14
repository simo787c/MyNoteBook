import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import addNote from "./HomeScreen";

const AddNoteScreen = ({ navigation, route }) => {
    {/* on go back */}
    const onGoBack = route.params?.onGoBack;

    const [note, setNote] = useState('');

  return (
    <View style={styles.container}>
        <TextInput
          placeholder='Enter a note..'
          onChangeText={text => setNote(text)}
          value={note}
        />
        {/* on go back */}
        <TouchableOpacity onPress={() =>
          onGoBack &&
          navigation.goBack() & onGoBack(note)
        }>
          <Text>Add note</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default AddNoteScreen
