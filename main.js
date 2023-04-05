

class Article {
    /*     id
        name
        brand
        price
        quantity */
        constructor(id, name, brand, price, quantity){
            this.id = id;
            this.name = name;
            this.brand = brand;
            this.price = price;
            this.quantity = quantity;
        }
    }
    let articles = [
    new Article(1,'MacBook', 'Apple',	2000, 0),
    new Article(2,'S10', 'Samsung',	700, 0),
    new Article(3,'Iphone150', 'Apple',	700, 0),
    new Article(4,'Laptop'      , 	'PH',	1199 , 0),
    new Article(5,'S8','Samsung',200,0),
    new Article(6,'S9','Samsung',200,0),
    new Article(7,'Iphone19','Apple',300,0),
    new Article(8,'ipad','Apple',400,0),
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
articles.forEach((item, index) => {
    console.log(item) //value
    console.log(index) //index
  }) 
  

addTableContent(articles);
/***********************************************************************************/
/*****************************gestion affichage tab**************************************/
/***********************************************************************************/
function addTableContent() {

    var tblBody = document.querySelector("#articles__body__articles__tab");
    console.log("tblBody" + tblBody);
    // creating all cells
    for (var i = 0; i < articles.length; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 5; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        let k;
        switch(j){
            case 0: var cellText = document.createTextNode(articles[i].id);
                break;
                case 1:var cellText = document.createTextNode(articles[i].name);
                break;
                case 2:var cellText = document.createTextNode(articles[i].brand);
                break;
                case 3:var cellText = document.createTextNode(articles[i].price);
                break;
                case 4:var cellText = document.createElement("input");
                cellText.setAttribute("type","text");
                cellText.setAttribute("class","widht50");
                const inputId = `quantityTextId${articles[i].id}`;
                cellText.setAttribute("id",inputId);
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
  