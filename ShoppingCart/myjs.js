const div1= document.getElementsByClassName('dispdiv')[0];
console.log(div1);
const addtest=document.getElementsByClassName("adddiv")[0];
function addProduct()
{  
			var product = {
				p_name:document.getElementById("pname").value,
				pdesc:document.getElementById("desc").value,
				pqty:document.getElementById("qty").value,
				pprice:document.getElementById("price").value,
				pimg:document.getElementById("img").value.split('\\').pop(), 				
			};

			var card=create(product);
			div1.appendChild(card);
}
var id=0;
function create(pro)
{
	id++;
 	var parent=document.createElement('div');
 	parent.className='card';
 	parent.setAttribute('id','p'+id);
	var pr=document.createElement('img');
	pr.src="img/"+pro.pimg;
	pr.setAttribute('alt','image');
	pr.setAttribute('height','20%');
	pr.setAttribute('width','20%');

	var div2=document.createElement('div');
	div2.className="container";
	var name=document.createElement('h5');
	name.innerText=pro.p_name;	

	var description=document.createElement('p');
	description.innerText=pro.pdesc;	

	var quantity=document.createElement('p');
	quantity.innerText=pro.pqty;	
	

	var price=document.createElement('p');
	price.innerText=pro.pprice;


	var x = document.createElement("INPUT");
	x.setAttribute("type", "button");
 	x.setAttribute("width",'50px');
 	x.setAttribute("value","Add to cart");
 	x.setAttribute("onClick","test(this.parentNode)");
	

	var spn=document.createElement('span');
	spn.innerText='p'+id;
	console.log(spn);
	spn.setAttribute('class','hide');
	parent.append(pr);
	parent.append(name);
	parent.append(description);
	parent.append(quantity);
	parent.append(price);
	parent.append(spn);
	parent.append(x);
	
 	return parent;
}
function test(pro)
{
	console.log(pro);
	var con=pro.childNodes;
	console.log(con[5].innerHTML);
	console.log(con);
	console.log(con[6].innerText);
	var get = Number(prompt('Enter Quantity'));
	var myval=Number(con[3].innerText);
	var myprice=Number(con[4].innerText)
	if(get<=myval)
	{
	var parentadd=document.createElement('div');
	var pname=document.createElement('span');
	pname.innerHTML="Name:"
	var pval=document.createElement('span');
	pval.innerHTML=con[1].innerText+"  ";
	parentadd.append(pname);
	parentadd.append(pval);	
	var pdis=document.createElement('span');
	pdis.innerHTML="Description:"
	var pvaldis=document.createElement('span');
	pvaldis.innerHTML=con[2].innerText+"  ";
	parentadd.append(pdis);
	parentadd.append(pvaldis);
	var name=document.createElement('span');
	name.innerHTML="Quantity:";
	var val=document.createElement('span');
	g=get+val.innerHTML;
	val.innerText=g+"  ";
	var ocon=myval;
	var fin=ocon-get;
	pro.childNodes[3].innerText=fin;
	parentadd.append(name);
	parentadd.append(val);
	var name1=document.createElement('span');
	name1.innerHTML="Price:";
	var val2=document.createElement('span');
	val2.innerHTML=myprice+"  ";
	parentadd.append(name1);
	parentadd.append(val2);
	//var tpricelabel=document.createElement('p');
	//tpricelabel.innerHTML="Total-Price";
	//var tprice=document.createElement('p');
	var cost=val.innerText*val2.innerText;
	//tprice.innerHTML=cost;
	//parentadd.append(tpricelabel);
	//parentadd.append(tprice);
	document.getElementById('total').innerHTML=Number(document.getElementById('total').innerHTML)+Number(cost);
	const remove_btn= document.createElement('input');
	remove_btn.setAttribute('type','button');
	remove_btn.setAttribute('value','remove');
	remove_btn.setAttribute('onClick','removeItem(this.parentNode)');
	remove_btn.setAttribute('class','btn btn-danger');
	var s = document.createElement('span');
	s.innerText=con[5].innerText;
	s.setAttribute("class","hide");
	console.log(s);
	parentadd.append(s);	
	parentadd.append(remove_btn);
	addtest.append(parentadd);		
	}	
	else
	{
		alert('no quantity');
	}
}
 
function removeItem(pro)
{
	var data=pro.childNodes;
	console.log(data[8].innerHTML);
	var test=document.getElementById(data[8].innerHTML).childNodes;	
	test[3].innerText=Number(test[3].innerText)+Number(data[5].innerText);
	let bill=(data[5].innerText)*(data[7].innerText);
	console.log(bill);
	document.getElementById('total').innerHTML=Number(document.getElementById('total').innerHTML)-Number(bill);
	pro.remove();
}