/*******************************************/

const html = document.querySelector("html");
let html_width = + window.getComputedStyle(html).getPropertyValue("width").split("px")[0];

const arrowsRt = document.querySelectorAll(".arrow-rt");
const arrowsLeft = document.querySelectorAll(".arrow-left");
const movie_lists = document.querySelectorAll(".movie-list");

// const movie = document.querySelector(".movie-list .movie");



console.log(html_width);

arrowsRt.forEach((arrow, i) =>{


    const moviesCount = movie_lists[i].querySelectorAll(".movie").length;

    let listScreenWidth = window.getComputedStyle(movie_lists[i]).getPropertyValue("width").split("px")[0];
    
    let moviesInScreen;

    if(html_width > 991){
        moviesInScreen = 4;

    }else if(html_width >= 650 && html_width <= 991){
        moviesInScreen = 2;
        
    }else{
        moviesInScreen = 1;
    }
   
    let move = Math.floor(listScreenWidth/moviesInScreen);
    
    console.log(listScreenWidth, moviesCount, move);


    // let leftArrow = movie_lists[i].parentNode.querySelector(".arrow-left");

    let leftArrow = arrowsLeft[i] ;


    arrow.addEventListener("click", ()=>{

      /*    ال سكريبت العظيم ده وصلت لحله , وحليت بيه سؤال على ال stackoverflow  */

      
       let matrex = window.getComputedStyle(movie_lists[i]).getPropertyValue("transform");

        // console.log(matrex);

       let matrexValuesArr = matrex.split(", ");

        // console.log(matrexValuesArr);

       let translateX_value = parseInt(matrexValuesArr[4]); //  رقم 5 فى الماتركس = translateX  

        console.log(translateX_value);
        

        if( translateX_value - move >= ( - move * (moviesCount - moviesInScreen)) ){

            movie_lists[i].style.transform = `translateX(${translateX_value - move }px)`;

            leftArrow.style.display = "block" ;


        }else{

            
            movie_lists[i].style.transform = `translateX(${0}px)`;

            leftArrow.style.display = "none" ;

        }


    })

}); 


///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

arrowsLeft.forEach((arrow, i) =>{
    

    const moviesCount = movie_lists[i].querySelectorAll(".movie").length;

    let listScreenWidth = window.getComputedStyle(movie_lists[i]).getPropertyValue("width").split("px")[0];

    let moviesInScreen;

    if(html_width > 991){
        moviesInScreen = 4;

    }else if(html_width >= 600 && html_width <= 991){
        moviesInScreen = 2;

    }else{
        moviesInScreen = 1;
    }


    let move = Math.floor(listScreenWidth/moviesInScreen);
    
    console.log(listScreenWidth, moviesCount, move);

    let leftArrow = arrowsLeft[i] ;



    arrow.addEventListener("click", ()=>{

    
        let matrex = window.getComputedStyle(movie_lists[i]).getPropertyValue("transform");

        // console.log(matrex);

       let matrexValuesArr = matrex.split(", ");

        // console.log(matrexValuesArr);

       let translateX_value = parseInt(matrexValuesArr[4]); //  رقم 5 فى الماتركس = translateX  

        console.log(translateX_value);
        

        if( translateX_value < -move ){

            movie_lists[i].style.transform = `translateX(${translateX_value + move }px)`;

        
        }else{

            movie_lists[i].style.transform = `translateX(${0}px)`;

            leftArrow.style.display = "none" ;

        }
    

    })
});



/////////////////////////////////////////////////////////////////////////////////////

const ball = document.querySelector(".toggle-ball");
const otherItems = document.querySelectorAll(".nav-bar,.nav-bar .navbar-container,.nav-bar .navbar-container .profile .toggle, .nav-bar .navbar-container .profile .toggle .toggle-ball, .side-bar, .container, .nav-bar .navbar-container .menu-bar .toggle-menu ul, .footer")

ball.addEventListener("click", ()=>{
    otherItems.forEach(item =>{
        item.classList.toggle("light");
    })
});


/////////////////////////////////////////////////////////////////////////////////////

const menuBar = document.querySelector(".menu-bar");
const toggleMenu = document.querySelector(".toggle-menu");


menuBar.addEventListener("click", ()=>{

    toggleMenu.classList.toggle("open");

});


/////////////////////////////////////////////////////////////////////////////////////


/*


function getData(){

    let myRequist = new XMLHttpRequest();

    myRequist.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
           let moviesObject = JSON.parse(this.responseText)
            console.log(moviesObject);
            console.log(moviesObject[3].title); // quiz app شوف الدرس رقم 44 فى ال 
        }
    }
    
    myRequist.open("GET", "movies.json", true);
    myRequist.send();
};

 getData();

 */