# something-new


## 링크 정리

|     이름     | 링크 |
| -------------- | ------ |
| 디자인시안 (피그마) | https://www.figma.com/file/qnwnarfRMd074nSMPwweXz/%EC%8D%B8%EB%9D%B5-App-Design?node-id=0%3A1 |
| 썸띵 (웹) | https://something.netlify.app/ |
| 일정 프로젝트 간판 | https://github.com/sungkuk5420/something-new/projects/1 |


## 프로젝트 인원

| 이름 | 포지션        | 
| ------- | ----------------------- |
| 김성국 | 개발 총괄 ・ 서버 개발 ・ 인프라 설정 |
| 안동현 | 디자인 총괄 |
| 이주열 | 기능 개발  |
| 서현동 | 웹화면 퍼블리싱 |
| 박재홍 | 웹화면 퍼블리싱 |
| 박성진 | 웹화면 퍼블리싱 |
| 김예나 | UI ・ UX 디자인 |
| 우종규 | 기획 ・ 디자인 |

## 페이지 리스트업

| 분류 | 페이지        | 담당자      | 완료여부 |
| ------- | ---------- | ---------------- | --- |
| 스플레시 | 스플래시  | 김성국 | X |
| 로그인 | 이메일로 로그인 | 김성국 | O |
| 회원가입 | 이메일 입력 | 김성국 | O |
| 회원가입 | 비밀번호 | 김성국 | O |
| 회원가입 | 성별 | 이승태 | O |
| 회원가입 | 위치 | 이승태 | O |
| 회원가입 | 출생년도 | 이승태 | O |
| 회원가입 | 닉네임 | 이승태 | O |
| 회원가입 | 프로필 사진 | 이승태 | O |
| 컴포넌트 | 메인 하단 메뉴 | 이승태 | O |
| 메인 | 밀당	 | ---------------- | X | 
| 참여목록 | 관심목록	 | ---------------- | X |
| 참여목록 | 좋아요 없을때 / 못받았을때	 | ---------------- | X |
| 채팅 | 목록이 없을때	 | ---------------- | X |
| 채팅 | 채팅리스트	 | ---------------- | X |
| 채팅 | 채팅창	 | ---------------- | X |
| 채팅 | 사진 업로드	 | ---------------- | X |
| 채팅 | 나가기 / 알림끄기	 | ---------------- | X | 
| 내정보 | 메인 | 이승태 | O |
| 프로필관리 | 취미 모달 | 이승태 | O |
| 프로필관리 | 성격 모달 | 이승태 | O |
| 프로필관리 | 음주 모달 | 이승태  | O |
| 프로필관리 | 흡연 모달 | 이승태  | O |
| 프로필관리 | 키 수정 모달 | 이승태 | O |
| 프로필관리 | 위치 수정 모달 | 이승태 | O |
| 프로필관리 | 한 줄 소개 | 박성진 | X |
| 프로필관리 | 성별 수정 모달 | 아직 디자인 안나옴 | X |
| 프로필관리 | 앨범 관리 | 아직 디자인 안나옴 | X |
| 메인 | 상세정보	 | 이승태 | O |
| 프로필관리 | 프로필관리 | 이승태 | O |
| 관심목록 | 내가 좋아한 카드	 | 이승태 | O |
| 관심목록 | 나를 좋아한 카드	 | 이승태 | O |
| 관심목록 | 서로 매칭된 카드	 | 이승태 | O |


## 프로젝트 실행방법
```
1.모듈들 설치
npm install

2.퀘이샤 설치
npm install -g @quasar/cli@1.0.0

3.프로젝트 실행
quasar dev
```

## UI프레임워크는 vant를 채택
```
홈페이지
https://youzan.github.io/vant/#/en-US/

깃허브
https://github.com/youzan/vant
```


## node sass 관련 에러날경우
```
npm rebuild node-sass
```