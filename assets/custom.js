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


const mobileNavswitch = () => {
    if (document.getElementById("mobile_menuIcon").src == "https://cdn.shopify.com/s/files/1/0271/4045/6534/files/menu.png?v=1676473415") {
        document.getElementById("mobile_menuIcon").src = "https://img.icons8.com/material-outlined/24/ffffff/delete-sign.png";
    } else {
        document.getElementById("mobile_menuIcon").src = "https://cdn.shopify.com/s/files/1/0271/4045/6534/files/menu.png?v=1676473415";
    }
}