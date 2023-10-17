import axios, { AxiosRequestConfig } from 'axios';

const fetchData = async () => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: { model: 'corolla' },
    headers: {
      'X-RapidAPI-Key': '995ec309d4mshca2792b1eee4021p13a3b2jsn600c2fe9d2cd',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

export default fetchData;
