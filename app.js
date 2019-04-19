'use strict';

// array to hold all of our Products 
Product.allProds = [];
Selection.allUsers=[];

var flag=false;
let indexes=new Array(3)

function Selection(name,filePath,clicks)
{
	this.name=name;
	this.filePath=filePath;
	this.clicks=clicks;
	this.shown=0;

 	//check for previously stored or not if stored then increment the count 
	 
  	for(var t=0;t<Selection.allUsers.length;t++)
	{
 			if(Selection.allUsers[t].name==this.name)
			{
				  Selection.allUsers[t].clicks+=1;
 				 flag=true;
				 break;
			}
	}

	if(!flag)
		Selection.allUsers.push(this);
	flag=false;
 }
// create objects for our Products
function Product(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    Product.allProds.push(this);
}

new Product('Bag', 'images/bag.jpg');
new Product('Banana', 'images/banana.jpg');
new Product('Bathroom', 'images/bathroom.jpg');
new Product('Boots', 'images/boots.jpg');
new Product('Breakfast', 'images/breakfast.jpg');
new Product('Bubblegum', 'images/bubblegum.jpg');
new Product('Chair', 'images/chair.jpg');
new Product('Cthulhu', 'images/cthulhu.jpg');
new Product('Dog-Duck', 'images/dog-duck.jpg');
new Product('Dragon', 'images/dragon.jpg');
new Product('Pen', 'images/pen.jpg');
new Product('Pet-Sweep', 'images/pet-sweep.jpg');
new Product('Scissors', 'images/scissors.jpg');
new Product('Shark', 'images/shark.jpg');
new Product('Sweep', 'images/sweep.png');
new Product('Tauntaun', 'images/tauntaun.jpg');
new Product('Unicorn', 'images/unicorn.jpg');
new Product('USB', 'images/usb.gif');
new Product('Water-Can', 'images/water-can.jpg');
new Product('Wine-Glass', 'images/wine-glass.jpg');

// need event listenter to track clicks of Products images
var voteContainer = document.getElementById('vote');

var img1=document.getElementById('imgContainer1');
var img2=document.getElementById('imgContainer2');
var img3=document.getElementById('imgContainer3');
voteContainer.addEventListener('click', checkImage);


function checkImage()
{
	var whichImage=document.getElementsByName("controller");
	var selimg;
  	for (var i = 0, length = whichImage.length; i < length; i++)
{
 if (whichImage[i].checked)
 {
	 selimg=whichImage[i].value;
 	 break;
 }
}

//need to push this into Selected Images from user side 
new Selection(selimg.substring(selimg.indexOf("/")+1,selimg.indexOf(".")),selimg,1);
//updateCount();

if(Selection.allUsers.length>3)  
{
	//alert('Voting done Wait for results ')
	var voteContainer = document.getElementById('vote');
voteContainer.removeEventListener('click', checkImage);

    var op="<ul>";

	for(var t=0;t<Selection.allUsers.length;t++)
		  op+="<li>" + Selection.allUsers[t].clicks + " Votes For " +  Selection.allUsers[t].name + "</li>";
	  
	  op+="</ul>";
	  
	  document.getElementById("op").innerHTML=op;
	  
	  op="";
		//	alert(Selection.allUsers[t].name + '    ' + Selection.allUsers[t].filePath + '     ' + Selection.allUsers[t].clicks + '  ' + Selection.allUsers[t].shown);
}
randomProducts();
}
function updateCount()
{
 	var whichImage=document.getElementsByName("controller");
	if(Selection.allUsers.length!=0) //update the display for those images which are shown on the screen
	{
			for(var t=0;t<Selection.allUsers.length;t++) //with already pushed Selection objects
			{
						for(var k=0;k<whichImage.length;k++)
						{
							alert(whichImage[k].value);
							if(Selection.allUsers[t].filePath==whichImage[k].value)
							{
								Selection.allUsers[t].shown+=1;
								break;
							}
						}
			}
 	}
}
// display random products
function randomProducts() 
{
    var randomIdx1 = Math.floor(Math.random() * Product.allProds.length);
	var randomIdx2 = Math.floor(Math.random() * Product.allProds.length);
	var randomIdx3 = Math.floor(Math.random() * Product.allProds.length);
	
	
	//alert(randomIdx1 + '  ' + randomIdx2 + '  ' + randomIdx3)
	if(randomIdx1==randomIdx2 || randomIdx2==randomIdx3 || randomIdx1==randomIdx3)
	{
		//alert('Duplicates found ')
		randomProducts();
		 
	}
	
    img1.src = Product.allProds[randomIdx1].filepath;
	img2.src = Product.allProds[randomIdx2].filepath;
	img3.src = Product.allProds[randomIdx3].filepath;
	
	var whichImage=document.getElementsByName("controller");
	whichImage[0].value=Product.allProds[randomIdx1].filepath;
 	whichImage[1].value=Product.allProds[randomIdx2].filepath;
 	whichImage[2].value=Product.allProds[randomIdx3].filepath;
 
 //	whichImage[0].checked=true;
	
	
	
 }
randomProducts();