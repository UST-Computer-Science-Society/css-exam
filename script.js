
//Subject Categories
function renderCategories(categoryIndex) {
    const categoryList = document.getElementById('unit-list');
    categoryList.innerHTML = ''; 

    fetch('subjects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            const categories = data.categories;
            const selectedCategory = categories[categoryIndex]; 

            if (selectedCategory) {
                selectedCategory.items.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.className = 'unit';

                    itemElement.innerHTML = `
                        <img src="${item.image}" alt="${item.title}">
                        <div class="unit-info">
                            <h5>${item.title}</h5>
                            <h6>${item.subtitle}</h6>
                            <button class="learn-more-btn">Learn More</button>
                        </div>
                    `;

                    categoryList.appendChild(itemElement);
                });
            }
        })
        .catch(error => console.error('Error loading JSON:', error));
}

const subjectButtons = document.querySelectorAll('.subjects-btn .subBtn');

subjectButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        renderCategories(index);
        
        subjectButtons.forEach(btn => btn.classList.remove('active'));
        
        button.classList.add('active');
    });
});

renderCategories(0);
subjectButtons[0].classList.add('active');

let currentCategory = 0;
let currentIndex = 0;
let intervalId;

//Post carousel
async function fetchPosts() {
    const response = await fetch('post.json');
    return await response.json();
}

async function initCarousel() {
    const data = await fetchPosts();
    renderCarousel(data.posts);
    startAutoSlide();
}

function renderCarousel(posts) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';

    posts[currentCategory].items.forEach(item => {
        const daysSince = Math.floor((new Date() - new Date(item.date)) / (1000 * 60 * 60 * 24));
        const carouselItem = `
            <div class="post">
                <img src="${item.image}" alt="${item.title}">
                <div class="post-info">
                    <h6>${item.title}</h6>
                    <p class="s2">${daysSince} days ago</p>
                </div>
            </div>
        `;
        carouselInner.innerHTML += carouselItem;
    });

    currentIndex = 0; 
    updateCarouselTransform();
}

function changeCategory(index) {
    currentCategory = index;
    clearInterval(intervalId);
    fetchPosts().then(data => renderCarousel(data.posts));
    startAutoSlide();
}

function startAutoSlide() {
    const carouselInner = document.querySelector('.carousel-inner');
    
    intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % (Math.ceil(posts[currentCategory].items.length / 4));
        updateCarouselTransform();
    }, 10000);
}

function updateCarouselTransform() {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}
// carousel slide cant seem to work 
initCarousel();

const postButtons = document.querySelectorAll('.category-buttons button');

postButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        renderCategories(index);
        
        postButtons.forEach(btn => btn.classList.remove('active'));
        
        button.classList.add('active');
    });
});