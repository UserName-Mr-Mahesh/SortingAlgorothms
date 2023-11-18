async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    const num = document.querySelectorAll(".bar-label");

    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        num[i].style.color='blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';
            num[j].style.color='red';

            // await waitforme(delay);
            await performAction(); // Start the action
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'cyan';
                    num[min_index].style.color='cyan';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';
                num[j].style.color='cyan';
            }   
        }
        // await waitforme(delay);
        await performAction(); // Start the action
        swap(ele[min_index], ele[i]);
        swapnum(num[min_index],num[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'cyan';
        num[min_index].style.color='cyan';
        // change the sorted elements color to green
        ele[i].style.background = 'green';
        num[i].style.color='green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});