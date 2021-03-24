import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {dateFormat} from '../../helpers';

const Citas = ({item, deleteItem}) => {
  const handleDelete = (e, id) => {
    deleteItem(id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>{item.paciente}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Dueño:</Text>
        <Text style={styles.text}>{item.dueno}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Sintomas:</Text>
        <Text style={styles.text}>{item.sintomas}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Citado:</Text>
        <Text style={styles.text}>{dateFormat(item.fechaCita)}</Text>
      </View>
      <View>
        <TouchableHighlight
          onPress={e => handleDelete(e, item.id)}
          style={styles.btnDelete}>
          <Text style={styles.btnDelete__text}>Eliminar &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#222324',
    marginBottom: 5,
  },
  item: {
    flexDirection: 'row',
  },
  header: {
    borderBottomColor: '#9d9d9d',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    marginBottom: 7,
  },
  textHeader: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 5,
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    width: '30%',
    letterSpacing: 1,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
  btnDelete: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  btnDelete__text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Citas;
