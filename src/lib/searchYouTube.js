import YOUTUBE_API_KEY from '../config/youtube.js';
var searchYouTube = (options, callback) => {
  // TODO
  var newOptions = {
    part: 'snippet',
    key: options.key,
    q: options.query, // search string
    maxResults: options.max
  };
  $.get('https://www.googleapis.com/youtube/v3/search', newOptions, function(){
    console.log('get ran')
  })
    .done(function(data) {
      console.log('data inside done ', data)
      callback(data);
    })




  //   , function(err, data){
  //   console.log('data is ' + data)

  // if (err){
  //     console.log('Error in getting ', err)
  //   } else {
  //     callback(data);
  //   }
  // })
};

export default searchYouTube;
