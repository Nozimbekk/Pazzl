const card = document.querySelectorAll('.theCard'),
    cardimg = document.querySelectorAll('.img'),
    image =  document.querySelector('.image'),
    view = document.querySelector('.view'),
    resetBtn = document.querySelector('.view__btn'),
    topImg = document.querySelectorAll('.topImg'),
    viewText = document.querySelector('.view__top-text'),
    truefalse = document.querySelector('.trueFalse'),
    urinshlar = document.querySelector('.urinishlar span'),
    urinishlarTwo = document.querySelector('.urinishlar');

// Rasmlar saqlangan massiv
let images = ["./image/cat.jpg","./image/cat1.jpg", "./image/cat2.jpg", "./image/cat3.jpg", "./image/cat4.jpg","./image/cat5.jpg","./image/cat6.jpg","./image/cat7.jpg","./image/cat8.jpg"]

function imgRandom() {
    return images[Math.floor(Math.random() * 9)]
}
card.forEach(item => {
    // Rasmlarni random qilish qismi
    image.setAttribute('src', imgRandom())

    for (let g = 0; g < cardimg.length; g++) {
        let imgAttr = image.getAttribute('src')
        topImg[g].setAttribute('src', imgAttr)
        cardimg[g].setAttribute('src', imgRandom())
        let indexAttr = cardimg[g].getAttribute('src')
        let index = indexAttr.indexOf(imgAttr)
        if (index == 1) {
            location.reload()
        }
    }
    item.addEventListener('click', function () {
        item.classList.add('active')
        let imgClass = item.querySelector('.img')
        let atr = imgClass.getAttribute('src')
        let randka = image.getAttribute('src')

        // Rasm mos kelsa togri oynasini chiqarish va urinshlarni aniqlash qismi
        if (atr === randka) {
            view.classList.add('active')
            viewText.classList.add('active')
        } else {
            truefalse.innerHTML += '<p> Oxwamadi</p>'
            console.log(truefalse.innerHTML.length); 
        } if (truefalse.innerHTML.length == 38) {
            urinshlar.innerHTML = '1'
            urinishlarTwo.style.color = `red`
        } else if (truefalse.innerHTML.length == 22) {
            urinshlar.innerHTML = ' 2'
            urinishlarTwo.style.color = `yellow`
        } else if (truefalse.innerHTML.length == 54) {
            urinshlar.innerHTML = ' 0'
            urinishlarTwo.style.color = `red`
            viewText.innerHTML = 'Sizda urinishlar tugadi' 
            viewText.classList.add('active2')
            view.classList.add('active')
        }
        
    })
    // cardni bosganda ochlgan card yopilish qismi
    for (let i = 0; i < card.length; i++) {
        const element = card[i];
        element.addEventListener('click', function () {
            item.classList.remove('active')
            element.classList.add('active')
        })
    }
});
// Viewdagi btn yangilash qismi
resetBtn.addEventListener('click', function () {
    view.classList.remove('active')
    location.reload()
})