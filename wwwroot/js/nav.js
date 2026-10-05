function observeSections(sectionId, navId) {
const sectionElement = document.getElementById(sectionId);
const navElement = document.getElementById(navId);

const options = {
root: null, // defaults to the viewport
rootMargin: '-200px 0px -800px 0px', // shrinks the bottom boundary by 100px
threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
navElement.classList.add('active');
} else {
navElement.classList.remove('active');
}
});
}, options);

observer.observe(sectionElement);
}