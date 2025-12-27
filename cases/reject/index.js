const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');

const init = () => {
    const rejectStep = new URLSearchParams(window.location.search).get('step') || 0;
    if (rejectStep == 1) {
        step1.style.display = 'block';
        step2.style.display = 'none';
    } else {
        step1.style.display = 'none';
        step2.style.display = 'block';
    }
};

window.addEventListener('load', () => {
    init();
});