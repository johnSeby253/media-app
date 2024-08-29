import axios from "axios";

export const commonAPI=async(httpMethod,url,reqbody)=>{
    let reConfig={
        method:httpMethod,
        url,
        headers:{
            'Content-Type':'application/json'
        },
        data:reqbody
    }
    return await axios(reConfig).then((res)=>{
        return res
    })
    .catch(err=>{
        return err
    })
}