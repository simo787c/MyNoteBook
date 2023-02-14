import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

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

const HomeScreen = ({ navigation, route }) => {
{/* on go back */}
    React.useEffect(() => {
        if (route.params?.note) {
            setNote(note.concat(route.params.note));
        }
    }, [route.params?.note]);


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
            <View>
                <Text>List:</Text>

                {notes.map((note, index) => (
                    <Note key={index} note={note} index={index} removeNote={removeNote} />
                ))}
                {/* on go back */}
                <Button title='Add note' onPress={() => navigation.navigate('AddNote', { onGoBack: addNote })} />
            </View>

            <TextInput
                placeholder='Enter a note..'
                onChangeText={text => setNote(text)}
                value={note}
            />
            
             <TouchableOpacity onPress={addNote}>
                <Text>Add note</Text>
            </TouchableOpacity> 

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default HomeScreen
