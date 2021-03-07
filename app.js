

window.addEventListener('DOMContentLoaded',async ()=>{
    const trades = await fetch('./trade.json')
    const result = await trades.json()
    const questions_answers = await fetch('./question_answer.json')
    const question_answer_result = await questions_answers.json()
    displayTrades(result)
    displayQuestions(question_answer_result)
})



function displayTrades(results){
    const trade = document.querySelector('#trade')
    const atoz = /a-z/
    results.map(result => {
        const { name,fs,tag,icon} = result
        const tradeTemplate = document.querySelector('#trade-list-template')
        const template = tradeTemplate.content.cloneNode(true)
        template.querySelector('[data-card]').className = `card  ${tag}`
        template.querySelector('[data-product-name]').innerHTML =`${name}`
        template.querySelector('[data-icon]').className = `fab fa-${fs} fa-3x`
        template.querySelector('[data-icon2]').className = `fab fa-${fs} fa-3x`
        let image_icon = document.createElement('img');
        let image_icon2 = document.createElement('img');
        image_icon.className = 'image_icon'
        image_icon2.className = 'image_icon2'
        image_icon.src = `${icon}`
        image_icon2.src = `${icon}`
        if(result.fs == ''){
            template.querySelector('[data-icon]').append(image_icon)
            template.querySelector('[data-icon2]').append(image_icon2)
        }
        template.querySelector('[data-details]').innerHTML =  result.details
       
        trade.append(template)
    })
}

function displayQuestions(questions){
    const questionList = document.querySelector('[data-questions-list]')
    questions.forEach(res =>{
        const questionTemplate = document.querySelector('#qestion-list-template')
        const template = questionTemplate.content.cloneNode(true)
        template.querySelector('[data-question]').innerText = res.question
        template.querySelector('[data-answer]').innerText = res.answer
        questionList.append(template)
    })
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {accordion: true});
    
  });

 