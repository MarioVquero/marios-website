const tabItems = document.querySelectorAll('.tab-item')
const tabItemContents = document.querySelectorAll('.tab-content-item')


function selectItem(e) {
    // in order to have no visual bugs remove border/items shown
    removeBorder();
    removeShow();

    // depending on which tab item you click on the tab-border
    // is created and added there
    this.classList.add('tab-border')
    
    // depending on which tab item you click on the specific data
    // is shown
    const tabItemContent = document.querySelector(`#${this.id}-content`)
    
    tabItemContent.classList.add('show')
}

// function that removes the border from the tab item you have clicked on 
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

// function that removes the data shown currently on the page
function removeShow() {
    tabItemContents.forEach(item => item.classList.remove('show'))
}

// add event listener to all tab-items
tabItems.forEach(item => item.addEventListener('click', selectItem));