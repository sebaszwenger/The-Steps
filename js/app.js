//Variables
const btnNext = document.querySelector('#next');
const btnPrev = document.querySelector('#prev');
const progress = document.querySelector('#progress');
const circles = document.querySelectorAll('.circle');

let currentPage = 1;

eventListeners();
//Listeners
function eventListeners() {
    document.addEventListener('DOMContentLoaded', startApp);
    btnNext.addEventListener('click', progressNext);
    btnPrev.addEventListener('click', progressPrev);
}

//Functions
//put eventListeners to the circles of page indicators
function startApp() {
    circles.forEach( circle => {
        circle.addEventListener('click', () => {
            // currentPage = circle;
            currentPage = Number((circle.textContent));
            btnDisable(currentPage);
        });
    });
};

//Next page
function progressNext() {
    currentPage++;
    btnDisable(currentPage);
};

//Previus page
function progressPrev() {
    currentPage--;
    btnDisable(currentPage);
};

//Check for disable buttons next and prev
function btnDisable(currentPage) {
    if(currentPage === 4) {
        btnNext.disabled = true;
    } else if(currentPage === 1) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }
    updatePage();
};

//Update the active page
function updatePage() {
    circles.forEach( (circle, i) => {
        if(i < currentPage) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');
    progress.style.width =(actives.length - 1) / (circles.length - 1) * 100 + '%';
};