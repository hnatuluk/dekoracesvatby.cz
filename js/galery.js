function loadImage(image){   
  var squareSize = 500;
  var pagePath = './images/';
  var imagePath = pagePath+image;
  
  var myImage = new Image();
   myImage.onload = function(){
    var height = this.height;
    var width = this.width;
    var myBigImage = document.getElementById('bigImage');
    if (height > squareSize && width > squareSize){
      if(height > width){
        setMaxHeight(height, squareSize, width, myBigImage);
      }else{
        setMaxWidth(height, squareSize, width, myBigImage);
      }
    }else if(height > squareSize){  
      setMaxHeight(height, squareSize, width, myBigImage);
    }else if(width > squareSize){                          
      setMaxWidth(height, squareSize, width, myBigImage); 
    }else{
      myBigImage.style.paddingLeft = (squareSize-width)/2+'px';
      myBigImage.style.paddingTop = (squareSize-height)/2+'px';
      
      myBigImage.height = height;
      myBigImage.width = width;
    }
    myBigImage.src=imagePath;
  }
  myImage.src = imagePath;
}

                                                                                                                                                    
function setMaxWidth(height, maxWidth, width, bigImage){
                                   
    bigImage.width = maxWidth;  
    bigImage.height = (maxWidth/width)*height;
    bigImage.style.paddingLeft = '0px';
    bigImage.style.paddingTop = (maxWidth-bigImage.height)/2+'px';
                                         
}

function setMaxHeight(height, maxHeight, width, bigImage){
                                        
    bigImage.height = maxHeight;  
    bigImage.width = (maxHeight/height)*width;
    bigImage.style.paddingTop = '0px';
    bigImage.style.paddingLeft = (maxHeight-bigImage.width)/2+'px';
    
}
