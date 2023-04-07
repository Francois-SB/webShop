

class Article {
    /*     id
        name
        brand
        price
        quantity */
        constructor(id, name, brand, price, quantity, category){
            this.id = id;
            this.name = name;
            this.brand = brand;
            this.price = price;
            this.quantity = quantity;
            this.category = category;
        }
    }
    let articles = [
    new Article(1,'MacBook', 'Apple',	2000, 0,'pc'),
    new Article(2,'S10', 'Samsung',	700, 0,'smartPhone'),
    new Article(3,'Iphone150', 'Apple',	700, 0,'smartPhone'),
    new Article(4,'Laptop'      , 	'PH',	1199 , 0,'pc'),
    new Article(5,'S8','Samsung',200,0,'smartPhone'),
    new Article(6,'S9','Samsung',200,0,'smartPhone'),
    new Article(7,'Iphone19','Apple',300,0,'smartPhone'),
    new Article(8,'ipad','Apple',400,0,'tablet'),
    ]
/**************************************************************** */    



const menuSection = document.querySelector('#menuSection');
const articlesSection = document.querySelector('#articlesSection');
const cartSection = document.querySelector('#cartSection');
const custInfoSectionSection = document.querySelector('#custInfoSectionSection');
const cmdFinalizeSection = document.querySelector('#cmdFinalizeSection');

/***********************************************************************************/
/*****************************affichage/**************************************/
/***********************************************************************************/
/* const states = ["nav", "selecting", "purchasing", "finalizing", "dev"];
states=;

 switch(states) {
    case nav:
        menuSection.style.visibility='visible'
        articlesSection.style.visibility='visible'
        cartSection.style.visibility='hidden'
        custInfoSectionSection.style.visibility='hidden'
        cmdFinalizeSection.style.visibility='hidden'
    break;
    case selecting:
        menuSection.style.visibility='visible'
        articlesSection.style.visibility='visible'
        cartSection.style.visibility='visible'
        custInfoSectionSection.style.visibility='hidden'
        cmdFinalizeSection.style.visibility='hidden'
    break;
    case purchasing:
        menuSection.style.visibility='hidden'
        articlesSection.style.visibility='hidden'
        cartSection.style.visibility='visible'
        custInfoSectionSection.style.visibility='visible'
        cmdFinalizeSection.style.visibility='hidden'
    break;
    case finalizing:
        menuSection.style.visibility='hidden'
        articlesSection.style.visibility='hidden'
        cartSection.style.visibility='hidden'
        custInfoSectionSection.style.visibility='hidden'
        cmdFinalizeSection.style.visibility='visible'
    break;
    case dev:
        menuSection.style.visibility='visible'
        articlesSection.style.visibility='visible'
        cartSection.style.visibility='visible'
        custInfoSectionSection.style.visibility='visible'
        cmdFinalizeSection.style.visibility='hidden'
    break;
    default:
        console.log(`Sorry, we are out of ${states}.`);

} 

 */
/* articles.forEach((item, index) => {
    console.log(item) //value
    console.log(index) //index
  })  */
/***********************************************************************************/
/**                                  MAIN                                         **/
/***********************************************************************************/
/* const menu.addEventListener('click',) */
displayArray(articles);

const menuAll = document.querySelector("#all")
menuAll.addEventListener('click', ()=> {
    filterAndDisplay("all")
});
const menuSmartPhone = document.querySelector("#smartPhone")
menuSmartPhone.addEventListener('click', ()=> {
    filterAndDisplay("smartPhone")
});
const menuTablet = document.querySelector("#tablet")
menuTablet.addEventListener('click', ()=> {
    filterAndDisplay("tablet")
});
const menuPc = document.querySelector("#pc")
menuPc.addEventListener('click', ()=> {
    filterAndDisplay("pc")
});

/***********************************************************************************/
/**                           gestion affichage tab                               **/
/***********************************************************************************/
function displayArray(tab) {
console.log(tab)


    var tblBody = document.querySelector("#articles__body__articles__tab");
    console.log("tblBody" + tblBody);
    // creating all cells
    for (var i = 0; i < tab.length; i++) {
      // creates a table row
    var row = document.createElement("tr");
    row.setAttribute("id",tab[i].id);
      for (var j = 0; j < 5; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        let k;
        switch(j){
            case 0: var cellText = document.createTextNode(tab[i].id);
                break;
                case 1:var cellText = document.createTextNode(tab[i].name);
                break;
                case 2:var cellText = document.createTextNode(tab[i].brand);
                break;
                case 3:var cellText = document.createTextNode(tab[i].price);
                break;
                case 4:var cellText = document.createElement("input");
                cellText.setAttribute("type","text");
                cellText.setAttribute("class","widht50");
                const inputId = `quantityTextId${tab[i].id}`;
                cellText.setAttribute("id",inputId);
                /* cellText.setAttribute("class","inputClass"); */
                /* cellText.setAttribute("readonly","readonly"); */
                cellText.setAttribute("onInput","modifyCart()");
                break;
                default:
                    console.log("error j articles")
        }
        /* var text = `articles[i].${k}`; */
        
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  }


  function filterAndDisplay(catName){
    switch(catName){
        case "all" : displayArray(articles);
        break;
        case "smartPhone" : displayArray(filter(smartPhone));
        break;
        case "tablet" : displayArray(filter(tablet));
        break;
        case "pc" : displayArray(filter(pc));
        break;
        default : console.log("souci or not souci")
    }
  }

  function filter(catName){
    const filteredTab = []
    articles.forEach(item => {
        if (item.category==catName) filteredTab.push(item)
    })
    return filteredTab
  }
/* 
  //crée un tag avec des attributs et l'ajoute au html
function createElement(...articles,i,parentTag,tagName,attributeType,attributeName,attributeType2,attributeName2){
    var cellText = document.createElement(tagName);
    cellText.setAttribute(attributeType,attributeName);
    if(attributeName2 != 0)  cellText.setAttribute(attributeType2,attributeName2);
    parentTag.appendChild(cellText);
} */

 function modifyCart(){
    console.log("in modify cart");
    /* const articleId = tableRow.id; */
    document.addEventListener("keyup", function(event){
     if(event.keyCode == '13'){ //si press enter
        //recup id de la zone de text cliquée
        const inputTagClicked = event.target;
        //recup id article via row id
        const cell = inputTagClicked.parentNode;
        const tableRow = cell.parentNode;
        const articleId = tableRow.id;
        
        const cartLineAction = checkArticleAndModifyCart(articleId,inputTagClicked.value);
        console.log(cartLineAction ? "action succed" : "action failled")

    } 
});

  }

  function createCartLine(articleId,qtyValue){
    console.log("in create article")
    const newCartLine = document.createElement("span");
    newCartLine.setAttribute("id",articleId);
    newCartLine.classList.add("spanCart","tag");
    //newCartLine.innerHTML = `id:${Articles[articleId].id} ${Articles[articleId].name} prix unitaire:${Articles[articleId].price}€  Quantité: ${qtyValue}`;//
    newCartLine.innerHTML = ` articleId ${articleId} qtyValue ${qtyValue}`
    const parent = document.querySelector("#cart__body__resume")
    parent.appendChild(newCartLine);    
            
   
            
            
  }
  
  function checkArticleAndModifyCart(articleId, qtyValue){
    console.log("check enter")
            const spanCartId = document.querySelector(`#cartLineId${articleId}`)//'#cartLineId${article.id}'
            console.log("spanCartId" + spanCartId)
            if(spanCartId != null){//si i'id span <=> article slectionné existe
                if(qtyValue==0){//TODO && span exist
                    currentSpan.remove();
                    return true
                }
            }
            else {console.log("wazzzaaaaaaaaaaaaaaa articleId  " + articleId)
                    createCartLine(articleId,qtyValue); //je crée la ligne
                    return true}
     return false
  }

  function filter(articles, categorie){//renvoie un tableau d'articles via la cat choisie

  }

