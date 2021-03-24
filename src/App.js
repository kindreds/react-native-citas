import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Citas from './components/citas/Citas';
import Form from './components/form/Form';

const App = () => {
  const [citas, setCitas] = useState([]);

  const [crearCita, setCrearCita] = useState(false);

  const deleteItem = id => {
    const citasFilter = citas.filter(c => c.id !== id);
    return setCitas(citasFilter);
  };

  const addItem = payload => {
    console.log(payload);
    setCitas([...citas, payload]);
  };

  return (
    <LinearGradient style={styles.container} colors={['#3c6e71', '#284b63']}>
      <Text style={styles.title}>Administrador de citas</Text>

      <View style={styles.wrapper}>
        <View>
          <TouchableHighlight
            style={styles.btn}
            onPress={e => setCrearCita(!crearCita)}>
            <Text style={styles.btnText}>
              {crearCita ? 'Volver al listado' : 'Crear cita'}
            </Text>
          </TouchableHighlight>
        </View>
        {crearCita ? (
          <Form setCrearCita={setCrearCita} addItem={addItem} />
        ) : (
          <>
            <Text style={styles.title}>
              {citas.length === 0 ? 'No hay citas' : 'Administra tus citas'}
            </Text>
            <FlatList
              data={citas}
              keyExtractor={cita => cita.id}
              renderItem={({item}) => (
                <Citas item={item} deleteItem={deleteItem} />
              )}
            />
          </>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginHorizontal: '2.5%',
    height: '100%',
    paddingBottom: 60,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginVertical: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btn: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#284b63',
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default App;
