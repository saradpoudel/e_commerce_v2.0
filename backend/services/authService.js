var client = require('@prisma/client');
var bcrypt = require('bcrypt');

const prisma = new client.PrismaClient();

async function register(data) {
    delete data.verifyPassword;
    data.password = await bcrypt.hash(data.password, 10);
    try {
        await prisma.client.create({
            data
        });
    }  
    catch (error) {
        throw new Error(error)
    }
    
}

async function getOne(condition) {
   return await prisma.client.findFirst({where: condition})
}

module.exports = { register, getOne }