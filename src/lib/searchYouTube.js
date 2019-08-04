import YOUTUBE_API_KEY from '../config/youtube.js';
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
