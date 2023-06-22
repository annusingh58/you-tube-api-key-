import axios from "axios";



export const getAboutChannel = async (req, res) => {
  try {

    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
      params: {
        id: 'UCE_M8A5yxnLfW0KghEeajjw'
      },
      headers: {
        'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    res.send(response.data);


  }
  catch (error) {
    return res.send(error);
  }
}



export const getchannel = async (req, res) => {
  try {

    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/channel',
      params: {
        id: 'UCiTGKA9W0G0TL8Hm7Uf_u9A',
        next: '4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%3D',
        sort: 'n'
      },
      headers: {
        'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };
  
    const response = await axios.request(options);
    res.send(response.data);
  }
  catch (error) {
    return res.send(error);
  }
}


export const getVideoRelated = async (req, res) => {
  try {


    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/video/comments',
      params: {
        id: 'YQHsXMglC9A',
        next: 'Eg0SC1lRSHNYTWdsQzlBGAYyJSIRIgtZUUhzWE1nbEM5QTAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D'
      },
      headers: {
        'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    res.send(response.data);
  }

  catch (error) {
    return res.send(error);
  }
}




export const getVideoComments = async (req, res) => {
  try {

    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/video/comments',
      params: {
        id: 'YQHsXMglC9A',
        next: 'Eg0SC1lRSHNYTWdsQzlBGAYyJSIRIgtZUUhzWE1nbEM5QTAAeAJCEGNvbW1lbnRzLXNlY3Rpb24%3D'
      },
      headers: {
        'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };
    
    const response = await axios.request(options);
    res.send(response.data);

  }
  catch (error) {
    return res.send(error);
  }

}

export const getTrending = async (req, res) => {
  try {


    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/trending',
      params: {
        type: 'mu',
        hl: 'en',
        gl: 'US'
      },
      headers: {
        'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    res.send(response.data);
  }
  catch (error) {
    return res.send(error);
  }
}


export const getvideoinfo = async (req, res) => {
  try {
    
    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/video',
      params: {id: 'dQw4w9WgXcQ'},
      headers: {
        'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };
    
    const response = await axios.request(options);
    res.send(response.data);

  }
  catch (error) {
    return res.send(error);
  }
}



export const getPlaylist = async (req, res) => {
  try {

    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/playlist',
      params: {
        id: 'PL2UMfhpwklNNI9ALzCFI-cObgnO4nQ2fu',
        next: '4qmFsgJhEiRWTFBMV3dBeXBBY0ZSZ0tBSUlGcUJyOW95LVpZWm5peGFfRmoaFENBRjZCbEJVT2tOSFZRJTNEJTNEmgIiUExXd0F5cEFjRlJnS0FJSUZxQnI5b3ktWllabml4YV9Gag%3D%3D'
      },
      headers: {
        'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    res.send(response.data);
  }
  catch (error) {
    return res.send(error);
  }
}





export const getSearch = async (req, res) => {
  try {

    const options = {
      method: 'GET',
      url: 'https://youtube-search-and-download.p.rapidapi.com/search',
      params: {
        query: 'rick roll',
        next: 'EogDEgVoZWxsbxr-AlNCU0NBUXRaVVVoeldFMW5iRU01UVlJQkMyMUlUMDVPWTFwaWQwUlpnZ0VMWW1VeE1rSkROWEJSVEVXQ0FRdFZNMEZUYWpGTU5sOXpXWUlCQzJaaGVrMVRRMXBuTFcxM2dnRUxaV3hrWldGSlFYWmZkMFdDQVExU1JGbFJTSE5ZVFdkc1F6bEJnZ0VMT0hwRVUybHJRMmc1Tm1PQ0FRc3pOMFU1VjNORWJVUmxaNElCQzJGaFNXcHpPRXN6YjFsdmdnRUxaMmRvUkZKS1ZuaEdlRldDQVF0clN6UXlURnB4VHpCM1FZSUJDME42VHpOaFNXVXdVbkJ6Z2dFTFNVNHdUMk5WZGtkaU5qQ0NBUXRSYTJWbGFGRTRSRjlXVFlJQkMyWk9NVU41Y2pCYVN6bE5nZ0VMZEZac1kwdHdNMkpYU0RpQ0FRdGZSQzFGT1Rsa01XSk1TWUlCQzJoQlUwNVRSSFZOY2pGUmdnRUxkREEzTVZkdE5EVnhWMDAlM0QYgeDoGCILc2VhcmNoLWZlZWQ%3D',
        hl: 'en',
        gl: 'US',
        upload_date: 't',
        type: 'v',
        duration: 's',
        features: 'li;hd',
        sort: 'v'
      },
      headers: {
        'X-RapidAPI-Key': '58d475b4bamsh62ee03188629888p166db1jsn30912dec66dc',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    res.send(response.data);

  }
  catch (error) {
    return res.send(error);
  }
}

