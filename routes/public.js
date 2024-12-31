import express from 'express';
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
const prisma = new PrismaClient()

const router = express.Router();

router.post('/cadastro', async(req, res) => {
    try {
        
    const user = req.body;
    await prisma.user.create({  
        data:{  
         email:user.email,
         name:user.name,
         paswd 
        }
        });

    res.status(201).json(user);
    }
    catch(error){
        res.status(400).json({error: 'Erro ao cadastrar usuário'});
    }
}
);
export default router;