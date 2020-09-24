const Paths = document.querySelectorAll('textPath');



window.addEventListener('scroll', function () {
    Paths[0].setAttribute('startOffset', window.scrollY * 0.2);

    Paths[1].setAttribute('startOffset', window.scrollY * 0.3);

    Paths[2].setAttribute('startOffset', window.scrollY * 0.1);


})

function showCertif() {


    const showBtn = document.querySelector('.certificates-show');
    const certifBlock = document.querySelector('.certif-items');

    showBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (certifBlock.classList.contains('hide')) {
            certifBlock.classList.remove('hide');
            showBtn.textContent = '— Hide';
        } else {
            certifBlock.classList.add('hide');
            showBtn.textContent = '— Show';
        }
    });
}

showCertif();