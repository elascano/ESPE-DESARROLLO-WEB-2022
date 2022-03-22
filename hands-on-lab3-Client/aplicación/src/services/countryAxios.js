import axios from 'axios'

const baseUrl = 'http://universities.hipolabs.com/search?country'

export async function getCountry(nameCountry){
  try{
      const response = await axios({
          url: `${baseUrl}=${nameCountry}`,
          method: 'GET',
      })
      
      return response

  }catch(error){
    console.log(error)
  }
}