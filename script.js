function memeText() {
  const text = document.getElementById('text-input').value;
  const memeSub = document.getElementById('meme-text');
  memeSub.innerHTML = text;
}

function readImage() {
  if (this.files && this.files[0]) {
    const file = new FileReader();
    file.onload = (e) => {
      document.getElementById('meme-image').src = e.target.result;
    };
    file.readAsDataURL(this.files[0]);
  }
}

const container = document.getElementById('meme-image-container');

document.getElementById('meme-insert').addEventListener('change', readImage, false);
document.getElementById('text-input').addEventListener('keyup', memeText);
document.getElementById('fire').addEventListener('click',
  () => container.setAttribute('class', 'border1'));
document.getElementById('water').addEventListener('click',
  () => container.setAttribute('class', 'border2'));
document.getElementById('earth').addEventListener('click',
  () => container.setAttribute('class', 'border3'));
