async function shell() {
    const ele = document.querySelectorAll(".bar");
    const n = ele.length;
    const num = document.querySelectorAll(".bar-label");

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const current = ele[i].style.height;
            let j = i;
            while (j >= gap && parseInt(ele[j - gap].style.height) > parseInt(current)) {
                ele[j].style.background = 'blue';
                ele[j - gap].style.background = 'blue';
                num[j].style.color='blue';
                num[j - gap].style.color='blue';
                // await waitforme(delay);
                await performAction(); // Start the action
                swap(ele[j], ele[j - gap]);
                swapnum(num[j],num[j - gap]);
                ele[j].style.background = 'cyan';
                ele[j - gap].style.background = 'cyan';
                num[j].style.color = 'cyan';
                num[j - gap].style.color = 'cyan';
                j -= gap;
            }
            ele[j].style.background = 'green';
            num[j].style.color="green";
        }
    }
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.background = 'green';
        num[i].style.color='green';
    }
}

const shellSortbtn = document.querySelector(".shellSort");
shellSortbtn.addEventListener('click', async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await shell();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});