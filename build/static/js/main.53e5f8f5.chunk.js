(this["webpackJsonpnft-game-starter"]=this["webpackJsonpnft-game-starter"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"string[]","name":"characterNames","type":"string[]"},{"internalType":"string[]","name":"characterImageURIs","type":"string[]"},{"internalType":"uint256[]","name":"characterHp","type":"uint256[]"},{"internalType":"uint256[]","name":"characterAttackDmg","type":"uint256[]"},{"internalType":"uint256[]","name":"characterDefence","type":"uint256[]"},{"internalType":"string","name":"bossName","type":"string"},{"internalType":"string","name":"bossImageURI","type":"string"},{"internalType":"uint256","name":"bossHp","type":"uint256"},{"internalType":"uint256","name":"bossAttackDamage","type":"uint256"},{"internalType":"uint256","name":"bossDefence","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newBossHp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newPlayerHp","type":"uint256"}],"name":"AttackComplete","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"characterIndex","type":"uint256"}],"name":"CharacterNFTMinted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"attackBoss","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bigBoss","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"hp","type":"uint256"},{"internalType":"uint256","name":"maxHp","type":"uint256"},{"internalType":"uint256","name":"attackDamage","type":"uint256"},{"internalType":"uint256","name":"defence","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkIfUserHasNFT","outputs":[{"components":[{"internalType":"uint256","name":"characterIndex","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"hp","type":"uint256"},{"internalType":"uint256","name":"maxHp","type":"uint256"},{"internalType":"uint256","name":"attackDamage","type":"uint256"},{"internalType":"uint256","name":"defence","type":"uint256"}],"internalType":"struct MyEpicGame.CharacterAttributes","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllDefaultCharacters","outputs":[{"components":[{"internalType":"uint256","name":"characterIndex","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"hp","type":"uint256"},{"internalType":"uint256","name":"maxHp","type":"uint256"},{"internalType":"uint256","name":"attackDamage","type":"uint256"},{"internalType":"uint256","name":"defence","type":"uint256"}],"internalType":"struct MyEpicGame.CharacterAttributes[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBigBoss","outputs":[{"components":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"hp","type":"uint256"},{"internalType":"uint256","name":"maxHp","type":"uint256"},{"internalType":"uint256","name":"attackDamage","type":"uint256"},{"internalType":"uint256","name":"defence","type":"uint256"}],"internalType":"struct MyEpicGame.BigBoss","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_characterIndex","type":"uint256"}],"name":"mintCharacterNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftHolderAttributes","outputs":[{"internalType":"uint256","name":"characterIndex","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"imageURI","type":"string"},{"internalType":"uint256","name":"hp","type":"uint256"},{"internalType":"uint256","name":"maxHp","type":"uint256"},{"internalType":"uint256","name":"attackDamage","type":"uint256"},{"internalType":"uint256","name":"defence","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nftHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},44:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},51:function(e,t){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n.n(a),i=n(34),s=n.n(i),c=(n(44),n(2)),o=n.n(c),u=n(13),p=n(10),l=n.p+"static/media/twitter-logo.a8a75254.svg",m=(n(46),n(47),n(15)),d="0xD9C83303a4938728B7bd2e323638F7b1F6ea8A94",y=function(e){return{name:e.name,imageURI:e.imageURI,hp:e.hp.toNumber(),maxHp:e.maxHp.toNumber(),attackDamage:e.attackDamage.toNumber(),defence:e.defence.toNumber()}},b=n(16),h=(n(48),n(5)),f=function(){return Object(h.jsxs)("div",{className:"lds-ring",children:[Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{}),Object(h.jsx)("div",{})]})},j=function(e){var t=e.setCharacterNFT,n=Object(a.useState)([]),r=Object(p.a)(n,2),i=r[0],s=r[1],c=Object(a.useState)(null),l=Object(p.a)(c,2),j=l[0],g=l[1],x=Object(a.useState)(!1),v=Object(p.a)(x,2),T=v[0],O=v[1];Object(a.useEffect)((function(){var e=window.ethereum;if(e){var t=new m.a.providers.Web3Provider(e).getSigner(),n=new m.a.Contract(d,b,t);g(n)}else console.log("Ethereum object not found")}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Getting contract characters to mint"),e.next=4,j.getAllDefaultCharacters();case 4:t=e.sent,console.log("charactersTxn:",t),n=null===t||void 0===t?void 0:t.map((function(e){return y(e)})),s(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Something went wrong fetching characters:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(u.a)(o.a.mark((function e(n,a,r){var i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("CharacterNFTMinted - sender: ".concat(n," tokenId: ").concat(a.toNumber()," characterIndex: ").concat(r.toNumber())),alert("Your NFT is all done -- see it here: https://rinekby.rarible.com/token/".concat(d,"/").concat(a.toNumber())),!j){e.next=8;break}return e.next=5,j.checkIfUserHasNFT();case 5:i=e.sent,console.log("CharacterNFT: ",i),t(y(i));case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return j&&(e(),j.on("CharacterNFTMinted",n)),j&&e(),function(){j&&j.off("CharacterNFTMinted",n)}}),[j,t]);return Object(h.jsxs)("div",{className:"select-character-container",children:[Object(h.jsx)("h2",{children:"Mint Your Hero. Choose wisely."}),Object(h.jsxs)("div",{className:"character-grid",children:[null===i||void 0===i?void 0:i.map((function(e,t){return Object(h.jsxs)("div",{className:"character-item",children:[Object(h.jsx)("div",{className:"name-container",children:Object(h.jsx)("p",{children:e.name})}),Object(h.jsx)("img",{src:e.imageURI,alt:e.name}),Object(h.jsx)("button",{type:"button",className:"character-mint-button",onClick:(n=t,Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!j){e.next=11;break}return O(!0),console.log("Minting character in progress..."),e.next=6,j.mintCharacterNFT(n);case 6:return t=e.sent,e.next=9,t.wait();case 9:console.log("mintTxn:",t),O(!1);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.warn("MintCharacterAction Error:",e.t0),O(!1);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})))),children:"Mint ".concat(e.name)})]},e.name);var n})),T&&Object(h.jsxs)("div",{className:"loading",children:[Object(h.jsxs)("div",{className:"indicator",children:[Object(h.jsx)(f,{}),Object(h.jsx)("p",{children:"Minting In Progress..."})]}),Object(h.jsx)("img",{src:"https://media2.giphy.com/media/61tYloUgq1eOk/giphy.gif?cid=ecf05e47dg95zbpabxhmhaksvoy8h526f96k4em0ndvx078s&rid=giphy.gif&ct=g",alt:"Minting loading indicator"})]})]})]})},g=n(23),x=(n(62),function(e){var t=e.characterNFT,n=e.setCharacterNFT,r=Object(a.useState)(null),i=Object(p.a)(r,2),s=i[0],c=i[1],l=Object(a.useState)(null),j=Object(p.a)(l,2),x=j[0],v=j[1],T=Object(a.useState)(""),O=Object(p.a)(T,2),k=O[0],w=O[1],N=Object(a.useState)(!1),M=Object(p.a)(N,2),I=M[0],C=M[1];Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.getBigBoss();case 2:t=e.sent,console.log("Boss:",t),v(y(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(e,t){var a=e.toNumber(),r=t.toNumber();console.log("AttackComplete: Boss Hp: ".concat(a," Player Hp: ").concat(r)),v((function(e){return Object(g.a)(Object(g.a)({},e),{},{hp:a})})),n((function(e){return Object(g.a)(Object(g.a)({},e),{},{hp:r})}))};return s&&(e(),s.on("AttackComplete",t)),function(){s&&s.off("AttackComplete",t)}}),[s,n]),Object(a.useEffect)((function(){var e=window.ethereum;if(e){var t=new m.a.providers.Web3Provider(e).getSigner(),n=new m.a.Contract(d,b,t);c(n)}else console.log("Ethereum object not found")}),[]);var F=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!s){e.next=13;break}return w("attacking"),console.log("Attacking boss..."),e.next=6,s.attackBoss();case 6:return t=e.sent,e.next=9,t.wait();case 9:console.log("attackTxn:",t),w("hit"),C(!0),setTimeout((function(){C(!1)}),5e3);case 13:e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error attacking boss:",e.t0),w("");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"arena-container",children:[x&&I&&Object(h.jsx)("div",{id:"toast",className:"show",children:Object(h.jsx)("div",{id:"desc",children:"\ud83d\udca5 ".concat(x.name," was hit for ").concat(t.attackDamage,"!")})}),x&&Object(h.jsxs)("div",{className:"boss-container",children:[Object(h.jsxs)("div",{className:"boss-content ".concat(k),children:[Object(h.jsxs)("h2",{children:["\ud83d\udd25 ",x.name," \ud83d\udd25"]}),Object(h.jsxs)("div",{className:"image-content",children:[Object(h.jsx)("img",{src:x.imageURI,alt:"Boss ".concat(x.name)}),Object(h.jsxs)("div",{className:"health-bar",children:[Object(h.jsx)("progress",{value:x.hp,max:x.maxHp}),Object(h.jsx)("p",{children:"".concat(x.hp," / ").concat(x.maxHp," HP")})]})]})]}),Object(h.jsx)("div",{className:"attack-container",children:Object(h.jsx)("button",{className:"cta-button",onClick:F,children:"\ud83d\udca5 Attack ".concat(x.name)})})]}),t&&Object(h.jsx)("div",{className:"players-container",children:Object(h.jsxs)("div",{className:"player-container",children:[Object(h.jsx)("h2",{children:"Your Character"}),Object(h.jsxs)("div",{className:"player",children:[Object(h.jsxs)("div",{className:"image-content",children:[Object(h.jsx)("h2",{children:t.name}),Object(h.jsx)("img",{src:t.imageURI,alt:"Character ".concat(t.name)}),Object(h.jsxs)("div",{className:"health-bar",children:[Object(h.jsx)("progress",{value:t.hp,max:t.maxHp}),Object(h.jsx)("p",{children:"".concat(t.hp," / ").concat(t.maxHp," HP")})]})]}),Object(h.jsxs)("div",{className:"stats",children:[Object(h.jsx)("h4",{children:"\u2694\ufe0f Attack Damage: ".concat(t.attackDamage)}),Object(h.jsx)("h4",{children:"\ud83d\udee1 Defence: ".concat(t.defence)})]})]})]})}),"attacking"===k&&Object(h.jsxs)("div",{className:"loading-indicator",children:[Object(h.jsx)(f,{}),Object(h.jsx)("p",{children:"Attacking \u2694\ufe0f"})]})]})}),v="0xJoydeeeep",T="https://twitter.com/".concat(v),O=function(){var e=Object(a.useState)(void 0),t=Object(p.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(void 0),s=Object(p.a)(i,2),c=s[0],g=s[1],O=Object(a.useState)(!1),k=Object(p.a)(O,2),w=k[0],N=k[1],M=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,n=t.ethereum){e.next=7;break}return console.log("Make sure you have MetaMask!"),e.abrupt("return");case 7:console.log("We have the ethereum object",n);case 8:return e.next=10,n.request({method:"eth_accounts"});case 10:0!==(a=e.sent).length?(i=a[0],console.log("Found an authorized account:",i),r(i)):console.log("No authorized account found"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=window,n=t.ethereum){e.next=5;break}return alert("Get MetaMask!"),e.abrupt("return");case 5:return e.next=7,n.request({method:"eth_requestAccounts"});case 7:a=e.sent,console.log("Connected",a[0]),r(a[0]),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){N(!0),M()}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t,a,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Checking for Character NFT on address:",n),t=new m.a.providers.Web3Provider(window.ethereum),a=t.getSigner(),r=new m.a.Contract(d,b,a),e.next=6,r.checkIfUserHasNFT();case 6:(i=e.sent).name?(console.log("User has character NFT"),g(y(i))):console.log("No character NFT found"),N(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n&&(console.log("CurrentAccount:",n),e())}),[n]),Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"header-container",children:[Object(h.jsx)("p",{className:"header gradient-text",children:"\u2694\ufe0f Metaverse Slayer \u2694\ufe0f"}),Object(h.jsx)("p",{className:"sub-text",children:"Team up to protect the Metaverse!"}),w?Object(h.jsx)(f,{}):Object(h.jsxs)(h.Fragment,{children:[!n&&Object(h.jsxs)("div",{className:"connect-wallet-container",children:[Object(h.jsx)("img",{src:"https://64.media.tumblr.com/tumblr_mbia5vdmRd1r1mkubo1_500.gifv",alt:"Monty Python Gif"}),Object(h.jsx)("button",{className:"cta-button connect-wallet-button",onClick:I,children:"Connect Wallet To Get Started"})]}),n&&!c&&Object(h.jsx)(j,{setCharacterNFT:g}),n&&c&&Object(h.jsx)(x,{characterNFT:c,setCharacterNFT:g})]})]}),Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsx)("img",{alt:"Twitter Logo",className:"twitter-logo",src:l}),Object(h.jsx)("a",{className:"footer-text",href:T,target:"_blank",rel:"noreferrer",children:"built by @".concat(v)})]})]})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.53e5f8f5.chunk.js.map