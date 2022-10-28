$(document).ready( function() {

    $(".splash").click(function() {
        $(".splash").addClass("remove");
    });
    
    // Sound effects 

    $(".crack").mouseenter(function() {
        console.log("mouse entering crack");
        $(".cracktrack")[0].play();
    });

    $(".clang").mouseenter(function() {
        console.log("mouse entering crack");
        $(".clangtrack")[0].play();
    });

    $(".sift").mouseenter(function() {
        console.log("mouse entering crack");
        $(".sifttrack")[0].play();
    });

    
    $(".knead").mouseenter(function() {
        console.log("mouse entering crack");
        $(".kneadtrack")[0].play();
    });

    $(".tick").mouseenter(function() {
        console.log("mouse entering crack");
        $(".timertrack")[0].play();
    });

    $(".bake").mouseenter(function() {
        console.log("mouse entering crack");
        $(".baketrack")[0].play();
    });

    $(".crunch").mouseenter(function() {
        console.log("mouse entering crack");
        $(".crunchtrack")[0].play();
    });

    $(".breadcut").mouseenter(function() {
        console.log("mouse entering crack");
        $(".cutbreadtrack")[0].play();
    });







    $(".track2").mouseenter(function() {
        console.log("mouse entering track2");
        $(".track2")[0].play();
    });    

    $(".play").click(function() {
        $(".track1")[0].play();
    }); 

    $(".pause").click(function() {
        $(".track1")[0].pause();
    }); 
    
    ///////////////

    $(".nav").click(function() {
        $(".appear").toggle();
    }); 

    $(".bloodarticlelink").click(function() {
        $(".appear").hide();
        $(".bloodarticle").get(0).scrollIntoView({ behavior: "smooth" });
    }); 

    $(".btnbloodarticle").click(function() {
        $(".appear").hide();
        $(".bloodarticle").get(0).scrollIntoView({ behavior: "smooth" });
    }); 

    $(".breadarticlelink").click(function() {
        $(".appear").hide();
        $(".breadarticle").get(0).scrollIntoView({ behavior: "smooth" });
    }); 

    $(".btnbreadarticle").click(function() {
        $(".appear").hide();
        $(".breadarticle").get(0).scrollIntoView({ behavior: "smooth" });
    }); 

    $(".toclink").click(function() {
        $(".appear").hide();
        $(".toc").get(0).scrollIntoView({ behavior: "smooth" });
    }); 

    $(".btntoc").click(function() {
        $(".appear").hide();
        $(".toc").get(0).scrollIntoView({ behavior: "smooth" });
    }); 

    $(".forelink").click(function() {
        $(".appear").hide();
        $(".fore").get(0).scrollIntoView({ behavior: "smooth" });
    }); 

    $(".btnfore").click(function() {
        $(".appear").hide();
        $(".fore").get(0).scrollIntoView({ behavior: "smooth" });
    }); 




});