function changeImagePrev(image){

    // display main image id

    let mainShirt = document.getElementById("display-shirt");

    // image box id's
  let box1 = document.querySelector('.box1');
  let box2 =  document.querySelector('.box2');
  let box3 =  document.querySelector('.box3');

  // Image id's   
  let image1 = document.getElementById('prev-1');
  let image2 = document.getElementById('prev-2');
  let image3 =  document.getElementById('prev-3');

    switch(image){
        
        case 1:
        

        // clear all styles
        
        box2.style.outline = "none";
        image2.style.opacity = 0.5 ;
        box3.style.outline = "none";
        image3.style.opacity = 0.5 ;


        //focus on single clicked area
        box1.style.outline = '2px solid #1A77FF';
        image1.style.opacity = 1;
        mainShirt.src = "images/image-1.png"
        
        
        break;

        case 2:
        
        // clear all styles
        
        box1.style.outline = "none";
        image1.style.opacity = 0.5 ;
        box3.style.outline = "none";
        image3.style.opacity = 0.5 ;


        //focus on single clicked area
        box2.style.outline = '2px solid #1A77FF';
        image2.style.opacity = 1;
        mainShirt.src = "images/image-2.png"
        
        break;

        case 3:
        
        // clear all styles
        
        box1.style.outline = "none";
        image1.style.opacity = 0.5 ;
        box2.style.outline = "none";
        image2.style.opacity = 0.5 ;


        //focus on single clicked area
        box3.style.outline = '2px solid #1A77FF';
        image3.style.opacity = 1;
        mainShirt.src = "images/image-3.png"
        
        break;
        
      

    }

}


// utils for size function()//

function clearSize(s1,s2,s3,s4){

    s1.style.backgroundColor = 'white';
    s1.style.color = 'black';
    s2.style.backgroundColor = 'white';
    s2.style.color = 'black';
    s3.style.backgroundColor = 'white';
    s3.style.color = 'black';
    s4.style.backgroundColor = 'white';
    s4.style.color = 'black';

}

function selectedSize(size){

    size.style.backgroundColor = 'black';
    size.style.color = 'white';
   
}


function selectSizes(size){
   
    
   let sm = document.getElementById("size-1");
   let md = document.getElementById("size-2");
   let lg = document.getElementById("size-3");
   let xl = document.getElementById("size-4");
   let xxl = document.getElementById("size-5");


   switch (size){

    case 1 :
    
    // clear all size's styles
    clearSize(md,lg,xl,xxl);

    // than focus on clicked size
    selectedSize(sm);
    
    break;

    case 2 :
    
    // clear all size's styles
    clearSize(sm,lg,xl,xxl);

    // than focus on clicked size
    selectedSize(md);
    
    break;

    case 3 :
    
    // clear all size's styles
    clearSize(sm,md,xl,xxl);

    // than focus on clicked size
    selectedSize(lg);
    
    break;


    case 4 :
    
    // clear all size's styles
    clearSize(sm,md,lg,xxl);

    // than focus on clicked size
    selectedSize(xl);
    
    break;

    case 5 :
    
    // clear all size's styles
    clearSize(sm,md,lg,xl);

    // than focus on clicked size
    selectedSize(xxl);
    
    break;
   
}


}


