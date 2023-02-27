const arrofobj = [
    {
        "userid":1,
        "id":2,
        "title":"hhhhhhh",
        "completed":true
    },
    {
        "userid":1,
        "id":3,
        "title":"ddddddd",
        "completed":false
    },
    {
        "userid":1,
        "id":7,
        "title":"sssssss",
        "completed":true},
    {
        "userid":1,
        "id":8,
        "title":"yyyyyyy",
        "completed":true
    },
    {
        "userid":1,
        "id":10,
        "title":"sssssss",
        "completed":false
    }];

    //const title = arrofobj.map((eachparam)=>eachparam.title); 
    export function getParamById(id){
        return arrofobj.find((items)=>items.id===id);
    }

    export default function getRandomnumber(){
        return Math.random().toString();
    }
