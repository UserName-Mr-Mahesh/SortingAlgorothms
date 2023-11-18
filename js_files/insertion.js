async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    const num = document.querySelectorAll(".bar-label");

    // color
    ele[0].style.background = 'green';
    num[0].style.color = 'green';

    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'blue';
        let key1=num[i].innerHTML;
        num[i].style.color='blue';

        // await waitforme(delay);
        await performAction(); // Start the action


        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            num[j].style.color='blue';
            num[j+1].innerHTML=num[j].innerHTML;
            j--;

            // await waitforme(delay);
            await performAction(); // Start the action


            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'green';
                num[k].style.color='green';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'green';
        num[j+1].innerHTML=key1;
        num[i].style.color='green';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


