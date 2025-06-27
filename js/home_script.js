const images = document.querySelectorAll('.slides img'); // 全imgを取得
let current = 0;

images[current].classList.add('active'); // 最初の画像を表示

function showNext() {
  images[current].classList.remove('active');          // 現在の画像を非表示
  current = (current + 1) % images.length;             // current変更
  images[current].classList.add('active');             // 次の画像を表示
}

setInterval(showNext, 3000); 