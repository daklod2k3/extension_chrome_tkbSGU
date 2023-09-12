

function MonHoc(mmh, tmh, nmh, thu, tbd, st, phong, cbgd, tuan, th) {
  this['MaMH'] = mmh
  this['TenMH'] = tmh
  this['NMH'] = nmh
  this['Thu'] = thu
  this['TietBD'] = tbd
  this['ST'] = st
  this['Phong'] = phong
  this['CBGD'] = cbgd
  this['Tuan'] = tuan
  this['th'] = th
}

let listTask = []

let tkb =[]
let default_data = ''

async function crawl_tkb() {
  // var tkb = []
  let $ = document;

  // const response = await axios('http://api.scraperapi.com?api_key=9fba3b67a75075f1ef3052e7da167ca2&url=' + url)


  const table = $.querySelectorAll('div.grid-roll2 > table')


  table.forEach((ele) => {
    ele = ele.childNodes[1].childNodes[0]
    // const tds = ele.getElementsByTagName('td')
    // const mmh = tds[0].textContent
    // const tmh = tds[1].textContent
    // const nmh = tds[2].textContent


    // const tmp = tds[8].textContent
    // const isTH = isNaN(tmp);
    // if (!isTH) {

    //   const th = tmp

    //   const thuTH = tds[9].querySelector('td').textContent
    //   const thuLT = tds[9].querySelector('div').textContent

    //   const tietTH = tds[11].querySelector('td').textContent;
    //   const tietLT = tds[11].querySelector('div').textContent;

    //   const stTH = tds[13].querySelector('td').textContent
    //   const stLT = tds[13].querySelector('div').textContent

    //   const phongTH = tds[15].querySelector('td').textContent
    //   const phongLT = tds[15].querySelector('div').textContent
    
    //   const cbgdTH = tds[17].querySelector('td').textContent
    //   const cbgdLT = tds[17].querySelector('div').textContent
    
    //   const tuanTH = tds[19].querySelector('td').textContent
    //   const tuanLT = tds[19].querySelector('div').textContent
    

    //   let MonHocTmp = new MonHoc(mmh, tmh, nmh, thuTH, tietTH, stTH, phongTH, cbgdTH, tuanTH, 0)
    //   tkb.push(MonHocTmp)

    //   MonHocTmp = new MonHoc(mmh, tmh, nmh, thuLT, tietLT, stLT, phongLT, cbgdLT, tuanLT, 0)
    //   tkb.push(MonHocTmp)

    // } else {
    //     const thu = tds[8].textContent
    //     const tiet = tds[9].textContent
    //     const st = tds[10].textContent
    //     const phong = tds[11].textContent
    //     const cbgd = tds[12].textContent
    //     const tuan = tds[13].textContent

    //     let MonHocTmp = new MonHoc(mmh, tmh, nmh, thu, tiet, st, phong, cbgd, tuan, 0)
    //     tkb.push(MonHocTmp)
    // }

    if (ele.childNodes[9].childNodes.length > 1){
      ele.childNodes[9].childNodes.forEach((element, index) => {
        const data = ele.childNodes
        const mmh = data[0].textContent
        const tmh = data[1].textContent
        const nmh = data[2].textContent
        const thu = element.textContent
        const tiet = data[10].childNodes[index].textContent
        const st = data[11].childNodes[index].textContent
        const phong = data[12].childNodes[index].textContent
        const cbgd = data[13].childNodes[index].textContent
        const tuan = data[14].childNodes[index].textContent
        const th = data[8].childNodes[index + 1].textContent
        if (tuan[0] === "1")
          tkb.push(new MonHoc(mmh, tmh, nmh, thu, tiet, st, phong, cbgd, tuan, th))
      });  
    } else {
      const data = ele.childNodes
      const mmh = data[0].textContent
      const tmh = data[1].textContent
      const nmh = data[2].textContent
      const thu = data[9].textContent
      const tiet = data[10].textContent
      const st = data[11].textContent
      const phong = data[12].textContent
      const cbgd = data[13].textContent
      const tuan = data[14].textContent
      const th = data[8].textContent
      tkb.push(new MonHoc(mmh, tmh, nmh, thu, tiet, st, phong, cbgd, tuan, th))
    }


  })
  console.log(tkb)
  // fs.writeFileSync('data.txt', table)
  // const csv = new ObjectsToCsv(tkb)
  // await csv.toDisk('./data.csv')
  chrome.runtime.sendMessage(tkb)
      
}

crawl_tkb()

function renTKB(){
  let div_cusom = document.createElement('div')
  div_cusom.setAttribute('id', 'div_customTKB')
  div_cusom.setAttribute('class', 'custom_table')
  let table_view = document.createElement('table')
  div_cusom.appendChild(table_view)

  

  console.log(document.querySelector('#InTKB'));

  default_data = document.querySelector('#ctl00_ContentPlaceHolder1_ctl00_pnlHeader').innerHTML;
  document.querySelector('#ctl00_ContentPlaceHolder1_ctl00_pnlHeader > table').replaceWith(div_cusom)
  ren(tkb, table_view) 
}

let isChange = false
function bt_change_onClick(){
  if (isChange){
    bt_change.setAttribute('value', 'Xem tkb theo tuần')
    document.getElementById('ctl00_ContentPlaceHolder1_ctl00_pnlHeader').innerHTML = default_data;
  }else{
    bt_change.setAttribute('value', 'Xem tkb của trường')
    renTKB()
  }
  isChange = !isChange
}

let bt_change = document.createElement('input');
console.log(bt_change);
bt_change.setAttribute('type', 'button');
bt_change.setAttribute('value', 'Xem tkb theo tuần')
bt_change.setAttribute('style', 'font-size: 11px; height: 20px')
document.querySelector('#InTKB').after(bt_change)
// bt_change.setAttribute('onClick', 'bt_change_onClick()')
bt_change.addEventListener('click', bt_change_onClick)


