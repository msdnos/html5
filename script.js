var hasMore = document.querySelectorAll('.has-more')
var toggle = document.querySelectorAll('.toggle')

;[].forEach.call(toggle, function(item, index) {
    item.addEventListener('click', function () {
        item.classList.toggle('show')
        hasMore[index].classList.toggle('show-more')
        item.textContent = item.textContent == '明码标价' ? '收起' : '明码标价，童言无欺！'
    })
})