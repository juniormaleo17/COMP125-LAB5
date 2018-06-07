let content;
(function(content){

    function AboutButtonClick() {
        console.log("About Button Clicked!");
    }

    function AboutButtonOver(event) {
        event.currentTarget.style.opacity = 0.3;
    }

    function AboutButtonOut(event) {
        event.currentTarget.style.opacity = 1.0;
    }

    function HomeContent() {
        console.log("%c Home Content Accessed...", "font-weight:bold; font-size: 20px;");
        let AboutButton = document.getElementById("AboutButton");

        AboutButton.textContent = "About";

        // About Button event listener
        AboutButton.addEventListener("click", AboutButtonClick);
        AboutButton.addEventListener("mouseover", AboutButtonOver);
        AboutButton.addEventListener("mouseout", AboutButtonOut);
    }
    // add the HTML Element to the page somewhere 
        // in this case I'm attaching a button to the first forml element
        

        document.head = "Home";
        // use the history object to wipe out the url 
        history.pushState("", document.head, "/Home",);

    
        // use the location object to output my pathname
        console.log(location.pathname);
    
    

    // attach HomeContent function to the "content" namespace
    content.HomeContent = HomeContent;

})(content || (content = {}));