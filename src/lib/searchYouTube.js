import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

// Accept a callback function that is invoked with the videos array that is returned from hitting the endpoint

var searchYouTube = (query, callback = () => {}) => {
  // const server = 'https://app-hrsei-api.herokuapp.com/api/recastly/videos';
  $.ajax({
    url: 'https://app-hrsei-api.herokuapp.com/api/recastly/videos',
    type: 'GET',
    data: {
      q: query,
      // key: YOUTUBE_API_KEY,
      part: 'snippet',
      // maxResults: 5,
      // type: 'channel',
      // videoEmbeddable: true,
    },
    success: function (result) {
      console.log('success')
      console.log(result)
      callback(result)
    },
    error: function () {
      console.log('error');
    }
  })
};

export default searchYouTube;
