# 3D Weather Website

어린왕자에서 영감받은 인터랙티브 3D 웹 체험.
Three.js 기반의 날씨 시각화와 어린왕자 일몰 체험 두 가지 프로젝트로 구성되어 있다.

## 기술 스택

- **Three.js** — 3D 렌더링 (WebGL)
- **GSAP** — 애니메이션 및 스크롤 제어
- **Vite** — 빌드 도구 및 개발 서버

## 프로젝트 구조

```
3d-weather-website/
├── index.html                 # 메인 Weather Showcase 페이지
├── src/
│   ├── main.js                # 앱 진입점
│   ├── scene/
│   │   ├── SceneManager.js    # Three.js 씬/카메라/렌더러 관리
│   │   └── PostProcessing.js  # Bloom 등 후처리 효과
│   ├── weather/
│   │   ├── WeatherScene.js    # 날씨 씬 베이스 클래스
│   │   ├── ThunderScene.js    # 천둥 번개
│   │   ├── RainScene.js       # 비
│   │   ├── SnowScene.js       # 눈
│   │   ├── SunnyScene.js      # 맑음
│   │   └── WindScene.js       # 바람
│   ├── scroll/
│   │   └── ScrollController.js # GSAP 스크롤 트리거
│   ├── ui/
│   │   └── Navigation.js      # 날씨 선택 버튼
│   └── utils/
│       ├── LightningBolt.js   # 프로시저럴 번개 생성
│       └── math.js            # lerp, smoothstep, clamp
│
└── sunset-project/            # 어린왕자 일몰 체험
    ├── index.html
    └── src/
        ├── main.js            # 일몰 앱 진입점
        └── weather/
            └── PlanetSunsetScene.js  # 행성 일몰 3D 씬
```

## 주요 기능

### Weather Showcase (메인)

스크롤 기반으로 5가지 3D 날씨를 전환하며 체험한다.

- **천둥** — 프로시저럴 번개, 어두운 구름, 포인트 라이트 플래시
- **비** — 15,000개 파티클 시스템, 바닥 스플래시 효과
- **눈** — 부드러운 눈 파티클
- **맑음** — 밝은 태양과 조명 효과
- **바람** — 바람 파티클 시각화
- 각 섹션 스크롤 시 GSAP ScrollTrigger로 부드럽게 전환
- Bloom 후처리 효과 (씬별 강도 조절)

### Le Petit Prince Sunset (sunset-project)

어린왕자의 일몰 장면을 3D로 재현한 명상적 체험.

- **3D 행성 씬** — 작은 행성 위에 앉아있는 인물, 꽃 15송이, 잔디 40개
- **프로시저럴 하늘** — 셰이더 기반 색상 전환 (우주 → 하늘 → 수평선 → 노을)
- **별 3,000개** — 사인파 기반 반짝임
- **카메라 전환** — 인물 클릭 시 1인칭/3인칭 전환
- **어린왕자 대사** — 5단계 텍스트 오버레이
  - "어느 날은 해지는 걸 마흔네 번이나 봤어!"
  - "너 정말 그렇게 슬펐던 거야?"
- **한국어/영어 전환** — KO/EN 토글 버튼
- **컨트롤 슬라이더** — 밝기, 텍스트 속도, 글씨 크기, 일몰 속도
- **일몰 카운터** — 몇 번째 해를 바라보는지 표시
- **왕관** — 4번 이상 일몰을 보면 인물 머리 위에 왕관 등장
- **리플레이** — 버튼 클릭으로 일몰 재시작

## 실행 방법

### Weather Showcase (메인)

```bash
npm install
npm run dev
```

### Le Petit Prince Sunset

```bash
cd sunset-project
npm install
npm run dev
```
