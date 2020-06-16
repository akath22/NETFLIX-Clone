let tabs= document.querySelectorAll('.tab-item');
let tabcontent=document.querySelectorAll('.tab-content-item');
Array.from(tabs).forEach((tab)=> tab.addEventListener('click',SelectItem));
document.addEventListener('DOMContentLoaded',()=> {
    tabcontent[1].style.display='none';
    tabcontent[2].style.display='none';
});

function SelectItem(e){
    //Removing Border from every tab
    tabs.forEach((tab)=> tab.className='tab-item');

    //Add border
    this.className='tab-item tab-border';

    //Remove Content
    tabcontent.forEach((content)=> content.style.display='none'); 
    
    //Display Content
    Array.from(tabcontent).forEach((content)=> {
        if(content.id==='tab-1-content' && this.id==='tab-1'){
            content.style.display='block';
        }
        if(content.id==='tab-2-content' && this.id==='tab-2'){
            content.style.display='block';
        }
        if(content.id==='tab-3-content' && this.id==='tab-3'){
            content.style.display='block';
        }
    });

}
