


  
  function getCurrentTab(callback) {
    let queryOptions = { active: true, lastFocusedWindow: true };
    chrome.tabs.query(queryOptions, ([tab]) => {
      if (chrome.runtime.lastError)
      console.error(chrome.runtime.lastError);
      // `tab` will either be a `tabs.Tab` instance or `undefined`.
      callback(tab);
    });
  }
  



  chrome.browserAction.onClicked.addListener(async function(){
    getCurrentTab((res)=>{
      console.log(res);
      // if (res.url.search("page=thoikhoabieu") != -1 ){
      //   chrome.tabs.create({
      //     url : "ui/index.html",
      //     active: true
      //   })
      // }else 
      chrome.tabs.create({
        url: chrome.extension.getURL("/docs/index.html"),
        active : true
      })
    })

  })
chrome.runtime.onMessage.addListener((mess)=>{
  localStorage.setItem('tkb', JSON.stringify(mess))
  // chrome.tabs.create({
  //   url : "ui/index.html",
  //   active: true
  // })
})
