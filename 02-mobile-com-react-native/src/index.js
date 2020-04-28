import React, {useEffect, useState} from 'react';
import api from './services/api';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handlerAddProject() {
    const response = await api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Thiago Cedran Santos',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <StatusBar color="light-content" backgroundColor="#7159C1" />

      <SafeAreaView style={styles.content}>
        <FlatList
          style={styles.content}
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item}) => (
            <Text style={styles.title}>{item.title}</Text>
          )}
        />

        <TouchableOpacity
          style={styles.buttonAdd}
          activeOpacity={0.7}
          onPress={handlerAddProject}>
          <Text style={styles.buttonAddText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#7159C1',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonAdd: {
    height: 50,
    margin: 20,
    borderRadius: 4,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAddText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
