import YOUTUBE_API_KEY from '../config/youtube.js';
<<<<<<< HEAD
var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
=======
var searchYouTube = (options, callback) => {
  // TODO
  var newOptions = {
    part: 'snippet, id',
    key: options.key,
    q: options.query, // search string
    maxResults: options.max
  };
  $.get('https://www.googleapis.com/youtube/v3/search', newOptions, function(){
    console.log('get ran')
>>>>>>> 5d17ef1d601db7aa92ec06feaa330731e285a3b0
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;
