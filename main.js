const dogContainer = document.getElementById('dog-container');
const newDogBtn = document.getElementById('new-dog-btn');
const themeBtn = document.getElementById('theme-btn');

// 강아지 사진 가져오기
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

// 테마 전환 기능
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// 저장된 테마 불러오기
function loadTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

// 이벤트 리스너 등록
window.addEventListener('load', () => {
  loadTheme();
  fetchRandomDog();
});

newDogBtn.addEventListener('click', fetchRandomDog);
themeBtn.addEventListener('click', toggleTheme);
