function enviar()
{
	var costo,recargo,importe,igv,total,des1,des2,totdes;
	var des1=0;
	var des2=0;
	var recargo=0;

	var bebida=document.getElementById("bebidas").value;
	var s1= document.getElementById("s1");
	var s2= document.getElementById("s2");
	var recar= document.getElementById("re1");
	var FormaP1= document.getElementById("f1");
	var FormaP2= document.getElementById("f2");

if(bebida=="1")
{
	costo=100.00;
}
if(bebida=="2")
{
	costo = 90.00;}
}
if(bebida=="3")
{
	costo= 120.00;
}
if(bebida==4)
{
	costo=150.00;
}
if(bebida="")
{
	costo=0;
}

if (s1.checked){
	des1= 5.00
}
if(s2.checked)
{
	des1= 1.00
}

if(FormaP1.checked)
{
	des2= 10*costo/100;
}
if(FormaP2.checked){
 des2= 5*costo/100;
}

if( recar.checked)
{
	recargo= 5.00;
}


totdes = des1+des2;

importe= costo+recargo- totdes;
igv= (18* importe)/100;
total= importe+igv;

document.getElementById("CostB").value=costo;
document.getElementById("Descu").value=des1+des2;
document.getElementById("Recarg").value=recargo;
document.getElementById("Import").value=importe;
document.getElementById("Igv1").value=igv;
document.getElementById("Total").value=total;
}