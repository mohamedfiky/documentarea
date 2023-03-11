///////////////////////////////////////////////////////////////////////////////

const ball = document.querySelector(".toggle-ball");
// const otherItems = document.querySelectorAll(".nav-bar, .navbar-container, .color-themes, .toggle-ball, .side-bar, .container, .footer")
const otherItems = document.querySelectorAll(".nav-bar, .side-bar, .container, .footer")

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
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


/****************************** API REQUEST *********************************/


const API_Request = new XMLHttpRequest() ;

API_Request.open("get", "https://raw.githubusercontent.com/mohamedfiky/_FIKY_APIs/master/documentary-API/documentary-api.json");
API_Request.send();

API_Request.onload = () =>{

    let all_data = JSON.parse(API_Request.responseText);

    let wildlife_data = all_data.wildlife ;
    const wildlife_movies_div = document.querySelector(".movies-list.wildlife-movies");
    let wildlife_movies = "";

    let science_data = all_data.science ;
    const science_movies_div = document.querySelector(".movies-list.science-movies");
    let science_movies = "";

    let history_data = all_data.history ;
    const history_movies_div = document.querySelector(".movies-list.history-movies");
    let history_movies = "";

    let disaster_data = all_data.disaster ;
    const disaster_movies_div = document.querySelector(".movies-list.disaster-movies");
    let disaster_movies = "";

    // console.log(all_data);

    wildlife_data.map(item =>{
        wildlife_movies += `
                        <div class="movie" key="${item.id}">
                            <img src="${item.imgUrl}">
                            <h4>${item.title}</h4>
                            <p>${item.text.slice(0,100)}...</p>
                            <button>WATCH</button>
                        </div>
                  `;

        // console.log(wildlife_movies)

    });

    science_data.map(item =>{
        science_movies += `
                        <div class="movie" key="${item.id}">
                            <img src="${item.imgUrl}">
                            <h4>${item.title}</h4>
                            <p>${item.text.slice(0,100)}...</p>
                            <button>WATCH</button>
                        </div>
                  `;
                  
        // console.log(science_movies)

    });

    history_data.map(item =>{
        history_movies += `
                        <div class="movie" key="${item.id}">
                            <img src="${item.imgUrl}">
                            <h4>${item.title}</h4>
                            <p>${item.text.slice(0,100)}...</p>
                            <button>WATCH</button>
                        </div>
                  `;
                  
        // console.log(history_movies)

    });

    disaster_data.map(item =>{
        disaster_movies += `
                        <div class="movie" key="${item.id}">
                            <img src="${item.imgUrl}">
                            <h4>${item.title}</h4>
                            <p>${item.text.slice(0,100)}...</p>
                            <button>WATCH</button>
                        </div>
                  `;
                  
        // console.log(disaster_movies)

    });

        wildlife_movies_div.innerHTML = wildlife_movies ;
        science_movies_div.innerHTML  = science_movies ;
        history_movies_div.innerHTML  = history_movies ;
        disaster_movies_div.innerHTML = disaster_movies ;


///////////////////////////////////////


/***************** still inside API REQUEST ( Carousel Arrows Functionality) ******************/



    const html = document.querySelector("html");
    let html_width = + window.getComputedStyle(html).getPropertyValue("width").split("px")[0];

    const arrowsRt = document.querySelectorAll(".arrow-rt");
    const arrowsLeft = document.querySelectorAll(".arrow-left");
    const movies_lists = document.querySelectorAll(".movies-list");


    arrowsRt.forEach((arrow, i) =>{


        const moviesCount = movies_lists[i].querySelectorAll(".movie").length;

        let listScreenWidth = window.getComputedStyle(movies_lists[i]).getPropertyValue("width").split("px")[0];
        
        let moviesInScreen;

        if(html_width > 1100){
            moviesInScreen = 4;

        }else if(html_width > 992 && html_width <= 1100){
            moviesInScreen = 3;
            
        }else if(html_width > 650 && html_width <= 992){
            moviesInScreen = 2;
            
        }else{
            moviesInScreen = 1;
        }
    
        let move = Math.floor(listScreenWidth/moviesInScreen);
        
        let leftArrow = arrowsLeft[i] ;


        arrow.addEventListener("click", ()=>{

        /*    ال سكريبت العظيم ده وصلت لحله , وحليت بيه سؤال على ال stackoverflow  */

        
        let matrex = window.getComputedStyle(movies_lists[i]).getPropertyValue("transform");

            // console.log(matrex);

        let matrexValuesArr = matrex.split(", ");

            // console.log(matrexValuesArr);

        let translateX_value = parseInt(matrexValuesArr[4]); //  رقم 5 فى الماتركس = translateX  
            

            if( translateX_value - move >= ( - move * (moviesCount - moviesInScreen)) ){

                movies_lists[i].style.transform = `translateX(${translateX_value - move }px)`;

                leftArrow.style.display = "block" ;


            }else{

                
                movies_lists[i].style.transform = `translateX(${0}px)`;

                leftArrow.style.display = "none" ;

            }


        })

    }); 


///////////////////////////////////////////////////

    arrowsLeft.forEach((arrow, i) =>{
        

        let listScreenWidth = window.getComputedStyle(movies_lists[i]).getPropertyValue("width").split("px")[0];

        let moviesInScreen;

        if(html_width > 1100){
            moviesInScreen = 4;

        }else if(html_width > 992 && html_width <= 1100){
            moviesInScreen = 3;
            
        }else if(html_width > 650 && html_width <= 992){
            moviesInScreen = 2;
            
        }else{
            moviesInScreen = 1;
        }


        let move = Math.floor(listScreenWidth/moviesInScreen);
        
        let leftArrow = arrowsLeft[i] ;



        arrow.addEventListener("click", ()=>{

        
            let matrex = window.getComputedStyle(movies_lists[i]).getPropertyValue("transform");

            // console.log(matrex);

        let matrexValuesArr = matrex.split(", ");

            // console.log(matrexValuesArr);

        let translateX_value = parseInt(matrexValuesArr[4]); //  رقم 5 فى الماتركس = translateX  
            

            if( translateX_value < -move ){

                movies_lists[i].style.transform = `translateX(${translateX_value + move }px)`;

            
            }else{

                movies_lists[i].style.transform = `translateX(${0}px)`;

                leftArrow.style.display = "none" ;

            }
        

        })
    });

}


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////









