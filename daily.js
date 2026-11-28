/* Daily Corner library: general guidance only. Rules change: always check the embassy's own site. */
(function(){
var TIPS=[
["all","Many countries ask for a passport valid for at least 6 months after your trip, with free pages. Check the exact rule for your destination.","De nombreux pays demandent un passeport valable au moins 6 mois après votre voyage, avec des pages libres. Vérifiez la règle exacte de votre destination."],
["all","Do not buy a non-refundable flight before the visa decision. A booking you can cancel is usually safer.","N’achetez pas de billet d’avion non remboursable avant la décision sur le visa. Une réservation annulable est généralement plus sûre."],
["all","Your name must be written exactly the same on your passport, forms and bank papers.","Votre nom doit être écrit exactement de la même façon sur votre passeport, vos formulaires et vos relevés bancaires."],
["all","Photos: recent, plain light background, face clearly visible, no hat or dark glasses. The exact size depends on the country.","Photos : récentes, fond clair uni, visage bien visible, sans chapeau ni lunettes noires. La taille exacte dépend du pays."],
["all","Keep every receipt: visa fee, courier, appointment booking. You may need them later.","Gardez tous les reçus : frais de visa, courrier, prise de rendez-vous. Vous pourriez en avoir besoin plus tard."],
["all","Bring the originals and one copy of each document. Ask us which ones are kept by the centre.","Apportez les originaux et une copie de chaque document. Demandez-nous lesquels sont gardés par le centre."],
["all","Bank statements should be recent, in your name and show regular activity. A sudden large deposit just before applying can raise questions.","Les relevés bancaires doivent être récents, à votre nom et montrer une activité régulière. Un gros dépôt soudain juste avant la demande peut soulever des questions."],
["all","Answer every question honestly. A false answer can lead to a refusal and a ban from applying again.","Répondez honnêtement à toutes les questions. Une fausse réponse peut mener à un refus et à une interdiction de redemander."],
["all","Arrive at your appointment 30 minutes early with your confirmation and passport.","Arrivez à votre rendez-vous 30 minutes à l’avance avec votre confirmation et votre passeport."],
["all","No honest agency can guarantee a visa. Be careful with anyone who promises one for money.","Aucune agence honnête ne peut garantir un visa. Méfiez-vous de quiconque en promet un contre de l’argent."],
["all","Keep your phone on and answer unknown numbers while your file is being processed. The centre may call you.","Gardez votre téléphone allumé et répondez aux numéros inconnus pendant le traitement de votre dossier. Le centre peut vous appeler."],
["all","Never share your bank password or card codes with anyone, including an agent.","Ne partagez jamais votre mot de passe bancaire ni les codes de votre carte avec personne, y compris un agent."],
["all","Check the embassy’s official website for the latest fees and rules before you pay anything.","Consultez le site officiel de l’ambassade pour les frais et règles les plus récents avant de payer quoi que ce soit."],
["all","A missing document can delay the whole file. Read your checklist twice before the appointment.","Un document manquant peut retarder tout le dossier. Relisez votre liste deux fois avant le rendez-vous."],
["all","Keep a copy of everything you submit, and a photo of your passport on your phone.","Gardez une copie de tout ce que vous déposez, et une photo de votre passeport sur votre téléphone."],
["all","A refusal is not the end. Read the reason, fix the problem, then reapply with a stronger file.","Un refus n’est pas la fin. Lisez le motif, corrigez le problème, puis redemandez avec un dossier plus solide."],
["all","When your visa arrives, check your name, dates and number of entries right away. Tell us at once if something is wrong.","Quand votre visa arrive, vérifiez tout de suite votre nom, les dates et le nombre d’entrées. Dites-nous aussitôt si quelque chose ne va pas."],
["all","The visa dates show when you may enter. The number of days you may stay is a separate rule. Never overstay.","Les dates du visa indiquent quand vous pouvez entrer. Le nombre de jours de séjour est une règle distincte. Ne dépassez jamais la durée autorisée."],
["all","An employment letter should be recent, signed, and show your job, how long you have worked there and your approved leave dates.","Une attestation de travail doit être récente, signée, et indiquer votre poste, votre ancienneté et vos dates de congé accordées."],
["all","If someone sponsors your trip, their documents must be recent and match what you wrote on your form.","Si quelqu’un finance votre voyage, ses documents doivent être récents et correspondre à ce que vous avez écrit dans votre formulaire."],
["all","Keep your travel plan realistic: cities, dates and places to stay that make sense together.","Gardez un projet de voyage réaliste : villes, dates et hébergements qui vont ensemble."],
["all","Do not write on or damage your passport pages. A damaged passport can be refused.","N’écrivez pas sur les pages de votre passeport et ne l’abîmez pas. Un passeport abîmé peut être refusé."],
["all","Only trust messages from our official number. Fake agents copy names and photos online.","Ne faites confiance qu’aux messages de notre numéro officiel. Les faux agents copient les noms et les photos en ligne."],
["all","Tell us before you change your travel dates. It can change which documents you need.","Dites-le-nous avant de changer vos dates de voyage. Cela peut changer les documents nécessaires."],
["all","Carry a printed return ticket booking and your accommodation details when you travel. Officers at the border may ask.","Gardez avec vous une réservation de billet retour imprimée et les détails de votre hébergement. Les agents à la frontière peuvent les demander."],
["schengen","Schengen: the 90/180 rule means you may stay up to 90 days in any 180-day period across the whole area.","Schengen : la règle 90/180 signifie que vous pouvez séjourner jusqu’à 90 jours sur toute période de 180 jours dans l’ensemble de la zone."],
["schengen","Schengen needs travel medical insurance covering at least 30,000 euros for the whole stay.","Le Schengen exige une assurance maladie voyage d’au moins 30 000 euros pour tout le séjour."],
["schengen","Apply to the country where you will spend the most nights. If equal, apply to the first country you enter.","Déposez votre demande auprès du pays où vous passerez le plus de nuits. À égalité, auprès du premier pays où vous entrez."],
["schengen","You can usually apply up to 6 months before your trip, so do not wait until the last week.","Vous pouvez généralement déposer votre demande jusqu’à 6 mois avant le voyage : n’attendez pas la dernière semaine."],
["uk","UK: a standard visitor visa generally allows stays of up to 6 months. Check the conditions on your decision letter.","Royaume-Uni : un visa visiteur standard permet généralement des séjours jusqu’à 6 mois. Vérifiez les conditions sur votre lettre de décision."],
["uk","UK: after you apply online you give your fingerprints and photo at a visa application centre.","Royaume-Uni : après la demande en ligne, vous donnez vos empreintes et votre photo dans un centre de demande de visa."],
["uk","UK: show clear proof of your life at home: job, family, home. It supports your plan to return.","Royaume-Uni : montrez des preuves claires de votre vie chez vous : travail, famille, logement. Elles soutiennent votre projet de retour."],
["usa","USA: you complete the DS-160 online form. Keep the confirmation page with the barcode for your interview.","États-Unis : vous remplissez le formulaire DS-160 en ligne. Gardez la page de confirmation avec le code-barres pour l’entretien."],
["usa","USA: the visa application fee is generally not refunded if you are refused. Be sure your file is ready first.","États-Unis : les frais de demande de visa ne sont généralement pas remboursés en cas de refus. Assurez-vous d’abord que votre dossier est prêt."],
["usa","USA: interviews are short. Answer clearly and briefly, and tell the truth.","États-Unis : les entretiens sont courts. Répondez de façon claire et brève, et dites la vérité."],
["canada","Canada: most applicants give biometrics (fingerprints and photo) at a visa application centre after applying.","Canada : la plupart des demandeurs donnent leurs données biométriques (empreintes et photo) dans un centre de demande de visa après la demande."],
["canada","Canada: use the official government website or the official visa centre. Be careful with copies of forms.","Canada : utilisez le site officiel du gouvernement ou le centre de visa officiel. Méfiez-vous des copies de formulaires."],
["canada","Canada: explain clearly why you will return home. Ties to home matter.","Canada : expliquez clairement pourquoi vous rentrerez chez vous. Les attaches au pays comptent."]
];
var MYTHS=[
["A bigger bank balance guarantees a visa.","Un solde bancaire plus élevé garantit un visa.",0,"Officers look at the whole picture: income, ties to home, plan and honesty. A large deposit alone does not guarantee anything.","Les agents regardent l’ensemble : revenus, attaches, projet et honnêteté. Un gros dépôt seul ne garantit rien."],
["Paying an agent guarantees approval.","Payer un agent garantit l’approbation.",0,"Only the embassy decides. Be careful with anyone who promises a visa.","Seule l’ambassade décide. Méfiez-vous de quiconque promet un visa."],
["You must buy a non-refundable flight before you apply.","Vous devez acheter un billet non remboursable avant de faire la demande.",0,"Usually a flight reservation you can cancel is enough. Ask us before buying anything.","Généralement une réservation annulable suffit. Demandez-nous avant d’acheter quoi que ce soit."],
["A visa means you will definitely be allowed in.","Un visa veut dire que vous serez certainement admis.",0,"The border officer makes the final decision at entry, so carry your documents.","L’agent à la frontière prend la décision finale à l’entrée : gardez vos documents avec vous."],
["One refusal means you can never get a visa.","Un refus veut dire que vous n’obtiendrez jamais de visa.",0,"Many people are approved later after fixing the problem. Read the reason first.","Beaucoup de personnes sont acceptées plus tard après avoir corrigé le problème. Lisez d’abord le motif."],
["Many countries want your passport valid for 6 months after your trip.","Beaucoup de pays veulent un passeport valable 6 mois après votre voyage.",1,"Check the exact rule for your destination, and renew early if it is close.","Vérifiez la règle exacte de votre destination et renouvelez tôt si c’est proche."],
["A Schengen visa generally lets you travel in the whole Schengen area.","Un visa Schengen permet généralement de voyager dans toute la zone Schengen.",1,"Check your visa for limits, such as the number of entries and the dates.","Vérifiez les limites sur votre visa, comme le nombre d’entrées et les dates."],
["Fake documents are only a small problem.","Les faux documents ne sont qu’un petit problème.",0,"Fake documents can mean a long ban. Never use them, and walk away from anyone who suggests it.","Les faux documents peuvent entraîner une longue interdiction. Ne les utilisez jamais et fuyez quiconque le suggère."],
["You can skip a form question you do not like.","Vous pouvez sauter une question du formulaire qui ne vous plaît pas.",0,"Answer every question honestly. Blank or false answers hurt your file.","Répondez honnêtement à toutes les questions. Les réponses vides ou fausses nuisent à votre dossier."],
["The visa fee is returned if you are refused.","Les frais de visa sont remboursés en cas de refus.",0,"The fee is generally not refunded, so make sure the file is ready before you pay.","Les frais ne sont généralement pas remboursés : assurez-vous que le dossier est prêt avant de payer."],
["Photocopies are enough for every document.","Des photocopies suffisent pour tous les documents.",0,"Many centres need originals too. Bring both and follow your checklist.","Beaucoup de centres demandent aussi les originaux. Apportez les deux et suivez votre liste."],
["You can work on a tourist visa.","Vous pouvez travailler avec un visa touristique.",0,"A tourist visa is for visiting only. Working without permission can lead to removal and bans.","Un visa touristique sert seulement à visiter. Travailler sans autorisation peut mener à l’expulsion et à des interdictions."],
["Travel medical insurance is required for a Schengen visa.","Une assurance maladie voyage est exigée pour un visa Schengen.",1,"It must cover the whole stay, with at least 30,000 euros of cover.","Elle doit couvrir tout le séjour, avec au moins 30 000 euros de couverture."],
["Applying at the last minute is fine.","Déposer la demande à la dernière minute, ce n’est pas grave.",0,"Processing times vary. Apply as early as the rules allow.","Les délais varient. Déposez la demande dès que les règles le permettent."],
["Having family abroad guarantees a visa.","Avoir de la famille à l’étranger garantit un visa.",0,"Family abroad can even raise questions about your plan to return. Show your ties at home too.","Avoir de la famille à l’étranger peut même soulever des questions sur votre retour. Montrez aussi vos attaches chez vous."],
["A visa lets you stay as long as you like.","Un visa vous permet de rester aussi longtemps que vous voulez.",0,"Your stay is limited by the visa and the entry rules. Overstaying can cause bans.","Votre séjour est limité par le visa et les règles d’entrée. Dépasser la durée peut entraîner des interdictions."],
["You should tell your agent about past refusals.","Vous devriez parler à votre agent de vos refus passés.",1,"Forms ask about them. We prepare the file better when we know the history.","Les formulaires posent la question. Nous préparons mieux le dossier quand nous connaissons l’historique."],
["Small spelling differences in your name do not matter.","De petites différences d’orthographe dans votre nom n’ont pas d’importance.",0,"Names should match exactly across all documents. Fix mistakes before you apply.","Les noms doivent correspondre exactement sur tous les documents. Corrigez les erreurs avant de postuler."],
["The embassy’s own website has the final word on the rules.","Le site de l’ambassade a le dernier mot sur les règles.",1,"Rules and fees change, so we always check the official source.","Les règles et frais changent : nous vérifions toujours la source officielle."],
["A big deposit the day before you apply makes your file stronger.","Un gros dépôt la veille de la demande renforce votre dossier.",0,"Sudden deposits can look suspicious. Regular, real income is what helps.","Les dépôts soudains peuvent paraître suspects. Ce sont des revenus réguliers et réels qui aident."],
["A printed appointment confirmation helps on the day.","Une confirmation de rendez-vous imprimée aide le jour même.",1,"Bring it with your passport. Phones run out of battery.","Apportez-la avec votre passeport. Les téléphones se déchargent."],
["It is safe to post your passport photo page online.","Publier la page photo de votre passeport en ligne est sans danger.",0,"Never post it. Thieves use passport details for fraud.","Ne la publiez jamais. Les voleurs utilisent les données du passeport pour des fraudes."],
["A sponsor usually has to show their own income and documents.","Un garant doit généralement montrer ses propres revenus et documents.",1,"Their papers must be recent and match your form.","Ses papiers doivent être récents et correspondre à votre formulaire."],
["Overstaying a visa is not a big problem.","Dépasser la durée d’un visa n’est pas un gros problème.",0,"Overstaying can lead to fines, removal and bans on future visas.","Dépasser la durée peut entraîner des amendes, l’expulsion et des interdictions de futurs visas."],
["Interviews are short, so every answer counts.","Les entretiens sont courts, donc chaque réponse compte.",1,"Practise short, clear, honest answers about your trip.","Entraînez-vous à donner des réponses courtes, claires et honnêtes sur votre voyage."]
];
function dayN(){var d=new Date();return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5)}
function mix(n,len){return ((n*7919)%len+len)%len}
function tip(k,off){var a=TIPS.filter(function(x){return x[0]==="all"||x[0]===k});var ks=TIPS.filter(function(x){return x[0]===k});
  var n=dayN()+(off||0);var useK=ks.length&&n%3===0;var arr=useK?ks:a.filter(function(x){return x[0]==="all"});return arr[mix(Math.floor(n/ (useK?3:1)),arr.length)]}
function myth(off){var n=dayN()+(off||0);return MYTHS[mix(n,MYTHS.length)]}
window.DY={tips:TIPS,myths:MYTHS,tip:tip,myth:myth,dayN:dayN};
var DP=null;try{window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();DP=e})}catch(e){}
function E(t,x,c){var n=document.createElement(t);if(x!=null)n.textContent=x;if(c)n.className=c;return n}
function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
function card(L,key,own,link){
  var fr=L==="fr",out=[],n=dayN();
  var sec=E("section",null,"card");sec.style.marginBottom="12px";
  var t=null,txt="";
  if(own&&own.length&&n%2===0){var o=own[mix(Math.floor(n/2),own.length)];txt=fr?(o[1]||o[0]):(o[0]||o[1])}
  if(!txt){t=tip(key);txt=fr?t[2]:t[1]}
  sec.appendChild(E("h2",fr?"Conseil du jour":"Tip of the day"));sec.appendChild(E("p",txt));
  var sb=E("button",fr?"Partager sur WhatsApp":"Share on WhatsApp","sec");sb.type="button";
  sb.addEventListener("click",function(){var m=txt+(link?"\n"+link:"");window.open("https://wa.me/?text="+encodeURIComponent(m),"_blank","noopener")});sec.appendChild(sb);out.push(sec);
  var m=myth(),c2=E("section",null,"card");c2.style.marginBottom="12px";c2.appendChild(E("h2",fr?"Mythe ou vrai ?":"Myth or fact?"));c2.appendChild(E("p",fr?m[1]:m[0]));
  var res=E("p",null,"m");res.setAttribute("role","status");var key2="vgmy"+n,got=ls(key2);
  function show(a){var ok=(a==="1")===(m[2]===1);res.textContent=(ok?(fr?"Bonne réponse. ":"Correct. "):(fr?"Pas tout à fait. ":"Not quite. "))+(m[2]===1?(fr?"C’est vrai. ":"It is a fact. "):(fr?"C’est un mythe. ":"It is a myth. "))+(fr?m[4]:m[3])}
  var bf=E("button",fr?"Vrai":"Fact");bf.type="button";var bm=E("button",fr?"Mythe":"Myth");bm.type="button";
  bf.addEventListener("click",function(){ls(key2,"1");show("1")});bm.addEventListener("click",function(){ls(key2,"0");show("0")});
  c2.appendChild(bf);c2.appendChild(bm);c2.appendChild(res);if(got!==null&&got!==undefined)show(got);out.push(c2);
  return out}
function install(L){
  var fr=L==="fr";if(ls("vgai")==="1")return null;try{if(window.matchMedia&&matchMedia("(display-mode: standalone)").matches)return null}catch(e){}
  var sec=E("section",null,"card");sec.style.marginBottom="12px";sec.appendChild(E("h2",fr?"Gardez cette page sous la main":"Keep this page handy"));
  var ios=/iphone|ipad|ipod/i.test(navigator.userAgent||"");
  sec.appendChild(E("p",ios?(fr?"Touchez Partager, puis Sur l’écran d’accueil. Vous la retrouverez à côté de vos autres applications.":"Tap Share, then Add to Home Screen. You will find it next to your other apps."):(fr?"Ajoutez-la à votre écran d’accueil pour l’ouvrir en un geste, comme une application. Vous pouvez aussi ouvrir le menu du navigateur et choisir Ajouter à l’écran d’accueil.":"Add it to your home screen to open it in one tap, like an app. You can also open the browser menu and choose Add to Home Screen."),"m"));
  var b=E("button",fr?"Ajouter à l’écran d’accueil":"Add to home screen","sec");b.type="button";b.addEventListener("click",function(){if(DP){DP.prompt();DP=null}else b.textContent=fr?"Utilisez le menu du navigateur.":"Use the browser menu."});if(!ios)sec.appendChild(b);
  var x=E("button",fr?"Plus tard":"Not now","sec");x.type="button";x.style.marginLeft="8px";x.addEventListener("click",function(){ls("vgai","1");if(sec.parentNode)sec.parentNode.removeChild(sec)});sec.appendChild(x);
  return sec}
window.DY.card=card;window.DY.install=install;

})();
