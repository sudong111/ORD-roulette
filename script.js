var Rule_Physics_초월 = new Array('루피초월','조로초월','우솝초월','쵸파초월','로빈초월','도플라밍고초월','사보초월','후지토라초월','타시기초월','바질초월','징베초월');
var Rule_Physics_불멸 = new Array('로져불멸','레일리불멸','가반불멸','흰수염불멸','거프불멸','카이도불멸');
var Rule_Physics_영원 = new Array('카벤디슈영원','버기영원');
var Rule_Physics_제한 = new Array('크로커다일제한','레베카제한','카타쿠리제한','킹제한');
var Rule_Physics_모두 = new Array('루피초월','조로초월','우솝초월','쵸파초월','로빈초월','도플라밍고초월','사보초월','후지토라초월','타시기초월','바질초월','징베초월','로져불멸','레일리불멸','가반불멸','흰수염불멸','거프불멸','카이도불멸','카벤영원','버기영원','크로커다일제한','레베카제한','카타쿠리제한','킹제한');
var Rule_Magical_초월 = new Array('나미초월','상디초월','프랑키초월','브룩초월','샹크스초월','검은수염초월','시라호시초월','아오키지초월','아카이누초월','키자루초월','로우초월','루치초월','스네이크맨초월','키드초월');
var Rule_Magical_불멸 = new Array('센고쿠불멸','시키불멸','드래곤불멸','제트불멸','빅맘불멸');
var Rule_Magical_영원 = new Array('에이스영원','핸콕영원','미호크영원','오뎅영원');
var Rule_Magical_제한 = new Array('에넬제한','시노부제한','레드필드제한');
var Rule_Magical_모두 = new Array('나미초월','상디초월','프랑키초월','브룩초월','샹크스초월','검은수염초월','시라호시초월','아오키지초월','아카이누초월','키자루초월','로우초월','루치초월','스네이크맨초월','키드초월','센고쿠불멸','시키불멸','드래곤불멸','제트불멸','빅맘불멸','에이스영원','핸콕영원','미호크영원','오뎅영원','에넬제한','시노부제한','레드필드제한');
var Rule_All = new Array('루피초월','조로초월','우솝초월','쵸파초월','로빈초월','도플라밍고초월','사보초월','후지토라초월','타시기초월','바질초월','징베초월','로져불멸','레일리불멸','가반불멸','흰수염불멸','거프불멸','카이도불멸','카벤영원','버기영원','크로커다일제한','레베카제한','카타쿠리제한','킹제한','나미초월','상디초월','프랑키초월','브룩초월','샹크스초월','검은수염초월','시라호시초월','아오키지초월','아카이누초월','키자루초월','로우초월','루치초월','스네이크맨초월','키드초월','센고쿠불멸','시키불멸','드래곤불멸','제트불멸','빅맘불멸','에이스영원','핸콕영원','미호크영원','오뎅영원','에넬제한','시노부제한','레드필드제한');
var Rule_Legend_All = new Array('히루루크전설','겟코 모리아전설','에이스전설','나미전설','네코마무시전설','라분전설','루치전설','조로전설','마르코전설','검은수염전설','루나메전설','Jet루피전설','드래곤전설','바톨전설','쿠마전설','핸콕전설','레이쥬전설','상디전설','크래커전설','샹크스전설','센고쿠전설','슈가전설','스모커전설','시노부전설','시저전설','시키전설','레일리전설','토키전설','흰수염전설','울티전설','제파전설','징베전설','카르가라전설','코비전설','킹전설','로우전설','후지토라전설');
var Rule_Hidden_All = new Array('방맥히든','류마히든','베르고히든','레드포스히든','레베카히든','모비딕히든','반더데켄히든','봉쿠레히든','사보히든','써니호히든','시류히든','아카이누히든','이완코브히든','미호크히든','캐럿히든','코알라히든','아오키지히든','킨에몬히든','킬러히든','페로나히든','피셔타이거히든');
var Rule_Random_다수 = new Array('원딜전 마뎀','지츠 다이스 룰','이 캐릭들 금지에요 (7히든+7전설)','기적! 신세계 보상치기','악몽','강제전','원딜전 물뎀','필수! 랜덤유닛 (max 10)','인생의 고도전','너의 상위는..?');
var Rule_Random_솔로 = new Array('강제전','이 캐릭들 금지에요 (7히든+7전설)','기적! 신세계 보상치기','악몽','원딜전 마뎀','원딜전 물뎀','필수! 랜덤유닛 (max 10)','인생의 고도전','너의 상위는..?');
var Rule_Duel = new Array('이 캐릭들 필수에요 (4히든+4전설)','강제전','이 캐릭들 금지에요 (7히든+7전설)','기적! 신세계 보상치기','악몽','원딜전 마뎀','원딜전 물뎀','필수! 랜덤유닛 (max 10)','인생의 고도전','너의 상위는..?');
var Rule_Number = new Array('1','2','3','4','5','6','7','8','9','10');
var Rule_Number_2 = new Array('1','2','3','4');
var Rules = document.getElementById("Rules_Box");
var People = document.getElementById("People_Box");
var op_count = 0;
var random_count = 0;
function Fade_In_Start(a){
    var t = document.getElementById(a);
    t.style.opacity = 0;
    setTimeout(function() {
        var fade = setInterval(function() {
            op_count = op_count + 0.01;
            t.style.opacity = op_count;
            if(op_count > 1){
                clearInterval(fade);
            }
        }, 5);
    }, 10);
    op_count= 0;
}
function Fade_In_Button(a){
    var t = document.getElementById(a);
    t.style.opacity = 0;
    setTimeout(function() {
        var fade = setInterval(function() {
            op_count = op_count + 0.01;
            t.style.opacity = op_count;
            if(op_count > 1){
                clearInterval(fade);
            }
        }, 5);
    }, 1300);
    op_count= 0;
}
function Fade_In_Text(a){
    var t = document.getElementById(a);
    t.style.opacity = 0;
    setTimeout(function() {
        var fade = setInterval(function() {
            op_count = op_count + 0.01;
            t.style.opacity = op_count;
            if(op_count > 1){
                clearInterval(fade);
            }
        }, 5);
    }, 1300);
    op_count= 0;
}

function Random_Effect(a){
    var t = document.getElementById(a);
    var element = t.innerText;
        var test = setInterval(function() {
            var array_1 = Rule_Duel[Math.floor(Math.random() * Rule_Duel.length)];
            t.innerHTML = array_1;
            random_count = random_count + 1;
        if(random_count > 10){
            clearInterval(test);
            t.innerText = element;
            random_count = 0;
        }
    }, 100);
}
function Restart(){
    var Rules_Start = Rules.options[Rules.selectedIndex].value;
    var People_Start = People.options[People.selectedIndex].value;
    var End = 0;
    if(Rules_Start !== End || People_Start !== End){
        Visibility_Off("button");
        Visibility_Off("span");
        Visibility_Off("Button_Check");
    }
}
function Visibility_On(a){
    var array_Class = document.getElementsByClassName(a);
    var array_All = document.getElementsByTagName(a);
    for(var i = 0 ; i < array_Class.length ; i++) {
        var span = array_Class[i];
        var style = getComputedStyle(span);
        var value = style.getPropertyValue("visibility");
            if(value == "hidden")
            span.style.visibility = "visible";
    }
    for(var i = 0 ; i < array_All.length ; i++) {
        var span = array_All[i];
        var style = getComputedStyle(span);
        var value = style.getPropertyValue("visibility");
            if(value == "hidden")
            span.style.visibility = "visible";  
    }
}
function Visibility_Off(a){
    var array_Class = document.getElementsByClassName(a);
    var array_All = document.getElementsByTagName(a);
    for(var i = 0 ; i < array_Class.length ; i++) {
        var span = array_Class[i];
        var style = getComputedStyle(span);
        var value = style.getPropertyValue("visibility");
            if(value == "visible")
            span.style.visibility = "hidden";  
    }
    for(var i = 0 ; i < array_All.length ; i++) {
        var span = array_All[i];
        var style = getComputedStyle(span);
        var value = style.getPropertyValue("visibility");
            if(value == "visible")
            span.style.visibility = "hidden";  
    }
}
function Name_Color(a){
    var a_2 = a + "_2";
    var element = document.getElementById(a);
    var element_2 = document.getElementById(a_2);
    var element_Text = element.innerHTML;
    var point_1 = element_Text.indexOf('초월');
    var point_2 = element_Text.indexOf('불멸');
    var point_3 = element_Text.indexOf('영원');
    var point_4 = element_Text.indexOf('제한');
    var point_5 = element_Text.indexOf('전설');
    var point_6 = element_Text.indexOf('히든');
    var point_7 = element_Text.indexOf('1p');
    var point_8 = element_Text.indexOf('2p');
    var point_9 = element_Text.indexOf('3p');
    var point_10 = element_Text.indexOf('4p');
    if(point_1 !== -1){
        element.style.color="black";
        element_2.style.color="black";
        var i = point_1;
        var element_Text_front = element_Text.substr(0,i);
        var element_Text_back = element_Text.substr(i,2);
        element.innerText = element_Text_front;
        element_2.style.color="#007bff";
        element_2.innerText = element_Text_back;
    }
    if(point_2 !== -1){
        element.style.color="black";
        element_2.style.color="black";
        var i = point_2;
        var element_Text_front = element_Text.substr(0,i);
        var element_Text_back = element_Text.substr(i,2);
        element.innerText = element_Text_front;
        element_2.style.color="salmon";
        element_2.innerText = element_Text_back;
    }
    if(point_3 !== -1){
        element.style.color="black";
        element_2.style.color="black";
        var i = point_3;
        var element_Text_front = element_Text.substr(0,i);
        var element_Text_back = element_Text.substr(i,2);
        element.innerText = element_Text_front;
        element_2.style.color="#00c0a9";
        element_2.innerText = element_Text_back;
    }
    if(point_4 !== -1){
        element.style.color="black";
        element_2.style.color="black";
        var i = point_4;
        var element_Text_front = element_Text.substr(0,i);
        var element_Text_back = element_Text.substr(i,2);
        element.innerText = element_Text_front;
        element_2.style.color="#7c0100";
        element_2.innerText = element_Text_back;
    }    
    if(point_5 !== -1){
        var array = element_Text.split('<br>');
        var element_2 = document.getElementById("Rule_2_Text_1_4");
        element.innerHTML = "";
        element_2.innerHTML = "";
        for(i = 0 ; i < array.length ; i++){
            var point_5 = array[i].indexOf('전설');
            var array_front = array[i].substring(0,point_5);
            var array_back = array[i].substring(point_5,point_5+2);
            element.innerHTML += array_front + '<br>';
            element_2.innerHTML += array_back + '<br>';
            element_2.style.color="#fd2b2b";
        }
    }    
    if(point_6 !== -1){
        var array = element_Text.split('<br>');
        var element_2 = document.getElementById("Rule_2_Text_2_4");
        element.innerHTML = "";
        element_2.innerHTML = "";
        for(i = 0 ; i < array.length ; i++){
            var point_6 = array[i].indexOf('히든');
            var array_front = array[i].substring(0,point_6);
            var array_back = array[i].substring(point_6,point_6+2);
            element.innerHTML += array_front + '<br>';
            element_2.innerHTML += array_back + '<br>';
            element_2.style.color="#009eef";
        }
    }
    if(point_7 !== -1){
        element.style.color="black";
        element_2.style.color="black";
        var element_Text_1p = element_Text;
        element.innerText = element_Text_1p;
        element.style.color="#fd2b2b";
    }
    if(point_8 !== -1){
        element.style.color="black";
        element_2.style.color="black";
        var element_Text_2p = element_Text;
        element.innerText = element_Text_2p;
        element.style.color="#007bff";
    }         
    if(point_9 !== -1){
        element.style.color="black";
        element_2.style.color="black";
        var element_Text_3p = element_Text;
        element.innerText = element_Text_3p;
        element.style.color="#651f99";
    }    
    if(point_10 !== -1){
        element.style.color="black";
        element_2.style.color="black";
        var element_Text_4p = element_Text;
        element.innerText = element_Text_4p;
        element.style.color="#d59700";
    }    
}
function Play(){
    var t = document.getElementById("Check_Help");
    t.style.opacity = 0;
    Visibility_On("Button_Check");
    Visibility_Off("span");
    Visibility_Off("Button");
    Fade_In_Start("Button_Check");
    if (Rules.options[Rules.selectedIndex].value == "Rules_1"){     //1마뎀 3물뎀
        Visibility_Off("span");
        var element_help = document.getElementById("Check_Help");
        var element_Check = document.getElementById("Check_Text");
        element_Check.innerText = "3명의 플레이어가 정해진 상위에서 골라 가져간다. 정해진 상위 외 원하는 상위 하나를 지목해 올릴 수 있다."; 
        element_help.innerText = "목재는 각각 28개씩만 사용가능하고 보상 없이 클리어해 3명의 플레이어의 유카 합산을 통해 대결한다.";
        Visibility_On("Check_Help");
        Visibility_On("Check_Text");
        Fade_In_Start("Check_Help");
        Fade_In_Start("Check_Text");
        while(1){
            var array_1 = Rule_Physics_모두[Math.floor(Math.random() * Rule_Physics_모두.length)];
            var array_2 = Rule_Physics_모두[Math.floor(Math.random() * Rule_Physics_모두.length)];
            var array_3 = Rule_Physics_모두[Math.floor(Math.random() * Rule_Physics_모두.length)];
            var array_4 = Rule_Magical_모두[Math.floor(Math.random() * Rule_Magical_모두.length)];
            if(array_1 !== array_2 && array_1 !== array_3 && array_2 !== array_3)break;
        }
        var element_1 = document.getElementById("Rule_4_Text_1");
        var element_2 = document.getElementById("Rule_4_Text_2");
        var element_3 = document.getElementById("Rule_4_Text_3");
        var element_4 = document.getElementById("Rule_4_Text_4");
        element_1.innerText=array_1;
        element_2.innerText=array_2;
        element_3.innerText=array_3;
        element_4.innerText=array_4;
        Name_Color("Rule_4_Text_1");
        Name_Color("Rule_4_Text_2");
        Name_Color("Rule_4_Text_3");
        Name_Color("Rule_4_Text_4");
        Visibility_Off("Button_Check")
        Visibility_On("Button_4_1p");
        Visibility_On("Button_4_2p");
        Visibility_On("Button_4_3p");
        Visibility_On("Button_4_4p");     
        Fade_In_Start("Button_4_1p");
        Fade_In_Start("Button_4_2p");
        Fade_In_Start("Button_4_3p");
        Fade_In_Start("Button_4_4p");

    }
    else if (Rules.options[Rules.selectedIndex].value == "Rules_2"){    //3마뎀 1물뎀
        Visibility_Off("span");
        var element_help = document.getElementById("Check_Help");
        var element_Check = document.getElementById("Check_Text");
        element_Check.innerText = "3명의 플레이어가 정해진 상위에서 골라 가져간다. 정해진 상위 외 원하는 상위 하나를 지목해 올릴 수 있다."; 
        element_help.innerText = "목재는 각각 28개씩만 사용가능하고 보상 없이 클리어해 3명의 플레이어의 유카 합산을 통해 대결한다.";
        Visibility_On("Check_Help");
        Visibility_On("Check_Text");
        Fade_In_Start("Check_Help");
        Fade_In_Start("Check_Text");
        while(1){
            var array_1 = Rule_Magical_모두[Math.floor(Math.random() * Rule_Magical_모두.length)];
            var array_2 = Rule_Magical_모두[Math.floor(Math.random() * Rule_Magical_모두.length)];
            var array_3 = Rule_Magical_모두[Math.floor(Math.random() * Rule_Magical_모두.length)];
            var array_4 = Rule_Physics_모두[Math.floor(Math.random() * Rule_Physics_모두.length)];
            if(array_1 !== array_2 && array_1 !== array_3 && array_2 !== array_3)break;
        }
        var element_1 = document.getElementById("Rule_4_Text_1");
        var element_2 = document.getElementById("Rule_4_Text_2");
        var element_3 = document.getElementById("Rule_4_Text_3");
        var element_4 = document.getElementById("Rule_4_Text_4");
        element_1.innerText = array_1;
        element_2.innerText = array_2;
        element_3.innerText = array_3;
        element_4.innerText = array_4;
        Name_Color("Rule_4_Text_1");
        Name_Color("Rule_4_Text_2");
        Name_Color("Rule_4_Text_3");
        Name_Color("Rule_4_Text_4");
        Visibility_Off("Button_Check")
        Visibility_On("Button_4_1p");
        Visibility_On("Button_4_2p");
        Visibility_On("Button_4_3p");
        Visibility_On("Button_4_4p");
        Fade_In_Start("Button_4_1p");
        Fade_In_Start("Button_4_2p");
        Fade_In_Start("Button_4_3p");
        Fade_In_Start("Button_4_4p");
    }
    else if (Rules.options[Rules.selectedIndex].value == "Rules_3"){    //랜덤룰
        if(People.options[People.selectedIndex].value == "People_1"){
            var array_Rule = Rule_Random_솔로[Math.floor(Math.random() * Rule_Random_솔로.length)];
            var element = document.getElementById("Check_Text");
            element.innerText = array_Rule;
            if(array_Rule == '강제전'){
                var array = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var element = document.getElementById("Rule_1_Text_1");
                element.innerText = array;
                Name_Color("Rule_1_Text_1");
            }
            else if(array_Rule == '이 캐릭들 금지에요 (7히든+7전설)'){
                while(1){
                var array_legend_1 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_2 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_3 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_4 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_5 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_6 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_7 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_hidden_1 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_2 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_3 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_4 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_5 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_6 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_7 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                if(array_legend_1 !== array_legend_2 && array_legend_1 !== array_legend_3 && array_legend_1 !== array_legend_4 && array_legend_1 !== array_legend_5 &&
                   array_legend_1 !== array_legend_6 && array_legend_1 !== array_legend_7 && array_legend_2 !== array_legend_3 && array_legend_2 !== array_legend_4 &&
                   array_legend_2 !== array_legend_5 && array_legend_2 !== array_legend_6 && array_legend_2 !== array_legend_7 && array_legend_3 !== array_legend_4 &&
                   array_legend_3 !== array_legend_5 && array_legend_3 !== array_legend_6 && array_legend_3 !== array_legend_7 && array_legend_4 !== array_legend_5 &&
                   array_legend_4 !== array_legend_6 && array_legend_4 !== array_legend_7 && array_legend_5 !== array_legend_6 && array_legend_5 !== array_legend_7 &&
                   array_legend_6 !== array_legend_7 &&
                   array_hidden_1 !== array_hidden_2 && array_hidden_1 !== array_hidden_3 && array_hidden_1 !== array_hidden_4 && array_hidden_1 !== array_hidden_5 &&
                   array_hidden_1 !== array_hidden_6 && array_hidden_1 !== array_hidden_7 && array_hidden_2 !== array_hidden_3 && array_hidden_2 !== array_hidden_4 &&
                   array_hidden_2 !== array_hidden_5 && array_hidden_2 !== array_hidden_6 && array_hidden_2 !== array_hidden_7 && array_hidden_3 !== array_hidden_4 &&
                   array_hidden_3 !== array_hidden_5 && array_hidden_3 !== array_hidden_6 && array_hidden_3 !== array_hidden_7 && array_hidden_4 !== array_hidden_5 &&
                   array_hidden_4 !== array_hidden_6 && array_hidden_4 !== array_hidden_7 && array_hidden_5 !== array_hidden_6 && array_hidden_5 !== array_hidden_7 &&
                   array_hidden_6 !== array_hidden_7)break;
                }
                var element_1 = document.getElementById("Rule_2_Text_1_3");
                var element_2 = document.getElementById("Rule_2_Text_2_3");
                element_1.innerHTML = array_legend_1 + "<br>";
                element_1.innerHTML += array_legend_2 + "<br>";
                element_1.innerHTML += array_legend_3 + "<br>";
                element_1.innerHTML += array_legend_4 + "<br>";
                element_1.innerHTML += array_legend_5 + "<br>";
                element_1.innerHTML += array_legend_6 + "<br>";
                element_1.innerHTML += array_legend_7;
                element_2.innerHTML = array_hidden_1 + "<br>";
                element_2.innerHTML += array_hidden_2 + "<br>";
                element_2.innerHTML += array_hidden_3 + "<br>";
                element_2.innerHTML += array_hidden_4 + "<br>";
                element_2.innerHTML += array_hidden_5 + "<br>";
                element_2.innerHTML += array_hidden_6 + "<br>";
                element_2.innerHTML += array_hidden_7;
                Name_Color("Rule_2_Text_1_3");
                Name_Color("Rule_2_Text_2_3");
            }
            else if(array_Rule == '인생의 고도전'){
                var array = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var element = document.getElementById("Rule_1_Text_1");
                var element_2 = document.getElementById("Rule_1_Text_1_2");
                element.innerText = "1p";
                element_2.innerText = " = 5 + " + array;
                Name_Color("Rule_1_Text_1");
            }
            else if(array_Rule == '너의 상위는..?'){
                var array = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var element = document.getElementById("Rule_1_Text_1");
                var element_2 = document.getElementById("Rule_1_Text_1_2");
                element.innerText = "1p";
                element_2.innerText = " = " + array;
                Name_Color("Rule_1_Text_1");
            }
            else{}
        }
        else if(People.options[People.selectedIndex].value == "People_2"){
            var array_Rule = Rule_Random_다수[Math.floor(Math.random() * Rule_Random_다수.length)];
            var element = document.getElementById("Check_Text");
            element.innerText = array_Rule;
            if(array_Rule == '강제전'){
                var array = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var element = document.getElementById("Rule_1_Text_1");
                element.innerText = array;
                Name_Color("Rule_1_Text_1");
            }
            else if(array_Rule == '이 캐릭들 금지에요 (7히든+7전설)'){
                while(1){
                var array_legend_1 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_2 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_3 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_4 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_5 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_6 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_7 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_hidden_1 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_2 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_3 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_4 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_5 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_6 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_7 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                if(array_legend_1 !== array_legend_2 && array_legend_1 !== array_legend_3 && array_legend_1 !== array_legend_4 && array_legend_1 !== array_legend_5 &&
                   array_legend_1 !== array_legend_6 && array_legend_1 !== array_legend_7 && array_legend_2 !== array_legend_3 && array_legend_2 !== array_legend_4 &&
                   array_legend_2 !== array_legend_5 && array_legend_2 !== array_legend_6 && array_legend_2 !== array_legend_7 && array_legend_3 !== array_legend_4 &&
                   array_legend_3 !== array_legend_5 && array_legend_3 !== array_legend_6 && array_legend_3 !== array_legend_7 && array_legend_4 !== array_legend_5 &&
                   array_legend_4 !== array_legend_6 && array_legend_4 !== array_legend_7 && array_legend_5 !== array_legend_6 && array_legend_5 !== array_legend_7 &&
                   array_legend_6 !== array_legend_7 &&
                   array_hidden_1 !== array_hidden_2 && array_hidden_1 !== array_hidden_3 && array_hidden_1 !== array_hidden_4 && array_hidden_1 !== array_hidden_5 &&
                   array_hidden_1 !== array_hidden_6 && array_hidden_1 !== array_hidden_7 && array_hidden_2 !== array_hidden_3 && array_hidden_2 !== array_hidden_4 &&
                   array_hidden_2 !== array_hidden_5 && array_hidden_2 !== array_hidden_6 && array_hidden_2 !== array_hidden_7 && array_hidden_3 !== array_hidden_4 &&
                   array_hidden_3 !== array_hidden_5 && array_hidden_3 !== array_hidden_6 && array_hidden_3 !== array_hidden_7 && array_hidden_4 !== array_hidden_5 &&
                   array_hidden_4 !== array_hidden_6 && array_hidden_4 !== array_hidden_7 && array_hidden_5 !== array_hidden_6 && array_hidden_5 !== array_hidden_7 &&
                   array_hidden_6 !== array_hidden_7)break;
                }
                var element_1 = document.getElementById("Rule_2_Text_1_3");
                var element_2 = document.getElementById("Rule_2_Text_2_3");
                element_1.innerHTML = array_legend_1 + "<br>";
                element_1.innerHTML += array_legend_2 + "<br>";
                element_1.innerHTML += array_legend_3 + "<br>";
                element_1.innerHTML += array_legend_4 + "<br>";
                element_1.innerHTML += array_legend_5 + "<br>";
                element_1.innerHTML += array_legend_6 + "<br>";
                element_1.innerHTML += array_legend_7;
                element_2.innerHTML = array_hidden_1 + "<br>";
                element_2.innerHTML += array_hidden_2 + "<br>";
                element_2.innerHTML += array_hidden_3 + "<br>";
                element_2.innerHTML += array_hidden_4 + "<br>";
                element_2.innerHTML += array_hidden_5 + "<br>";
                element_2.innerHTML += array_hidden_6 + "<br>";
                element_2.innerHTML += array_hidden_7;
                Name_Color("Rule_2_Text_1_3");
                Name_Color("Rule_2_Text_2_3");
            }
            else if(array_Rule == '인생의 고도전'){
                var array_1 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_2 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var element_1 = document.getElementById("Rule_2_Text_1");
                var element_1_2 = document.getElementById("Rule_2_Text_1_2");
                var element_2 = document.getElementById("Rule_2_Text_2");
                var element_2_2 = document.getElementById("Rule_2_Text_2_2");
                element_1.innerText = "1p";
                element_2.innerText = "2p";
                element_1_2.innerText = " = 5 + " + array_1;
                element_2_2.innerText = " = 5 + " + array_2;
                Name_Color("Rule_2_Text_1");
                Name_Color("Rule_2_Text_2");
            }
            else if(array_Rule == '지츠 다이스 룰'){
                while(1){
                var array_1 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_2 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                if(array_1 !== array_2)break;
            }
                var element_1 = document.getElementById("Rule_2_Text_1");
                var element_2 = document.getElementById("Rule_2_Text_2");
                element_1.innerText = array_1;
                element_2.innerText = array_2;
                Name_Color("Rule_2_Text_1");
                Name_Color("Rule_2_Text_2");
            }
            else if(array_Rule == '너의 상위는..?'){
                var array_1 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_2 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var element_1 = document.getElementById("Rule_2_Text_1");
                var element_1_2 = document.getElementById("Rule_2_Text_1_2");
                var element_2 = document.getElementById("Rule_2_Text_2");
                var element_2_2 = document.getElementById("Rule_2_Text_2_2");
                element_1.innerText = "1p";
                element_2.innerText = "2p";
                element_1_2.innerText = " = " + array_1;
                element_2_2.innerText = " = " + array_2;
                Name_Color("Rule_2_Text_1");
                Name_Color("Rule_2_Text_2");
            }
            else{}
        }
        else if(People.options[People.selectedIndex].value == "People_3"){
            var array_Rule = Rule_Random_다수[Math.floor(Math.random() * Rule_Random_다수.length)];
            var element = document.getElementById("Check_Text");
            element.innerText = array_Rule;
            if(array_Rule == '강제전'){
                var array = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var element = document.getElementById("Rule_1_Text_1");
                element.innerText = array;
                Name_Color("Rule_1_Text_1");
            }
            else if(array_Rule == '이 캐릭들 금지에요 (7히든+7전설)'){
                while(1){
                var array_legend_1 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_2 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_3 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_4 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_5 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_6 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_7 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_hidden_1 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_2 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_3 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_4 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_5 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_6 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_7 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                if(array_legend_1 !== array_legend_2 && array_legend_1 !== array_legend_3 && array_legend_1 !== array_legend_4 && array_legend_1 !== array_legend_5 &&
                   array_legend_1 !== array_legend_6 && array_legend_1 !== array_legend_7 && array_legend_2 !== array_legend_3 && array_legend_2 !== array_legend_4 &&
                   array_legend_2 !== array_legend_5 && array_legend_2 !== array_legend_6 && array_legend_2 !== array_legend_7 && array_legend_3 !== array_legend_4 &&
                   array_legend_3 !== array_legend_5 && array_legend_3 !== array_legend_6 && array_legend_3 !== array_legend_7 && array_legend_4 !== array_legend_5 &&
                   array_legend_4 !== array_legend_6 && array_legend_4 !== array_legend_7 && array_legend_5 !== array_legend_6 && array_legend_5 !== array_legend_7 &&
                   array_legend_6 !== array_legend_7 &&
                   array_hidden_1 !== array_hidden_2 && array_hidden_1 !== array_hidden_3 && array_hidden_1 !== array_hidden_4 && array_hidden_1 !== array_hidden_5 &&
                   array_hidden_1 !== array_hidden_6 && array_hidden_1 !== array_hidden_7 && array_hidden_2 !== array_hidden_3 && array_hidden_2 !== array_hidden_4 &&
                   array_hidden_2 !== array_hidden_5 && array_hidden_2 !== array_hidden_6 && array_hidden_2 !== array_hidden_7 && array_hidden_3 !== array_hidden_4 &&
                   array_hidden_3 !== array_hidden_5 && array_hidden_3 !== array_hidden_6 && array_hidden_3 !== array_hidden_7 && array_hidden_4 !== array_hidden_5 &&
                   array_hidden_4 !== array_hidden_6 && array_hidden_4 !== array_hidden_7 && array_hidden_5 !== array_hidden_6 && array_hidden_5 !== array_hidden_7 &&
                   array_hidden_6 !== array_hidden_7)break;
                }
                var element_1 = document.getElementById("Rule_2_Text_1_3");
                var element_2 = document.getElementById("Rule_2_Text_2_3");
                element_1.innerHTML = array_legend_1 + "<br>";
                element_1.innerHTML += array_legend_2 + "<br>";
                element_1.innerHTML += array_legend_3 + "<br>";
                element_1.innerHTML += array_legend_4 + "<br>";
                element_1.innerHTML += array_legend_5 + "<br>";
                element_1.innerHTML += array_legend_6 + "<br>";
                element_1.innerHTML += array_legend_7;
                element_2.innerHTML = array_hidden_1 + "<br>";
                element_2.innerHTML += array_hidden_2 + "<br>";
                element_2.innerHTML += array_hidden_3 + "<br>";
                element_2.innerHTML += array_hidden_4 + "<br>";
                element_2.innerHTML += array_hidden_5 + "<br>";
                element_2.innerHTML += array_hidden_6 + "<br>";
                element_2.innerHTML += array_hidden_7;
                Name_Color("Rule_2_Text_1_3");
                Name_Color("Rule_2_Text_2_3");
            }
            else if(array_Rule == '인생의 고도전'){
                var array_1 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_2 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_3 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var element_1 = document.getElementById("Rule_3_Text_1");
                var element_1_2 = document.getElementById("Rule_3_Text_1_2");
                var element_2 = document.getElementById("Rule_3_Text_2");
                var element_2_2 = document.getElementById("Rule_3_Text_2_2");
                var element_3 = document.getElementById("Rule_3_Text_3");
                var element_3_2 = document.getElementById("Rule_3_Text_3_2");
                element_1.innerText = "1p";
                element_2.innerText = "2p";
                element_3.innerText = "3p";
                element_1_2.innerText = " = 5 + " + array_1;
                element_2_2.innerText = " = 5 + " + array_2;
                element_3_2.innerText = " = 5 + " + array_3;
                Name_Color("Rule_3_Text_1");
                Name_Color("Rule_3_Text_2");
                Name_Color("Rule_3_Text_3");
            }
            else if(array_Rule == '지츠 다이스 룰'){
                while(1){
                var array_1 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_2 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_3 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                if(array_1 !== array_2 && array_1 !== array_3 && array_2 !== array_3)break;
            }
                var element_1 = document.getElementById("Rule_3_Text_1");
                var element_2 = document.getElementById("Rule_3_Text_2");
                var element_3 = document.getElementById("Rule_3_Text_3");
                element_1.innerText = array_1;
                element_2.innerText = array_2;
                element_3.innerText = array_3;
                Name_Color("Rule_3_Text_1");
                Name_Color("Rule_3_Text_2");
                Name_Color("Rule_3_Text_3");
            }
            else if(array_Rule == '너의 상위는..?'){
                var array_1 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_2 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_3 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var element_1 = document.getElementById("Rule_3_Text_1");
                var element_1_2 = document.getElementById("Rule_3_Text_1_2");
                var element_2 = document.getElementById("Rule_3_Text_2");
                var element_2_2 = document.getElementById("Rule_3_Text_2_2");
                var element_3 = document.getElementById("Rule_3_Text_3");
                var element_3_2 = document.getElementById("Rule_3_Text_3_2");
                element_1.innerText = "1p";
                element_2.innerText = "2p";
                element_3.innerText = "3p";
                element_1_2.innerText = " = " + array_1;
                element_2_2.innerText = " = " + array_2;
                element_3_2.innerText = " = " + array_3;
                Name_Color("Rule_3_Text_1");
                Name_Color("Rule_3_Text_2");
                Name_Color("Rule_3_Text_3");
            }
            else{}
        }
        else if(People.options[People.selectedIndex].value == "People_4"){
            var array_Rule = Rule_Random_다수[Math.floor(Math.random() * Rule_Random_다수.length)];
            var element = document.getElementById("Check_Text");
            element.innerText = array_Rule;
            if(array_Rule == '강제전'){
                var array = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var element = document.getElementById("Rule_1_Text_1");
                element.innerText = array;
                Name_Color("Rule_1_Text_1");
            }
            else if(array_Rule == '이 캐릭들 금지에요 (7히든+7전설)'){
                while(1){
                var array_legend_1 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_2 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_3 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_4 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_5 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_6 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_7 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_hidden_1 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_2 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_3 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_4 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_5 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_6 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_7 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                if(array_legend_1 !== array_legend_2 && array_legend_1 !== array_legend_3 && array_legend_1 !== array_legend_4 && array_legend_1 !== array_legend_5 &&
                   array_legend_1 !== array_legend_6 && array_legend_1 !== array_legend_7 && array_legend_2 !== array_legend_3 && array_legend_2 !== array_legend_4 &&
                   array_legend_2 !== array_legend_5 && array_legend_2 !== array_legend_6 && array_legend_2 !== array_legend_7 && array_legend_3 !== array_legend_4 &&
                   array_legend_3 !== array_legend_5 && array_legend_3 !== array_legend_6 && array_legend_3 !== array_legend_7 && array_legend_4 !== array_legend_5 &&
                   array_legend_4 !== array_legend_6 && array_legend_4 !== array_legend_7 && array_legend_5 !== array_legend_6 && array_legend_5 !== array_legend_7 &&
                   array_legend_6 !== array_legend_7 &&
                   array_hidden_1 !== array_hidden_2 && array_hidden_1 !== array_hidden_3 && array_hidden_1 !== array_hidden_4 && array_hidden_1 !== array_hidden_5 &&
                   array_hidden_1 !== array_hidden_6 && array_hidden_1 !== array_hidden_7 && array_hidden_2 !== array_hidden_3 && array_hidden_2 !== array_hidden_4 &&
                   array_hidden_2 !== array_hidden_5 && array_hidden_2 !== array_hidden_6 && array_hidden_2 !== array_hidden_7 && array_hidden_3 !== array_hidden_4 &&
                   array_hidden_3 !== array_hidden_5 && array_hidden_3 !== array_hidden_6 && array_hidden_3 !== array_hidden_7 && array_hidden_4 !== array_hidden_5 &&
                   array_hidden_4 !== array_hidden_6 && array_hidden_4 !== array_hidden_7 && array_hidden_5 !== array_hidden_6 && array_hidden_5 !== array_hidden_7 &&
                   array_hidden_6 !== array_hidden_7)break;
                }
                var element_1 = document.getElementById("Rule_2_Text_1_3");
                var element_2 = document.getElementById("Rule_2_Text_2_3");
                element_1.innerHTML = array_legend_1 + "<br>";
                element_1.innerHTML += array_legend_2 + "<br>";
                element_1.innerHTML += array_legend_3 + "<br>";
                element_1.innerHTML += array_legend_4 + "<br>";
                element_1.innerHTML += array_legend_5 + "<br>";
                element_1.innerHTML += array_legend_6 + "<br>";
                element_1.innerHTML += array_legend_7;
                element_2.innerHTML = array_hidden_1 + "<br>";
                element_2.innerHTML += array_hidden_2 + "<br>";
                element_2.innerHTML += array_hidden_3 + "<br>";
                element_2.innerHTML += array_hidden_4 + "<br>";
                element_2.innerHTML += array_hidden_5 + "<br>";
                element_2.innerHTML += array_hidden_6 + "<br>";
                element_2.innerHTML += array_hidden_7;
                Name_Color("Rule_2_Text_1_3");
                Name_Color("Rule_2_Text_2_3");
            }
            else if(array_Rule == '인생의 고도전'){
                var array_1 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_2 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_3 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_4 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var element_1 = document.getElementById("Rule_4_Text_1");
                var element_1_2 = document.getElementById("Rule_4_Text_1_2");
                var element_2 = document.getElementById("Rule_4_Text_2");
                var element_2_2 = document.getElementById("Rule_4_Text_2_2");
                var element_3 = document.getElementById("Rule_4_Text_3");
                var element_3_2 = document.getElementById("Rule_4_Text_3_2");
                var element_4 = document.getElementById("Rule_4_Text_4");
                var element_4_2 = document.getElementById("Rule_4_Text_4_2");
                element_1.innerText = "1p";
                element_2.innerText = "2p";
                element_3.innerText = "3p";
                element_4.innerText = "4p";
                element_1_2.innerText = " = 5 + " + array_1;
                element_2_2.innerText = " = 5 + " + array_2;
                element_3_2.innerText = " = 5 + " + array_3;
                element_4_2.innerText = " = 5 + " + array_4;
                Name_Color("Rule_4_Text_1");
                Name_Color("Rule_4_Text_2");
                Name_Color("Rule_4_Text_3");
                Name_Color("Rule_4_Text_4");
            }
            else if(array_Rule == '지츠 다이스 룰'){
                while(1){
                var array_1 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_2 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_3 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_4 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                if(array_1 !== array_2 && array_1 !== array_3 && array_1 !== array_4 && array_2 !== array_3 && array_2 !== array_4 && array_3 !== array_4)break;
            }
                var element_1 = document.getElementById("Rule_4_Text_1");
                var element_2 = document.getElementById("Rule_4_Text_2");
                var element_3 = document.getElementById("Rule_4_Text_3");
                var element_4 = document.getElementById("Rule_4_Text_4");
                element_1.innerText = array_1;
                element_2.innerText = array_2;
                element_3.innerText = array_3;
                element_4.innerText = array_4;
                Name_Color("Rule_4_Text_1");
                Name_Color("Rule_4_Text_2");
                Name_Color("Rule_4_Text_3");
                Name_Color("Rule_4_Text_4");
            }
            else if(array_Rule == '너의 상위는..?'){
                var array_1 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_2 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_3 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_4 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var element_1 = document.getElementById("Rule_4_Text_1");
                var element_1_2 = document.getElementById("Rule_4_Text_1_2");
                var element_2 = document.getElementById("Rule_4_Text_2");
                var element_2_2 = document.getElementById("Rule_4_Text_2_2");
                var element_3 = document.getElementById("Rule_4_Text_3");
                var element_3_2 = document.getElementById("Rule_4_Text_3_2");
                var element_4 = document.getElementById("Rule_4_Text_4");
                var element_4_2 = document.getElementById("Rule_4_Text_4_2");
                element_1.innerText = "1p";
                element_2.innerText = "2p";
                element_3.innerText = "3p";
                element_4.innerText = "4p";
                element_1_2.innerText = " = " + array_1;
                element_2_2.innerText = " = " + array_2;
                element_3_2.innerText = " = " + array_3;
                element_4_2.innerText = " = " + array_4;
                Name_Color("Rule_4_Text_1");
                Name_Color("Rule_4_Text_2");
                Name_Color("Rule_4_Text_3");
                Name_Color("Rule_4_Text_4");
            }
            else{}
        }
    }
    else if (Rules.options[Rules.selectedIndex].value == "Rules_4"){    //듀컨룰
        var array_Rule = Rule_Duel[Math.floor(Math.random() * Rule_Duel.length)];
        var element = document.getElementById("Check_Text");
        element.innerText = array_Rule;
            if(array_Rule == '강제전'){
                var array = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var element = document.getElementById("Rule_1_Text_1");
                element.innerText = array;
                Name_Color("Rule_1_Text_1");
            }
            else if(array_Rule == '이 캐릭들 금지에요 (7히든+7전설)'){
                while(1){
                var array_legend_1 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_2 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_3 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_4 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_5 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_6 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_7 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_hidden_1 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_2 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_3 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_4 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_5 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_6 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_7 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                if(array_legend_1 !== array_legend_2 && array_legend_1 !== array_legend_3 && array_legend_1 !== array_legend_4 && array_legend_1 !== array_legend_5 &&
                   array_legend_1 !== array_legend_6 && array_legend_1 !== array_legend_7 && array_legend_2 !== array_legend_3 && array_legend_2 !== array_legend_4 &&
                   array_legend_2 !== array_legend_5 && array_legend_2 !== array_legend_6 && array_legend_2 !== array_legend_7 && array_legend_3 !== array_legend_4 &&
                   array_legend_3 !== array_legend_5 && array_legend_3 !== array_legend_6 && array_legend_3 !== array_legend_7 && array_legend_4 !== array_legend_5 &&
                   array_legend_4 !== array_legend_6 && array_legend_4 !== array_legend_7 && array_legend_5 !== array_legend_6 && array_legend_5 !== array_legend_7 &&
                   array_legend_6 !== array_legend_7 &&
                   array_hidden_1 !== array_hidden_2 && array_hidden_1 !== array_hidden_3 && array_hidden_1 !== array_hidden_4 && array_hidden_1 !== array_hidden_5 &&
                   array_hidden_1 !== array_hidden_6 && array_hidden_1 !== array_hidden_7 && array_hidden_2 !== array_hidden_3 && array_hidden_2 !== array_hidden_4 &&
                   array_hidden_2 !== array_hidden_5 && array_hidden_2 !== array_hidden_6 && array_hidden_2 !== array_hidden_7 && array_hidden_3 !== array_hidden_4 &&
                   array_hidden_3 !== array_hidden_5 && array_hidden_3 !== array_hidden_6 && array_hidden_3 !== array_hidden_7 && array_hidden_4 !== array_hidden_5 &&
                   array_hidden_4 !== array_hidden_6 && array_hidden_4 !== array_hidden_7 && array_hidden_5 !== array_hidden_6 && array_hidden_5 !== array_hidden_7 &&
                   array_hidden_6 !== array_hidden_7)break;
                }
                var element_1 = document.getElementById("Rule_2_Text_1_3");
                var element_2 = document.getElementById("Rule_2_Text_2_3");
                element_1.innerHTML = array_legend_1 + "<br>";
                element_1.innerHTML += array_legend_2 + "<br>";
                element_1.innerHTML += array_legend_3 + "<br>";
                element_1.innerHTML += array_legend_4 + "<br>";
                element_1.innerHTML += array_legend_5 + "<br>";
                element_1.innerHTML += array_legend_6 + "<br>";
                element_1.innerHTML += array_legend_7;
                element_2.innerHTML = array_hidden_1 + "<br>";
                element_2.innerHTML += array_hidden_2 + "<br>";
                element_2.innerHTML += array_hidden_3 + "<br>";
                element_2.innerHTML += array_hidden_4 + "<br>";
                element_2.innerHTML += array_hidden_5 + "<br>";
                element_2.innerHTML += array_hidden_6 + "<br>";
                element_2.innerHTML += array_hidden_7;
                Name_Color("Rule_2_Text_1_3");
                Name_Color("Rule_2_Text_2_3");
            }
            else if(array_Rule == '이 캐릭들 필수에요 (4히든+4전설)'){
                while(1){
                var array_legend_1 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_2 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_3 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_legend_4 = Rule_Legend_All[Math.floor(Math.random() * Rule_Legend_All.length)];
                var array_hidden_1 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_2 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_3 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                var array_hidden_4 = Rule_Hidden_All[Math.floor(Math.random() * Rule_Hidden_All.length)];
                if(array_legend_1 !== array_legend_2 && array_legend_1 !== array_legend_3 && array_legend_1 !== array_legend_4 && array_legend_2 !== array_legend_3 &&
                   array_legend_2 !== array_legend_4 && array_legend_3 !== array_legend_4 && array_hidden_1 !== array_hidden_2 && array_hidden_1 !== array_hidden_3 && 
                   array_hidden_1 !== array_hidden_4 && array_hidden_2 !== array_hidden_3 && array_hidden_2 !== array_hidden_4 && array_hidden_3 !== array_hidden_4)break;
                }
                var element_1 = document.getElementById("Rule_2_Text_1_3");
                var element_2 = document.getElementById("Rule_2_Text_2_3");
                element_1.innerHTML = array_legend_1 + "<br>";
                element_1.innerHTML += array_legend_2 + "<br>";
                element_1.innerHTML += array_legend_3 + "<br>";
                element_1.innerHTML += array_legend_4;
                element_2.innerHTML = array_hidden_1 + "<br>";
                element_2.innerHTML += array_hidden_2 + "<br>";
                element_2.innerHTML += array_hidden_3 + "<br>";
                element_2.innerHTML += array_hidden_4;
                Name_Color("Rule_2_Text_1_3");
                Name_Color("Rule_2_Text_2_3");
            }
            else if(array_Rule == '인생의 고도전'){
                var array_1 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_2 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_3 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var array_4 = Rule_Number[Math.floor(Math.random() * Rule_Number.length)];
                var element_1 = document.getElementById("Rule_4_Text_1");
                var element_1_2 = document.getElementById("Rule_4_Text_1_2");
                var element_2 = document.getElementById("Rule_4_Text_2");
                var element_2_2 = document.getElementById("Rule_4_Text_2_2");
                var element_3 = document.getElementById("Rule_4_Text_3");
                var element_3_2 = document.getElementById("Rule_4_Text_3_2");
                var element_4 = document.getElementById("Rule_4_Text_4");
                var element_4_2 = document.getElementById("Rule_4_Text_4_2");
                element_1.innerText = "1p";
                element_2.innerText = "2p";
                element_3.innerText = "3p";
                element_4.innerText = "4p";
                element_1_2.innerText = " = 5 + " + array_1;
                element_2_2.innerText = " = 5 + " + array_2;
                element_3_2.innerText = " = 5 + " + array_3;
                element_4_2.innerText = " = 5 + " + array_4;
                Name_Color("Rule_4_Text_1");
                Name_Color("Rule_4_Text_2");
                Name_Color("Rule_4_Text_3");
                Name_Color("Rule_4_Text_4");
            }
            else if(array_Rule == '지츠 다이스 룰'){
                while(1){
                var array_1 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_2 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_3 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                var array_4 = Rule_All[Math.floor(Math.random() * Rule_All.length)];
                if(array_1 !== array_2 && array_1 !== array_3 && array_1 !== array_4 && array_2 !== array_3 && array_2 !== array_4 && array_3 !== array_4)break;
            }
                var element_1 = document.getElementById("Rule_4_Text_1");
                var element_2 = document.getElementById("Rule_4_Text_2");
                var element_3 = document.getElementById("Rule_4_Text_3");
                var element_4 = document.getElementById("Rule_4_Text_4");
                element_1.innerText = array_1;
                element_2.innerText = array_2;
                element_3.innerText = array_3;
                element_4.innerText = array_4;
                Name_Color("Rule_4_Text_1");
                Name_Color("Rule_4_Text_2");
                Name_Color("Rule_4_Text_3");
                Name_Color("Rule_4_Text_4");
            }
            else if(array_Rule == '너의 상위는..?'){
                var array_1 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_2 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_3 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var array_4 = Rule_Number_2[Math.floor(Math.random() * Rule_Number_2.length)];
                var element_1 = document.getElementById("Rule_4_Text_1");
                var element_1_2 = document.getElementById("Rule_4_Text_1_2");
                var element_2 = document.getElementById("Rule_4_Text_2");
                var element_2_2 = document.getElementById("Rule_4_Text_2_2");
                var element_3 = document.getElementById("Rule_4_Text_3");
                var element_3_2 = document.getElementById("Rule_4_Text_3_2");
                var element_4 = document.getElementById("Rule_4_Text_4");
                var element_4_2 = document.getElementById("Rule_4_Text_4_2");
                element_1.innerText = "1p";
                element_2.innerText = "2p";
                element_3.innerText = "3p";
                element_4.innerText = "4p";
                element_1_2.innerText = " = " + array_1;
                element_2_2.innerText = " = " + array_2;
                element_3_2.innerText = " = " + array_3;
                element_4_2.innerText = " = " + array_4;
                Name_Color("Rule_4_Text_1");
                Name_Color("Rule_4_Text_2");
                Name_Color("Rule_4_Text_3");
                Name_Color("Rule_4_Text_4");
            }
            else{}     
    }
}
function Check(){
    Visibility_On("Check_Text");
    Random_Effect("Check_Text");
    var element = document.getElementById("Check_Text").innerText;
    if(element == '강제전'){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어 모두 하나의 상위를 강제로 가야한다. (나머지 상위는 자유)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
        Visibility_On("Button_1_1p");
        Fade_In_Button("Button_1_1p");
    }
    else if (element == '이 캐릭들 금지에요 (7히든+7전설)'){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어 모두 정해진 히든유닛, 전설유닛을 올리지 못한다. (보상으로 나오는 것도 금지, 상위재료로 쓰는 것도 금지)";
        Visibility_On("Check_Help");
        Fade_In_Text("Check_Help");
        Fade_In_Button("Button_2_1p");
        Fade_In_Button("Button_2_2p");
        Visibility_On("Button_2_1p");
        Visibility_On("Button_2_2p");
    }
    else if (element == '이 캐릭들 필수에요 (4히든+4전설)'){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "각 팀 (1p 2p & 3p 4p 플레이어는 정해진 히든유닛, 전설유닛을 필수로 만들어야 한다. (한명이 몰아서 만들기 가능)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
        Visibility_On("Button_2_1p");
        Visibility_On("Button_2_2p");
        Fade_In_Button("Button_2_1p");
        Fade_In_Button("Button_2_2p");
    }
    else if (element == '지츠 다이스 룰'){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어는 다이스를 굴려 정해진 상위를 높은 숫자를 뽑은 순서대로 원하는 상위를 강제로 가야한다. (나머지 상위는 자유)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
        if(People.options[People.selectedIndex].value == "People_2"){
            Visibility_On("Button_2_1p");
            Visibility_On("Button_2_2p");
            Fade_In_Button("Button_2_1p");
            Fade_In_Button("Button_2_2p");
        }
        else if(People.options[People.selectedIndex].value == "People_3"){
            Visibility_On("Button_3_1p");
            Visibility_On("Button_3_2p");
            Visibility_On("Button_3_3p");
            Fade_In_Button("Button_3_1p");
            Fade_In_Button("Button_3_2p");
            Fade_In_Button("Button_3_3p");
        }
        else {
            Visibility_On("Button_4_1p");
            Visibility_On("Button_4_2p");
            Visibility_On("Button_4_3p");
            Visibility_On("Button_4_4p");
            Fade_In_Button("Button_4_1p");
            Fade_In_Button("Button_4_2p");
            Fade_In_Button("Button_4_3p");
            Fade_In_Button("Button_4_4p");
        }
    }
    else if (element == '인생의 고도전'){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어 모두 정해진 고도 횟수만큼만 고도를 해야만 한다.";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
        if(People.options[People.selectedIndex].value == "People_1"){
            Visibility_On("Button_1_1p");
            Fade_In_Button("Button_1_1p");
        }
        else if(People.options[People.selectedIndex].value == "People_2"){
            Visibility_On("Button_2_1p");
            Visibility_On("Button_2_2p");
            Fade_In_Button("Button_2_1p");
            Fade_In_Button("Button_2_2p");
        }
        else if(People.options[People.selectedIndex].value == "People_3"){
            Visibility_On("Button_3_1p");
            Visibility_On("Button_3_2p");
            Visibility_On("Button_3_3p");
            Fade_In_Button("Button_3_1p");
            Fade_In_Button("Button_3_2p");
            Fade_In_Button("Button_3_3p");
        }
        else{
            Visibility_On("Button_4_1p");
            Visibility_On("Button_4_2p");
            Visibility_On("Button_4_3p");
            Visibility_On("Button_4_4p");
            Fade_In_Button("Button_4_1p");
            Fade_In_Button("Button_4_2p");
            Fade_In_Button("Button_4_3p");
            Fade_In_Button("Button_4_4p");
        }
    }
    else if (element == "꽝 (로로)"){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어 모두 '노불노초노영노제' 로 플레이한다. (상위를 올릴 수 없다.)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
    }
    else if (element == "기적! 신세계 보상치기"){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어 모두 2개의 보상중 하나를 선택해 그 보상으로 상위를 하나 올려야 한다. (모리아 전설 -> 페로나 히든 가능 , 변이나 강화재료로 사용은 불가능)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
    }
    else if (element == "악몽"){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "난이도 : 악몽";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
    }
    else if (element == "원딜전 마뎀"){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어 모두 마뎀 상위 하나만 가야한다. (나머지 상위는 불가능)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
    }
    else if (element == "원딜전 물뎀"){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어 모두 물뎀 상위 하나만 가야한다. (나머지 상위는 불가능)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
    }
    else if (element == "필수! 랜덤유닛 (max 10)"){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어 모두 랜덤유닛 도박을 해서 랜덤유닛을 뽑아야 한다. (랜덤유닛이 안나온다면 최소 10번 눌러야 한다)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
    }
    else if (element == "너의 상위는..?"){
        var element_help = document.getElementById("Check_Help");
        element_help.innerText = "플레이어는 정해진 숫자만큼의 상위를 올려야 한다. (4개는 4상위 또는 로로)";
        Fade_In_Text("Check_Help");
        Visibility_On("Check_Help");
        if(People.options[People.selectedIndex].value == "People_1"){
            Visibility_On("Button_1_1p");
            Fade_In_Button("Button_1_1p");
        }
        else if(People.options[People.selectedIndex].value == "People_2"){
            Visibility_On("Button_2_1p");
            Visibility_On("Button_2_2p");
            Fade_In_Button("Button_2_1p");
            Fade_In_Button("Button_2_2p");
        }
        else if(People.options[People.selectedIndex].value == "People_3"){
            Visibility_On("Button_3_1p");
            Visibility_On("Button_3_2p");
            Visibility_On("Button_3_3p");
            Fade_In_Button("Button_3_1p");
            Fade_In_Button("Button_3_2p");
            Fade_In_Button("Button_3_3p");
        }
        else{
            Visibility_On("Button_4_1p");
            Visibility_On("Button_4_2p");
            Visibility_On("Button_4_3p");
            Visibility_On("Button_4_4p");
            Fade_In_Button("Button_4_1p");
            Fade_In_Button("Button_4_2p");
            Fade_In_Button("Button_4_3p");
            Fade_In_Button("Button_4_4p");
        }
    }
}
function Rule_4(a){
    if(a == document.getElementById("Button_4_1p")){
        Visibility_On("Rule_4_Text_1");
        Visibility_On("Rule_4_Text_1_2");
        Fade_In_Start("Rule_4_Text_1");
        Fade_In_Start("Rule_4_Text_1_2");
    }
    if(a == document.getElementById("Button_4_2p")){
        Visibility_On("Rule_4_Text_2");
        Visibility_On("Rule_4_Text_2_2");
        Fade_In_Start("Rule_4_Text_2");
        Fade_In_Start("Rule_4_Text_2_2");
    }
    if(a == document.getElementById("Button_4_3p")){
        Visibility_On("Rule_4_Text_3");
        Visibility_On("Rule_4_Text_3_2");
        Fade_In_Start("Rule_4_Text_3");
        Fade_In_Start("Rule_4_Text_3_2");
    }
    if(a == document.getElementById("Button_4_4p")){
        Visibility_On("Rule_4_Text_4");
        Visibility_On("Rule_4_Text_4_2");
        Fade_In_Start("Rule_4_Text_4");
        Fade_In_Start("Rule_4_Text_4_2");
    }
}
function Rule_3(a){
    if(a == document.getElementById("Button_3_1p")){
        Visibility_On("Rule_3_Text_1");
        Visibility_On("Rule_3_Text_1_2");
        Fade_In_Start("Rule_3_Text_1");
        Fade_In_Start("Rule_3_Text_1_2");
    }
    if(a == document.getElementById("Button_3_2p")){
        Visibility_On("Rule_3_Text_2");
        Visibility_On("Rule_3_Text_2_2");
        Fade_In_Start("Rule_3_Text_2");
        Fade_In_Start("Rule_3_Text_2_2");
    }
    if(a == document.getElementById("Button_3_3p")){
        Visibility_On("Rule_3_Text_3");
        Visibility_On("Rule_3_Text_3_2");
        Fade_In_Start("Rule_3_Text_3");
        Fade_In_Start("Rule_3_Text_3_2");
    }
}
function Rule_2(a){
    var array_Rule = document.getElementById("Check_Text").innerText;
    if(array_Rule == '이 캐릭들 금지에요 (7히든+7전설)'){
        if(a == document.getElementById("Button_2_1p")){
            Visibility_On("Rule_2_Text_1_3");
            Visibility_On("Rule_2_Text_1_4");
            Fade_In_Start("Rule_2_Text_1_3");
            Fade_In_Start("Rule_2_Text_1_4");
         }
         if(a == document.getElementById("Button_2_2p")){
            Visibility_On("Rule_2_Text_2_3");
            Visibility_On("Rule_2_Text_2_4");
            Fade_In_Start("Rule_2_Text_2_3");
            Fade_In_Start("Rule_2_Text_2_4");
        }
    }
    else if (array_Rule == '이 캐릭들 필수에요 (4히든+4전설)'){
        if(a == document.getElementById("Button_2_1p")){
            Visibility_On("Rule_2_Text_1_3");
            Visibility_On("Rule_2_Text_1_4");
            Fade_In_Start("Rule_2_Text_1_3");
            Fade_In_Start("Rule_2_Text_1_4");
         }
         if(a == document.getElementById("Button_2_2p")){
            Visibility_On("Rule_2_Text_2_3");
            Visibility_On("Rule_2_Text_2_4");
            Fade_In_Start("Rule_2_Text_2_3");
            Fade_In_Start("Rule_2_Text_2_4");
        }
    }
    else{
        if(a == document.getElementById("Button_2_1p")){
            Visibility_On("Rule_2_Text_1");
            Visibility_On("Rule_2_Text_1_2");
            Fade_In_Start("Rule_2_Text_1");
            Fade_In_Start("Rule_2_Text_1_2");
        }
        if(a == document.getElementById("Button_2_2p")){
            Visibility_On("Rule_2_Text_2");
            Visibility_On("Rule_2_Text_2_2");
            Fade_In_Start("Rule_2_Text_2");
            Fade_In_Start("Rule_2_Text_2_2");
        }
    }        
}

function Rule_1(){
    Visibility_On("Rule_1_Text_1");
    Visibility_On("Rule_1_Text_1_2");
    Fade_In_Start("Rule_1_Text_1");
    Fade_In_Start("Rule_1_Text_1_2");
}



