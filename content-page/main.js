
const main_view = document.getElementsByClassName('custom_table')[0]
const table_content =  render_schedule(JSON.parse(localStorage.getItem('tkb')), main_view)

// // const control_websv = 'https://tele-tkb-bot.noclolicon.repl.co'


// async function postTkb(url, data){
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             'Content_Type': 'application/json',
//         },
//         body: JSON.stringify(data)
//     })

//     return response.json();
// }

// // function btNoti(){
// //     console.log(localStorage.getItem('tkb'));
// // }