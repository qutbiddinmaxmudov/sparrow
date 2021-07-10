class Slider {
  el: HTMLDivElement
  inner: HTMLDivElement
  items: NodeListOf<HTMLDivElement>
  prev: HTMLButtonElement
  next: HTMLButtonElement
  active: number
  constructor(selector) {
    this.el = document.querySelector(selector)
    this.inner = this.el.querySelector('.slider__inner')
    this.items = this.inner.querySelectorAll('.slider__item')
    this.prev = this.el.querySelector('.slider__prev')
    this.next = this.el.querySelector('.slider__next')
    
    this.active = 0
    
    setTimeout(()=>this.setHeight(),100)
    
    this.next.onclick = ()=>this.action(this.next)
    this.prev.onclick = ()=>this.action(this.prev)
    window.addEventListener('resize',()=>this.setHeight())
  }
  
  setHeight(){
    const height = this.items[this.active].clientHeight
    this.inner.style.height = height + 'px'
  }
  
  action(btn:HTMLButtonElement){
    this.items.forEach(item=>
      item.classList.remove('active'))
    if(btn === this.next){
      this.active++
      if(this.active >= this.items.length)
        this.active = 0
    }else{
      this.active--
      if(this.active < 0)
        this.active = this.items.length - 1
    }
    
    this.items[this.active].classList.add('active')
    this.setHeight()
  }
}

try {
  new Slider('.slider')
} catch (error) {
  console.dir(error);
}