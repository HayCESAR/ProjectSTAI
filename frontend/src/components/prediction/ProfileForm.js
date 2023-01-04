import {
  Box,
  Center,
  FormControl,
  Input,
  FormLabel,
  HStack,
  Button,
  useDisclosure,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { ProbabilityStat } from './ProbabilityStat'
import React, { useState } from "react";

export const ProfileForm = () => {
  const { isOpen, onOpen } = useDisclosure()
  const [formValue, setFormValue]=useState({idade: '', admissão:'', cargo:'', senioridade:'', setor:'', lider:'', performance:'', reconhecimento:'', regime:'', ch:''})
  const [value, setValue] = useState();

  const handleInput =(e)=>{
    const { name, value}= e.target;
    setFormValue({...formValue, [name]:value});
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);

    fetch('/prediction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValue)
    }).then(res => {
      if (!res.ok){
        console.log('problem');
        return;
      }
      return res.json();
    }).then(data => {
      setValue(data.probability);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
    <Center
      w="100%"
      maxW={840}
      bg="white"
      top={100}
      position="absolute"
    >
      <FormControl display="flex" flexDir="column" gap="4">
        <form onSubmit={ handleFormSubmit}>
        <HStack spacing="4">
          <Box w="100%">
            <FormLabel htmlFor="idade">Idade</FormLabel>
            <Input id="idade" name='idade' value={formValue.idade} onChange={ handleInput}/>
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="admissao">Data de Admissão</FormLabel>
            <Input id="admissao" name='admissao' type="date" value={formValue.admissao} onChange={ handleInput}/>
          </Box>
        </HStack>
        <HStack spacing="4">
          <Box w="100%">
            <FormLabel htmlFor="cargo">Cargo</FormLabel>
            <Select id="cargo" placeholder=' ' name='cargo' value={formValue.cargo} onChange={ handleInput}>
                <option value='gerentedeprojetos'>Gerente de Projetos</option>
                <option value='qa'>QA</option>
                <option value='dev'>DEV</option>
            </Select>
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="senioridade">Senioridade</FormLabel>
            <Select id="senioridade" placeholder=' ' name='senioridade' value={formValue.senioridade} onChange={ handleInput}>
                <option value='junior'>Júnior</option>
                <option value='pleno'>Pleno</option>
                <option value='senior'>Senior</option>
            </Select>
          </Box>
        </HStack>
        <HStack spacing="4">
          <Box w="100%">
            <FormLabel htmlFor="setor">Setor</FormLabel>
            <Select id="setor" placeholder=' ' name='setor' value={formValue.setor} onChange={ handleInput}>
                <option value='administrativo'>Administrativo</option>
                <option value='lab'>Lab</option>
                <option value='deo'>D&O</option>
            </Select>
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="lider">Líder direto</FormLabel>
            <Input id="lider" name='lider' value={formValue.lider} onChange={ handleInput}/>
          </Box>
        </HStack>
        <HStack spacing="4">
          <Box w="100%">
            <FormLabel htmlFor="performance">Performance</FormLabel>
            <Select id="performance" placeholder=' ' name='performance' value={formValue.performance} onChange={ handleInput}>
              <option value='precisa_melhorar'>Precisa Melhorar</option>
              <option value='ta_quase_la'>Tá quase lá</option>
              <option value='mandou_bem'>Mandou Bem</option>
              <option value='arrasou'>Arrasou</option>
            </Select>
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="reconhecimento">Data do Último Aumento/Promoção</FormLabel>
            <Input id="reconhecimento" type="date" name='reconhecimento' value={formValue.reconhecimento} onChange={ handleInput}/>
          </Box>
        </HStack>
        <HStack spacing="4">
          <Box w="100%">
            <FormLabel htmlFor="regime">Regime de trabalho</FormLabel>
            <Select id="regime" placeholder=' ' name='regime' value={formValue.regime} onChange={ handleInput}>
              <option value='presencial'>Presencial</option>
              <option value='remoto'>Remoto</option>
              <option value='hibrido'>Híbrido</option>
            </Select>
          </Box>
          <Box w="100%">
            <FormLabel htmlFor="ch">Carga Horária</FormLabel>
            <NumberInput>
              <NumberInputField 
              max={168}
              id="ch"
              name='ch' 
              value={formValue.ch}
              onChange={ handleInput}/>
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </HStack>
        <br />
        <HStack justify="center">
          <Button type="submit" onClick={onOpen}>Prever</Button>
        </HStack>
        </form>
      </FormControl>
    </Center>
    <ProbabilityStat value={value} open={isOpen}/>
    </>
  );
};