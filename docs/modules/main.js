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
    const html_from_source = $(source_code)
    // console.log(html_form_source);
    const table_data = html_from_source.find('div.grid-roll2 > table')
    // console.log(table_data);
    if (table_data.length === 0){
        $(`form > .error`).show()
        $(`form > .error`).text(`Source code lỗi!`)
        return 
    }
    
    tkb = crawl_tkb(html_from_source.find('div.grid-roll2 > table'))
    if (tkb.length === 0){
        $(`form > .error`).show()
        $(`form > .error`).text(`Đọc dữ liệu tkb lỗi!`)
        return 
    }
    render_schedule(tkb, document.getElementById("table_schedule"))
    
    // const week_start_text = html_from_source.find('#ctl00_ContentPlaceHolder1_ctl00_lblNote')[0].textContent
    // const week_start_split = week_start_text.substring(week_start_text.search('bắt đầu từ ngày ') + 16, week_start_text.length - 1).split("/")
    // console.log(week_start_split);
    // const week_start = new Date(week_start_split[2], week_start_split[1], week_start_split[0])
    // console.log(week_start.getFullYear());
    // console.log(Math.ceil((new Date().getTime() - week_start.getTime()) / (1000 * 3600 * 24)) / 7);
    
    // $('html,body').scrollTop(0);
    $(`form > .error`).hide()
    localStorage.setItem('tkb', JSON.stringify(tkb))

    return false
}

function onChangeSelection(){
    render_schedule(tkb, document.getElementById("table_schedule"),document.getElementById('week-selection').value)
}