import axios from 'axios';

const getHousingData = async (type, term) => {
    const data = await axios.get(`https://sentreliz.com/housing/${type}/${term}`)
    console.log(data.data)
    return data;
}

export default getHousingData;