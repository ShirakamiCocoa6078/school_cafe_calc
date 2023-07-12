const levelWunma = {
    '0':0,
    '1':0,
    '2':29,
    '3':58,
    '4':58,
    '5':87,
    '6':115
    }
    
    const own_weapon_level = {
    "떠오르는 천일 밤의 꿈" : {0:102,1:148,2:172,3:195,4:218,5:241,6:265},
    "방랑하는 저녁별" : {0:64,1:93,2:107,3:122,4:136,5:151,6:165},
    "제례의 악장" : {0:85,1:124,2:143,3:162,4:182,5:201,6:221},
    "음유시인의 악장" : {0:0,1:0,2:0,3:0,4:0,5:0,6:0},
    "마도 서론" : {0:72,1:105,2:122,3:138,4:154,5:171,6:187},
    "기타 무기(원소 마스터리에 영향이 없는 무기)" : {0:0,1:0,2:0,3:0,4:0,5:0,6:0}
    }
    
    const own_weapon_jaeryon ={
    "떠오르는 천일 밤의 꿈" : {1:32,2:40,3:48,4:56,5:64},
    "방랑하는 저녁별" : {1:0,2:0,3:0,4:0,5:0},
    "제례의 악장" : {1:0,2:0,3:0,4:0,5:0},
    "음유시인의 악장" : {1:0,2:0,3:0,4:0,5:0},
    "마도 서론" : {1:0,2:0,3:0,4:0,5:0},
    "기타 무기(원소 마스터리에 영향이 없는 무기)" : {1:0,2:0,3:0,4:0,5:0}
    }
    
    const notOwn_weapon={
    0:0,
    1:40,
    2:42,
    3:44,
    4:46,
    5:48
    }
    
    const nahida_star ={
    0:[0,0],
    1:[0,0],
    2:[0,0],
    3:[0,0],
    4:[100,160],
    5:[100,160],
    6:[100,160]}
    
    const another = {
    "2c":120,
    "3c":100,
    "4c":60,
    "5c":60,
    "6c":6,
    "7c":125,
    "8c":200,
    "9c":60,
    "10c":100,
    "11c":200,
    "12c":80,
    "13c":60
    }
    var PlusElement = {
    "checkedJunmu" : false,
    "HowManyUse" : 0,
    "firW" : 0,
    "SecW" : 0,
    "ThiW" : 0
    }
    //사이트에 표기할 내용
    /*
    나히다 기본(무기 제외) 성유물 필요 원마
    나히다 무기포함 성유물 필요 원마
    공풀치가능여부(도금/숲기) = O면 각각 부옵필요량
    원풀치가능여부(도금/숲기) = O면 각각 부옵필요량
    원원치가능여부(도금/숲기) = O면 각각 부옵필요량
    원원원필수여부(도금/숲기) = O면 각각 부옵필요량
    
    
    
    
    */
    function reloading(){
        //변수들 가져오기
        var NLevel = document.getElementById('Clevel').selectedIndex //나히다 레벨
        var SelectedW= document.getElementById('weapon-listbox').value //선택한 무기
        var WLevel= document.getElementById('WLevel').selectedIndex //무기의 레벨
        var WJaeryon= document.getElementById('JLevel').selectedIndex //무기의 재련도
        var NDolpa= document.getElementById('dolpa').selectedIndex //나히다 몇돌
        var Party1= document.getElementById('first').value //파티 2번
        var Party2= document.getElementById('second').value //파티 3번
        var Party3= document.getElementById('third').value //파티 4번
        var synergy = [Party1, Party2, Party3]
    
        //변수들 사용하기
        var party_synergy = 0
        if (Party1 === "ful" || Party2 === "ful" || Party3 === "ful") {
            party_synergy = 50;
        }
        var count = 0
        for (let i in synergy){
            if(synergy[i] == 'ful'){
                count++
            }
        }
        var minos_count = 3-count
        if(count==0){
            count++
        }
        var Checkedboxes = document.getElementsByName("etc");
        var checkedWunma = 0
        Checkedboxes.forEach((cb) => {
            if(cb.checked){
                checkedWunma += another[cb.value]
            }
        })
        var NLvlVal = levelWunma[NLevel]+party_synergy //나히다 기본 원마
        var SWV = own_weapon_level[SelectedW][WLevel] //선택한 무기의 레벨에서 오는 원마
        var OWJV = own_weapon_jaeryon[SelectedW][WJaeryon+1] //선택한 무기의 재련에서 오는 원마
        var OWJV2 = OWJV*count //나히다 전무 스킬에서 오는 원마
        var WValue = SWV+OWJV2 //무기 자체에서 오는 원마
    
        var normalWunma = NLvlVal+WValue //나히다의 평상시 원마
        var isit4dol = [nahida_star[NDolpa][0], nahida_star[NDolpa][1]] //1마리 마킹시, 4마리 이상 마킹시
        document.getElementById("Efirst").innerHTML = `나히다 기본(무기 제외) 성유물 필요 원소 마스터리 : ${1000-NLvlVal} 필요`
        document.getElementById("Esecond").innerHTML = `나히다 무기포함 성유물 필요 원소 마스터리 : ${1000-normalWunma} 필요`
        document.getElementById("Ethird").innerHTML = `상위 포함 1마리 마킹시 / 4마리 이상 마킹시 : ${1000-(normalWunma+isit4dol[0])} / ${1000-(normalWunma+isit4dol[1])} 필요`
        document.getElementById("Efourth").innerHTML = `상위 포함 체크조건 포함시 나히다의 원소 마스터리 = ${(normalWunma+isit4dol[0]+checkedWunma+(50*minos_count))} / ${(normalWunma+isit4dol[1]+checkedWunma)}`
        document.getElementById("Efifth").innerHTML = `공풀치 체크미포함(도금된 꿈/숲의 기억) = 부옵에서 ${1000-(normalWunma+isit4dol[0]+(50*minos_count))} / ${1000-(normalWunma+isit4dol[0])} 필요`
        document.getElementById("Esixth").innerHTML = `원풀치 체크미포함(도금된 꿈/숲의 기억) = 부옵에서 ${813-(normalWunma+isit4dol[0]+(50*minos_count))} / ${813-(normalWunma+isit4dol[0])} 필요`
        document.getElementById("Eseventh").innerHTML = `원원치 체크미포함(도금된 꿈/숲의 기억) = 부옵에서 ${626-(normalWunma+isit4dol[0]+(50*minos_count))} / ${626-(normalWunma+isit4dol[0])} 필요`
        document.getElementById("Eeighth").innerHTML = `원원원 체크미포함(도금된 꿈/숲의 기억) = 부옵에서 ${439-(normalWunma+isit4dol[0]+(50*minos_count))} / ${439-(normalWunma+isit4dol[0])} 필요`
        document.getElementById("Esip").innerHTML = `공풀치 체크포함(도금된 꿈/숲의 기억) = 부옵에서 ${1000-(normalWunma+isit4dol[0]+checkedWunma+(50*minos_count))} / ${1000-(normalWunma+isit4dol[0]+checkedWunma)} 필요`
        document.getElementById("Esipil").innerHTML = `원풀치 체크포함(도금된 꿈/숲의 기억) = 부옵에서 ${813-(normalWunma+isit4dol[0]+checkedWunma+(50*minos_count))} / ${813-(normalWunma+isit4dol[0]+checkedWunma)} 필요`
        document.getElementById("Esipe").innerHTML = `원원치 체크포함(도금된 꿈/숲의 기억) = 부옵에서 ${626-(normalWunma+isit4dol[0]+checkedWunma+(50*minos_count))} / ${626-(normalWunma+isit4dol[0]+checkedWunma)} 필요`
        document.getElementById("Esipsam").innerHTML = `원원원 체크포함(도금된 꿈/숲의 기억) = 부옵에서 ${439-(normalWunma+isit4dol[0]+checkedWunma+(50*minos_count))} / ${439-(normalWunma+isit4dol[0]+checkedWunma)} 필요`
    }