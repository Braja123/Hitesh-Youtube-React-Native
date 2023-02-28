import {View, Text} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is Required'),
});

const App = () => {
  const [password, setPassword] = useState();
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {};
  const createPassword = (characters: string, passwordLength: number) => {};
  const resetPasswordState = () => {};
  return (
    <View>
      <Text>App Demo</Text>
    </View>
  );
};

export default App;
