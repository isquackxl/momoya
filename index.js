const rejectBtn = document.querySelector('.rejectBtn');
const agreeBtn = document.querySelector('.agreeBtn');
let rejectStep = 0;

// initialize
const init = () => {
    rejectStep = getValue('rejectActived') || 0;
    if (rejectStep === 0) {
        rejectBtn.classList.remove('rejectBtnActive');
        agreeBtn.classList.remove('agreeBtnBigger');
        rejectBtn.innerText = '拒绝';
        agreeBtn.innerText = '同意';
    } else if (rejectStep === 1) {
        rejectBtn.classList.add('rejectBtnActive');
        agreeBtn.classList.remove('agreeBtnBigger');
        rejectBtn.innerText = '你竟然拒绝我';
        agreeBtn.innerText = '同意';
    } else {
        rejectBtn.classList.remove('rejectBtnActive');
        agreeBtn.classList.add('agreeBtnBigger');
        rejectBtn.innerText = '不给你点了';
        agreeBtn.innerText = '同意！！';
    }
};


// Listeners
agreeBtn.addEventListener('click', () => {
    saveValue('rejectActived', 0);
    window.location.href = './cases/agree/index.html';
    init();
});

rejectBtn.addEventListener('click', () => {
    const currentStep = rejectStep > 2 ? rejectStep : rejectStep + 1;
    saveValue('rejectActived', currentStep);
    if (currentStep <= 2) {
        window.location.href = `./cases/reject/index.html?step=${currentStep}`;
    }
    init();
});

window.addEventListener('load', () => {
    init();
});
