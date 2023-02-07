function animate(obj,target,callback){

   //obj 要实现运动的函数
   //target 目标距离
   //callback  回调函数
   
   clearInterval(obj.timer)
   obj.timer=setInterval(()=> {
      let step =(target-obj.offsetLeft)/10
      step = step>0 ? Math.ceil(step) : Math.floor(step)
      if(obj.offsetLeft === target){
         clearInterval(obj.timer)
         callback&&callback()
      }
      
      obj.style.left = obj.offsetLeft + step + 'px'

   }, 15);
   
   
}