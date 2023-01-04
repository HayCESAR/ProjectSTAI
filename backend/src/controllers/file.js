const db = require('../dbadmin');
const firestore = db.firestore();
const storage = require("../config/storage");

exports.getDocuments = async (req, res) =>  {
    try {
        const snapshot = await firestore.collection(process.env.FIREBASE_FIRESTORE_DATASETS_COLLECTION).get();
        const docs = snapshot.docs.map(doc => doc.data());
        res.status(200).json(docs);
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.setDocument = async (req, res) =>  {
    try {
        const key = req.file.fileRef.metadata.timeCreated+'_'+req.file.originalname;
        const upload_timestamp = req.file.fileRef.metadata.timeCreated.split("T");
        const data = {
            name: req.file.originalname,
            size: req.file.fileRef.metadata.size,
            key: key,
            date: upload_timestamp[0],
            time: upload_timestamp[1].split(".")[0],
            url: req.file.fileRef.metadata.mediaLink,
        };
        const upload = await firestore.collection(process.env.FIREBASE_FIRESTORE_DATASETS_COLLECTION).doc(key).set(data);
        res.status(200).json({message: "File uploaded"});
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.deleteDocument = async (req, res) =>  {
    // O USUÁRIO DEVE SER INFORMADO QUE AO DELETAR UM ARQUIVO DE DATASET,
    // SERÁ RECUPERADO O RESULTADO DA IA ANTERIOR AO UPLOAD DO REFERENTE ARQUIVO.
    // DEVE SER DADA A OPÇÃO DE DELETAS TODOS OS ARQUIVOS POSTERIORES
    // OU MANTER OS ARQUIVOS E ATUALIZAR A IA
    try {
        const contents = await storage.bucket(process.env.FIREBASE_STORAGE_BUCKET).file(process.env.FIREBASE_STORAGE_DIRECTORY+"/"+req.body.filename).delete();
        if (contents){
            const userRef = firestore.collection(process.env.FIREBASE_FIRESTORE_DATASETS_COLLECTION).doc(req.body.key);
            const doc = await userRef.get();
            if (!doc.exists) {
                res.send("No file register found");
            } else {
                userRef.update({deleted: true});
                res.status(200).json({message: "File deleted"});
            }
        } else {
            res.json({message: "File not found"});
        }
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.downloadFile = async (req, res) =>  {
    try {
        const contents = await storage.bucket(process.env.FIREBASE_STORAGE_BUCKET).file(process.env.FIREBASE_STORAGE_DIRECTORY+"/"+req.body.name).download();
        if (contents){
            res.status(200).json({message: "File downloaded"});
        } else {
            res.json({message: "File not found"});
        }
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};
