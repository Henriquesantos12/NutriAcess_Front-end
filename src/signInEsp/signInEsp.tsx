import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../../components/Input";
import Logo from "../../components/logo/logo";
import Text from "../../components/text/text";

const Texto1 = styled.div`
    position: absolute;
    left: 42%;
    top: 15%;
    color: #741944;
`;



const Texto2 = styled.div`
    position: absolute;
    left: 40%;
    top: 70%;
    color: #741944;
`;

const Container = styled.div`
    margin-top:25px;
`;
  
const Singin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState ('')
    
    const handleEmailChange = (value: string) => {
      setEmail(value);
    };


    const handleSenhaChange = (value: string) => {
        setSenha(value);
      };
  
    return (
      <Container>
        <Logo></Logo>
        
        <Texto1> <Text fontSize={30} fontWeight={600}> Login Especialista </Text></Texto1>
        
        
        <Input  label="E-mail:" value={email} placeholder="Digite seu e-mail" type="email"  onChange={handleEmailChange} />
        <Input label="Senha:" value={senha} placeholder="Digite sua senha" type="password"   onChange={handleSenhaChange} />
      
       <Texto2> <Text fontSize={15}> Não tem cadastro? Faça agora mesmo!</Text> </Texto2>
       
      </Container>
    );
  };
  
  export default Singin;