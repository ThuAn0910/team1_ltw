$(document).ready(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $("#hip_page").css("display","flex")
            $("#to_top_btn").css("display","block");
        } else {
            $("#hip_page").css("display","none")
            $("#to_top_btn").css("display","none");
        }
    });
    function rotateIcon(){
        // var title_cards = $(".title_card");
        // console.log(title_cards.length);
        $(".title_card").on("click",function(){
            if($(this).hasClass("collapsed")){
               $(this).removeClass("checked");
            }else{
               $(this).addClass("checked");
            }
        })
    }
    rotateIcon();
            var opts = $(".opt");
            console.log(opts.length);
            for(var i = 0; i < opts.length; i++){
                $("#opt"+i).on("click", function(){
                    console.log($(this).val());
                    $("#get_size_prod").text($(this).val());
                    $("#select_collapse").removeClass("show");
                })
            }
    })
        function showImageItem(imgs) {
            var getItemImg = document.getElementById("get_pict");
            getItemImg.src = imgs.src;
            // getItemImg.parentElement.style.display = "block";
        }
 