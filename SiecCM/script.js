const productContainers = document.querySelectorAll('.slider');
const nxtBtn = document.querySelectorAll('.btn__arrow-right');
const preBtn = document.querySelectorAll('.btn__arrow-left');

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})