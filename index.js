const prisma = require('./prisma/prismaClient')
const cors = require('cors')

const express= require('express')
const app = express()
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000'
}))

const authRoutes = require('./routes/authRoutes')

app.use('/auth', authRoutes)


app.listen(8000)


/*async function main() {  
    const user = await prisma.user.create({
        data: {
            nome: 'Marya',
            email: 'marya@example.com',
            password: '123456',
            tipo: 'Ajudante'
        }
    })
    console.log("User created: " + JSON.stringify(user))

    const users = await prisma.user.findMany()
    console.log("Users: " )
    console.log(users)
}

main()*/