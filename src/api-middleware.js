import { act } from '@testing-library/react';
import axios, { Axios } from 'axios';
import {trackPromise} from 'react-promise-tracker';
const apiMiddleware=(config)=>(store)=>(next)=>(action)=>{

    if(action.meta && action.meta.upload)
    {
        next(action);
        return Promise.resolve(`[${"API Middleware"}] - action.type:`,
        action.type,'Skipping upload rewuests')
    }
    if(!(action.meta &&action.meta.api) )
    {
        next(action);
        return Promise.resolve(
            `[${"API Middleware"}] - action.type:`,
        action.type,'Skipping api call since meta not available upload rewuests'

        )
    }

    let {method,url,data,timeout,trackWithArea,responseType}=action.meta.api;

    const promise = new Promise((resolve,reject)=>{
if(!config)
{
    const configMsg=`config availavle The ad packages requies config to get the authorization token for the api call`;

}
    })
    const needJson =['post','put','patch','delete'].includes(method.toLowerCase());

    axios ({
        method,url,data,timeout:timeout||0,responseType:responseType||''
    }).then((response)=>{
        action.response = response.data;
        action.responseObj = response;
        next(action);
        let value;
        if(action.resolve){
            value=response.data;
        }
        return Promise.resolve(value);
    }).catch((err)=>{
        if(err&&err.response)
        {
            err.response.data={};
            return Promise.reject(err)
        }
    })
    
    
    return !trackWithArea.isEmpty()?trackPromise(promise,trackWithArea):promise;
}
export default apiMiddleware;