window.addEventListener('load', function () {
    //获取元素
    const previewImg = document.querySelector('.preview_img');
    const mask = document.querySelector('.mask');
    const big = document.querySelector('.big');
    const bigImg = document.querySelector('.bigImg');
    //出现 消失 的效果
    previewImg.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    previewImg.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    //mask随着鼠标移动的效果
    previewImg.addEventListener('mousemove', moveMask);
    function moveMask(e) {
        //获得鼠标在previewImg内的x y
        let x = e.pageX - previewImg.offsetLeft;
        let y = e.pageY - previewImg.offsetTop;
        //将鼠标坐标赋值给mask
        //让mask不会跑出previewImg的范围外
        // if(e.pageX >= (previewImg.offsetLeft + mask.offsetWidth / 2) && e.pageX <= (previewImg.offsetLeft - mask.offsetWidth / 2 + previewImg.offsetWidth)) { 
        //     mask.style.left = x - mask.offsetWidth / 2 + 'px';
        // } else if (e.pageX <= (previewImg.offsetLeft + mask.offsetWidth / 2)) {
        //     mask.style.left = 0 + 'px';
        // } else {
        //     mask.style.left = previewImg.offsetWidth - mask.offsetWidth + 'px';
        // }

        // if(e.pageY >= (previewImg.offsetTop + mask.offsetHeight / 2) && e.pageY <= (previewImg.offsetTop - mask.offsetHeight / 2 + previewImg.offsetHeight)) {
        //     mask.style.top = y - mask.offsetHeight / 2 + 'px';
        // }else if (e.pageY <= (previewImg.offsetTop + mask.offsetHeight / 2)){
        //     mask.style.top = 0 + 'px';
        // } else {
        //     mask.style.top = previewImg.offsetHeight - mask.offsetHeight + 'px';
        // }

        let maskX = x - mask.offsetWidth / 2;
        let maskY = y - mask.offsetHeight / 2;
        if(maskX <= 0) {
            maskX = 0;
        } else if (maskX >= (previewImg.offsetWidth - mask.offsetWidth)) {
            maskX = previewImg.offsetWidth - mask.offsetWidth;
        }
        mask.style.left = maskX + 'px';
        if(maskY <= 0) {
            maskY = 0;
        } else if (maskY >= (previewImg.offsetWidth - mask.offsetWidth)) {
            maskY = previewImg.offsetWidth - mask.offsetWidth;
        }
        mask.style.top = maskY + 'px';
        // previewImg.style.overflow = 'hidden'; //不能用overflow：hidden;因为big图片也会被隐藏

        //大图移动
        let maskMax = previewImg.offsetWidth - mask.offsetWidth;
        let bigMax = bigImg.offsetWidth - big.offsetWidth;
        let bigX = maskX * (bigMax / maskMax);
        let bigY = maskY * (bigMax / maskMax);
        // bigImg.style.left = -bigX + 'px';
        // bigImg.style.top = -bigY + 'px';
        bigImg.style.transform = `translate(${-bigX}px, ${-bigY}px)`;
    }
})

// window.addEventListener('load', function() {
//     var preview_img = document.querySelector('.preview_img');
//     var mask = document.querySelector('.mask');
//     var big = document.querySelector('.big');
//     // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
//     preview_img.addEventListener('mouseover', function() {
//         mask.style.display = 'block';
//         big.style.display = 'block';
//     })
//     preview_img.addEventListener('mouseout', function() {
//             mask.style.display = 'none';
//             big.style.display = 'none';
//         })
//         // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
//     preview_img.addEventListener('mousemove', function(e) {
//         // (1). 先计算出鼠标在盒子内的坐标
//         var x = e.pageX - this.offsetLeft;
//         var y = e.pageY - this.offsetTop;
//         // console.log(x, y);
//         // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
//         // (3) 我们mask 移动的距离
//         var maskX = x - mask.offsetWidth / 2;
//         var maskY = y - mask.offsetHeight / 2;
//         // (4) 如果x 坐标小于了0 就让他停在0 的位置
//         // 遮挡层的最大移动距离
//         var maskMax = preview_img.offsetWidth - mask.offsetWidth;
//         if (maskX <= 0) {
//             maskX = 0;
//         } else if (maskX >= maskMax) {
//             maskX = maskMax;
//         }
//         if (maskY <= 0) {
//             maskY = 0;
//         } else if (maskY >= maskMax) {
//             maskY = maskMax;
//         }
//         mask.style.left = maskX + 'px';
//         mask.style.top = maskY + 'px';
//         // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
//         // 大图
//         var bigIMg = document.querySelector('.bigImg');
//         // 大图片最大移动距离
//         var bigMax = bigIMg.offsetWidth - big.offsetWidth;
//         // 大图片的移动距离 X Y
//         var bigX = maskX * bigMax / maskMax;
//         var bigY = maskY * bigMax / maskMax;
//         bigIMg.style.left = -bigX + 'px';
//         bigIMg.style.top = -bigY + 'px';

//     })

// })

