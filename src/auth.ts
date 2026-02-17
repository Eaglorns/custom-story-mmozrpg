import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./prisma"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcryptjs"


export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter:PrismaAdapter(prisma),
    providers:[
        Credentials({
            credentials:{
                name: {label:"Name", type:"text"},
                email:{label:"Email", type:"email"},
                password:{lablel:"Password", type:"password"}
            },

            authorize: async(credentials)=>{
                if(!credentials?.email || !credentials?.password) return null

                const email = credentials.email as string
                const password = credentials.password as string


                // Check for the user
                const user = await prisma.user.findUnique({
                    where:{
                        email
                    }
                })

                // Check if no user exists or not email and password providers
                if(!user?.password) return null

                const isValid = await compare(password, user.password)

                if(!isValid) return null

                return user
            }
        })
    ],

    session:{strategy:"jwt"}
})