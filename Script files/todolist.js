function toDoListMenu(){
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
    const bgfone = document.getElementById('bgfone');
    bgfone.classList.toggle('cover');
}
function CloseMenu(){
    const sidebar = document.getElementById('sidebar');
    const bgfone = document.getElementById('bgfone');
    sidebar.classList.remove('open');
    bgfone.classList.remove('cover')

}
function strikedText(){
    const text1 = document.getElementById('strikedText1');
    const text2 = document.getElementById('strikedText2');
    const text3 = document.getElementById('strikedText3');
    
    text1.classList.toggle('strikethrough');
    
    text2.classList.toggle('strikethrough');
    text3.classList.toggle('strikethrough');

}