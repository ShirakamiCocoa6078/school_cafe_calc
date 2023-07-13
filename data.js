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
const food_num = {
    "ガリガリソーダ":0,
"クリームソーダ":0,
  "コーラ":0,
  "カルピス":0,
  "レモン":0,
  "リンゴ":0,
  "みかん":0,
  "ファンタ":0,
  "スーパーカップ":0,
  "うずまきソフト":0,
  "ガリガリ君":0,
  "モナ王":0
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
function order(){
  const resultElement = {
  "value1":0,
  "value2":0,
    "value3":0,
    "value4":0,
    "value5":0,
    "value6":0,
    "value7":0,
    "value8":0,
    "value9":0,
    "value10":0,
    "value11":0,
    "value12":0,
}
  for(var i = 1; i<=12; i++){
    resultElement[`value${i}`] = Number(document.getElementById(`value${i}`).innerText)
  }
  for(const key in resultElement){
    if(resultElement[key] === 0){
      delete resultElement[key]
    }
  }
  for(const key in resultElement){
    console.log(`${key} : ${resultElement[key]}`)
  }
  console.log(resultElement)

}