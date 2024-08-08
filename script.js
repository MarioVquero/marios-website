const tabItems = document.querySelectorAll('.tab-item')
const tabItemContents = document.querySelectorAll('.tab-content-item')


function selectItem(e) {
    removeBorder();
    removeShow();

    this.classList.add('tab-border')
    
    const tabItemContent = document.querySelector(`#${this.id}-content`)
    
    tabItemContent.classList.add('show')
}


function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

function removeShow() {
    tabItemContents.forEach(item => item.classList.remove('show'))
}

// add event listener to all tab-items
tabItems.forEach(item => item.addEventListener('click', selectItem));