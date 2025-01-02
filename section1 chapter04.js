// 1. 변수
let age;

age = 30;

// 2. 상수
const birth = "2001.10.05"

// 3. 변수 명명규칙
// 3-1. $, _ 제외한 기호는 사용 불가
let $_name;

// 3-2. 숫자로 시작 불가
let name1;
let $2name;


// 3-3. 예약어를 사용 불가
// let let or let if 등 사용 불가

// 4. 변수 명명 가이드 - 구체적으로로
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
