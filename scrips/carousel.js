window.addEventListener('load',function(){
    new Glider(this.document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:1,

                }
            }
            ]
    });
});