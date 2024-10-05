// 1~4 중 랜덤한 초 후에 "skillActivated" 라는 log 메시지 출력과 true를 반환하는 함수
const skillActivate = () => {
  return new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 4) + 1;
    console.log(`${randomTime}초`);
    setTimeout(() => {
      console.log("skillActivated");
      resolve(true);
    }, randomTime * 1000);
  });
};

// 1초마다 "working"라는 log 메시지를 출력하며,
// skillActivate 의 true 반환을 기다렸다가 isActivated가 true가 되면 log 메시지를 출력하고 종료
const work = async () => {
  let isActivated = false;
  const workingInterver = setInterval(() => {
    console.log("working");
  }, 1000);
  isActivated = await skillActivate();
  if (isActivated) {
    console.log("isActivated");
    clearInterval(workingInterver);
  }
};

work();
