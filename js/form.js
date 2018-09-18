function enviar()
{
   var bebida= document.getElementById("bebidas").value ;
   var s1= document.getElementById("s1");
   var s2= document.getElementById("s2");
   var recargo= document.getElementById("re1");
   var fp1= document.getElementById("f1");
   var fp2= document.getElementById("f2");

   var des1,des2,descuento,total,costo, recar, importe, igv;

   des1=0;
   des2=0;
   recar=0;

   if (bebida=="1")
   {
      costo= 100.0;
   }
   if(bebida=="2")
   {
      costo= 80.0;
   }
   if(bebida=="3")
   {
      costo=120.0;
   }
   if(bebida=="4")
   {
      costo=150.0;
   }
   if(bebida=="")
   {
      costo=0;
   }

   if(s1.checked)
   {
      des1=5.0
   }
   if(s2.checked)
   {
      des1= 1.0;
   }

   if(recargo.checked)
   {
      recar= 5.0;
   }
   if(fp1.checked)
   {
      des2= (10*costo)/100;
   }
   if(fp2.checked)
   {
      des2= (5*costo)/100
   }

   descuento = des1+des2 ;
   importe = costo + recar - descuento;
   igv= (costo * 18) /100;
   total = importe + igv;

    document.getElementById("Cost").value = costo;
    document.getElementById("Descu").value= descuento;
     document.getElementById("Recarg").value= recar;
   document.getElementById("Import").value = importe;
   document.getElementById("Igv1").value= igv;
   document.getElementById("Total").value= total;
}
