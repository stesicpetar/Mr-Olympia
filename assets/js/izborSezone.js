function izborSezone()
{
 var ddl = document.getElementById("seasons");
 var selectedValue = ddl.options[ddl.selectedIndex].value;
 var izbori = document.getElementById("izbor");

    if (selectedValue == "#exampleModalToggle1")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle1");
   }
   if (selectedValue == "#exampleModalToggle2")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle2");
   }
   if (selectedValue == "#exampleModalToggle3")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle3");
   }
   if (selectedValue == "#exampleModalToggle4")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle4");
   }
   if (selectedValue == "#exampleModalToggle5")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle5");
   }
   if (selectedValue == "#exampleModalToggle6")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle6");
   }
   if (selectedValue == "#exampleModalToggle7")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle7");
   }
   if (selectedValue == "#exampleModalToggle8")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle8");
   }
   if (selectedValue == "#exampleModalToggle9")
   {
        izbori.setAttribute("data-bs-target","#exampleModalToggle9");
   }
}