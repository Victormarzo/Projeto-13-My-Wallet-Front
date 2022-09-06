import { useState } from "react";
import { Input,Button,P,Center} from "./Components";
import Logo from "../assets/img/Logo.svg";
import styled from "styled-components";


export default function SignUp(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[name,setName]=useState('');
    const[repeatPassword,setRepeatPassword]=useState('');
return(
    <>
        <Center>
            <LogoWrapper src={Logo} alt="logo">
        </LogoWrapper></Center>
        <Input
            placeholder="Nome"
            required
            value={name}
            onChange={e=>setName(e.target.value)}
        ></Input>
        <Input
            placeholder="E-mail"
            required
            value={email}
            onChange={e=>setEmail(e.target.value)}
        ></Input>
        <Input
            placeholder="Senha"
            required
            value={password}
            onChange={e=>setPassword(e.target.value)}
        ></Input>
        <Input
            placeholder="Confirme a senha"
            required
            value={repeatPassword}
            onChange={e=>setRepeatPassword(e.target.value)}
        ></Input>
        <Button>Cadastrar</Button>
        <Center>
            <P>Já tem uma conta? Entre agora!</P>
        </Center>
        
    </>
)

}
const LogoWrapper=styled.img`
    margin-bottom: 25px;
    margin-top:95px;
`