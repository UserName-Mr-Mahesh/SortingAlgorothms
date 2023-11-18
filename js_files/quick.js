
async function partitionLomuto(ele,num, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = 'red';
    num[r].style.color='red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'yellow';
        num[j].style.color='yellow'
        // pauseChamp
        // await waitforme(delay);
        await performAction(); // Start the action

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            swapnum(num[i],num[j]);
            // color 
            ele[i].style.background = 'orange';
            num[i].style.color='orange';
            if(i != j) {
                ele[j].style.background = 'orange';
                num[j].style.color='orange';
            }
            // pauseChamp
            // await waitforme(delay);
            await performAction(); // Start the action
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
            num[j].style.color='pink';
        }
    }
    i++; 
    // pauseChamp
    // await waitforme(delay);
    await performAction(); // Start the action
    swap(ele[i], ele[r]); // pivot height one
    swapnum(num[i],num[r])
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'green';
    num[r].style.color='pink';
    num[i].style.color='green';

    // pauseChamp
    // await waitforme(delay);
    await performAction(); // Start the action   
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green'){
            ele[k].style.background = 'cyan';
            num[k].style.color='cyan';
        }
    }

    return i;
}

async function quickSort(ele,num, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele,num, l, r);
        await quickSort(ele,num, l, pivot_index - 1);
        await quickSort(ele,num, pivot_index + 1, r);
        // await quickSort(num, l, pivot_index - 1);
        // await quickSort(num, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
            num[r].style.color='green';
            num[l].style.color='green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let num = document.querySelectorAll('.bar-label');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele,num, l, r);
    // await quickSort(num, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});