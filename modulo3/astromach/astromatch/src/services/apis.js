import axios from "axios";

export const getNewProfile = async(setProfile,setLoading) => {
    try {
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre/person")
        setProfile(response.data.profile)
        setLoading(false)
    } catch (error) {
        console.log(error)
      }
}

export const clearProfiles = async (clear) => {
    try {
        const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/andre/clear"
        )
    } catch (error) {
        console.log ("resetado com sucesso")
        
    }
}