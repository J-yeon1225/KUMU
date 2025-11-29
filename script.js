$(document).ready(function() {
    $('#product_container').load('bakery_products.html');

    $('.tab_btn li a').on('click', function(e) {
        e.preventDefault();
        var index = $(this).parent().index();
        var files = ['', 'bakery_products.html', ''];
        var file = files[index];

        if (file) {
            $('#product_container').load(file);
        } else {
            $('#product_container').html('<p>준비 중입니다.</p>');
        }
    });
});
