// const $ = document

let listTask = []

let tkb = crawl_tkb($('div.grid-roll2 > table'))
let default_data = ''



chrome.runtime.sendMessage(tkb)


function render_new_table(){
  let div_cusom = document.createElement('div')
  div_cusom.setAttribute('id', 'div_customTKB')
  div_cusom.setAttribute('class', 'custom_table')
  let table_view = document.createElement('table')
  div_cusom.appendChild(table_view)

  

  console.log(document.querySelector('#InTKB'));    

  default_data = document.querySelector('#ctl00_ContentPlaceHolder1_ctl00_pnlHeader').innerHTML;
  document.querySelector('#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table').replaceWith(div_cusom)
  render_schedule(tkb, table_view) 
}

let isChange = false
function bt_change_onClick(){
  if (isChange){
    bt_change.setAttribute('value', 'Xem tkb theo tuần')
    document.getElementById('ctl00_ContentPlaceHolder1_ctl00_pnlHeader').innerHTML = default_data;
  }else{
    bt_change.setAttribute('value', 'Xem tkb gốc')
    render_new_table()
  }
  isChange = !isChange
}

let bt_change = document.createElement('input');
console.log(bt_change);
bt_change.setAttribute('type', 'button');
bt_change.setAttribute('value', 'Xem tkb theo tuần')
bt_change.setAttribute('style', 'font-size: 11px; height: 30px; margin-left: 10px; background-color: #369925; color: white; border-color: transparent; border-radius: 3px')
document.querySelector('#InTKB').after(bt_change)
// bt_change.setAttribute('onClick', 'bt_change_onClick()')
bt_change.addEventListener('click', bt_change_onClick)