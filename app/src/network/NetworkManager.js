/* eslint-disable prettier/prettier */
export default class NetworkManager{
    static getEmployeeData(){
        // console.log("Network Manager------------Excecuting");
        // let response = fetch('http://www.mocky.io/v2/5d565297300000680030a986',{
        //     headers : { 
        //       'Content-Type': 'application/json',
        //       'Accept': 'application/json'
        //      }
        //   })
        // console.log("Response : ",response)
        // let jsonData = response.json
        // console.log("JSON Format :", jsonData)
        // return jsonData
        fetch('http://www.mocky.io/v2/5d565297300000680030a986',{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err));
    }
}