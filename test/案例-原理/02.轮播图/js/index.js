window.addEventListener('load', function () {

   let pre = document.querySelector('.pre')
   let next = document.querySelector('.next')
   let contentWarpper = document.querySelector('.content-warpper')

   let allTimer = setInterval(() => {
      next.click()
   }, 2000)

   // pre 和 next 按钮的出现和消失
   contentWarpper.addEventListener('mouseenter', function () {
      pre.style.display = 'block'
      next.style.display = 'block'
      clearInterval(allTimer)
   })
   contentWarpper.addEventListener('mouseleave', function () {
      pre.style.display = 'none'
      next.style.display = 'none'
      allTimer = setInterval(() => {
         next.click()
      }, 2000)
   })

   //动态生成小圆圈
   let show = document.querySelector('.show')
   let sitem = document.querySelector('.small-item')

   var last = show.children[0].cloneNode(true);
   show.appendChild(last)

   let page = 0;//控制pre，next按钮运动的变量
   let circle = 0 //控制小圆圈运动的变量
   let flag = true //节流阀

   for (let i = 0; i < show.children.length - 1; i++) {
      let li = document.createElement('li')
      sitem.appendChild(li)
      li.addEventListener('click', function () {
         for (let j = 0; j < show.children.length - 1; j++) {
            sitem.children[j].className = ''
         }
         this.className = 'highlight'
         animate(show, -i * contentWarpper.offsetWidth)
         page = i;
         circle = i
      })
   }

   sitem.children[0].className = 'highlight'  //初始化

   next.addEventListener('click', function () {
      if (flag) {
         flag = false
         if (page === show.children.length - 1) {
            show.style.left = 0;
            page = 0;
         }
         page++;
         circle++;
         animate(show, -page * contentWarpper.offsetWidth, function () {
            flag = true  //打开节流阀
         })

         for (let i = 0; i < show.children.length - 1; i++) {
            sitem.children[i].className = ''
         }
         if (circle == sitem.children.length) {
            circle = 0;
         }
         sitem.children[circle].className = 'highlight'
      }
   })
   pre.addEventListener('click', function () {
      if (flag) {
         flag = false
         if (page === 0) {
            show.style.left = -(show.children.length - 1) * contentWarpper.offsetWidth + 'px';
            page = show.children.length - 1;
         }
         page--;
         circle--;
         animate(show, -page * contentWarpper.offsetWidth, function () {
            flag = true
         })

         for (let i = 0; i < show.children.length - 1; i++) {
            sitem.children[i].className = ''
         }
         if (circle == -1) {
            circle = sitem.children.length - 1;
         }
         sitem.children[circle].className = 'highlight'
      }
   })
})