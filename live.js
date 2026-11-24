/* Live client pages: talks to the agent's own Firebase project (Firestore REST). Clients can only create small records; they can read only the public "pub" documents. */
var LV=(function(){
  function cfg(D){var l=D&&D.lv;return l&&typeof l==="object"&&typeof l.k==="string"&&typeof l.p==="string"&&typeof l.u==="string"&&l.k&&l.p&&l.u?l:null}
  function host(){return typeof window.VG_CLOUD_HOST==="string"&&window.VG_CLOUD_HOST?window.VG_CLOUD_HOST:"https://firestore.googleapis.com"}
  function base(l){return host()+"/v1/projects/"+encodeURIComponent(l.p)+"/databases/(default)/documents/pages/"+encodeURIComponent(l.u)}
  function rnd(n){var s="",a="abcdefghijklmnopqrstuvwxyz0123456789";try{var b=new Uint8Array(n);crypto.getRandomValues(b);for(var i=0;i<n;i++)s+=a.charAt(b[i]%36)}catch(e){for(var j=0;j<n;j++)s+=a.charAt(Math.floor(Math.random()*36))}return s}
  function dev(){var d="";try{d=localStorage.getItem("vgdev")||""}catch(e){}if(!/^[a-z0-9]{12,24}$/.test(d)){d=rnd(16);try{localStorage.setItem("vgdev",d)}catch(e){}}return d}
  function enc(o){var f={};Object.keys(o).forEach(function(k){var v=o[k];f[k]=typeof v==="number"?{integerValue:String(Math.floor(v))}:{stringValue:String(v)}});return {fields:f}}
  function get(l,doc){return fetch(base(l)+"/pub/"+doc+"?key="+encodeURIComponent(l.k)).then(function(r){return r.ok?r.json():null}).then(function(j){try{return JSON.parse(j.fields.d.stringValue)}catch(e){return null}}).catch(function(){return null})}
  function add(l,col,id,o){return fetch(base(l)+"/"+col+"?documentId="+encodeURIComponent(id)+"&key="+encodeURIComponent(l.k),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(enc(o))}).then(function(r){return r.ok||r.status===409}).catch(function(){return false})}
  function del(l,col,id){return fetch(base(l)+"/"+col+"/"+encodeURIComponent(id)+"?key="+encodeURIComponent(l.k),{method:"DELETE"}).then(function(r){return r.ok||r.status===404}).catch(function(){return false})}
  function list(l,path){return fetch(base(l)+"/"+path+"?pageSize=100&key="+encodeURIComponent(l.k)).then(function(r){return r.ok?r.json():{}}).then(function(j){return (j.documents||[]).map(function(d){var f={};Object.keys(d.fields||{}).forEach(function(k){var v=d.fields[k];f[k]=v.stringValue!==undefined?v.stringValue:(v.integerValue!==undefined?+v.integerValue:"")});return {id:String(d.name||"").split("/").pop(),f:f}})}).catch(function(){return []})}
  function addAt(l,path,id,o){return add(l,path,id,o)}
  return {cfg:cfg,dev:dev,rnd:rnd,get:get,add:add,del:del,list:list,addAt:addAt};
})();
