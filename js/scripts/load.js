function load(){

    let load = document.querySelector('.loader')
    let cover = document.querySelector('.cover')
    let main = document.querySelector('main')

    setTimeout(()=>{ 
        
        load.style.display = 'none'
        cover.style.display = 'flex'
        main.style.display = 'block'
    
    
    
    }, 500)

   



}