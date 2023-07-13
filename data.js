const food_list = {
    "ガリガリソーダ":150,
    "クリームソーダ":200,
    "コーラ":50,
    "カルピス":50,
    "レモン":50,
    "リンゴ":50,
    "みかん":50,
    "ファンタ":50,
    "スーパーカップ":100,
    "うずまきソフト":100,
    "ガリガリ君":100,
    "モナ王":100
}
const countNum = 0;
function count(type, num)  {
    // 결과를 표시할 element
    const resultElement = document.getElementById(`value${num}`);
    
    // 현재 화면에 표시된 값
    let number = resultElement.innerText;
    
    // 더하기/빼기
    if(type.substr(0,4) === 'plus' || type === "garigari_plus" || type === "cream_plus"){
      number = parseInt(number) + 1;
    }else if(type.substr(0,5) === 'minus' || type === "garigari_minus" || type === "cream_minus")  {
      if(number<=0){
        {}
      }else{
        number = parseInt(number) - 1;
      }
    }
    
    // 결과 출력
    resultElement.innerText = number;
  }