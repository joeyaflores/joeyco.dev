import axios from "axios"
export const database = async (args?: string[]): Promise<string> => {
    let response = await axios.get("http://localhost:3000/api/db")
    let data = response.data
    let output = ""
    for(let item in data){
        output += `${data[item].summary}\n`
    }
    return output
}