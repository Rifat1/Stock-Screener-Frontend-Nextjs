// utils/api.ts
import axios from 'axios';

// // with pagination in the backend
// export const fetchStocks = async (
//   indexName: string,
//   page: number = 1,
//   pageSize: number = 20
// ) => {
//   try {
//     const response = await axios.get(`http://54.166.200.70/stocks/${indexName}`, {
//       params: {
//         page,
//         page_size: pageSize,
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Error fetching stocks:', error);
//     throw error;
//   }
// };


// with pagination in the backend
export const fetchStocks = async (
  indexName: string,
) => {
    if (indexName === 'TSX60') { return []}
    try {
        // https://stockdat.com/api/stocks/SP500, https://54.166.200.70/api/stocks/${indexName}
        const response = await axios.get(`https://stockdat.com/api/stocks/${indexName}`,{
            withCredentials: true,
          });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching stocks:', error);
        throw error;
    }
};