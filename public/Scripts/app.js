(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
    for(button of deleteButtons)
    {
        button.addEventListener('click',(event)=>{
            if(!confirm("Are You Sure?"))
            {
                event.preventDefault();
                window.location.assign('/assignmnet-list');
            }
        });
    }
    }
    window.addEventListener("load", Start);
})();