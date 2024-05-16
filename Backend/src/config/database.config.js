import {connect,set} from 'mongoose';
import { UserModel } from '../models/user.model.js';
import { BreadModel } from '../models/bread.model.js';
import { sample_breads } from '../data.js';
import { sample_users } from '../data.js';
import bcrypt from 'bcryptjs';
const PASSWORD_HASH_SALT_ROUNDS = 10;   
set('strictQuery', true);

export const dbconnect = async () => {
    try {
        connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          
        });
        await seedUser();
        await seedBread();
        console.log('Base de datos conectada');
    } catch (error) {
        console.log('Database connection failed');
        console.log(error);
    }
};

async function seedUser() {
    const usersCount = await UserModel.countDocuments();
    if (usersCount>0){
        console.log('Usuarios implementados');
        return;
    }
    for (let user of sample_users){
        user.password  = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
       
        await UserModel.create(user);
    }
}

async function seedBread() {
    const breadCount = await BreadModel.countDocuments();
    if (breadCount>0){
        console.log('Panes implementados');
        return;
    }
    for (let bread of sample_breads){
        bread.imageUrl= `/breads/${bread.imageUrl}`;
        await BreadModel.create(bread);
    }
    console.log('Panes implementados');
}