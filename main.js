const dogContainer = document.getElementById('dog-container');
const newDogBtn = document.getElementById('new-dog-btn');

async function fetchRandomDog() {
  try {
    dogContainer.innerHTML = '<p>강아지 사진을 불러오는 중...</p>';
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    
    if (data.status === 'success') {
      dogContainer.innerHTML = `<img src="${data.message}" alt="랜덤 강아지 사진">`;
    } else {
      dogContainer.innerHTML = '<p>사진을 불러오는데 실패했습니다.</p>';
    }
  } catch (error) {
    console.error('Error fetching dog image:', error);
    dogContainer.innerHTML = '<p>네트워크 오류가 발생했습니다.</p>';
  }
}

// 페이지 로드 시 사진 불러오기
window.addEventListener('load', fetchRandomDog);

// 버튼 클릭 시 사진 불러오기
newDogBtn.addEventListener('click', fetchRandomDog);
