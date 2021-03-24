import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const InputText = ({name, placeholder, formValues, setFormValues}) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnChangeText = e => {
    setFormValues({...formValues, [name]: e});
  };

  const handleOnBlur = e => {
    if (!e.target.isFocused() && formValues[name].trim() === '') {
      setIsActive(false);
    }
  };

  return (
    <View>
      <TextInput
        value={formValues[name]}
        style={styles.inputInput}
        onFocus={() => setIsActive(true)}
        onBlur={e => handleOnBlur(e)}
        onChangeText={e => handleOnChangeText(e)}
      />
      <Text style={!isActive ? styles.inputLabelActive : styles.inputLabel}>
        {placeholder}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  inputLabelActive: {
    position: 'absolute',
    top: 23,
    left: 20,
    fontSize: 16,
    color: '#9d9d9d',
    zIndex: 2,
  },
  inputLabel: {
    display: 'none',
    zIndex: 1,
  },
  inputInput: {
    borderRadius: 5,
    fontSize: 20,
    color: '#fff',
    height: 50,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#323232',
    marginVertical: 10,
    paddingHorizontal: 20,
    // backgroundColor: '#323232',
    zIndex: 3,
  },
});

export default InputText;
