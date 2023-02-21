import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { getFirestore, collection, getDocs, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore/lite';
import firebase from '../../component/firebase';
/* const Note = ({ note, index, removeNote }) => {
    return (
        <View>
            <Text>{note}</Text>
            <TouchableOpacity onPress={() => removeNote(index)}>
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}; */

const HomeScreen = ({ navigation, route }) => {
    //{/* on go back */}
    //    React.useEffect(() => {
    //        if (route.params?.note) {
    //            setNote(note.concat(route.params.note));
    //        }
    //    }, [route.params?.note]);

    const [counter, setCounter] = useState(0);
    const [notes, setNotes] = useState([]);
    //const [note, setNote] = useState('');

    const db = getFirestore(firebase);

    //use effect ran once per re-render
    //only for initializing data once per re-render
    useEffect(() => {
        initializeData();
    }, []);

    //initialize all notes from collection
    //insert notes from collection into local list setNotes (useState)
    async function initializeData() {
        const noteCollection = collection(db, 'notes');
        const noteSnapshot = await getDocs(noteCollection);
        const list = noteSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNotes([...list]);
    }

    const addNote = async (title, note) => {
        //save note and previous notes, then reset note
        //firebase add, collection reference, db instance, collection name, custom fields, docRef for fetching firestore id
        try {
            const docRef = await addDoc(collection(db, "notes"), {
                title: title,
                note: note
            });
            setNotes([...notes, { id: docRef.id, title, note }]);
            setCounter(counter + 1);
        } catch (error) {
            console.error(error);
        }
    };

    const removeNote = async (id) => {
        setNotes(notes.filter(note => note.id !== id));
        //firebase delete, doc reference, collection name, document id
        await deleteDoc(doc(db, "notes", id));
    };

    const editNote = async (id, title, note) => {
        //find id of edited note, then set new data
        let tempNotes = [...notes];
        let index = tempNotes.findIndex(n => n.id === id);
        tempNotes[index] = { id, title, note };
        setNotes(tempNotes);

        //firebase edit, essentially like firebase add
        await setDoc(doc(db, "notes", id), {
            title: title,
            note: note
        });
    };

    const renderNote = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('AddNote', { note: item, editNote: editNote })}>
            <View>
                <View>
                    <Text>{item.title}</Text>
                    <Text numberOfLines={3} ellipsizeMode="tail">{item.note}</Text>
                </View>
                <TouchableOpacity onPress={() => removeNote(item.id)}>
                    <Text>Remove</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <View>
                <Text>List:</Text>

                {/* {notes.map((note, index) => (
                    <Note key={index} note={note} index={index} removeNote={removeNote} />
                ))} */}
                {/* on go back */}
                {/* <Button title='Add note' onPress={() => navigation.navigate('AddNote', { onGoBack: addNote })} /> */}

                <FlatList
                    data={notes}
                    //ui skeleton to render note in
                    renderItem={renderNote}
                    keyExtractor={(item, index) => index.toString()}
                />

                <Button title='Add Note' onPress={() => navigation.navigate('AddNote', { counter: counter, addNote: addNote })} />

            </View>

            {/* <TextInput
                placeholder='Enter a note..'
                onChangeText={text => setNote(text)}
                value={note}
            />
            
             <TouchableOpacity onPress={addNote}>
                <Text>Add note</Text>
            </TouchableOpacity>  */}

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
