//idade(input number), cargo(combo box), salário(input number), setor (combo box), 
//líder(input text), data do último aumento/promoção (date), carga horária (input number)
//regime de trabalho (combo box), Nota no ciclo de performance (range)

function inputCargo() {
    return (
    <>
    <Select placeholder='Select option'>
        <option value='junior'>Júnior</option>
        <option value='pleno'>Pleno</option>
        <option value='senior'>Senior</option>
    </Select>
    </>
    );
};

function inputSetor() {
    return (
    <Select placeholder='Select option'>
        <option value='administrativo'>Administrativo</option>
        <option value='deo'>D&O</option>
    </Select>
    )
};

function inputLider() {
    const [value, setValue] = React.useState('')
    const handleChange = (event) => setValue(event.target.value)
  
    return (
      <>
        <Text mb='8px'>Líder direto: {value}</Text>
        <Input
          value={value}
          onChange={handleChange}
          placeholder='Nome do(a) líder'
          size='sm'
        />
      </>
    )
  }

function inputIdade() {
    <NumberInput
        defaultValue={35}
        max={100}
        min={18}
        keepWithinRange={true}
        clampValueOnBlur={true}
    >
    <NumberInputField />
    <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>
};

function inputSalario() {
    const format = (val) => `R$` + val
    const parse = (val) => val.replace(/^\$/, '')
  
    const [value, setValue] = React.useState('1302.00')
  
    return (
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        min={1302.00}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    )
};

function inputCH() {
    const format = (val) => val + 'h'
    const parse = (val) => val.replace(/^\$/, '')
  
    const [value, setValue] = React.useState('40')
  
    return (
      <NumberInput
        onChange={(valueString) => setValue(parse(valueString))}
        value={format(value)}
        max={168}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    )
};

function inputAvaliacao() {
    return (
    <Select placeholder='Select option'>
        <option value='precisa_melhorar'>Precisa Melhorar</option>
        <option value='ta_quase_la'>Tá quase lá</option>
        <option value='mandou_bem'>Mandou Bem</option>
        <option value='arrasou'>Arrasou</option>
    </Select>
    )
};

function inputRegime() {
    return (
    <Select placeholder='Select option'>
        <option value='presencial'>Presencial</option>
        <option value='remoto'>Remoto</option>
        <option value='hibrido'>Híbrido</option>
    </Select>
    )
};


function inputDataPromocao() {
    return (
        <Input
        placeholder="Select Date"
        size="md"
        type="date"
       />
    )
};
