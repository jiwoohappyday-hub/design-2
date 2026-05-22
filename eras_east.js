// ════════════════════════════════════════════════════════════════
// eras_east.js — 동양 디자인사 (한·중·일 통합)
// 사용법: index.html의 </body> 바로 위에
//   <script src="eras_east.js"></script> 추가
// buildEraSection() 함수가 공유되므로 index.html 이후 로드 필요
// ════════════════════════════════════════════════════════════════

const ERAS_EAST = [

  // ─────────────────────────────────────────────
  // E-01. 고대 동아시아
  // ─────────────────────────────────────────────
  {
    num:"E-01", name:"고대 동아시아", period:"기원전 3,000 ~ 220",
    color:"#c8956e",
    bg:["청동기·철기·한자 발명","황하·황제 문명·봉건제","천명사상·음양오행·도가"],
    next:"한자·제지술·인쇄술 → 동아시아 문명권 형성 → 실크로드 교류",
    movements:[
      {
        name:"상나라 청동기 양식", color:"#c8956e", art:false,
        person:"",
        work:"청동 정(鼎) · 갑골문 · 사모무정",
        brand:"",
        modern:"동아시아 브랜드 정체성 · 한자 타이포그래피 · 명품 도자기",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/상나라",
          googleArt:"https://artsandculture.google.com/search?q=shang+dynasty+bronze",
          youtube:"https://www.youtube.com/results?search_query=상나라+청동기+디자인"
        },
        imgs:[
          {label:"사모무정 청동기",q:"simuwu ding shang dynasty bronze"},
          {label:"갑골문",q:"oracle bone script shang dynasty"}
        ],
        trends:[
          {name:"권력 상징 조형",techs:["청동 주조","음각 문양","도철문 장식"]},
          {name:"문자 시각화",techs:["갑골 조각","금문(金文) 주조"]},
        ]
      },
      {
        name:"주나라 예악 시각문화", color:"#c8956e", art:false,
        person:"공자 (예악 체계화)",
        work:"주례(周禮) 기물 · 편종 · 옥기",
        brand:"",
        modern:"의례 중심 브랜딩 · 고급 테이블웨어 디자인",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/주나라",
          googleArt:"https://artsandculture.google.com/search?q=zhou+dynasty+ritual+bronze",
          youtube:"https://www.youtube.com/results?search_query=주나라+예악+문화"
        },
        imgs:[
          {label:"주나라 편종",q:"bianzhong zhou dynasty bronze bells"},
          {label:"주나라 옥기",q:"zhou dynasty jade ritual object"}
        ],
        trends:[
          {name:"예제(禮制) 조형",techs:["옥 가공","청동 주조","칠기"]},
          {name:"위계 시각화",techs:["색채 위계(오색)","문양 등급제"]},
        ]
      },
      {
        name:"진·한 통일 제국 양식", color:"#c8956e", art:false,
        person:"시황제 (표준화 추진)",
        work:"병마용 · 만리장성 · 한대 화상석",
        brand:"",
        modern:"국가 브랜딩 · 기념비적 건축 · 통일 시각언어",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/진나라",
          googleArt:"https://artsandculture.google.com/search?q=terracotta+army",
          youtube:"https://www.youtube.com/results?search_query=진시황+병마용+디자인"
        },
        imgs:[
          {label:"진시황 병마용",q:"terracotta army qin emperor"},
          {label:"한대 화상석",q:"han dynasty stone relief carving"}
        ],
        trends:[
          {name:"제국적 통일 양식",techs:["도량형 표준화","문자 통일(소전체)"]},
          {name:"기념비적 조형",techs:["석각","도제(陶製)","칠기"]},
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  // E-02. 고대 한국
  // ─────────────────────────────────────────────
  {
    num:"E-02", name:"고대 한국 · 삼국시대", period:"기원전 57 ~ 668",
    color:"#6ec8b8",
    bg:["철기·금속공예·불교 전래","고구려·백제·신라 삼국 경쟁","불교적 세계관·샤머니즘 혼합"],
    next:"삼국통일 → 불교 문화 전성 → 고려 청자 문화",
    movements:[
      {
        name:"고구려 고분벽화", color:"#6ec8b8", art:false,
        person:"",
        work:"무용총 · 수렵도 · 사신도",
        brand:"",
        modern:"역동적 일러스트레이션 · 캐릭터 디자인 · 벽화 아트",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/고구려_고분벽화",
          googleArt:"https://artsandculture.google.com/search?q=goguryeo+tomb+murals",
          youtube:"https://www.youtube.com/results?search_query=고구려+고분벽화"
        },
        imgs:[
          {label:"고구려 수렵도",q:"goguryeo hunting mural tomb"},
          {label:"사신도 청룡",q:"goguryeo four guardians blue dragon mural"}
        ],
        trends:[
          {name:"역동적 인물 표현",techs:["선묘(線描)","천연안료","석벽 직포 및 회반죽 기법"]},
          {name:"방위 수호신 시각화",techs:["사신도 도상","오방색 체계"]},
        ]
      },
      {
        name:"신라 금관 양식", color:"#6ec8b8", art:false,
        person:"",
        work:"신라 금관 · 천마도 · 첨성대",
        brand:"",
        modern:"금속 주얼리 디자인 · 럭셔리 크라운 모티프",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/신라_금관",
          googleArt:"https://artsandculture.google.com/search?q=silla+gold+crown",
          youtube:"https://www.youtube.com/results?search_query=신라+금관+제작"
        },
        imgs:[
          {label:"신라 금관",q:"silla gold crown korea"},
          {label:"천마도",q:"cheonmado heavenly horse silla"}
        ],
        trends:[
          {name:"귀금속 장식 문화",techs:["금·은 세공","누금(鏤金) 기법","영락 장식"]},
          {name:"자연 상징 조형",techs:["출자형(出字形) 금관","비취 곡옥"]},
        ]
      },
      {
        name:"백제 미술 양식", color:"#6ec8b8", art:false,
        person:"",
        work:"백제 금동대향로 · 무령왕릉 · 미륵사지석탑",
        brand:"",
        modern:"우아한 곡선 디자인 · 불교 문화재 복원",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/백제_금동대향로",
          googleArt:"https://artsandculture.google.com/search?q=baekje+gilt+bronze+incense+burner",
          youtube:"https://www.youtube.com/results?search_query=백제+금동대향로"
        },
        imgs:[
          {label:"백제 금동대향로",q:"baekje gilt bronze incense burner"},
          {label:"미륵사지석탑",q:"mireuksaji stone pagoda baekje"}
        ],
        trends:[
          {name:"우아한 불교 조형",techs:["금동 주조","연화문 장식","석탑 건축"]},
          {name:"동아시아 교류 양식",techs:["중국·일본 교류 문양","백제 미소"]},
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  // E-03. 고대 일본
  // ─────────────────────────────────────────────
  {
    num:"E-03", name:"고대 일본 · 나라·헤이안", period:"710 ~ 1185",
    color:"#c86e9e",
    bg:["한반도·중국 문화 수용","천황제·귀족 문화","불교·신도(神道) 공존"],
    next:"무사 계급 등장 → 가마쿠라 막부 → 무사 미학(와비·사비) 형성",
    movements:[
      {
        name:"나라 불교 미술", color:"#c86e9e", art:false,
        person:"",
        work:"동대사 대불 · 정창원 보물 · 약사사 삼존불",
        brand:"",
        modern:"거대 조형물 · 종교 공간 디자인 · 박물관 컬렉션",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/도다이지",
          googleArt:"https://artsandculture.google.com/search?q=todaiji+nara+great+buddha",
          youtube:"https://www.youtube.com/results?search_query=나라+동대사+대불"
        },
        imgs:[
          {label:"동대사 대불",q:"todaiji great buddha nara japan"},
          {label:"정창원 보물",q:"shosoin treasure nara period"}
        ],
        trends:[
          {name:"불교 거대 조형",techs:["대형 청동 주조","기목조(寄木造) 목조각","금동 주조"]},
          {name:"당나라 양식 수용",techs:["대당풍(大唐風) 문양","정창원 공예"]},
        ]
      },
      {
        name:"헤이안 귀족 미학", color:"#c86e9e", art:false,
        person:"무라사키 시키부 (겐지 이야기)",
        work:"겐지 이야기 두루마리 · 히라가나 서체 · 야마토에",
        brand:"",
        modern:"일러스트 소설 · 캘리그래피 · 내러티브 그래픽",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/헤이안_시대",
          googleArt:"https://artsandculture.google.com/search?q=heian+period+yamato-e",
          youtube:"https://www.youtube.com/results?search_query=헤이안+시대+미술"
        },
        imgs:[
          {label:"겐지 이야기 두루마리",q:"tale of genji scroll heian"},
          {label:"야마토에 귀족 그림",q:"yamato-e heian court painting"}
        ],
        trends:[
          {name:"우아한 귀족 취향(모노노아와레)",techs:["야마토에","히라가나 서예","주니히토에(十二単) 배색"]},
          {name:"계절 자연 표현",techs:["금박(金泥)","색채 그라데이션(引目鉤鼻)"]},
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  // E-04. 동아시아 중세 · 송·고려·가마쿠라
  // ─────────────────────────────────────────────
  {
    num:"E-04", name:"동아시아 중세 전성기", period:"960 ~ 1392",
    color:"#6e9ec8",
    bg:["활판인쇄·나침반·화약 발명","무역 네트워크·실크로드 황금기","선불교·성리학 확산"],
    next:"유교 국가 성립(조선·명) → 문인 문화 → 절제미·사군자 미학",
    movements:[
      {
        name:"송나라 문인화", color:"#6e9ec8", art:false,
        person:"소동파 · 미불 · 마원",
        work:"산수화 · 사군자 · 북송 원체화",
        brand:"",
        modern:"미니멀 수묵 일러스트 · 여백의 미 · 동양 미니멀리즘",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/문인화",
          googleArt:"https://artsandculture.google.com/search?q=song+dynasty+landscape+painting",
          youtube:"https://www.youtube.com/results?search_query=송나라+산수화+문인화"
        },
        imgs:[
          {label:"송나라 산수화",q:"song dynasty landscape painting ink"},
          {label:"사군자 (매란국죽)",q:"four gentlemen painting chinese ink bamboo"}
        ],
        trends:[
          {name:"여백의 미(餘白)",techs:["수묵(水墨) 기법","선묘 중심","의도적 여백"]},
          {name:"자연 철학적 표현",techs:["발묵(潑墨)","파묵(破墨)","점묘(點描)"]},
        ]
      },
      {
        name:"고려 청자", color:"#6e9ec8", art:false,
        person:"",
        work:"청자 상감운학문 매병 · 청자 투각 칠보문 향로",
        brand:"",
        modern:"세라믹 디자인 · 프리미엄 도자기 · 무인양품 질감",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/고려청자",
          googleArt:"https://artsandculture.google.com/search?q=goryeo+celadon",
          youtube:"https://www.youtube.com/results?search_query=고려청자+제작"
        },
        imgs:[
          {label:"고려 청자 매병",q:"goryeo celadon crane cloud vase"},
          {label:"청자 상감 기법",q:"goryeo celadon inlaid sanggam technique"}
        ],
        trends:[
          {name:"비색(翡色) 추구",techs:["상감(象嵌) 기법","환원염 소성","세밀 문양"]},
          {name:"자연 문양 추상화",techs:["운학문·모란문·연화문"]},
        ]
      },
      {
        name:"가마쿠라 무사 미학", color:"#6e9ec8", art:false,
        person:"",
        work:"가마쿠라 대불 · 무사 갑옷 · 선종 정원",
        brand:"",
        modern:"미니멀 인테리어 · 젠(Zen) 스타일 디자인",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/가마쿠라_시대",
          googleArt:"https://artsandculture.google.com/search?q=kamakura+period+samurai",
          youtube:"https://www.youtube.com/results?search_query=가마쿠라+무사+미학"
        },
        imgs:[
          {label:"가마쿠라 대불",q:"kamakura great buddha japan"},
          {label:"일본 선종 정원",q:"zen garden japan karesansui rock"}
        ],
        trends:[
          {name:"선불교 미학(侘び·寂び 원형)",techs:["가레산스이(枯山水) 정원","선종 수묵화"]},
          {name:"기능적 무구(武具) 미학",techs:["옻칠 갑옷","금속 조각·鐔(쓰바)"]},
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  // E-05. 조선·명청·무로마치·에도
  // ─────────────────────────────────────────────
  {
    num:"E-05", name:"유교 문화 전성기", period:"1392 ~ 1868",
    color:"#a9c86e",
    bg:["목판·금속활자 인쇄 혁명","유교 질서·신분제 시각화","차(茶) 문화·와비사비 미학"],
    next:"서양 열강 접촉 → 개화기 → 동서양 디자인 충돌",
    movements:[
      {
        name:"조선 백자", color:"#a9c86e", art:false,
        person:"",
        work:"달항아리 · 청화백자 · 분청사기",
        brand:"",
        modern:"미니멀 도자기 · 여백 미학 · 무인양품·애플 화이트 철학",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/조선백자",
          googleArt:"https://artsandculture.google.com/search?q=joseon+white+porcelain",
          youtube:"https://www.youtube.com/results?search_query=조선+백자+달항아리"
        },
        imgs:[
          {label:"조선 달항아리",q:"joseon moon jar white porcelain"},
          {label:"청화백자",q:"joseon blue and white porcelain"}
        ],
        trends:[
          {name:"절제의 미(節制美)",techs:["백토 유약","무문(無紋) 여백","대칭 성형"]},
          {name:"자연 불완전성 수용",techs:["일그러진 형태 허용","회유(灰釉)"]},
        ]
      },
      {
        name:"조선 민화", color:"#a9c86e", art:false,
        person:"",
        work:"호작도 · 문자도 · 책가도 · 화조도",
        brand:"",
        modern:"팝아트적 패턴 · 플랫 일러스트 · K-컬러 감성",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/민화",
          googleArt:"https://artsandculture.google.com/search?q=joseon+minhwa+folk+painting",
          youtube:"https://www.youtube.com/results?search_query=조선+민화"
        },
        imgs:[
          {label:"호랑이와 까치 (호작도)",q:"joseon minhwa tiger magpie painting"},
          {label:"조선 책가도",q:"joseon chaekgeori books painting"}
        ],
        trends:[
          {name:"평면적 대담한 색면",techs:["분채(粉彩)","민간 안료","평면 구성"]},
          {name:"문자·도상 혼합",techs:["문자도(文字圖) 타이포","도상 결합"]},
        ]
      },
      {
        name:"한글 타이포그래피 (훈민정음)", color:"#a9c86e", art:false,
        person:"세종대왕 · 집현전 학자",
        work:"훈민정음 해례본 · 용비어천가",
        brand:"",
        modern:"한글 타이포그래피 · 나눔고딕·애플SD산돌고딕 · K-브랜딩",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/훈민정음",
          googleArt:"https://artsandculture.google.com/search?q=hunminjeongeum+hangul",
          youtube:"https://www.youtube.com/results?search_query=훈민정음+한글+디자인"
        },
        imgs:[
          {label:"훈민정음 해례본",q:"hunminjeongeum original manuscript hangul"},
          {label:"한글 서체 시스템",q:"hangul typography korean typeface"}
        ],
        trends:[
          {name:"과학적 문자 설계",techs:["천지인(天地人) 원리","모아쓰기 구조","획 표준화"]},
          {name:"소리 기반 시각화",techs:["발음 기관 상형","자모 조합 체계"]},
        ]
      },
      {
        name:"일본 우키요에", color:"#a9c86e", art:false,
        person:"가쓰시카 호쿠사이 · 안도 히로시게 · 우타가와 히로시게",
        work:"가나가와 파도 · 후지산 36경 · 도카이도 53역참",
        brand:"",
        modern:"플랫 디자인 원형 · 대담한 아웃라인 · 인상파에 영향",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/우키요에",
          googleArt:"https://artsandculture.google.com/search?q=hokusai+great+wave",
          youtube:"https://www.youtube.com/results?search_query=우키요에+호쿠사이"
        },
        imgs:[
          {label:"가나가와 파도 — 호쿠사이",q:"hokusai great wave kanagawa woodblock"},
          {label:"후지산 36경",q:"hokusai fuji 36 views woodblock"}
        ],
        trends:[
          {name:"대담한 윤곽선·평면 색면",techs:["다색 목판 인쇄(錦絵)","아이조리(藍摺) 기법"]},
          {name:"일상·유행 포착",techs:["베니에(紅絵) 채색","키즈리(木摺) 판화"]},
        ]
      },
      {
        name:"일본 와비사비 미학", color:"#a9c86e", art:false,
        person:"센노 리큐 (다도 집대성)",
        work:"와비차(侘び茶) · 선종 정원 · 라쿠 도자기",
        brand:"",
        modern:"무인양품·젠 디자인·노르딕 미니멀리즘에 간접 영향",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/와비사비",
          googleArt:"https://artsandculture.google.com/search?q=wabi+sabi+tea+ceremony",
          youtube:"https://www.youtube.com/results?search_query=와비사비+다도"
        },
        imgs:[
          {label:"일본 다실 (와비차)",q:"japanese tea ceremony wabi sabi chashitsu"},
          {label:"선종 가레산스이 정원",q:"ryoanji rock garden zen kyoto"}
        ],
        trends:[
          {name:"불완전·불균형·미완성의 미",techs:["라쿠(楽) 도자기","비대칭 다기(茶器)"]},
          {name:"자연 소재 극대화",techs:["무유(無釉) 표면","자연 균열 카세기"]},
        ]
      },
      {
        name:"명·청 장식 양식", color:"#a9c86e", art:false,
        person:"",
        work:"경덕진 청화백자 · 칠보(七寶) 공예 · 자금성",
        brand:"",
        modern:"럭셔리 도자기 · 오리엔탈 패턴 · 中 궁중 문화 콘텐츠",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/청화백자",
          googleArt:"https://artsandculture.google.com/search?q=ming+dynasty+blue+white+porcelain",
          youtube:"https://www.youtube.com/results?search_query=명나라+청화백자"
        },
        imgs:[
          {label:"명나라 청화백자",q:"ming dynasty blue white porcelain vase"},
          {label:"자금성 황궁",q:"forbidden city beijing imperial palace"}
        ],
        trends:[
          {name:"화려한 궁중 장식",techs:["청화(靑花) 코발트 채색","분채(粉彩) 에나멜"]},
          {name:"용·봉황 황실 상징",techs:["금채(金彩)","낙관(落款) 인장"]},
        ]
      },
    ]
  },

  // ─────────────────────────────────────────────
  // E-06. 개화기·근대 동아시아
  // ─────────────────────────────────────────────
  {
    num:"E-06", name:"개화기 · 근대 동아시아", period:"1868 ~ 1945",
    color:"#c8956e",
    bg:["서양 문물 강제 유입·개항","메이지 유신·갑오개혁·신문화운동","동서 절충 양식 혼재"],
    next:"해방·독립 → 한국전쟁·고도성장 → 아시아 현대 디자인 독자 노선",
    movements:[
      {
        name:"일본 메이지 절충 양식", color:"#c8956e", art:false,
        person:"",
        work:"도쿄역 · 야스쿠니 신사 · 메이지 신궁 도리이",
        brand:"",
        modern:"화양절충(和洋折衷) 디자인 · 일본 모던 건축",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/메이지_시대",
          googleArt:"https://artsandculture.google.com/search?q=meiji+period+japan+design",
          youtube:"https://www.youtube.com/results?search_query=메이지+시대+디자인"
        },
        imgs:[
          {label:"도쿄역 마루노우치 역사",q:"tokyo station marunouchi meiji architecture"},
          {label:"메이지 시대 서양 절충",q:"meiji western japanese architecture hybrid"}
        ],
        trends:[
          {name:"화양절충(和洋折衷)",techs:["서양 벽돌 건축+일본 지붕","판화+석판인쇄"]},
          {name:"제국 시각 정체성",techs:["국화 문양 표준화","육군·해군 CI"]},
        ]
      },
      {
        name:"재포니즘의 서양 역수출", color:"#c8956e", art:false,
        person:"",
        work:"우키요에 → 모네·반 고흐 영향 → 아르누보",
        brand:"",
        modern:"일본 팝컬처 글로벌화의 역사적 기원",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/자포니슴",
          googleArt:"https://artsandculture.google.com/search?q=japonisme+van+gogh+monet",
          youtube:"https://www.youtube.com/results?search_query=자포니슴+서양미술+영향"
        },
        imgs:[
          {label:"반 고흐 일본판화 오마주",q:"van gogh japonisme plum orchard hiroshige"},
          {label:"모네 일본식 정원",q:"monet japanese bridge giverny"}
        ],
        trends:[
          {name:"동양 평면성·윤곽선 서양 흡수",techs:["우키요에 구도 차용","여백 개념 전파"]},
        ]
      },
      {
        name:"한국 근대 디자인 태동", color:"#c8956e", art:false,
        person:"안석영 (최초 영화 포스터) · 나혜석",
        work:"조선총독부 청사 · 경성 상업 포스터 · 동아일보 창간호",
        brand:"",
        modern:"한국 광고·인쇄 디자인의 원형",
        links:{
          wiki:"https://ko.wikipedia.org/wiki/한국의_근대_미술",
          googleArt:"https://artsandculture.google.com/search?q=korean+modern+art+1900s",
          youtube:"https://www.youtube.com/results?search_query=한국+근대+디자인+역사"
        },
        imgs:[
          {label:"경성 근대 상업 포스터",q:"1930s korea gyeongseong commercial poster"},
          {label:"동아일보 창간호 타이포",q:"dong-a ilbo 1920 newspaper typography"}
        ],
        trends:[
          {name:"동서 절충 인쇄 문화",techs:["활판 인쇄(한글+한자)","석판 포스터"]},
          {name:"민족 정체성 시각화",techs:["태극 문양","한글 서체 정비"]},
        ]
      },
      {
        name:"중국 근대 포스터 (月份牌)", color:"#c8956e", art:false,
        person:"",
        work:"월분패(月份牌) 상업 포스터 · 상하이 아르데코",
        brand:"",
        modern:"중화권 광고 미학 · 차이나 시크(China Chic)",
        links:{
          wiki:"https://en.wikipedia.org/wiki/Yuefenpai",
          googleArt:"https://artsandculture.google.com/search?q=shanghai+art+deco+poster",
          youtube:"https://www.youtube.com/results?search_query=월분패+상하이+포스터"
        },
        imgs:[
          {label:"상하이 월분패 포스터",q:"shanghai yuefenpai commercial poster 1930s"},
          {label:"상하이 아르데코 건축",q:"shanghai art deco architecture bund"}
        ],
        trends:[
          {name:"동서 절충 상업 일러스트",techs:["유채+수채 혼합","리소그래피 인쇄"]},
          {name:"상하이 모던 감성",techs:["아르데코 레이아웃","치파오 패션 광고"]},
        ]
      },
    ]
  },

];


// ── WHY / WHAT / HOW / NOW 레이어 자동 보강 ─────────────────────────
// 기존 데이터는 삭제하지 않고, 화면 요약에 필요한 layer 필드만 파생해서 붙입니다.
if (typeof enrichDesignAtlasLayers === 'function') {
  enrichDesignAtlasLayers(ERAS_EAST);
}

// 동양 트랙 DOM 빌드
(function() {
  const gridEast = document.getElementById('gridEast');
  if (gridEast && typeof buildEraSection === 'function') {
    ERAS_EAST.forEach(era => gridEast.appendChild(buildEraSection(era)));
  }
})();
