import React, {useState} from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {dateFormat} from '../../helpers';
import InputText from '../inputText/InputText';

const Form = ({setCrearCita, addItem}) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState('Fecha y hora de la Cita');
  const [formValues, setFormValues] = useState({
    paciente: '',
    dueno: '',
    contacto: '',
    sintomas: '',
  });

  const showDatePicker = () => {
    setShow(true);
  };

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleConfirm = selectedDate => {
    setDate(selectedDate);
    hideDatePicker();
  };

  const handleSubmit = () => {
    console.log('Submit...');

    const payload = {
      ...formValues,
      id: +new Date(),
      fechaCita: date,
    };

    addItem(payload);

    setCrearCita(false);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.formWrapper}>
        <Text style={styles.formHeader}>Formulario</Text>
        <InputText
          name="paciente"
          placeholder={'Paciente'}
          formValues={formValues}
          setFormValues={setFormValues}
        />
        <InputText
          name="dueno"
          placeholder={'Dueño'}
          formValues={formValues}
          setFormValues={setFormValues}
        />
        <InputText
          name="contacto"
          placeholder={'Telefono de contacto'}
          formValues={formValues}
          setFormValues={setFormValues}
        />
        <InputText
          name="sintomas"
          placeholder={'Sintomas'}
          formValues={formValues}
          setFormValues={setFormValues}
        />
        <TouchableHighlight style={styles.input} onPress={showDatePicker}>
          <View>
            <Text
              style={
                date === 'Fecha y hora de la Cita'
                  ? styles.inputDate
                  : styles.inputDateActive
              }>
              {date === 'Fecha y hora de la Cita' ? date : dateFormat(date)}
            </Text>
          </View>
        </TouchableHighlight>
        <View>
          <TouchableHighlight onPress={handleSubmit} style={styles.btnSubmit}>
            <Text style={styles.btnSubmit__text}>Crear cita</Text>
          </TouchableHighlight>
        </View>
        {show && (
          <DateTimePickerModal
            mode="datetime"
            is24Hour={false}
            isVisible={show}
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    height: '85%',
    justifyContent: 'center',
  },
  formWrapper: {
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#222324',
  },
  formHeader: {
    fontSize: 35,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
    // textTransform: 'uppercase',
    letterSpacing: 2,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'solid',
    paddingHorizontal: 20,
    borderColor: '#323232',
    backgroundColor: '#323232',
    marginVertical: 10,
  },
  inputDate: {
    fontSize: 16,
    color: '#9d9d9d',
    alignItems: 'center',
    marginTop: 10,
  },
  inputDateActive: {
    fontSize: 16,
    color: '#fff',
    alignItems: 'center',
    marginTop: 10,
  },
  btnSubmit: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#284b63',
  },
  btnSubmit__text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});

export default Form;
