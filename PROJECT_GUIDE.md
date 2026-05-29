🐷 돈독(Don-Doc) - 완전 개발 가이드
"내 소비의 주치의, 돼지 건강으로 보는 나의 재정 상태"

📋 목차

프로젝트 소개
핵심 컨셉
기술 스택
팀 구성 및 역할
프로젝트 일정
개발 환경 셋업
데이터베이스 구조
컴포넌트 아키텍처
상세 구현 가이드
평가 기준

프로젝트 소개
프로젝트명
돈독(Don-Doc) - "내 소비의 주치의, 돼지 건강으로 보는 나의 재정 상태"
프로젝트 개요
돈독은 게이미피케이션을 통해 가계부 관리를 재미있게 만드는 웹 애플리케이션입니다.
사용자의 소비 패턴을 돼지의 체형 변화와 집의 업그레이드로 직관화하여, 즐겁게 지출을 관리할 수 있습니다.
프로젝트 기간

일정: 2026.04.07(화) ~ 2026.04.13(월)
기간: 5일
팀 규모: 5명

프로젝트 목표

수업시간에 배운 기술 요소들을 실제 서비스에 적용해 봄으로써 각 개인의 프로그래밍 능력 향상
서비스(프로젝트) 개발 시 거치게 되는 기획, 설정, 코딩, 테스트, 배포의 각 단계를 실제 경험해 봄으로써 각 기회가 됨
팀 프로젝트는 진행 시 팀원 간의 협력 및 충돌이 발생하기마주시고, 조정과정 경험
프로그램 소스의 형상관리 기법 배양
향후 진행될 파이널 프로젝트의 진행 절차에 대한 구체화

핵심 컨셉

1. 돼지 상태 시스템 (Pig State System)
   소비 기준점 설정

사용자 소득 대비 지출 희망 비율(%)을 설정
예: 월 소득 3,000,000원 × 50% = 1,500,000원 (월 목표 지출액)
일일 목표 지출액 = 월 목표 지출액 ÷ 30

일일 피드백 (먹이)

좋은 먹이: 일일 권장 지출 이하로 소비 → 돼지가 건강해지고 황금빛으로 변함 ✨
나쁜 먹이: 기준 초과 소비 → 돼지가 마르거나, 병들거나, 지친 모습으로 변함 😰

돼지 상태 10단계
단계지출률상태이모지100-70%완벽한 재정 관리😄970-80%우수한 상태😊880-90%좋은 상태🙂790-100%평범한 상태😐6100-120%주의 필요😕5120-150%경고😟4150-180%위험😰3180-200%심각🤒2200-250%매우 위험🤢1250%+위기 상황💀 2. 월간 초기화 및 보상 (집 업그레이드)
월간 결산

한 달이 지나면 돼지는 초기화됨
그달의 평균 성적이 좋으면 '돼지의 집' 환경이 개선됨

집 업그레이드 시스템

1단계: 흙바닥 → 2단계: 오두막 → 3단계: 집 → 4단계: 빌라 → 5단계: 대저택
누적되어 사용자의 장기적인 소비 개선 흐름을 증명함

3. 게이미피케이션 요소

일일 피드백을 '먹이'로, 한 달의 성과를 '집 업그레이드'로 연결
사용자의 지속적인 참여 유도

기술 스택
필수 기술

Frontend: Vue 3 (Composition API)
Build Tool: Vite
State Management: Pinia
Routing: Vue Router
HTTP Client: Axios
Database: JSON Server (개발용)
Styling: CSS3

선택 기술 (추가 구현 시)

Design Tools: Figma, Draw.io
Styling Framework: Tailwind CSS, Bootstrap 5
Icon Library: FontAwesome

팀 구성 및 역할
이름역할담당 영역사용 브랜치유현 (팀장)프로젝트 매니저GitHub 관리, 전체 통합, 발표develop, mainAUI 개발자 1NavBar, 공통 컴포넌트feature/navbarBHomePage 담당HomePage.vuefeature/home-pageCAccountPage 담당AccountPage, AccountHeaderBar, AddLogfeature/account-pageDStatisticsPage 담당StatisticsPage, DailyLog, CalendarLog, MonthlyLog, Summaryfeature/statisticsESettings 담당SettingPage.vuefeature/settings

프로젝트 일정
1일차 (4/7): 프로젝트 기반 다지기

✅ 팀 협력 체계 확립
✅ GitHub 레포지토리 생성 및 팀원 초대
✅ Vite + Vue 3 프로젝트 생성
✅ 프로젝트 폴더 구조 완성
✅ Vue Router 설정
✅ Pinia 스토어 초기 설정
✅ JSON-Server 실행 확인
✅ db.json 데이터 구조 설계

2일차 (4/8): 기본 구조 구현

✅ 라우터 기본 설정
✅ 페이지 뼈대 생성 (HomePage, AccountPage, StatisticsPage, SettingPage)
✅ NavBar 컴포넌트 구현
✅ 각자 브랜치에서 기본 레이아웃 작업

3일차 (4/9): 핵심 기능 구현

✅ Pinia 스토어 완성 (fetchProfile, fetchRecords, addRecord 등)
✅ 돼지 시스템 composable 구현
✅ HomePage 대시보드 완성
✅ 거래 추가/수정/삭제 기능

4일차 (4/10): 고도화 및 상세 기능

✅ AccountPage에서 거래 관리
✅ StatisticsPage에서 통계 조회
✅ 날짜/카테고리별 필터링
✅ 월간 결산 기능
✅ 반응형 디자인 최적화

5일차 (4/11 또는 4/13): 마무리 및 발표

✅ 전체 기능 통합 및 버그 수정
✅ README 및 문서 작성
✅ Git 히스토리 정리
✅ 발표 자료 준비
✅ 프로젝트 발표

개발 환경 셋업
사전 요구사항

Node.js v18.x 이상
npm v9.x 이상
Git

초기 셋업 (팀장이 주도)

1. GitHub 레포지토리 생성
   bash# GitHub 웹사이트에서:

# 1. https://github.com/new 접속

# 2. Repository name: donDoc

# 3. Public 선택

# 4. Add .gitignore → Node 선택

# 5. Create repository

2. 로컬 클론
   bashcd ~/Desktop
   git clone https://github.com/youhyun010615/donDoc.git donDoc
   cd donDoc
3. Vite 프로젝트 생성
   bashnpm create vite@latest . -- --template vue

# 질문:

# ✔ Project name: › . (점 입력)

# ✔ Select a framework: › Vue

# ✔ Select a variant: › JavaScript

npm install
npm install vue-router axios pinia 4. 폴더 구조 생성
bashmkdir -p src/components/common
mkdir -p src/components/pages
mkdir -p src/composables
mkdir -p src/stores
mkdir -p src/router
mkdir -p src/assets/styles
mkdir -p src/assets/images 5. 팀원들 초대

GitHub Settings → Collaborators → Add people
각 팀원의 깃허브 계정 추가

팀원들의 셋업
bash# 1. 레포 클론
git clone https://github.com/youhyun010615/donDoc.git donDoc
cd donDoc

# 2. 의존성 설치

npm install

# 3. 자신의 작업 브랜치 생성

git checkout -b feature/[your-feature-name]

# 4. 개발 서버 실행

npm run dev

# (다른 터미널)

npx json-server db.json --port 3000

데이터베이스 구조
db.json 스키마
profile (사용자 프로필)
json{
"id": "1",
"userName": "기본사용자",
"monthlyIncome": 3000000,
"targetExpenseRatio": 50,
"currentPigLevel": 5,
"houseLevel": 1,
"createdAt": "2026-04-07"
}
incomeCategories (수입 카테고리)
json{
"id": "income_001",
"name": "월급",
"icon": "💰",
"type": "income"
}
expenseCategories (지출 카테고리)
json{
"id": "expense_001",
"name": "식비",
"icon": "🍔",
"type": "expense"
}
records (거래 내역)
json{
"id": "rec_001",
"userId": "1",
"date": "2026-04-07",
"type": "expense",
"category": "식비",
"amount": 15000,
"memo": "점심 김밥",
"createdAt": "2026-04-07T12:30:00Z"
}
dailyStatus (일일 상태)
json{
"id": "daily_001",
"userId": "1",
"date": "2026-04-07",
"totalExpense": 52500,
"pigState": 7,
"feedbackMessage": "평범한 상태. 목표 달성이 가능합니다."
}
monthlyHistory (월간 결산)
json{
"id": "month_001",
"userId": "1",
"month": "2026-03",
"avgExpenseRatio": 48,
"houseUpgrade": true,
"newHouseLevel": 2,
"totalExpense": 4500000,
"completedAt": "2026-04-01"
}
API 엔드포인트
GET /profile 사용자 프로필 조회
PUT /profile/:id 프로필 수정

GET /incomeCategories 수입 카테고리 조회
GET /expenseCategories 지출 카테고리 조회

GET /records 거래 조회
POST /records 거래 추가
PUT /records/:id 거래 수정
DELETE /records/:id 거래 삭제

GET /dailyStatus 일일 상태 조회
GET /monthlyHistory 월간 결산 조회

컴포넌트 아키텍처
전체 구조
App.vue (루트)
├── NavBar.vue (공통 네비게이션)
└── RouterView
├── HomePage.vue
│ └── 대시보드, 오늘의 돼지 상태, 통계
├── AccountPage.vue
│ ├── AccountHeaderBar.vue
│ ├── AddLog.vue (거래 추가)
│ └── RouterView (중첩)
├── StatisticsPage.vue
│ ├── DailyLog.vue (일일 로그)
│ ├── CalendarLog.vue (캘린더)
│ ├── MonthlyLog.vue (월간 요약)
│ └── Summary.vue (요약 통계)
└── SettingPage.vue
└── 사용자 설정, 프로필 관리
각 컴포넌트 책임
컴포넌트담당자역할NavBar.vueA상단 네비게이션 (홈, 계정, 통계, 설정)HomePage.vueB메인 대시보드, 돼지 상태 표시, 오늘 통계AccountPage.vueC계정 관리, 거래 추가/수정AccountHeaderBar.vueC계정 페이지 헤더AddLog.vueC거래 추가 폼StatisticsPage.vueD통계 페이지DailyLog.vueD일일 로그 표시CalendarLog.vueD달력 형식 로그MonthlyLog.vueD월별 요약Summary.vueD종합 통계SettingPage.vueE사용자 설정

상세 구현 가이드

1. Pinia 스토어 (useBudgetStore.js)
   State

profile: 사용자 프로필
records: 거래 내역
incomeCategories: 수입 카테고리
expenseCategories: 지출 카테고리
currentMonth: 현재 월
loading: 로딩 상태
error: 에러 메시지

Getters (Computed)

monthlyRecords: 이번 달 거래
todayRecords: 오늘의 거래
totalExpenseThisMonth: 월 지출액
totalIncomeThisMonth: 월 수입액
todayExpense: 오늘 지출액
todayIncome: 오늘 수입액
monthlyNetIncome: 월 순수익
todayNetIncome: 오늘 순수익

Actions

fetchProfile(): 프로필 조회
fetchIncomeCategories(): 수입 카테고리 조회
fetchExpenseCategories(): 지출 카테고리 조회
fetchRecords(userId): 거래 조회
addRecord(newRecord): 거래 추가
updateRecord(id, updatedRecord): 거래 수정
deleteRecord(id): 거래 삭제
updateProfile(updates): 프로필 수정

2. Router 설정 (src/router/index.js)
   javascriptroutes = [
   { path: '/', name: 'Home', component: HomePage },
   { path: '/account', name: 'Account', component: AccountPage },
   { path: '/statistics', name: 'Statistics', component: StatisticsPage },
   { path: '/settings', name: 'Settings', component: SettingPage }
   ]
3. 핵심 Composable (usePigSystem.js)
   지출 비율 계산
   javascriptexpenseRatio = (오늘 총 지출 / 일일 권장 지출) × 100
   돼지 상태 결정

비율에 따라 1~10 단계 결정

피드백 메시지

각 단계별 격려 메시지 제공

4. Git 브랜치 전략 (Git Flow)
   main (배포용, 보호됨)
   ↓
   develop (통합 브랜치)
   ├─ feature/navbar (A)
   ├─ feature/home-page (B)
   ├─ feature/account-page (C)
   ├─ feature/statistics (D)
   └─ feature/settings (E)
   작업 프로세스

develop에서 최신 코드 받기: git pull origin develop
자신의 브랜치 생성: git checkout -b feature/[name]
작업 후 커밋: git commit -m "feat: [설명]"
푸시: git push origin feature/[name]
GitHub에서 Pull Request 생성
팀장이 코드 리뷰 후 병합

평가 기준

1. 프로젝트 완성도 (40점)
   1-1. 기능 구현 (20점)

✅ 회계부 기본 기능 (CRUD): 8점

거래 추가, 조회, 수정, 삭제 정상 작동
API 연동 정상

✅ 돼지 시스템: 8점

지출률에 따른 돼지 상태 정상 계산
피드백 메시지 표시
애니메이션/시각적 표현

✅ 월간 결산/집 업그레이드: 4점

월별 데이터 집계
집 레벨 업그레이드 로직

1-2. 데이터 관리 (10점)

✅ JSON-Server 정상 구동: 4점
✅ Pinia 스토어 구현: 3점
✅ 상태 관리 정상 작동: 3점

1-3. UI/UX (10점)

✅ 네비게이션 기능: 3점
✅ 반응형 디자인: 3점
✅ 사용자 경험 (직관성, 편의성): 4점

2. 기술 스택 및 코드 품질 (30점)
   2-1. 기술 활용 (15점)

✅ Vue 3 Composition API: 3점
✅ Vue Router: 3점
✅ Pinia: 3점
✅ Axios: 3점
✅ JSON-Server: 3점

2-2. 코드 품질 (15점)

✅ 코드 구조 및 가독성: 5점

함수 분리, 변수명 명확성
주석 및 문서화

✅ 에러 처리: 5점

예외 처리 구현
사용자 피드백

✅ 성능 최적화: 5점

불필요한 렌더링 최소화
효율적인 데이터 처리

3. 협업 및 프로세스 (20점)
   3-1. Git 관리 (10점)

✅ 브랜치 전략 준수: 3점
✅ 커밋 메시지 품질: 3점
✅ Pull Request 및 코드 리뷰: 4점

3-2. 팀 협력 (10점)

✅ 역할 분담 및 일정 준수: 5점
✅ 커뮤니케이션 및 문제 해결: 5점

4. 문서화 및 발표 (10점)
   4-1. 문서 (5점)

✅ README 및 프로젝트 설명서: 2점
✅ API 문서: 2점
✅ 설치 및 실행 가이드: 1점

4-2. 발표 (5점)

✅ 프로젝트 설명 명확성: 2점
✅ 기술 설명 이해도: 2점
✅ 데모 및 시연: 1점

5. 추가 기능/고도화 (보너스)

✅ 차트/그래프 시각화: +3점
✅ 통계 분석 기능: +3점
✅ 알림/리마인더 기능: +2점
✅ 데이터 내보내기 (CSV/PDF): +2점
✅ 테마 커스터마이징: +2점

총점 계산
기본점수: 40 + 30 + 20 + 10 = 100점
보너스: 최대 12점
최종점수: 100 + (보너스) = 112점 (상한선 100점)

평가 체크리스트
기능 체크리스트

HomePage에서 오늘의 돼지 상태 표시
지출률에 따라 돼지 상태 변함 (1~10단계)
거래 추가 기능 정상 작동
거래 조회 기능 정상 작동
거래 수정 기능 정상 작동
거래 삭제 기능 정상 작동
카테고리별 필터링 정상 작동
날짜별 필터링 정상 작동
월간 결산 계산 정상
집 업그레이드 로직 정상

기술 체크리스트

Vue 3 Composition API 사용
Vue Router 동작
Pinia 스토어 연동
Axios API 호출
JSON-Server 작동
반응형 디자인 (모바일/데스크톱)

협업 체크리스트

GitHub 레포 생성
팀원들 초대
브랜치 생성 및 관리
Pull Request 생성
코드 리뷰 진행
커밋 메시지 규칙 준수

문서 체크리스트

README.md 작성
설치 가이드 작성
API 문서 작성
컴포넌트 설명 작성
발표 자료 준비

커밋 메시지 규칙
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 추가/수정
style: 코드 포맷팅
refactor: 코드 구조 개선
chore: 프로젝트 설정, 패키지 업데이트

예시:
feat: add pig state calculation logic
fix: resolve category filter bug
docs: update README with setup guide
refactor: separate store into modules

참고 자료
공식 문서

Vue 3 공식 문서
Vite 공식 문서
Pinia 공식 문서
Vue Router 공식 문서
Axios 공식 문서
JSON Server GitHub

유용한 리소스

Vue 3 Composition API 튜토리얼
Pinia 상태 관리
REST API 설계 가이드

주의사항
필수 준수 사항

Node 버전 통일

모든 팀원이 v18.x 이상 사용
node --version으로 확인

의존성 동기화

새 패키지 설치 시 반드시 npm install 후 커밋
package-lock.json도 함께 커밋

환경 변수 관리

.env.local 파일은 .gitignore에 추가
공유해야 하는 설정은 .env.example 작성

데이터베이스 초기화

db.json은 항상 최신 상태 유지
임시 테스트 데이터는 커밋하지 않기

코드 리뷰

PR 생성 후 최소 1명 이상의 리뷰 필수
피드백 반영 후 병합

일정 변경 및 대응
예상 이슈 및 대응책
API 응답 지연

JSON-Server 재시작
브라우저 개발자 도구에서 네트워크 탭 확인

컴포넌트 렌더링 오류

콘솔 에러 메시지 확인
부모-자식 props 전달 확인

깃 충돌

먼저 git pull origin develop
충돌 파일 수동 병합
git add 후 git commit

성능 저하

Vue DevTools로 컴포넌트 성능 측정
불필요한 watch 제거
컴포넌트 분할 고려

최종 체크리스트
발표 전날에 다시 한번 확인:
[ ] 모든 기능 동작 테스트 완료
[ ] 모바일/태블릿 반응형 확인
[ ] 콘솔 에러 없음
[ ] 깃 히스토리 정리
[ ] README 완성
[ ] 발표 자료 준비
[ ] 팀원들과 역할 확인
[ ] 데모 환경 점검 (npm run dev, json-server)

마무리
축하합니다! 🎉
이 문서를 참고하여 돈독 프로젝트를 성공적으로 완성하길 바랍니다.
"내 소비의 주치의, 돼지 건강으로 보는 나의 재정 상태"
행운을 빕니다! 🐷✨

제작: 유현 (팀장)
기간: 2026.04.07 ~ 2026.04.13
팀: 5명
