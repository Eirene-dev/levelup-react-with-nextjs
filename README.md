
# LevelUp-React-with-Nextjs
## 프로젝트 소개
"LevelUp-React-with-Nextjs"는 Next.js를 사용하여 라우팅 및 렌더링에 대한 다양한 기법을 탐구하고 시현하는 예제 프로젝트입니다. 이 프로젝트는 Next.js의 다양한 기능을 활용하여 현대적인 웹 애플리케이션 개발의 핵심 측면을 심도 있게 다루고 있습니다.

## 라이브 데모
이 프로젝트의 실제 동작은 [https://levelup-react-with-nextjs-practice.vercel.app](https://levelup-react-with-nextjs-practice.vercel.app)에서 확인할 수 있습니다. 여기서 프로젝트의 기능들을 실시간으로 체험하고 인터페이스와 상호작용을 경험할 수 있습니다.

## 기술 스택
이 프로젝트는 다음과 같은 기술 스택을 사용합니다:

- **Next.js**: 현대적인 웹 애플리케이션을 위한 리액트 기반의 프레임워크
- **타입스크립트**: 자바스크립트에 타입을 추가하여 더 안정적인 코드 작성을 가능하게 하는 언어
- **리액트**: 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리

### 추가적으로 사용된 라이브러리:
- **@heroicons/react**: 간결한 SVG 아이콘 컬렉션
- **@tailwindcss/typography**: 테일윈드CSS를 위한 타이포그래피 플러그인
- **@tailwindcss/forms**: 테일윈드CSS를 위한 폼 스타일링 플러그인
- **styled-components**: 컴포넌트 레벨에서의 스타일링을 위한 CSS-in-JS 라이브러리
- **clsx**: 클래스 이름을 결합하기 위한 유틸리티
- **ms@3.0.0-canary.1**: 시간을 쉽게 파싱하고 형식화하기 위한 라이브러리
- **@types/ms**: 'ms' 라이브러리의 타입스크립트 타입 정의
- **use-count-up**: 숫자 카운트 애니메이션을 위한 React 훅
- **date-fns**: 날짜 처리를 위한 JavaS자바스크립트cript 라이브러리


## 설치 및 실행 방법
1. 필요한 소프트웨어: Node.js, npm
2. 저장소 복제
3. 의존성 설치
   ```
   npm install
   ```
4. 로컬 서버 실행
   ```
   npm run dev
   ```
5. 브라우저에서 `http://localhost:3000` 접속



## 기능 설명

### 라우팅: 기법
- **라우팅 기본**: 파일 시스템 기반 라우팅의 기본 원리와 사용 방법
- **동적 라우팅**: 동적 URL을 활용한 라우팅 방법
- **라우팅 그룹**: URL 경로에 영향을 주지 않으면서 라우트를 효율적으로 조직화
- **병렬 라우팅**: 동일한 레이아웃 내에서 여러 페이지를 병렬적으로 렌더링

### 라우팅: UI
- **로딩**: 앱의 특정 부분에 대한 의미 있는 로딩 UI 구현
- **에러 처리**: 앱의 특정 부분에 대한 에러 UI 구현
- **페이지 없음(404)**: 앱에서 404 Not Found UI 구현

### 렌더링: 데이터 가져오기
- **정적 사이트 생성(SSG)**: 정적 페이지 생성
- **증분적 정적 재생성(ISR)**: 정적 및 동적의 장점을 결합한 데이터 가져오기
- **서버 사이드 렌더링(SSR)**: 서버에서 페이지 렌더링
- **서스펜스 스트리밍**: 서버에서 React Suspense를 사용한 데이터 스트리밍

### 렌더링: 서버/클라이언트 컴포넌트
- **리액트 컨텍스트**: 서버와 클라이언트 컴포넌트 경계를 넘는 컨텍스트 전달

### 다양한 기법
- **CSS 스타일링**: 다양한 CSS 스타일링 라이브러리 및 방법론 탐구
- **Next.js 라우팅 훅**: 클라이언트 컴포넌트에서 사용 가능한 라우팅 훅 미리보기
- **URL 검색 파라미터 설정**: 유용한 앱 라우터 코드 스니펫 모음

이 프로젝트를 통해 Next.js를 활용한 현대적인 웹 애플리케이션 개발에 필요한 다양한 라우팅 및 렌더링 기법을 체계적으로 학습하고 실습할 수 있습니다.

## 문제 해결 및 Q/A
본 프로젝트 뿐만 아니라 "레벨업 리액트 프로그래밍 with Next.js" 책에 대한 모든 질문과 답변은 [https://reactnext-central.xyz/levelup](https://reactnext-central.xyz/levelup) 웹 페이지에서 진행됩니다. 이 페이지를 통해 궁금한 점을 해결하고 다른 사용자들과 지식을 공유할 수 있습니다.


## 라이선스 및 저작권 정보
본 프로젝트는 MIT 라이선스 하에 제공됩니다. 자세한 내용은 `license.md` 파일을 참조하세요.

## 참고 자료
본 "LevelUp-React-with-Nextjs" 프로젝트는 [Vercel의 app-playground](https://github.com/vercel/app-playground) 프로젝트에서 중요한 영감을 받았습니다. 원본 프로젝트가 영어로 되어 있었지만 이를 한글로 전환하여 더 많은 한국어 사용자들이 쉽게 접근하고 이해할 수 있도록 했습니다. 또한, Next.js의 핵심 개념과 기능을 보다 명확하게 파악할 수 있도록 코드를 간결화하고 구조를 재정립하였습니다. 이러한 노력은 Next.js를 처음 접하는 사용자에게 더 친숙하고 이해하기 쉬운 경험을 제공하고자 하는 우리의 목표를 반영합니다.
