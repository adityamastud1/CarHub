import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";

const authOptions={
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks:{
        async signIn({user, account}){
            console.log("user:", user);
            console.log("account", account);
            return user;
        }
    }
};

const handler=NextAuth(authOptions);

export {handler as GET, handler as POST};