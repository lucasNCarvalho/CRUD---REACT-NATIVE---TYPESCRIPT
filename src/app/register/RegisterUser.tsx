import React, { useState } from 'react';
import {
  ScrollView
} from 'react-native';
import AppButton from '../../components/button/AppButton';
import { Container } from '../../components/container/Container';
import AppTextInput from '../../components/input/AppInput';
import AppInputMask from '../../components/input/AppInputMask';
import { validationFields } from '../../functions/validationFields';
import { registerUser } from '../../services/dbActions';
import * as S from "./styles";
import axios from 'axios';




const RegisterUser = () => {

  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userEmail, setUserEmail] = useState('');



  const register_user = async () => {
    
    await validationFields(userId, userName, userDate, userEmail);
    const data = {
      id: userId,
      name: userName,
      date: userDate,
      email: userEmail
    }
    console.log("oi")
    axios.post("https://apirestful.onrender.com/person", data);
  };

  return (
    <Container>
      <ScrollView keyboardShouldPersistTaps="handled">
        <S.KeyBoardView
          behavior="padding"
        >
          <AppInputMask
            placeholder="Entre com o ID"
            onChangeText={
              (userId: string) => setUserId(userId)
            }
            keyboardType="numeric"
            maxLength={10}
            type="only-numbers"
          />
          <AppTextInput
            placeholder="Entre com o Nome"
            onChangeText={
              (userName: string) => setUserName(userName)
            }
          />
          <AppInputMask
            placeholder="Entre com a data"
            onChangeText={
              (userDate: string) => setUserDate(userDate)
            }
            maxLength={10}
            keyboardType="numeric"
            type="datetime"
          />
          <AppTextInput
            placeholder="Entre com o Email"
            onChangeText={
              (userEmail: string) => setUserEmail(userEmail)
            }
          />
          <AppButton title="Salvar" customClick={register_user} />
        </S.KeyBoardView>
      </ScrollView>
    </Container>
  );
};

export default RegisterUser;