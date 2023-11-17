async function shell() {
    const ele = document.querySelectorAll(".bar");
    const n = ele.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const current = ele[i].style.height;
            let j = i;
            while (j >= gap && parseInt(ele[j - gap].style.height) > parseInt(current)) {
                ele[j].style.background = 'blue';
                ele[j - gap].style.background = 'blue';
                await waitforme(delay);
                swap(ele[j], ele[j - gap]);
                ele[j].style.background = 'cyan';
                ele[j - gap].style.background = 'cyan';

                j -= gap;
            }
            ele[j].style.background = 'green';
        }
    }
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.background = 'green';
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