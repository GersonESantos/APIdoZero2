import express from 'express';
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
const prisma = new PrismaClient()

const router = express.Router();

router.post('/cadastro', async(req, res) => {
    const user = req.body;
    await prisma.user.create({  
        data:{  
         email:user.email,
         name:user.name,
         paswd 
        }
        });

    res.status(201).json(user);
    })

export default router;