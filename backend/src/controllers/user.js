const db = require('../dbadmin');
const firestore = db.firestore();

exports.getUsers = async (req, res) =>  {
    try {
        const snapshot = await firestore.collection(process.env.FIREBASE_FIRESTORE_USERS_COLLECTION).get();
        const users = snapshot.docs.map(doc => doc.data());
        res.status(200).json(users);
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.setUser = async (req, res) =>  {
    try {
        console.log(req.body.email);
        const data = {
            data_inclusao: Date.now(),
            active: true,
            email: req.body.email,
            permissoes: [],
        };
        const upload = await firestore.collection(process.env.FIREBASE_FIRESTORE_USERS_COLLECTION).doc(req.body.email).set(data);
        res.status(200).json({message: "User added"});
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.editUser = async (req, res) =>  {
    try {
        const userRef = firestore.collection(process.env.FIREBASE_FIRESTORE_USERS_COLLECTION).doc(req.body.email);
        const doc = await userRef.get();
        if (!doc.exists) {
            res.send("No user found");
        } else {
            userRef.update({permissoes: ["rh-admin"]});
            res.status(200).json({message: "User edited: "+req.body.email});
        }
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.addPermission = async (req, res) =>  {
    try {
        const userRef = firestore.collection(process.env.FIREBASE_FIRESTORE_USERS_COLLECTION).doc(req.body.email);
        const doc = await userRef.get();
        const updatepermissoes = [...doc.data().permissoes, req.body.permissao]
        
        if (!doc.exists) {
            res.send("No user found");
        } else {
            userRef.update({permissoes: updatepermissoes});
            res.status(200).json({message: "User edited: "+req.body.email});
        }
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.removePermission = async (req, res) =>  {
    try {
        const userRef = firestore.collection(process.env.FIREBASE_FIRESTORE_USERS_COLLECTION).doc(req.body.email);
        const doc = await userRef.get();
        const updatepermissoes = doc.data().permissoes

        if (!doc.exists) {
            res.send("No user found");
        } else {
            const index = updatepermissoes.indexOf(req.body.permissao);
            if (index > -1) {
                updatepermissoes.splice(index, 1);
            }
            userRef.update({permissoes: updatepermissoes});
            res.status(200).json({message: "User edited: "+req.body.email});
        }
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.inactivateUser = async (req, res) =>  {
    try {
        const userRef = firestore.collection(process.env.FIREBASE_FIRESTORE_USERS_COLLECTION).doc(req.body.email);
        const doc = await userRef.get();
        if (!doc.exists) {
            res.send("No user found");
        } else {
            userRef.update({active: false});
            res.status(200).json({message: "User inactivated: "+req.body.email});
        }
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};

exports.activateUser = async (req, res) =>  {
    try {
        const userRef = firestore.collection(process.env.FIREBASE_FIRESTORE_USERS_COLLECTION).doc(req.body.email);
        const doc = await userRef.get();
        if (!doc.exists) {
            res.send("No user found");
        } else {
            userRef.update({active: true});
            res.status(200).json({message: "User inactivated: "+req.body.email});
        }
    } catch (error) {
        console.log (error)
        res.status(400).send(error.message);
    }
};