// ════════════════════════════════════════════════════════════════
// eras_modern.js — 현대 디자인사 완전판 (2026년 5월 기준)
// 새 필드: period(분기), why(발생 배경), regions(지역별 트렌드)
//
// 태그 범례:
// [사실]  — 문헌·공식 발표 등으로 확인 가능한 내용
// [해석]  — 업계 통용 해석이나 관찰, 다소 주관 포함
// [예측]  — 아직 진행형이거나 전망에 가까운 내용
// ════════════════════════════════════════════════════════════════

const ERAS_MODERN = [

  // ─────────────────────────────────────────────
  // 08. 디지털 초기 시대 1990s~2007
  // ─────────────────────────────────────────────
  {
    num:"08", name:"디지털 초기 시대", period:"1990s ~ 2007",
    color:"#6e7ec8",
    bg:["인터넷 보급·WWW·데스크톱 GUI 발전","닷컴 붐·IT 산업 폭발","스큐어모피즘 — 현실 사물을 화면에 모방"],
    next:"아이폰 출시(2007) → 터치 인터페이스 혁명 → 플랫 디자인 대전환",
    movements:[
      {
        name:"디지털 모더니즘 · 초기 GUI", color:"#6e7ec8", art:false,
        person:"더글러스 엥겔바트 (마우스·GUI 원형) · 앨런 케이 (Xerox PARC) · 수잔 케어 (맥 아이콘)",
        work:"Xerox Alto GUI (1973) · Apple Mac OS (1984) · Windows 3.1 · Netscape 브라우저",
        brand:"Xerox PARC → Apple → Microsoft → Netscape",
        modern:"[사실] Xerox PARC → Apple → Microsoft로 이어진 GUI 계보. 창·아이콘·메뉴·포인터(WIMP) 패러다임이 현재까지 유지됨",
        period:"1973 Q1 ~ 2001 Q4",
        why:"[사실] 텍스트 명령어 기반 컴퓨터를 비전문가도 쓸 수 있게 만들어야 했음. Xerox PARC의 연구가 Apple을 통해 상용화, 이후 Microsoft가 대중화. [해석] '물리 사무환경을 화면으로 옮기는' 은유 전략이 학습 비용을 낮추는 데 효과적이었음.",
        links:{wiki:"https://ko.wikipedia.org/wiki/그래픽_사용자_인터페이스",googleArt:"https://artsandculture.google.com/search?q=gui+history+xerox+apple+mac",youtube:"https://www.youtube.com/results?search_query=gui+history+design+xerox+parc+apple"},
        imgs:[{label:"Xerox Alto GUI (1973)",q:"xerox alto gui 1973 first graphical interface"},{label:"Apple Mac OS 1984",q:"macintosh gui 1984 desktop icons original"}],
        trends:[
          {name:"픽셀 미학",techs:["픽셀 아트","도트 그래픽","비트맵 폰트","GIF 애니메이션"]},
          {name:"인터페이스 실재감",techs:["베벨·엠보싱","메탈릭 UI","웹 안전 색상 216색"]},
          {name:"정보 밀집 레이아웃",techs:["테이블 레이아웃","마키 텍스트","배경 타일 패턴"]},
        ],
        regions:{
          global:[
            {name:"픽셀 아트 아이콘 언어",period:"1984 Q1 ~ 2000 Q4",why:"[사실] 저해상도 화면(72~96dpi)에서 의미 전달 가능한 현실적 방법. 수잔 케어가 맥 아이콘 언어 정립",techs:["픽셀 단위 드로잉","인덱스 컬러","스프라이트 시트"],brand:"Apple · Windows 3.1"},
            {name:"웹 1.0 시각 문화",period:"1994 Q1 ~ 2003 Q4",why:"[사실] HTML 기반 웹 확산 → 누구나 페이지 제작 가능 → GIF·배너·배경 타일 남용. 디자인 없는 디자인의 시대",techs:["GIF 애니메이션","HTML 테이블 레이아웃","배경 타일"],brand:"GeoCities · Lycos · Yahoo! 초기"},
          ],
          korea:[
            {name:"PC통신 텍스트 아트",period:"1994 Q1 ~ 2002 Q4",why:"[사실] 하이텔·천리안 등 PC통신이 그래픽 대신 텍스트 중심 → 특수문자 조합 아스키 아트 문화 자생적 발달",techs:["아스키 아트","특수문자 조합","ANSI 컬러 코드"],brand:"하이텔 · 천리안 · 나우누리"},
            {name:"국내 포털 초기 CI",period:"1999 Q1 ~ 2005 Q4",why:"[사실] 야후코리아·다음·네이버가 동시 경쟁 → 빠른 브랜드 인지가 생존 조건 → 원색 로고+배너 광고 전쟁",techs:["원색 로고","GIF 배너 광고","팝업 레이어"],brand:"다음 · 네이버 · 야후코리아"},
          ],
          japan:[
            {name:"닌텐도·세가 도트 그래픽 문화",period:"1985 Q1 ~ 2005 Q4",why:"[사실] 닌텐도·세가가 하드웨어 제약 안에서 도트 그래픽을 예술 수준으로 끌어올림 → 이후 전 세계 인디게임 픽셀 미학 원형",techs:["도트 그래픽","스프라이트 애니메이션","칩튠(Chiptune)"],brand:"Nintendo · Sega · Capcom"},
          ],
          west:[
            {name:"닷컴 버블 비주얼",period:"1999 Q1 ~ 2001 Q2",why:"[사실] IT 기업 급증 → CI 수요 폭발 → 빠르게 만들어진 과잉 3D 로고·글로시 효과 남발. [해석] 버블 붕괴 후 클린 디자인 반동의 씨앗이 됨",techs:["크롬 효과 로고","렌즈 플레어 남용","무지개 그라데이션"],brand:"Pets.com · Webvan 등 닷컴 스타트업"},
            {name:"플래시 모션 웹",period:"1999 Q1 ~ 2010 Q4",why:"[사실] 브로드밴드 보급 → 대용량 Flash 파일 전송 가능 → 인터랙티브 광고·인트로 사이트 전성기. 2010 Steve Jobs의 Flash 거부 선언으로 쇠퇴",techs:["Flash ActionScript","벡터 애니메이션","인트로 스킵 버튼"],brand:"Adobe Flash · Macromedia"},
          ],
        }
      },
      {
        name:"스큐어모피즘", color:"#6e7ec8", art:false,
        person:"스콧 포스탈 (iOS 스큐어모피즘 총괄) · 수잔 케어 (맥 아이콘 원형)",
        work:"Mac OS X Aqua (2001) · iOS 6 가죽·나무·종이 질감 UI · 게임센터 펠트 테이블",
        brand:"Apple (Mac OS X ~ iOS 6, 2001~2013)",
        modern:"[사실] 물리적 메타포로 디지털 기기 학습 비용을 낮춘 UX 전략. [해석] iOS 7(2013) 플랫 전환의 직접적 반동이 됨",
        period:"2001 Q1 ~ 2013 Q3",
        why:"[사실] 스마트폰·태블릿 등 새 디바이스 등장 → 비기술 사용자 급증 → 사물을 직관적으로 표현할 필요. [해석] 현실 객체 모방이 당시로선 가장 빠른 학습 경로였음. 유지보수 비용 증가가 플랫으로의 전환 이유 중 하나",
        links:{wiki:"https://en.wikipedia.org/wiki/Skeuomorph",googleArt:"https://artsandculture.google.com/search?q=mac+os+x+aqua+interface",youtube:"https://www.youtube.com/results?search_query=skeuomorphism+design+history+apple+ios"},
        imgs:[{label:"Mac OS X Aqua (2001)",q:"mac os x aqua interface 2001 apple glossy"},{label:"iOS 6 스큐어모피즘",q:"ios 6 skeuomorphism leather notes game center"}],
        trends:[
          {name:"현실 질감 모방",techs:["가죽·나무·금속 텍스처 렌더링","그림자·반사광 레이어","픽셀 퍼펙트 아이콘"]},
          {name:"물리 메타포 UI",techs:["페이지 넘김 애니메이션","실밥·스티치 디테일","베젤·그립감 UI"]},
          {name:"웹 2.0 광택 미학",techs:["글로시 그라데이션 버튼","반사광 하이라이트","둥근 모서리","투명 레이어"]},
        ],
        regions:{
          global:[
            {name:"웹 2.0 광택 (Gloss)",period:"2004 Q1 ~ 2009 Q4",why:"[사실] 블로그·SNS 폭발로 비디자이너도 UI 제작 → 쉽게 '예쁜 느낌' 내는 글로시 버튼 CSS 튜토리얼 확산",techs:["글로시 그라데이션 버튼","반사광 하이라이트","둥근 모서리"],brand:"Gmail 초기 · YouTube 초기 · Myspace"},
          ],
          korea:[
            {name:"싸이월드 미니홈피 미학",period:"2001 Q3 ~ 2008 Q4",why:"[사실] 싸이월드 가입자 2,000만 돌파(2004) → 개인 공간 꾸미기 문화 + 도토리 이코노미. [해석] 한국형 소셜 공간 디자인의 독자 진화",techs:["미니룸 3D 가구","스킨 꾸미기","BGM 플레이어 UI"],brand:"싸이월드 · SK커뮤니케이션즈"},
          ],
          japan:[
            {name:"가라케이(フィーチャーフォン) UI",period:"2002 Q1 ~ 2010 Q4",why:"[사실] NTT DoCoMo i-mode(1999)가 세계 최초 모바일 인터넷 서비스 → 스마트폰 이전에 이미 모바일 인터넷 문화 확립. [해석] 고밀도 정보 UI의 일본 독자 진화",techs:["고밀도 텍스트 UI","이모지 원형(이모지 → 이모티콘 → 이모지 표준화)","i-mode HTML"],brand:"DoCoMo i-mode · au · SoftBank"},
          ],
          west:[
            {name:"Mac OS X Aqua 사이버 미래주의",period:"2001 Q1 ~ 2006 Q4",why:"[사실] Apple의 Mac OS X Aqua가 투명·물방울·메탈릭 UI로 '미래적 컴퓨터'의 비주얼 언어 설정. [해석] 테크노 낙관주의 시대의 미적 표현",techs:["투명 레이어","Aqua 물방울 버튼","메탈릭 UI","Brushed Metal 텍스처"],brand:"Apple Mac OS X"},
          ],
        }
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 09. 모바일 플랫폼 시대 2007~2015
  // ─────────────────────────────────────────────
  {
    num:"09", name:"모바일 플랫폼 시대", period:"2007 ~ 2015",
    color:"#6ec8a9",
    bg:["아이폰·안드로이드 터치 혁명","앱 경제·플랫폼 생태계 확립","플랫 디자인 대전환 — 복합적 원인으로 스큐어모피즘 탈피"],
    next:"SNS 피드 시대 → 알고리즘 큐레이션 → 주목 경제 디자인",
    movements:[
      {
        name:"모바일 경험 디자인", color:"#6ec8a9", art:false,
        person:"조나단 아이브 (iPhone 하드웨어) · 스콧 포스탈 (iOS) · 앤디 루빈 (Android)",
        work:"iPhone 오리지널 (2007) · App Store (2008) · Android (2008)",
        brand:"Apple · Google · Samsung",
        modern:"[사실] 터치 기반 모바일 UX의 원형. 스와이프·핀치줌·탭 등 제스처 언어, 앱 생태계, 모바일 퍼스트 개념이 이 시기에 확립됨",
        period:"2007 Q2 ~ 2012 Q4",
        why:"[사실] 손가락으로 조작하는 새 패러다임 → 마우스 기반 UI 전면 재설계 필요. 터치 타깃 최소 44pt(Apple HIG 기준), 스와이프 제스처 등 모바일 UX 원칙이 이 시기 성문화됨",
        links:{wiki:"https://ko.wikipedia.org/wiki/아이폰",googleArt:"https://artsandculture.google.com/search?q=iphone+original+2007+design",youtube:"https://www.youtube.com/results?search_query=iphone+2007+original+design+history+steve+jobs"},
        imgs:[{label:"iPhone 오리지널 (2007)",q:"iphone original 2007 ui design steve jobs keynote"},{label:"App Store 초기 (2008)",q:"app store original 2008 interface ios first"}],
        trends:[
          {name:"카드 인터페이스",techs:["카드 UI","터치 제스처","햄버거 메뉴","스와이프 내비게이션"]},
          {name:"마이크로 UX",techs:["모션 피드백","애니메이션 전환","햅틱 피드백","풀-투-리프레시"]},
          {name:"콘텐츠 최소화",techs:["화이트 스페이스","단일 액션 화면","프로그레시브 디스클로저"]},
        ],
        regions:{
          global:[
            {name:"앱 경제 UI 표준화",period:"2008 Q3 ~ 2013 Q4",why:"[사실] App Store·Google Play 등장으로 앱 시장 형성 → 버튼·탭바·리스트 등 공통 UI 패턴 수렴",techs:["탭바 내비게이션","리스트 뷰","모달 팝업"],brand:"Apple App Store · Google Play"},
          ],
          korea:[
            {name:"카카오톡 UI 언어 확립",period:"2010 Q1 ~ 2014 Q4",why:"[사실] 카카오톡 2010년 출시, 2012년 가입자 5,000만 돌파 → 한국형 메신저 UI 표준 형성. [해석] 말풍선·이모티콘·선물하기가 글로벌 메신저와 다른 독자 노선",techs:["말풍선 UI","이모티콘 스티커","선물하기 UX","오픈채팅"],brand:"카카오 · 라인(한국·일본 협업)"},
            {name:"라인 캐릭터 IP 이코노미",period:"2011 Q2 ~ 2016 Q4",why:"[사실] NHN재팬이 일본에서 2011년 론칭. 브라운·코니 캐릭터 스티커가 초기 수익 모델. [해석] K-캐릭터 IP 비즈니스 모델의 선구적 사례",techs:["캐릭터 IP 시스템","스티커 팩 UI","굿즈 연계 MD"],brand:"라인 · NHN재팬(현 LY Corporation)"},
          ],
          japan:[
            {name:"LINE 스티커 문화",period:"2011 Q2 ~ 현재",why:"[사실] 일본이 이모지 원조국(1999 DoCoMo) + 모바일 결합 → 스티커가 텍스트 대체 감정 표현 수단으로 정착. LINE 스티커샵은 독립 크리에이터 이코노미 형성",techs:["스티커 패키지 디자인","애니메이션 스티커","사운드 스티커"],brand:"LINE · NHN재팬"},
          ],
          west:[
            {name:"롱 섀도우 · 플랫 2.0",period:"2013 Q1 ~ 2015 Q4",why:"[해석] 완전 플랫이 너무 밋밋하다는 반응 → 45도 롱 섀도우로 최소한의 깊이감 복원 시도. Dribbble 트렌드로 확산됐으나 실제 대형 서비스 적용은 제한적",techs:["45도 롱 섀도우","단색 그림자","Elevation 개념 초기"],brand:"Dribbble 커뮤니티 디자이너들"},
            {name:"뉴모피즘 (Neumorphism)",period:"2019 Q4 ~ 2021 Q2",why:"[해석] 플랫 디자인 피로감 → 입체감 복원 시도. Dribbble·Behance에서 폭발적 유행. [사실] 낮은 대비로 인한 접근성 문제 때문에 실제 프로덕션 서비스 적용은 매우 제한적 — 트렌드 규모 과장에 주의",techs:["이중 그림자(밝음+어두움 동시)","배경과 동일 색조","Convex·Concave 버튼"],brand:"Dribbble 커뮤니티 (Alexander Plyuto 최초 게시)"},
          ],
        }
      },
      {
        name:"플랫 디자인 · 머티리얼 디자인", color:"#6ec8a9", art:false,
        person:"조나단 아이브 (iOS 7 총괄) · 마티아스 두아르테 (Google Material Design VP)",
        work:"iOS 7 (2013) · Windows 8 Metro (2012) · Google Material Design 1.0 (2014)",
        brand:"Apple · Microsoft · Google",
        modern:"[사실] iOS 7 이후 현재까지 이어지는 모바일 UI의 기본 문법. Material Design은 구글 전 제품 통합 + 안드로이드 파편화 해결에 기여",
        period:"2012 Q3 ~ 2016 Q4",
        why:"[사실] 복합적 원인: ① 레티나 디스플레이 보급으로 세밀한 질감 표현 불필요 ② 다양한 화면 크기 대응에 벡터 기반 단순 형태가 유리 ③ 스큐어모피즘 유지보수 비용 증가 ④ Microsoft Metro UI(2010)의 선행 영향 ⑤ 콘텐츠 중심 UX로의 패러다임 이동. [해석] 단일 원인이 아닌 복합적 전환이었음.",
        links:{wiki:"https://ko.wikipedia.org/wiki/머티리얼_디자인",googleArt:"https://artsandculture.google.com/search?q=material+design+google+flat+ios7",youtube:"https://www.youtube.com/results?search_query=flat+design+history+ios7+material+design+origin"},
        imgs:[{label:"iOS 7 플랫 디자인 (2013)",q:"ios 7 flat design apple 2013 jony ive"},{label:"Google Material Design (2014)",q:"google material design 2014 android specification"}],
        trends:[
          {name:"극단적 단순화",techs:["그림자·그라데이션 제거","단색 아이콘","여백 극대화","벡터 아이콘"]},
          {name:"물리 기반 모션",techs:["스프링 애니메이션","리플 효과","Elevation 그림자","모션 커브"]},
          {name:"반응형·모바일 퍼스트",techs:["CSS 미디어 쿼리","플렉스박스","터치 타깃 44px","뷰포트 메타태그"]},
        ],
        regions:{
          global:[
            {name:"반응형 웹 표준화",period:"2011 Q1 ~ 2015 Q4",why:"[사실] Ethan Marcotte가 2010년 'Responsive Web Design' 개념 발표. Bootstrap(2011) 등장으로 대중화. 화면 크기 파편화에 대한 현실적 해결책",techs:["Bootstrap 그리드","CSS 미디어 쿼리","플렉스박스","유동 이미지"],brand:"Twitter Bootstrap · Zurb Foundation"},
          ],
          korea:[
            {name:"네이버·카카오 플랫 리브랜딩",period:"2013 Q1 ~ 2016 Q4",why:"[사실] 글로벌 플랫 트렌드 수용 + 스마트폰 전환 대응. 2014년 다음카카오 합병으로 CI 통합 필요. [해석] 한국 대형 IT 기업의 모바일 피벗 시기와 일치",techs:["단색 로고 정리","모바일 최적화 타입","컬러 시스템 단순화"],brand:"네이버 · 카카오(다음 합병 2014)"},
          ],
          japan:[
            {name:"일본 UI 플랫 전환 (점진적)",period:"2014 Q1 ~ 2018 Q4",why:"[해석] 일본 UX는 전통적으로 정보 밀도를 중시 → 플랫을 수용하되 정보량 유지. 서양보다 전환 속도 느림. [사실] Yahoo Japan은 오랫동안 고밀도 레이아웃 유지",techs:["고밀도 플랫 UI","세밀한 선형 아이콘","정보 계층 유지"],brand:"Yahoo Japan · Mercari · NTT Docomo"},
          ],
          china:[
            {name:"위챗 슈퍼앱 UI 표준",period:"2013 Q1 ~ 현재",why:"[사실] 위챗(微信) 2013년 미니프로그램 생태계 구축 → 메신저·결제·쇼핑·뉴스 통합. [해석] 중국형 슈퍼앱 UX 패턴이 이후 글로벌 슈퍼앱 논의에 영향",techs:["미니프로그램 UI","QR코드 결제 중심","WeChat Pay UI"],brand:"WeChat(微信) · Tencent"},
          ],
          europe:[
            {name:"북유럽 클린 웹 디자인",period:"2012 Q1 ~ 2016 Q4",why:"[해석] 스칸디나비아 전통 미니멀리즘 + 플랫 디자인 결합. Spotify·SAS 등 북유럽 브랜드가 선도적으로 적용",techs:["여백 극대화","중립 타이포","단색 팔레트"],brand:"Spotify 초기 · SAS 항공 · IKEA 디지털"},
          ],
          west:[
            {name:"Material Design 생태계",period:"2014 Q2 ~ 현재",why:"[사실] 구글이 2014년 I/O에서 공식 발표. 안드로이드 UI 파편화 해결 + 개발자도 활용 가능한 컴포넌트 문서화. [해석] '디자인 시스템' 개념 대중화에 기여",techs:["컴포넌트 라이브러리","8dp 기본 유닛 그리드","시맨틱 컬러 시스템"],brand:"Google · Android (전 제품)"},
          ],
        }
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 10. 알고리즘·SNS 시대 2015~2022
  // ─────────────────────────────────────────────
  {
    num:"10", name:"알고리즘 · SNS 시대", period:"2015 ~ 2022",
    color:"#c8a96e",
    bg:["인스타그램·틱톡·유튜브 시각 문화 폭발","알고리즘 큐레이션 · 주목 경제(Attention Economy)","다크모드·글래스모피즘·트렌드 사이클 초가속"],
    next:"ChatGPT 등장(2022) → AI 생성 도구 대중화 → 디자이너 역할 변화 진행 중",
    movements:[
      {
        name:"플랫폼 미학 · 브랜드 시스템 시대", color:"#c8a96e", art:false,
        person:"",
        work:"Instagram 리브랜딩 (2016) · Airbnb Bélo 브랜드 시스템 · Spotify Brand Identity",
        brand:"Instagram · Airbnb · Spotify · Dropbox",
        modern:"[사실] 단일 정적 로고에서 컬러·모션·일러스트를 아우르는 브랜드 시스템으로 전환. [해석] SNS 피드·동영상 환경에서 정적 로고 단독으로는 브랜드 표현이 어렵다는 인식이 확산됨",
        period:"2015 Q1 ~ 2020 Q4",
        why:"[해석] SNS 피드 환경에서 짧은 시간 안에 눈길을 끌어야 하는 압박 → 정적 로고만으로는 부족 → 컬러·모션·캐릭터가 브랜드 구성 요소로 확장. [사실] Instagram 리브랜딩(2016)이 그라데이션 로고의 유행을 촉발한 사례로 자주 언급됨",
        links:{wiki:"https://en.wikipedia.org/wiki/Brand_identity",googleArt:"https://artsandculture.google.com/search?q=instagram+rebranding+2016+brand+system",youtube:"https://www.youtube.com/results?search_query=instagram+rebranding+2016+design+process"},
        imgs:[{label:"Instagram 리브랜딩 2016",q:"instagram rebranding 2016 gradient logo design"},{label:"Airbnb Bélo 브랜드",q:"airbnb belo logo brand identity system design"}],
        trends:[
          {name:"다이나믹 그라데이션",techs:["메시 그라데이션","오로라 그라데이션","홀로그래픽 포일 효과","Chromatic Aberration"]},
          {name:"브랜드 시스템화",techs:["브랜드 보이스 시스템","일러스트레이션 스타일 가이드","디자인 토큰·컬러 시스템"]},
          {name:"몰입형 스토리텔링",techs:["스크롤 트리거 애니메이션","패럴랙스 효과","풀스크린 영상 배경"]},
        ],
        regions:{
          global:[
            {name:"메시 그라데이션 확산",period:"2018 Q1 ~ 2022 Q4",why:"[해석] Stripe 랜딩페이지의 메시 그라데이션 활용이 업계 화제 → Figma 플러그인 등장으로 대중화. [사실] 기술적으로는 CSS 및 SVG 그라데이션 지원 향상으로 구현 용이해짐",techs:["Mesh Gradient (Figma 플러그인)","다중 색상 포인트","부드러운 색 번짐"],brand:"Stripe · Apple Music · Instagram"},
            {name:"오로라·홀로그램 효과",period:"2019 Q1 ~ 2022 Q4",why:"[해석] 물리적 홀로그램 소재 패션 인기 → 디지털로 역수입되는 경향. [사실] CSS 및 SVG 필터 발전으로 웹에서 구현 용이해짐",techs:["홀로그래픽 포일 CSS","무지개 반사광","Chromatic Aberration 효과"],brand:"Glossier · Fenty Beauty · 패션 브랜드들"},
          ],
          korea:[
            {name:"K-팝 앨범 아트 디렉션 시스템화",period:"2016 Q1 ~ 현재",why:"[사실] BTS 빌보드 핫100 진입(2017) 이후 K팝 비주얼에 글로벌 주목. [해석] 세계관·콘셉트·색상 팔레트가 통합된 아트 디렉션 시스템이 산업 표준화됨",techs:["세계관 기반 아트 디렉션","콘셉트 포토북","포토카드 그래픽","AR 필터 연동"],brand:"HYBE · SM Entertainment · YG · NewJeans·Aespa"},
            {name:"토스 핀테크 UX 혁신",period:"2017 Q1 ~ 현재",why:"[사실] 토스(Viva Republica) 2017년 간편 송금 서비스로 금융 UX 혁신 시작. [해석] 기존 복잡한 금융 앱 대비 단순화된 플로우·친근한 마이크로카피가 한국 핀테크 디자인 기준을 높임",techs:["단일 플로우 금융 UX","데이터 시각화 애니메이션","마이크로카피","바텀시트 패턴"],brand:"토스(Viva Republica)"},
            {name:"NewJeans 비주얼 아이덴티티",period:"2022 Q3 ~ 현재",why:"[사실] 2022년 데뷔. [해석] Y2K+미니멀+레트로 조합으로 기존 K팝의 화려한 비주얼 문법 탈피 → 패션계와 동시 공략",techs:["Y2K 레트로 사진 필터","세리프 타이포 강조","파스텔+원색 혼합"],brand:"NewJeans · ADOR · HYBE"},
          ],
          japan:[
            {name:"Lo-Fi · 시티팝 비주얼 복고",period:"2017 Q1 ~ 2022 Q4",why:"[사실] Lofi Girl 유튜브 채널이 수천만 조회수 기록. [해석] 디지털 피로감 + 향수 → 1980년대 일본 시티팝 미학이 글로벌 Lo-Fi 미학의 시각 문법으로 채택됨",techs:["노이즈 그레인 필터","CRT 스캔라인","파스텔+네온 배색","아날로그 필름 톤"],brand:"Lofi Girl 채널 · City Pop 레이블"},
            {name:"Vaporwave 미학",period:"2015 Q1 ~ 2020 Q4",why:"[해석] 인터넷 향수 + 소비주의 비판 → 1980~90년대 일본·미국 대중문화를 왜곡·과장한 인터넷 아이러니 미학. 주류보다 서브컬처·인터넷 밈 영역에서 강한 영향력",techs:["VHS 왜곡 효과","그리스 조각상 밈","보라+핑크 팔레트","그리드라인 3D"],brand:"Macintosh Plus · 各 Vaporwave 아티스트"},
          ],
          china:[
            {name:"궈차오(國潮) 디자인",period:"2018 Q1 ~ 현재",why:"[사실] 중국 젊은 소비층의 자국 브랜드 선호 증가 + 중미 무역갈등 배경. [해석] 한자·전통 문양을 현대 스트리트 감성으로 재해석. Li-Ning의 뉴욕 패션위크 참가(2018)가 국제적 주목 계기",techs:["한자 타이포 그래픽","전통 문양 현대화","붉은색+금색 팔레트"],brand:"李寧(Li-Ning) · 花西子 · 완메이(完美日记)"},
            {name:"왕홍(網紅) 패키지 디자인",period:"2016 Q1 ~ 현재",why:"[사실] 라이브커머스(直播電商) 폭발적 성장. [해석] 화면상에서 시각적으로 돋보이는 패키지 디자인 필요 → 핑크·파스텔·미니멀 포장 유행",techs:["포토제닉 패키지 디자인","SNS 언박싱 최적화 포장","파스텔 톤 브랜딩"],brand:"喜茶(Heytea) · 钟薛高 · 元気森林"},
          ],
          europe:[
            {name:"에디토리얼 디자인 르네상스",period:"2016 Q1 ~ 현재",why:"[해석] 디지털 정보 과잉 → 큐레이션·편집 가치 재부상. 인쇄 잡지 미학이 디지털에서 오히려 희소성을 가짐. [사실] Bloomberg Businessweek 등 주요 매체가 에디토리얼 디자인으로 화제를 모음",techs:["대형 세리프 타이포","비대칭 그리드","사진+텍스트 충돌 레이아웃"],brand:"Bloomberg Businessweek · Kinfolk · It's Nice That"},
            {name:"조용한 럭셔리 (Quiet Luxury)",period:"2019 Q1 ~ 현재",why:"[해석] SNS 과시 문화 피로감 → 로고 없이 소재 품질로 말하는 럭셔리 선호. [사실] Bottega Veneta가 2021년 모든 SNS 계정을 삭제하며 화제가 된 사례가 상징적",techs:["로고 최소화 또는 제거","중립 어스 톤 팔레트","소재 텍스처 클로즈업"],brand:"Bottega Veneta · Loro Piana · The Row"},
          ],
          west:[
            {name:"Y2K 미학 부활",period:"2019 Q4 ~ 2023 Q2",why:"[해석] Z세대가 자신이 직접 경험하지 않은 2000년대를 레트로로 소비 — 크롬·나비·베이비핑크 조합. [사실] 팬데믹 이후 패션·음악·그래픽 전반에서 2000년대 복고 트렌드 가시화",techs:["크롬 텍스트 효과","실버 그라데이션","베이비핑크·민트·라벤더 팔레트"],brand:"Paris Hilton 브랜드 · Juicy Couture 리런치"},
            {name:"막시멀리즘",period:"2018 Q1 ~ 현재",why:"[해석] 오랜 미니멀리즘 피로감 + SNS 피드에서 눈에 띄어야 한다는 압박 → 더 많이·더 화려하게. [사실] Gucci의 알레산드로 미켈레가 2015년~2022년 막시멀 미학을 럭셔리 패션 메인스트림으로 이끎",techs:["패턴 온 패턴","금속 장식 부활","헤리티지 모노그램 강화"],brand:"Gucci (알레산드로 미켈레 시대) · Versace · Dries Van Noten"},
          ],
        }
      },
      {
        name:"알고리즘 디자인 · 콘텐츠 미학", color:"#c8a96e", art:false,
        person:"",
        work:"TikTok UI · Instagram Reels · YouTube Shorts · 글래스모피즘 UI",
        brand:"TikTok(ByteDance) · Instagram · YouTube",
        modern:"[해석] 알고리즘이 콘텐츠 포맷을 강제하고 그 포맷이 디자인 언어를 바꾸는 첫 시대. [사실] 9:16 세로 포맷이 TikTok 이후 영상·그래픽 표준으로 자리잡음",
        period:"2016 Q3 ~ 2022 Q4",
        why:"[사실] TikTok이 For You 알고리즘과 세로 전용 포맷 강제 → 9:16 프레임이 새 디자인 표준. [해석] 콘텐츠 소비 방식의 변화가 그래픽·UI 문법을 역으로 바꾸는 현상이 나타남",
        links:{wiki:"https://ko.wikipedia.org/wiki/틱톡",googleArt:"https://artsandculture.google.com/search?q=tiktok+design+vertical+video",youtube:"https://www.youtube.com/results?search_query=tiktok+ui+design+algorithm+vertical+video+history"},
        imgs:[{label:"TikTok UI (세로 포맷)",q:"tiktok interface ui design vertical video 2020 algorithm"},{label:"Instagram Reels 포맷",q:"instagram reels vertical format design interface"}],
        trends:[
          {name:"글래스모피즘",techs:["backdrop-filter: blur()","반투명 배경색","다층 색상 그라데이션","라이트 보더"]},
          {name:"다크모드 미학",techs:["#000·#121212 배경 표준","OLED 최적화","고대비 흰 텍스트","컬러 팔레트 이중화(라이트·다크)"]},
          {name:"그로테스크 그래픽믹스",techs:["폰트 크기 극단 혼용","이미지 왜곡·크롭","글리치 RGB 분리","비규칙 레이아웃"]},
          {name:"미디어 콜라주",techs:["레이어 블렌드 모드","이미지 컷아웃","스크랩북 감성","텍스처 레이어링"]},
          {name:"크리에이터 브랜딩",techs:["개인 컬러 시스템","유튜브 썸네일 템플릿","로고 없는 시각 일관성"]},
        ],
        regions:{
          global:[
            {name:"디자인 시스템 표준화",period:"2015 Q1 ~ 현재",why:"[사실] 대규모 제품 팀에서 일관성 유지 필요 → Airbnb DLS(2016), IBM Carbon(2018) 등 공개 문서화. Figma 도입으로 협업 기반 시스템 관리 가능해짐",techs:["디자인 토큰","아토믹 디자인 방법론","Figma 자동 레이아웃·변형"],brand:"Figma · Airbnb DLS · IBM Carbon · Shopify Polaris"},
            {name:"모션 디자인 · 마이크로 인터랙션",period:"2017 Q1 ~ 현재",why:"[사실] Airbnb가 Lottie(JSON 기반 애니메이션 라이브러리) 2017년 오픈소스 공개. [해석] 정적 UI 차별화 한계 → 움직임이 감정·상태·브랜드를 전달하는 수단으로 확장",techs:["Lottie JSON 애니메이션","스프링 물리 커브","Shared Element Transition"],brand:"Airbnb (Lottie 개발) · Apple · Google"},
          ],
          korea:[
            {name:"K-드라마 포스터 글로벌 영향",period:"2019 Q1 ~ 현재",why:"[사실] 넷플릭스 오리지널 한국 콘텐츠 증가. 오징어게임(2021) 글로벌 1위. [해석] 한국 포스터 디자인 문법(시네마틱 타이포·다크 대비)이 글로벌 OTT 비주얼에 영향을 주었다는 해석 있음 — 직접 인과는 추가 검증 필요",techs:["시네마틱 대형 타이포","다크 대비 포스터 팔레트","상징 오브젝트 활용"],brand:"넷플릭스 코리아 · JTBC · tvN"},
            {name:"한국 IT 기업 디자인 시스템 성숙",period:"2018 Q1 ~ 현재",why:"[사실] 슈퍼앱 복잡도 증가 → 대규모 팀 일관성 유지 필요 → 디자인 시스템 도입. [해석] 한국 대형 IT 기업 디자인 조직의 성숙도 전환점",techs:["컴포넌트 기반 UI 라이브러리","다크모드 대응 이중화","웹 접근성 가이드라인"],brand:"카카오 · 네이버 · 토스"},
          ],
          japan:[
            {name:"메루카리 UX 단순화",period:"2017 Q1 ~ 현재",why:"[사실] 메루카리 2013년 창업, 일본 C2C 1위. [해석] 일반인 판매자를 위한 초간단 출품 플로우가 일본 앱의 전통적 고밀도 UI 관습을 탈피한 사례로 평가받음",techs:["원탭 출품 플로우","가격 제안 UI","안전 거래 보증 UX"],brand:"메루카리 · PayPay"},
          ],
          china:[
            {name:"빌리빌리(B站) 탄막 UI",period:"2016 Q1 ~ 현재",why:"[사실] 빌리빌리(哔哩哔哩)는 일본 니코니코 동화의 탄막(弾幕) 문화를 중국에 이식·발전. [해석] 실시간 댓글 자막 인터페이스가 중국 Z세대 콘텐츠 소비 방식 자체를 변화시킴",techs:["탄막(弾幕) UI","2차원 그래픽 스타일","파스텔 캐릭터 배너"],brand:"哔哩哔哩(Bilibili) · 爱奇艺"},
          ],
          europe:[
            {name:"북유럽 테크 미니멀",period:"2015 Q1 ~ 현재",why:"[해석] 스칸디나비아 디자인 전통(기능·단순·자연) + 테크 스타트업 결합. 불필요한 장식 제거 → 기능·여백으로만 소통",techs:["모노크롬 팔레트","세리프 단독 사용","네거티브 스페이스 극대화"],brand:"Figma · Notion · Linear · Vercel"},
          ],
          west:[
            {name:"네오 브루탈리즘 웹",period:"2020 Q1 ~ 현재",why:"[해석] 글래스모피즘·그라데이션 등 과잉 세련미에 대한 반동 → 날 것의 구조 노출. [사실] Gumroad가 2021년 브루탈리즘 스타일로 리디자인하며 화제가 됨",techs:["두꺼운 검정 테두리","원색 배경","오프셋 그림자","모노스페이스 폰트"],brand:"Gumroad · Linear · Vercel · Lemon Squeezy"},
          ],
        }
      },
    ]
  },

  // ─────────────────────────────────────────────
  // 11. AI 시대 2022~현재 (2026.05 기준)
  // ─────────────────────────────────────────────
  {
    num:"11", name:"AI · 공간 컴퓨팅 시대", period:"2022 ~ 현재 (2026.05 기준)",
    color:"#c86e8a",
    bg:["ChatGPT·Midjourney·Claude 대중화","Apple Vision Pro (2024) · AR/VR 공간 인터페이스","생성형 AI로 디자이너 역할 변화 — 진행형"],
    next:"[예측] 에이전트 UI·공간 컴퓨팅·생성형 브랜딩이 새 표준 형성 중 — 아직 확정되지 않음",
    movements:[
      {
        name:"생성형 AI 디자인 도구 시대", color:"#c86e8a", art:false,
        person:"",
        work:"Midjourney (2022) · DALL-E 3 (2023) · Adobe Firefly (2023) · Stable Diffusion (2022) · Sora (2024)",
        brand:"Midjourney · OpenAI · Adobe · Canva · Runway · Stability AI",
        modern:"[사실] 텍스트 기반 이미지 생성 도구가 2022년 이후 급속 대중화. [해석] 디자이너 역할이 큐레이터·프롬프터·아트디렉터 방향으로 변화하는 경향 관찰됨. [예측] 역할 재정의의 최종 형태는 아직 진행 중",
        period:"2022 Q3 ~ 현재",
        why:"[사실] Stable Diffusion 오픈소스 공개(2022.08) + ChatGPT 출시(2022.11)로 AI 도구 대중화. [해석] 기존 시니어 디자이너 수준의 비주얼 생성이 프롬프트 한 줄로 가능해짐 → 디자인 접근성 민주화 동시에 직군 정체성 논의 촉발",
        links:{wiki:"https://ko.wikipedia.org/wiki/미드저니",googleArt:"https://artsandculture.google.com/search?q=ai+generated+art+midjourney+stable+diffusion",youtube:"https://www.youtube.com/results?search_query=ai+design+tools+2022+2023+midjourney+history"},
        imgs:[{label:"Midjourney AI 생성 이미지",q:"midjourney ai generated artwork 2023 surreal cinematic"},{label:"Adobe Firefly 생성형 AI",q:"adobe firefly generative ai design 2024 interface"}],
        trends:[
          {name:"네오 3D 디자인",techs:["Blender 클레이 렌더 (무료 3D 도구 대중화)","Spline 웹 3D 임베드","WebGL · Three.js","파스텔 Ambient Occlusion 라이팅"]},
          {name:"빅 타이포그래피 · 타입 중심 디자인",techs:["뷰포트 기반 폰트 크기(vw 단위)","Variable Font 축 애니메이션","마스킹 텍스트","키네틱 타이포그래피"]},
          {name:"반 AI 공예 미학 · 텍스처 반란",techs:["손그림 드로잉 강조","노이즈 텍스처 강조","불완전한 선·형태","수작업 느낌 폰트"]},
          {name:"촉각적 디지털",techs:["거친 종이·종이접기 질감","리소그래피 감성 재현","아날로그 인쇄 오류·번짐 재현"]},
        ],
        regions:{
          global:[
            {name:"AI 에이전트 UI · 대화형 인터페이스",period:"2023 Q1 ~ 현재",why:"[사실] ChatGPT UI가 챗 인터페이스를 AI 서비스의 표준으로 정착시킴. [해석] 전통적 앱 UI 대신 대화로 기능 수행하는 방향이 강화되는 경향 관찰됨. [예측] '제로 UI' 방향은 아직 확정되지 않음",techs:["스트리밍 텍스트 렌더링","마크다운 실시간 렌더","단일 입력창 중심 UI"],brand:"ChatGPT · Claude · Perplexity · Notion AI · Google Gemini"},
            {name:"생성형 이미지 미학 역침투",period:"2022 Q4 ~ 현재",why:"[해석] Midjourney 특유의 과포화 색상·영화적 조명이 'AI 이미지' 미학으로 인식 → 일반 디자인·광고에도 유사 미학 확산. [사실] Adobe Firefly 등 기업용 도구 도입으로 상업 디자인에도 AI 생성 이미지 활용 증가",techs:["프롬프트 엔지니어링","인페인팅·아웃페인팅","스타일 참조(Style Reference)","ControlNet 구조 제어"],brand:"Midjourney · DALL-E 3 · Adobe Firefly · Stable Diffusion"},
            {name:"브랜드 모션 아이덴티티",period:"2020 Q1 ~ 현재",why:"[해석] SNS·동영상 환경에서 정적 로고 단독으로는 브랜드 표현 부족 → 움직임·소리·맥락에 따라 변하는 시스템 필요. [사실] 여러 글로벌 브랜드가 모션 가이드라인을 CI에 포함시키는 사례 증가",techs:["SVG 애니메이션 로고","반응형 로고(Responsive Logo)","소닉 브랜딩(Sonic Logo)","햅틱 피드백 가이드라인"],brand:"Google · Spotify · Nike · Airbnb"},
          ],
          korea:[
            {name:"K-디자인 글로벌 영향 확대",period:"2022 Q1 ~ 현재",why:"[사실] K팝·K드라마의 지속적 글로벌 확산. [해석] 한국 UX·그래픽 감성이 글로벌 디자인 논의에 등장하는 빈도 증가. 삼성 One UI가 안드로이드 생태계에서 독자적 UX 방향 제시. — 직접적 글로벌 표준화 여부는 추가 검증 필요",techs:["슈퍼앱 UX 패턴","바텀시트 레이어 활용","인앱 결제 최적화 플로우"],brand:"삼성 One UI · 카카오 · 네이버 · 토스"},
            {name:"버추얼 아이돌 · AI 캐릭터 브랜딩",period:"2021 Q1 ~ 현재",why:"[사실] 에스파(aespa) 2020년 데뷔, 가상 세계관+실제 아이돌 결합 콘셉트. [해석] 브랜드 캐릭터 IP의 버추얼·AI 방향 확장이 엔터테인먼트 산업에서 시도됨",techs:["3D 캐릭터 IP 시스템","버추얼 인플루언서 비주얼","AR 필터 연동 마케팅"],brand:"Aespa(SM SMCU) · 카카오프렌즈 · 버추얼 유튜버"},
          ],
          japan:[
            {name:"일본 미니멀 디지털 심화",period:"2021 Q1 ~ 현재",why:"[해석] 와비사비·여백 미학의 디지털 적용. [사실] 무인양품 앱이 극단적 여백과 기능 중심 UI로 자주 언급되는 레퍼런스 사례",techs:["극단적 여백 활용","모노크롬 팔레트","제스처 기반 탐색","장식 최소화 원칙"],brand:"무인양품(MUJI) · 메루카리 · 유니클로 디지털"},
            {name:"Lo-Fi · 뉴트로 심화",period:"2020 Q1 ~ 현재",why:"[사실] Lofi Girl 채널 구독자 증가 지속. [해석] 디지털 과부하에 대한 반응으로 아날로그 따뜻함 수요 증가하는 경향",techs:["노이즈 그레인 질감","VHS 왜곡 필터","렌즈 플레어","카세트테이프 아날로그 감성"],brand:"Lofi Girl · 시티팝 관련 레이블·아티스트"},
          ],
          china:[
            {name:"차이나 시크(China Chic) 2.0",period:"2022 Q1 ~ 현재",why:"[해석] 궈차오 1세대 이후 더 세련된 중국 미학 추구. 송나라 문인화·청화백자 미학을 현대 럭셔리로 재해석하는 경향. [사실] 故宫文创(고궁 문화 창작 상품) 등 문화 IP 활용 브랜드 성장",techs:["수묵화 텍스처 현대화","여백 미학 디지털 적용","전통 색채 체계(오방색) 재해석"],brand:"故宫文创 · 观夏 · 三顿半"},
            {name:"중국 AI 콘텐츠 생산 가속",period:"2023 Q1 ~ 현재",why:"[사실] 바이두·알리바바·ByteDance 등 중국 빅테크의 AI 이미지·영상 생성 도구 출시. [해석] 숏폼 콘텐츠 수요와 결합하여 AI 생성 광고 소재 활용 빠르게 증가",techs:["AI 생성 광고 소재","9:16 세로 숏폼 포맷","실시간 개인화 콘텐츠"],brand:"바이두(文心一格) · 알리바바 · ByteDance"},
          ],
          europe:[
            {name:"에코 디자인 미학",period:"2020 Q1 ~ 현재",why:"[사실] EU 그린딜(2020) · 탄소중립 규제 강화. [해석] 지속가능성이 브랜드 미학 자체로 통합되는 경향. 크래프트 종이·어스 톤 = '착한 브랜드'의 시각 기호화",techs:["크래프트 종이 질감","어스 톤(흙·모래·녹색) 팔레트","미가공 인쇄 감성","콩기름 잉크 강조"],brand:"Patagonia · Oatly · Allbirds · Stella McCartney"},
            {name:"다크 럭셔리 · 하이퍼 미니멀",period:"2021 Q1 ~ 현재",why:"[해석] 로고 피로감 + '진짜 럭셔리는 아는 사람만 안다'는 인식 → 로고 제거 후 소재·여백으로 소통. [사실] Bottega Veneta의 SNS 계정 삭제(2021)가 역설적으로 화제가 된 사례",techs:["로고 최소화 또는 완전 제거","소재·텍스처 클로즈업 강조","중립 세리프 타이포","무채색 사진"],brand:"Bottega Veneta · Loro Piana · The Row · Celine"},
          ],
          west:[
            {name:"Liquid Glass — Apple의 새 디자인 언어",period:"2025 Q2 ~ 현재",why:"[사실] Apple이 WWDC 2025(2025.06.09)에서 발표. iOS 26·iPadOS 26·macOS Tahoe 26 등 전 플랫폼에 적용. 2025.09.15 정식 출시. iOS 7(2013) 이후 가장 큰 UI 변화로 평가됨. [주의] 'Liquid Glass'는 Apple의 공식 마케팅 명칭이며 독립적 디자인사 사조 명칭과는 구분 필요",techs:["투명 유리 질감 레이어 (글래스모피즘 계승+심화)","배경 색상 반사·굴절 효과","Fluid 모션 전환","공간 깊이감 레이어링"],brand:"Apple (iOS 26 · macOS Tahoe · visionOS 26 전 플랫폼)"},
            {name:"스페이셜 UI · 공간 컴퓨팅",period:"2023 Q2 ~ 현재",why:"[사실] Apple Vision Pro 2024년 2월 출시. visionOS가 공간 컴퓨팅 인터페이스 설계 개념을 구체화. [예측] 현재 초기 단계 — 공간 UI가 주류 디자인 표준이 될지는 미확정",techs:["아이 트래킹 기반 인터랙션","3D 공간 내 부유 패널","깊이(depth) 레이어링","공간 타이포그래피"],brand:"Apple (visionOS) · Meta Quest · Google"},
            {name:"네오 브루탈리즘 성숙기",period:"2022 Q1 ~ 현재",why:"[해석] 초기 충격적 스타일이 지나고 스타트업 랜딩페이지의 확립된 선택지 중 하나로 정착. [사실] 여러 테크 스타트업이 차별화 전략으로 채택",techs:["두꺼운 테두리","오프셋 그림자","모노스페이스 폰트","불규칙 그리드 레이아웃"],brand:"Gumroad · Linear · Vercel · Lemon Squeezy"},
            {name:"반 AI 공예 미학 · 텍스처 반란",period:"2024 Q1 ~ 현재",why:"[사실] Creative Bloq 등 디자인 매체가 2025~2026 주요 트렌드로 선정. [해석] AI 생성 이미지 범람으로 '완벽함'이 평범해짐 → 손맛·질감·불완전함이 희소성 가짐. [예측] 반동 트렌드이므로 지속 기간은 불확실",techs:["손그림 드로잉 스타일","강조된 노이즈 텍스처","리소그래피 인쇄 감성","수작업 느낌 폰트·레이아웃"],brand:"독립 그래픽 스튜디오 · 소규모 출판 · Tortoiseshell Press"},
          ],
        }
      },
    ]
  },

];


// ── WHY / WHAT / HOW / NOW 레이어 자동 보강 ─────────────────────────
// 기존 데이터는 삭제하지 않고, 화면 요약에 필요한 layer 필드만 파생해서 붙입니다.
if (typeof enrichDesignAtlasLayers === 'function') {
  enrichDesignAtlasLayers(ERAS_MODERN);
}

// 현대 트랙 DOM 빌드
(function() {
  const gridModern = document.getElementById('gridModern');
  if (gridModern && typeof buildEraSection === 'function') {
    ERAS_MODERN.forEach(era => gridModern.appendChild(buildEraSection(era)));
  }
})();
