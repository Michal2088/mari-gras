let imgArr=[
    "images/gal20.jpg",
    "images/gal21.jpg",
    "images/gal22.jpg",
    "images/gal23.jpg",
    "images/gal24.jpg",
    "images/gal25.jpg",
    "images/gal26.jpg",
    "images/gal27.jpg",
    "images/gal28.jpg", 
    "images/gal6.jpg"
]
function modal_images(index) {
    document.getElementById('modal_idImg').src=imgArr[index];
}