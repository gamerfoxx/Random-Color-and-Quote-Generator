const selectColor = () => {
    let hexVal = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    let color = "#";
    for(let i = 1; i <= 6; i++){
        let random = Math.floor(Math.random() * (hexVal.length));
        color += `${hexVal[random]}`;
    }
    return color
}

  var quotes = [
          'If you want to achieve greatness stop asking for permission. -Anonymous',
  'Things work out best for those who make the best of how things work out. -John Wooden',
  'To live a creative life\, we must lose our fear of being wrong. -Anonymous',
  'If you are not willing to risk the usual you will have to settle for the ordinary. -Jim Rohn',
  'Trust because you are willing to accept the risk\, not because it\'s safe or certain. -Anonymous',
  'Take up one idea. Make that one idea your life\, think of it\, dream of it\, live on that idea. Let the brain\, muscles\, nerves\, every part of your body\, be full of that idea\, and just leave every other idea alone. This is the way to success. -Swami Vivekananda',
  'All our dreams can come true if we have the courage to pursue them. -Walt Disney',
  'Good things come to people who wait\, but better things come to those who go out and get them. -Anonymous',
  'If you do what you always did\, you will get what you always got. -Anonymous',
  'Success is walking from failure to failure with no loss of enthusiasm. -Winston Churchill'
                     ];

                     
  var num = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote').innerHTML = quotes[num];
  document.getElementById('quote').style.color = selectColor();
  document.getElementById('background').style.background = selectColor();
  
  function newRandomQuote(){
  var num = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote').innerHTML = quotes[num];
  document.getElementById('quote').style.color = selectColor();
  document.getElementById('background').style.background = selectColor();
  document.getElementById('tweet').setAttribute("href", "https://twitter.com/intent/tweet?text=" + quotes[num]);
      };