const API_KEY = "2tjKcEddl7TUdoPmMDF96PyHbh93"

export const getMatches=()=>
{
    const url = 'https://cricapi.com/api/matches?apikey=2tjKcEddl7TUdoPmMDF96PyHbh93';
    
    return fetch(url)
    .then((response)=>response.json())
    //.catch((error)=> console.log("ERROR:",error));
};

export const getMatchDetail=(id)=>{
    const url = 'https://cricapi.com/api/cricketScore?apikey=2tjKcEddl7TUdoPmMDF96PyHbh93&unique_id=$(id)';
    return fetch(url)
    .then(response=>response.json())
    .catch((error)=> console.log(error));


};