
// const $ = document
let tkb = JSON.parse(localStorage.getItem('tkb'))
if (tkb) 
    render_schedule(tkb, document.getElementById("table_schedule"))
else 
    tkb = []
// if (!tbk)

function import_tkb(){
    const source_code = $('#source')[0].value
    console.log(source_code);
    // const html_form_source = 
    const html_form_source = $(source_code)
    console.log(html_form_source);
    const table_data = html_form_source.find('div.grid-roll2 > table')
    if (!table_data){
        
    }

    crawl_tkb(html_form_source.find('div.grid-roll2 > table'))
    render_schedule(tkb, document.getElementById("table_schedule"))
    return false
}


