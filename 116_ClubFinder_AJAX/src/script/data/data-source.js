import clubs from './clubs.js';

class DataSource {
    static searchClub(keyword) { 
        return fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if(responseJson.teams){
                    return Promise.resolve(responseJson.teams);
                }else{
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;









// class DataSource {
//     static async searchClub(keyword) {
//         try{
//             const response = await fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${keyword}`);
//             const responseJson = await response.json();
//             if(responseJson.teams){
//                 console.log(responseJson.teams);
//                 return Promise.resolve(responseJson.teams);

//             }else{
//                 throw 'nullPointerException';
//             }
//         }catch(e){
//             console.log(e);
//             return Promise.reject(`${keyword} is not found`)
//         }
//     }
// }
