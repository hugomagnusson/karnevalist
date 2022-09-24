function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result).width(356).height(356);
    };

    reader.readAsDataURL(input.files[0]);

    var yourImg = document.getElementById('blah');
if(yourImg && yourImg.style) {
    yourImg.style.height = '100px';
    yourImg.style.width = '200px';
}
  }
}