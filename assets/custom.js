/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...
const searchBtn = document.getElementById('ch_SearchBtn');
const searchModal = document.getElementById('cs_searchModal');
const searchWrapper = document.getElementById('cs_searchWrapper');
const modalX = document.getElementById('ch_searchModalX');

searchBtn.addEventListener('click', function(){
    searchModal.style.display = "flex";
})

modalX.addEventListener('click', function(){
    searchModal.style.display = "none";
})