/**********************************************************************/
          /* Creating dynamic Navigation Menu for the 3 sections : 
                   Section 1 , Section 2 , Section 3*/
/**********************************************************************/

function Add_All_Sections(){

         /* N_Container is the container for the list  */                
let N_Container = document.getElementById("Nav_menu");

  /* Nav_Menu will be an unordered list representing the created navigation menu */
let Nav_Menu = document.createElement('ul');
N_Container.appendChild(Nav_Menu);

       /* A for loop to create the sections or items of the list */
    for(let i=0 ; i<4 ; ++i){
	     let Section_Element=document.createElement("li");	
	     let Section_Name=document.createTextNode("Section "+(i+1));

       /*  Creating anchor element for each list element   */
       let Link_Ref=document.createElement("a");
     
       /* Adding section links to the navigation menu      */       
      Link_Ref.appendChild(Section_Name);
	    Link_Ref.setAttribute("title","Section" + (i+1));
	    Link_Ref.setAttribute("href","#Section_" + (i+1));

	    Section_Element.appendChild(Link_Ref); 
	    N_Container.appendChild(Section_Element);        
	    	
      }

}



/************************************************************************/
/*   Create a button to scroll to the top of the page    */
/************************************************************************/
function Create_Scroll_Button(){
     let button = document.createElement("button");
     /*             Style of the button                     */
     button.style.fontSize = "15px";
     button.style.fontWeight = "bold";
     button.style.border = "thin solid rgba(200, 200, 244, 0.6)";
     button.style.borderRadius = "8px";
     button.style.backgroundColor = "rgba(200, 200, 244, 0.6)";
     button.style.color = "red";    
     //button.style.position = "sticky";            
     button.style.width = "65px";
     button.style.height = "55px";                     
     button.textContent = "Top of page";

     /*   Adding event listener to the button , and appending it to the html     */             
     button.addEventListener("click", () =>{
     	window.scrollTo(0,0);
     });
     document.getElementById("Top_button").appendChild(button);
 }



/*******************************************************************************/
/*     Checking the position of page scroll either on any of the sections
          then changing the background color of the scrolled section
            to show which section is being viewed      */
/*******************************************************************************/
function Check_Scroll_Position(pos_sec_y){
let Sec_1 = document.getElementById("Section_1").getBoundingClientRect();
let Sec_2 = document.getElementById("Section_2").getBoundingClientRect();
let Sec_3 = document.getElementById("Section_3").getBoundingClientRect();
let Sec_4 = document.getElementById("Section_4").getBoundingClientRect();

    /*           Checking if Section 1 is viewed               */
    if(Sec_1.top <= 50 && Sec_1.bottom >= 300){

        document.getElementById("Section_1").style.backgroundColor= "rgba(255, 136, 149,0.4)";
 
       setTimeout(function(){
       	document.getElementById("Section_1").style.backgroundColor= "";
       } , 600);
    }


    /*            Checking if Section 2 is viewed               */
    else if(Sec_2.top <= 50 && Sec_2.bottom >= 300){

       document.getElementById("Section_2").style.backgroundColor= "rgba(255, 136, 149,0.4)";
       
       setTimeout(function(){
       	document.getElementById("Section_2").style.backgroundColor= "";	
       } , 600);
    }


    /*              Checking if Section 3 is viewed              */
    	else if(Sec_3.top <= 50 && Sec_3.bottom >= 300){

       document.getElementById("Section_3").style.backgroundColor= "rgba(255, 136, 149,0.4)";
       
       setTimeout(function(){
       	document.getElementById("Section_3").style.backgroundColor= "";
       } , 600);
    }


    /*               Section 4 is selected or viewed              */
    else if(Sec_4.top <= 165){
       document.getElementById("Section_4").style.backgroundColor= "rgba(255, 136, 149,0.4)";
       
       setTimeout(function(){
        document.getElementById("Section_4").style.backgroundColor= "";
       } , 600);
    }

    /*                No section is selected                     */
    	else{
    	}
}




/**
 * Executing all functions  
 * Adding all sections to the page using : Add_All_Sections()
 * Checking the scrolling and position of cursor on the screen 
 * Adding a scroll button to navigate to the top of the page

   */


/*******************************************************************************/
            /* Creating sections of the page with their hyperlinks */
/*******************************************************************************/
Add_All_Sections();

                /*   Hide button at page load   */
document.getElementById("Top_button").style.display = "none";

/*******************************************************************************/
/*         Creating a scroll button to go up to the top of the page            */
/*******************************************************************************/
Create_Scroll_Button();



/**********************************************************************************/
            /* Wait for 4 seconds , then hide the navigation bar */
/**********************************************************************************/
setTimeout(function(){
       document.getElementById("Nav_menu").style.top = "-90px";
 }, 4000); 




/**********************************************************************************/
/* Adding an event to hide navigation bar when scrolling away from the top */
/**********************************************************************************/
window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
  	//document.getElementById("Nav_menu").style.top = "-90px";
    document.getElementById("Nav_menu").style.top = "-4em";
  	document.getElementById("Top_button").style.display = "none";
      
  }
  else{
     document.getElementById("Nav_menu").style.top = "0.1em";

     /* Show the Top scrolling button when we scroll away from the top of page    */
     document.getElementById("Top_button").style.display = "block";
     document.getElementById("Top_button").style.top= "90%";
     document.getElementById("Top_button").style.right= "0.2%";
     Check_Scroll_Position(window.scrollY);
     
    }
   
});







               