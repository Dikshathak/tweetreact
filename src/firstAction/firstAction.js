export const firstAction=()=>
{
return{
    type:"HELLO",
}
}


export const getAction=(url)=>{
    return{
        type:"APPLE",
       meta:{
           api:{
               url:url,
               method:"GET"
           }
       }
    }
}