window.onload = ()=>{

    let pon_char = document.getElementById('ponpop')
    let score = 0
    let countext = document.getElementById('countscore')
   
    let theme = document.getElementById('themesong')

    
   

    pon_char.addEventListener('mousedown',()=>{
        
        let popsound = new Audio('ponsound.mp3')
        popsound.play()
        pon_char.src = 'pop.png'
        score++
        countext.innerHTML = score

       
    })

    pon_char.addEventListener('mouseup',()=>{
        
        pon_char.src = 'unpop.png'
    })

    
}