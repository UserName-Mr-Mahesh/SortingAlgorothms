async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    const num=document.querySelectorAll(".bar-label")
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            num[j].style.color ='blue';
            num[j+1].style.color ='blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                // await waitforme(delay);
                await performAction(); // Start the action
                swap(ele[j], ele[j+1]);
                swapnum(num[j],num[j+1]);                
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
            num[j].style.color ='cyan';
            num[j+1].style.color ='cyan';
        }
        ele[ele.length-1-i].style.background = 'green';
        num[num.length-1-i].style.color="green";
    }
    ele[0].style.background = 'green';
    num[0].style.color='green';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
