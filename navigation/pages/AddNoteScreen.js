import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import addNote from "./HomeScreen";

const AddNoteScreen = ({ navigation, route }) => {
  {/* on go back */ }
  //const onGoBack = route.params?.onGoBack;

  //const [note, setNote] = useState('');
  const [title, setTitle] = useState(route.params?.note?.title || '');
  const [note, setNote] = useState(route.params?.note?.note || '');

  //optional chaining operator
  //? checks if route.params property is undefined or null, if true return entire expression as undefined
  const addNote = route.params?.addNote || null;
  const editNote = route.params?.editNote || null;
  //if either params or note cannot be reached, return undefined
  const noteId = route.params?.note?.id;
  const counter = route.params?.counter;

  const handleSave = () => {
    if (addNote) {
      //if no title given, use counter as title
      if (title === "") {
        addNote("Note " + (counter + 1), note);
      } else {
        addNote(title, note);
      }
      //if it is an existing note being edited
    } else if (editNote) {
      editNote(noteId, title, note);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        onChangeText={setTitle}
        value={title}
      />

      <TextInput
        placeholder='Enter a note..'
        onChangeText={setNote}
        value={note}
        //allow paragraphs and remove keyboard when textbox isnt selected
        multiline={true}
        onBlur={Keyboard.dismiss}
      />

      <Button title="Finish"
        mode="contained"
        onPress={handleSave}>
      </Button>

      {/* on go back */}
      {/* <TouchableOpacity onPress={() =>
          onGoBack &&
          navigation.goBack() & onGoBack(note)
        }>
          <Text>Add note</Text>
        </TouchableOpacity> */}
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
