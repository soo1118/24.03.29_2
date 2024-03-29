
// $(document).ready(function(){
//     $('.lang').click(function(){
//         $('.language').show();
    
//     });
    
//     //로고 이미지 src 값 글자변경
//     // $('header h1').mouseover(function (){
//     //     let h1Img = $('header h1 img').attr('src');
//     //     console.log(h1Img)
     
//     //     let h1ImgOver = h1Img.replace('.png','_o.png')
//     //     console.log(h1ImgOver);

//     //     $('header hi img').attr('src',h1ImgOver)

// // attr 속성의 값을 구하거나 주는 것

//     $('header h1').mouseover(function(){
//         $('header h1 img').attr('src','images/logo_o.png')
//     }) 
//     $('header h1').mouseout(function(){
//         $('header h1 img').attr('src','images/logo.png')
//     })
// });

$(document).ready(function(){
    $('header').load('include/header.html', function(){
        $(window).scroll(function(){
            let scrT = $(window).scrollTop();
            console.log(scrT)
    
            // $('#visual').css({backgroundSize:100+scrT+'%'})
            
            if(scrT >= 122){
                $('header nav').addClass('on')
            } else {
                $('header nav').removeClass('on')
            }
        
        });
    
        $('.gnb').mouseenter(function(){
            $('.lnb').stop().fadeIn(300)
        })
    
        $('.gnb').mouseleave(function(){
            $('.lnb').stop().fadeOut(300)
        })
    
    
    /* 현재페이지 표시 스크립트 */
    let url = window.location.href

    $('.gnb a').each(function(){
        let gnbText = $(this).text();
        $(this).html('<span>'+gnbText+'</span>')
    })


    $('.gnb a').each(function(){
        let gnbHref = $(this).attr('href')

        if(url.indexOf(gnbHref) > -1){
            $(this).css({});
            $(this).parent('li').addClass('on');

            let gnbHtml = $(this).parents('.lnb').html();
            let h2Text = $(this).text();
            let gnbPage = $(this).parents('.lnb').siblings('a').text();
            let gnbEng = $(this).parents('.lnb').siblings('a').attr('data-eng')
            // 찾은 a의 할아버지 lnb의 형제 a에 들어있는 글자
            $('#visual_sub .text strong').text(gnbPage)
            $('#visual_sub .text p').text(gnbEng)
           
            $('.snb').html(gnbHtml)
            $('#content_box h2').text(h2Text);
        }
    })


     function snbAction(){
        let snbOnW = $('.snb li.on span').outerWidth()
        let snbOnL = $('.snb li.on span').position().left
        $('.snb_box .leaf').css({left:snbOnL, width:snbOnW})
     }

     snbAction();

     $(window).resize(function(){
        snbAction();
     })

     /* snb */
     $('.snb li').mouseenter(function(){
         let snbLiW = $(this).find('span').outerWidth();
         let snbLiL = $(this).find('span').position().left
 
         $('.snb_box .leaf').css({left:snbLiL, width:snbLiW})
     })

     $('.snb').mouseleave(function(){
        snbAction();
     })

    })
    

    
    // notice 롤링
    // let kkk = setInterval(함수, 반복시간)
    // clearInterval(kkk(변수))
    
    // setTimeout(함수, 예약시간)
    // clearTimeout(변수)

    let notiRoll = setInterval(noticeRolling, 2500)

    function noticeRolling(){
        $('.notice ul').animate({top:'-100%'}, function(){
            $('.notice ul li').eq(0).appendTo($('.notice ul'))
            $('.notice ul').css({top:0})
        })
    }

    // 전체 한번에 나올 때
    $('.notice').mouseenter(function(){
        clearInterval(notiRoll)
    });

    $('.notice').mouseleave(function(){
        notiRoll = setInterval(noticeRolling, 2500)
    })

    
    // 한개씩 나오게
    // $('.gnb li').mouseover(function(){
    //     $(this).find('.lnb').stop().fadeIn(300)
    // });
    // $('.gnb li').mouseout(function(){
    //     $('.lnb').stop().fadeOut(300)
    // });


    // 메인 section5 번호넣기 방법1 for문으로-반복문
        //   초기값;범위; 식
    // for(let i=0; i<9; i++){
    //     $('#section5 li').eq(i).find('span.num').text('0'+(i+1))
    // }


    // 메인 section5 번호넣기 방법2 each()로
    // $('#section5 li').each(function(){
    //     let liIndex = $(this).index()
    //     $(this).find('.num').text('0'+(liIndex+1))
    // })

     // 메인 section5 번호넣기 방법3 each()로
     $('#section5 li').each(function(index, item){
        $(item).find('.num').text('0'+(index+1))
     });

     $('#section5 li').each(function(index, item){
        if(index+1 < 10){
            $(item).find('.num').text('0'+(index+1))
        } else {
            $(item).find('.num').text(index+1)
        }
     });

    
    /* login page */
    let url = window.location.href

    $('.member a').each(function(){
        let memHref = $(this).attr('href');
        /* 도메인에 링크 주소가 포함되어 있다면 */ if(url.indexOf(memHref) > -1){
            $(this).css({}).parent('li').addClass('on')
            let memH2 = $(this).text()
            $('#content_box h2').text(memH2)
        } else if(url.indexOf('join') > -1){
            $('.member a').eq(2).css({}).parent('li').addClass('on')
            let memH2 = $('.member a').eq(2).text()
            $('#content_box h2').text(memH2)
        }
    })


    /* 로그인 패스워드 눈아이콘 */
    // $('.eye_on').click(function(){
    //     $(this).hide()
    //     $('.eye_off').show()
    //     $('.login_box input[name=pw]').attr('type', 'text')
    // });
    // $('.eye_off').click(function(){
    //     $(this).hide()
    //     $('.eye_on').show()
    //     $('.login_box input[name=pw]').attr('type', 'password')
    // })

    $('.eye_box').click(function(){
        let $eyeInput =  $(this).prev('input')

        $eyeInput.toggleClass('active');
        
        if($eyeInput.hasClass('active') == true){
            $('.eye_off').show()
            $('.eye_on').hide()
            $('.login_box input[name=pw]').attr('type', 'text')
        } else {
            $('.eye_off').hide()
            $('.eye_on').show()
            $('.login_box input[name=pw]').attr('type', 'password')
        }
    })


    /* 회원가입페이지 구분 */
    if(url.indexOf('join_people') > -1){
        $('.join_people').show()
    }
    if(url.indexOf('join_company') > -1){
        $('.join_company').show()
    }


    /* 회원가입 버튼 */
    $('.join_ok').click(function(){
        let joinAgree = $('#rule_agree').is(':checked')
        let ruleAgreeTop = $('.rule_box').offset().top;

        if(!joinAgree){
            // alert('이용약관에 동의해 주셔야 합니다.')
            $('html').animate({scrollTop:ruleAgreeTop})
            $('.rule_box label').css({border:'2px dotted crimson'})
            return false
        }
    })


    /* 게시판 */
    $('.board_page .title').click(function(){
        $('.title_list').slideToggle(200)
        $('.selectbox').toggleClass('on')
    })

    $('.board_page .title_list li').click(function(){
        let newText = $(this).text();
        $('.board_page .title').text(newText);

        $('.title_list').slideUp(400); /* 펼지는게 down 접히는게 up */
        $('.selectbox').removeClass('on');
    });

    $('html').click(function(e) {
        console.log(e.target)

       
        if (!$(e.target).hasClass('title')) {                
            $('.title_list').slideUp()
        }
    });


    const urlSearch = new URLSearchParams(location.search);
    if(urlSearch.get('board_num') == '01'){
        $('.board_page h2').text('자유게시판')
        $('#visual_sub strong').text('자유게시판')
        $('#visual_sub p').text('GENERAL FORUM')
    }


    $('#file_select').change(function(){
        var fileName = $(this).val().split('\\').pop();
        $('.file_zone').text(fileName || '파일을 선택해 주세요');
    });

    // let fileName = $(this).val()
    // let fileSplit = fileName.split('\\');
    // let fileSplitLength = fileSplit.length 
    // console.log(fileSplitLength)

    // $('.file_zone').text(fileSplit[2])
});