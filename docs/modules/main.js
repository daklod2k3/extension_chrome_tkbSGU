// const $ = document
let tkb = JSON.parse(localStorage.getItem('tkb'))
if (tkb) 
    render_schedule(tkb, document.getElementById("table_schedule"))
else {
    tkb = []
    render_schedule([], document.getElementById("table_schedule"))
}
// if (!tbk)

function import_tkb(){
    const source_code = $('#source')[0].value
    // console.log(source_code);
    const html_form_source = $(source_code)
    // console.log(html_form_source);
    const table_data = html_form_source.find('div.grid-roll2 > table')
    // console.log(table_data);
    if (table_data.length === 0){
        $(`form > .error`).show()
        $(`form > .error`).text(`Source code lỗi!`)
        return 
    }
    
    tkb = crawl_tkb(html_form_source.find('div.grid-roll2 > table'))
    if (tkb.length === 0){
        $(`form > .error`).show()
        $(`form > .error`).text(`Đọc dữ liệu tkb lỗi!`)
        return 
    }
    render_schedule(tkb, document.getElementById("table_schedule"))
    
    // $('html,body').scrollTop(0);
    $(`form > .error`).hide()
    localStorage.setItem('tkb', JSON.stringify(tkb))

    return false
}


