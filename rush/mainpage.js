$(document).ready(function () {
    let currentIndex = 0;
    let currentItemsIndex = 0;
    const displayCount = 3;
    // const totalDisplays = $('.display').length;
    const totalItems = $('.item').length;

    // Update carousel display
    function updateCarousel(currentIndex, target) {

    $('.carousel .display').removeClass('active');
    $('.carousel .item').removeClass('active');

    $('.carousel .display').eq(currentIndex).addClass('active');
    $('.carousel .item').eq(currentIndex).addClass('active');

    if (target != undefined) {
        console.log(currentIndex);
    // 0 1 2 -> 3 4 5 ->      1 2 3 , 4 5 6
        console.log('%',currentIndex %3,currentIndex)
    if (currentIndex % displayCount == 0) {
        $('.carousel .item').removeClass('show');
        for (let i = 0; i<displayCount; i++) {
            if (currentIndex + i < totalItems) {
                $('.carousel .item').eq(currentIndex + i).addClass('show');
            }
        }
    } else if (currentIndex % 3 == 2 && target === 'prev') {
        // 2 1 0
        $('.carousel .item').removeClass('show');
        for (let i = currentIndex; i>=0; i--) {
            if (currentIndex + i < totalItems) {
                $('.carousel .item').eq(currentIndex - i).addClass('show');
            }
        }
    }
    }
    }

    // Handle button clicks
    $('.carousel button').click(function () {
        const target = $(this).attr('id');
        
        if (target === 'next') {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            }
            if (currentItemsIndex + displayCount < totalItems) {
                currentItemsIndex++;
            }
        } else if (target === 'prev') {
            if (currentIndex > 0) {
                currentIndex--;
            }
            if (currentItemsIndex > 0) {
                currentItemsIndex--;
            }
        }
        console.log(currentIndex);
        updateCarousel(currentIndex, target);
    });

    $('.carousel .item').click(function () {
        currentIndex = $('.carousel .item').index(this);
        updateCarousel(currentIndex);
    });

});