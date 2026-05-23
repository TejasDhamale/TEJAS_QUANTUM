"use server";
import jwt from "jsonwebtoken";

const secreatApiKey = process.env.BEARER_AUTH_KEY;
const secreatPassKey = "";

function Authantication(token) {
    try 
    {
        if(!secreatApiKey) {
            throw new Error("secreat_api_key not found!");
        }
    
        jwt.verify(token,secreatApiKey);
        return {
            isAuthFailed : false,
            msg : "authantication has been done successfully."
        };

    }catch(err) {
        return {
            isAuthFailed : true,
            error : err?.message || "Authantication Failed at server side!"};
    }
}


function generateToken(payload) {
    try 
    {
        if(!secreatApiKey) {
            throw new Error("secreat_api_key not found!");
        }

        const token= jwt.sign(payload,secreatApiKey,{expiresIn:60*10});
        return {
            token , 
            isTokenFailed: false 
        }

    }catch(err){
        return {
            error : err?.message || "Token generation Failed at server side!" ,
            isTokenFailed : true 
        }
    }
}


function validatePasskey(passKey) {
    return passKey == secreatPassKey; 
}

export {Authantication,generateToken, validatePasskey};