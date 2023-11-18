//let delay = 30;
async function merge(ele,num, low, mid, high){
    console.log('In merge()');
    console.log(`low=${low}, mid=${mid}, high=${high}`);
    const n1 = mid - low + 1;
    const n2 = high - mid;
    console.log(`n1=${n1}, n2=${n2}`);
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        // await waitforme(delay);
        await performAction(); // Start the action
        console.log('In merge left loop');
        console.log(ele[low + i].style.height + ' at ' + (low+i));
        // color
        ele[low + i].style.background = 'orange';
        left[i] = ele[low + i].style.height;
        num[low + i].style.color = 'orange';
        // left[i] = num[low + i].innerHTML;
    }
    for(let i = 0; i < n2; i++){
        // await waitforme(delay);
        await performAction(); // Start the action
        console.log('In merge right loop');
        console.log(ele[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        // color
        ele[mid + 1 + i].style.background = 'yellow';
        right[i] = ele[mid + 1 + i].style.height;
        num[mid + 1 + i].style.color = 'yellow';
        // right[i] = num[mid + 1 + i].innerHTML;
    }
    // await waitforme(delay);
    await performAction(); // Start the action
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        // await waitforme(delay);
        await performAction(); // Start the action
        console.log('In merge while loop');
        console.log(parseInt(left[i]), parseInt(right[j]));
        
        // To add color for which two r being compared for merging
        
        if(parseInt(left[i]) <= parseInt(right[j])){
            console.log('In merge while loop if');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
                num[k].style.color='green';
            }
            else{
                ele[k].style.background = 'lightgreen';
                num[k].style.color='lightgreen';
            }
            
            ele[k].style.height = left[i];
            num[k].innerHTML=left[i].match(/\d+/);
            i++;
            k++;
        }
        else{
            console.log('In merge while loop else');
            // color
            if((n1 + n2) === ele.length){
                ele[k].style.background = 'green';
                num[k].style.color='green';
            }
            else{
                ele[k].style.background = 'lightgreen';
                num[k].style.color='lightgreen';
            } 
            ele[k].style.height = right[j];
            num[k].innerHTML=right[j].match(/\d+/);
            j++;
            k++;
        }
    }
    while(i < n1){
        // await waitforme(delay);
        await performAction(); // Start the action
        console.log("In while if n1 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
            num[k].style.color='green';
        }
        else{
            ele[k].style.background = 'lightgreen';
            num[k].style.color='lightgreen';
        }
        ele[k].style.height = left[i];
        num[k].innerHTML=left[i].match(/\d+/);
        i++;
        k++;
    }
    while(j < n2){
        // await waitforme(delay);
        await performAction(); // Start the action
        console.log("In while if n2 is left");
        // color
        if((n1 + n2) === ele.length){
            ele[k].style.background = 'green';
            num[k].style.color='green';
        }
        else{
            ele[k].style.background = 'lightgreen';
            num[k].style.color='lightgreen';
        }
        ele[k].style.height = right[j];
        num[k].innerHTML=right[j].match(/\d+/);
        j++;
        k++;
    }
}

async function mergeSort(ele,num, l, r){
    console.log('In mergeSort()');
    if(l >= r){
        console.log(`return cause just 1 elemment l=${l}, r=${r}`);
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    console.log(`left=${l} mid=${m} right=${r}`, typeof(m));
    await mergeSort(ele,num, l, m);
    await mergeSort(ele,num, m + 1, r);
    await merge(ele,num, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let num = document.querySelectorAll('.bar-label');
    let l = 0;
    let r = parseInt(ele.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(ele,num, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


