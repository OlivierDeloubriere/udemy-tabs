const tabs = Array.from(document.querySelectorAll('.tab'))
const contents = Array.from(document.querySelectorAll('.content'))

tabs.forEach(element => {
    element.addEventListener('click', (e) => {
        showContent(e.target)
    })
});

function showContent(clickedTab){
    for(let i=0; i< tabs.length; i++) {
        if(clickedTab === tabs[i]){
            tabs[i].classList.add('active-tab')
            contents[i].classList.add('active-content')
        } else {
            tabs[i].classList.remove('active-tab')
            contents[i].classList.remove('active-content')
        }
    }  
}