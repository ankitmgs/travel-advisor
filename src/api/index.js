import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

// export const getPlacesData = async (sw, ne) => {
//   try {
//     const {
//       data: { data },
//     } = await axios.get(URL, {
//       params: {
//         bl_latitude: "11.847676",
//         tr_latitude: "12.838442",
//         bl_longitude: "109.095887",
//         tr_longitude: "109.149359",
//       },
//       headers: {
//         "x-rapidapi-key": "6b3881e88amshe25e09cf846a622p1b1163jsn4a30c92e8f55",
//         "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
//       },
//     });

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };



export const getPlacesData = async (sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        "X-RapidAPI-Key": "6b3881e88amshe25e09cf846a622p1b1163jsn4a30c92e8f55",
      },
    });

    return data;
  } catch (error) {
      //error
    console.log(error);
  }
};

