import axios from "axios"
export const database = async (args?: string[]): Promise<string> => {
    let response = await axios.get("https://www.joeyco.dev/api/db")
    let data = response.data
    return data
}