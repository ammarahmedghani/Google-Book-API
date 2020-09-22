$(document).ready(function(){

var btn = document.querySelector("#subbtn");
       

        btn.addEventListener('click',(e)=>{

         
        var searchresult = $("#searchfield").val();
        
        
        if(searchresult == ''){
            alert("please enter the books name.");
        }else{

            $(".products").show();
    
            window.scrollTo({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
              });
            
            $.get("https://www.googleapis.com/books/v1/volumes?q=" +searchresult,function(responce){
                console.log(responce)
                for(var i = 0 ; i < responce.items.length ; i++){

                    $(".products-center").append('<article class="product">'    
                    +'<div class="img-container">'
                        +'<img src="'+responce.items[i].volumeInfo.imageLinks.thumbnail+'" class="product-img" alt="product" />'
                    +'<button class="bag-btn" data-id="1">'
                        +'<i class="fas fa-shopping-cart"></i>'
                    +'add to cart'
                   +'</button>'
                     +'</div>'
                    +'<h3>'+responce.items[i].volumeInfo.title+'</h3>'
                    +'<h4>'+responce.items[i].volumeInfo.authors+'</h4>'
                    +'<div id="cc"><a href="'+responce.items[i].volumeInfo.infoLink+'"><button class="readbtn">Read More</button></a></div>'
                +'</article>'
                );
                }
            });
        }
    })

  return false;
 
  });