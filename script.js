function memeText() {
  const text = document.getElementById('text-input').value;
  const memeSub = document.getElementById('meme-text');
  memeSub.innerHTML = text;
}

function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = function (e) {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

// eslint-disable-next-line no-unused-vars
function mudaBorda(border) {
  document.getElementById('meme-image-container').setAttribute('class', border);
}

document.getElementById('meme-insert').addEventListener('change', readImage, false);
document.getElementById('text-input').addEventListener('change', memeText);
