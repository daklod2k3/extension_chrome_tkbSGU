// const $ = document
let tkb = JSON.parse(localStorage.getItem('tkb'))
let week_start = JSON.parse(localStorage.getItem('week-start'))

if (week_start){
    week_start = new Date(week_start)
    document.getElementById('week-selection').value = Math.floor((new Date().getTime() - week_start.getTime()) / (1000 * 3600 * 24 * 7)) + 1
}

if (tkb) 
    render_schedule(tkb, document.getElementById("table_schedule", document.getElementById('week-selection').value))
else 
    render_schedule([], document.getElementById("table_schedule"))




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
        return false
    }
    
    tkb = crawl_tkb(html_from_source.find('div.grid-roll2 > table'))
    if (tkb.length === 0){
        $(`form > .error`).show()
        $(`form > .error`).text(`Đọc dữ liệu tkb lỗi!`)
        return false
    }
    
    const week_start_text = html_from_source.find('#ctl00_ContentPlaceHolder1_ctl00_lblNote')[0].textContent
    const week_start_split = week_start_text.substring(week_start_text.search('bắt đầu từ ngày ') + 16, week_start_text.length - 1).split("/")
    console.log(week_start_split);
    const week_start = new Date(week_start_split[2], week_start_split[1] - 1, week_start_split[0])
    // console.log(week_start, new Date());
    // console.log(Math.round((new Date().getTime() - week_start.getTime()) / (1000 * 3600 * 24 * 7)) + 1);
    const current_week = Math.floor((new Date().getTime() - week_start.getTime()) / (1000 * 3600 * 24 * 7)) + 1
    document.getElementById('week-selection').value = current_week
    
    render_schedule(tkb, document.getElementById("table_schedule") , current_week)


    // $('html,body').scrollTop(0);
    $(`form > .error`).hide()
    localStorage.setItem('tkb', JSON.stringify(tkb))
    localStorage.setItem('week-start', JSON.stringify(week_start))

    return false
}

const onChangeSelection = ()=>{
    console.log('test');
    render_schedule(tkb, document.getElementById("table_schedule"),document.getElementById('week-selection').value)
}



document.querySelector('form > button').addEventListener("click", import_tkb)
document.querySelector('form').onsubmit = ()=> {return false}
document.querySelector('.week-select > select').onChangeSelection = onChangeSelection


const scrollToCurrentDay = (() => {
    
    const curr_day = new Date().getDay() + 1
    console.log(curr_day);

    const scrollDiv = document.querySelectorAll('.thead_td')[curr_day - 2];
    console.log(scrollDiv);
    document.querySelector('.custom_table').scrollTo({ left: scrollDiv.offsetLeft - 110, behavior: 'smooth'});
})()
