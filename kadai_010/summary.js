$(function(){
  $('#change-color').on('click',function(){
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    $('#target').css('color',randomColor);
  });
  
  $('#change-text').on('click',function(){
    const texts = [
      'HELLO!',
      'こんにちは!',
      '你好！',
      '안녕하세요！',
      'Bonjour！',
      'Hallo！'];
      const randomIndex = Math.floor(Math.random() * texts.length);
    $('#target').text(texts[randomIndex]);
  });

  $('#fade-out').on('click',function(){
    $('#target').fadeTo(1000, 0);
  })

  $('#fade-in').on('click',function(){
    $('#target').fadeTo(1000, 1);
  })
});