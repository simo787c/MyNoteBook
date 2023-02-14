import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Note = ({ note, index, removeNote }) => {
  return (
    <View>
      <Text>{note}</Text>
      <TouchableOpacity onPress={() => removeNote(index)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const addNote = () => {
    if (note) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  const removeNote = index => {
    setNotes(notes.filter((note, i) => i !== index));
  };

  return (
    <View>
      <View style={styles.container}>
        <Text>My Notebook</Text>
        <Button title='Add note' onPress={() => navigation.navigate('AddNote')} />
      </View>
      <TextInput
        placeholder='Enter a note..'
        onChangeText={text => setNote(text)}
        value={note}
      />
      <TouchableOpacity onPress={addNote}>
        <Text>Add note</Text>
      </TouchableOpacity>
      {notes.map((note, index) => (
        <Note key={index} note={note} index={index} removeNote={removeNote} />
      ))}
    </View>
  );
};

export default App;
