exports.runPython = (req, res) =>  {
    try {
        const {spawn} = require("child_process");

        let data1;
        const child = spawn('python3', [process.env.IA_PYTHON_FILEPATH]);
        child.stdout.on('data', (data) => {
            res.status(200).json({data: data.toString()});
        });
        child.on('close', (code) => {
            console.log("code", code);
        });
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.getPrediction = (req, res) =>  {
    try {
        //GET EACH FIELD FROM THE FORM WITH req.body.<FIELD>
        //SEND TO IA MODEL TO CALCULATE
        const probability = Math.floor(Math.random() * 101);
        res.status(200).json({probability: probability});
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.getCharts = (req, res) =>  {
    //PARA O DASHBOARD SERÁ PRECISO IMPLEMENTAR VERIFICAÇÕES DE ACESSO
    //PARA FILTRAR DADOS RELEVANTES AO PERFIL DE USUÁRIO
    try {
        res.status(200).json({"charts": "charts in here"});
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};