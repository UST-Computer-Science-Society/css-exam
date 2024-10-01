document.querySelectorAll('button[data-section]').forEach(button => {
    button.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



// Load JSON data and map it to the subjects dynamically
async function fetchSubjects() {
    const response = await fetch('subjects.json');
    return await response.json();
}

// Function to update the subjects based on selected track
function filterSubjects(track) {
    fetchSubjects().then(subjectsData => {
        const subjects = subjectsData[track]; // Get subjects for the selected track
        const subjectsGrid = document.getElementById('subjects-grid');
        subjectsGrid.innerHTML = ''; // Clear existing content

        // Create and append subject cards dynamically
        subjects.forEach((subject, index) => {
            const cardHTML = `
                <div class="subject-card">
                    <img src="${subject.img}" alt="${subject.name}">
                    <p class="subject-code">${subject.code}</p>
                    <p class="subject-name">${subject.name}</p>
                    <button class="learn-more-btn">Learn More</button>
                </div>`;
            subjectsGrid.innerHTML += cardHTML;
        });

        // Update button styles
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('selected'));
        document.querySelector(`button[onclick="filterSubjects('${track}')"]`).classList.add('selected');
    });
}

// Initially load the data science subjects on page load
document.addEventListener('DOMContentLoaded', () => {
    filterSubjects('data-science');
});



let slideIndex = 0;
    const slides = document.getElementsByClassName("carousel-item");
    const dots = document.getElementsByClassName("dot");

    // Show initial slide
    showSlides(slideIndex);

    // Function to set current slide when a dot is clicked
    function currentSlide(n) {
        showSlides(slideIndex = n - 1); // Dots are 1-based, so subtract 1
    }

    // Function to show slides
    function showSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        }

        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        // Remove active class from all dots
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        slides[slideIndex].style.display = "flex";
        dots[slideIndex].classList.add("active");
    }

    setInterval(function() {
        slideIndex++;
        showSlides(slideIndex);
    }, 10000); 