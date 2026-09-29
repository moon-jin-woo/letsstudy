let DATA=null, REGISTRY=null, CURRENT_SET=null, state=null;
const FALLBACK_SET={
  "meta": {
    "id": "korean2-midterm",
    "subject": "국어",
    "title": "공통국어2 중간고사 대비",
    "description": "고1 공통국어2 중간고사 대비 · 객관식 15 + 서술형 15",
    "level": "고등학교 1학년",
    "version": 1,
    "grader_context": "고등학교 1학년 국어 내신 서술형 채점"
  },
  "mcq": [
    {
      "id": 1,
      "unit": "1(1) 인공 지능을 보는 다양한 관점",
      "q": "「저건 사람도 아니다」에서 ‘나’가 로봇 ‘그것’에게 직장 업무까지 맡기면서 겪게 되는 핵심 갈등은?",
      "options": [
        "‘그것’의 외모가 달라 정체가 발각될까 두려워한다.",
        "‘그것’이 자신보다 뛰어난 성과를 내면서 자신의 사회적 위치와 존재 가치가 대체될 수 있다는 혼란을 겪는다.",
        "동료들이 처음부터 ‘그것’의 정체를 알고 있어 인간관계가 단절된다.",
        "‘그것’이 육아와 가사를 제대로 하지 못해 다시 모든 일을 떠맡는다.",
        "‘그것’의 업무 능력이 부족해 구조 조정 대상이 될 가능성이 높아진다."
      ],
      "answer": 1,
      "explanation": "‘그것’의 성공이 ‘나’의 자리를 오히려 대체하면서 정체성 혼란이 심화된다."
    },
    {
      "id": 2,
      "unit": "1(1) 인공 지능을 보는 다양한 관점",
      "q": "「인공 지능 시대, 사유와 성찰의 힘」의 관점으로 가장 적절한 것은?",
      "options": [
        "인공 지능의 발전은 인간의 자율성과 무관하다.",
        "인공 지능의 사용을 전면 중단해야 한다.",
        "기계가 판단을 대신할수록 인간의 사유 능력은 자동으로 향상된다.",
        "인공 지능을 활용하더라도 인간이 사유와 판단의 주체로 남는 것이 중요하다.",
        "목적이 선하다면 인간의 자율성 문제는 고려할 필요가 없다."
      ],
      "answer": 3,
      "explanation": "핵심은 기술 폐기가 아니라 인간이 판단의 주체로 남아 자율성과 주체성을 지키는 데 있다."
    },
    {
      "id": 3,
      "unit": "1(1) 인공 지능을 보는 다양한 관점",
      "q": "세 글을 비교한 내용으로 적절하지 않은 것은?",
      "options": [
        "「저건 사람도 아니다」는 인물과 사건을 통해 문제를 형상화한다.",
        "「인공 지능이란 무엇인가」는 개념과 발전 양상을 설명한다.",
        "「인공 지능 시대, 사유와 성찰의 힘」은 자율성과 주체성을 다룬다.",
        "첫째와 셋째 글은 같은 화제를 서로 다른 방식으로 다룬다.",
        "둘째와 셋째 글은 모두 허구적 인물의 경험만을 중심으로 인공 지능을 설명한다."
      ],
      "answer": 4,
      "explanation": "「인공 지능이란 무엇인가」는 개념과 기술 발전을 설명하는 정보 전달적 글이다."
    },
    {
      "id": 4,
      "unit": "1(2) 생각을 나누는 독서와 발표",
      "q": "글쓴이가 오늘날의 갈등과 편 가르기를 설명하는 방식으로 가장 적절한 것은?",
      "options": [
        "모든 갈등은 공감 능력이 완전히 사라져서 발생한다.",
        "정서적 공감이 깊을수록 외부 집단에 대한 공감도 자동으로 커진다.",
        "자기 집단에 대한 과잉 공감이 외부 집단을 배제하는 결과로 이어질 수 있다.",
        "인지적 공감은 자기 집단의 결속만 강화한다.",
        "갈등을 해결하려면 모든 공감을 억제해야 한다."
      ],
      "answer": 2,
      "explanation": "자기 집단에 대한 과잉 정서적 공감이 외부 집단 배제와 편 가르기를 심화할 수 있다."
    },
    {
      "id": 5,
      "unit": "1(2) 생각을 나누는 독서와 발표",
      "q": "외부 집단의 처지를 고려하며 공감의 반경을 넓히는 힘은?",
      "options": [
        "공감의 구심력",
        "공감의 원심력",
        "감정적 동일시",
        "집단 내 결속력",
        "자동적 공감"
      ],
      "answer": 1,
      "explanation": "외부 집단을 고려하는 넓고 인지적인 공감이 ‘공감의 원심력’이다."
    },
    {
      "id": 6,
      "unit": "2(1) 청산별곡·십 년을 경영하여",
      "q": "「청산별곡」의 ‘청산’과 ‘바다’를 지향하는 태도는?",
      "options": [
        "현실의 시름과 고통에서 벗어나고자 하는 소망과 관련된다.",
        "경제적 생산을 위해 자연을 개척하려는 태도이다.",
        "자연에서 부를 축적한 뒤 현실로 돌아가려는 계획이다.",
        "이미 완전히 정착해 살아가는 현실 공간이다.",
        "자연을 두려움의 대상으로만 여긴다."
      ],
      "answer": 0,
      "explanation": "청산과 바다는 현실의 시름에서 벗어나 살고자 지향하는 공간이다."
    },
    {
      "id": 7,
      "unit": "2(1) 청산별곡·십 년을 경영하여",
      "q": "‘가던 새’와 ‘잉 무든 장글란’에 대한 설명으로 가장 적절한 것은?",
      "options": [
        "의미가 하나로만 확정된다.",
        "해석에 따라 화자의 구체적 처지를 서로 다르게 이해할 여지가 있다.",
        "후렴구의 음악성만을 위한 표현이다.",
        "화자가 자연을 소유함을 증명한다.",
        "임과의 재회를 확신하는 태도이다."
      ],
      "answer": 1,
      "explanation": "자료에서도 해당 시구의 해석에 따라 화자의 처지를 달리 볼 수 있음을 주요 출제 포인트로 제시한다."
    },
    {
      "id": 8,
      "unit": "2(1) 청산별곡·십 년을 경영하여",
      "q": "「십 년을 경영하여」에 대한 이해로 적절하지 않은 것은?",
      "options": [
        "자연물을 사람과 함께 거처하는 존재처럼 표현한다.",
        "자연과 더불어 사는 삶에 만족한다.",
        "제한된 공간에 자연을 끌어들이는 기발한 발상이 있다.",
        "자연 속 삶을 물질적 결핍 때문에 마지못해 견디는 태도가 중심이다.",
        "자연 친화적 가치관을 확인할 수 있다."
      ],
      "answer": 3,
      "explanation": "작품은 자연과 더불어 살아가는 만족과 풍류를 드러낸다."
    },
    {
      "id": 9,
      "unit": "2(2) 속미인곡·진달래꽃",
      "q": "「속미인곡」의 ‘낙월’과 ‘구즌비’에 대한 이해로 가장 적절한 것은?",
      "options": [
        "둘 다 관계를 끊으려는 의지이다.",
        "둘 다 임에게 다가가고자 하는 소망과 관련되지만 속성과 태도에는 차이가 있다.",
        "낙월은 원망, 구즌비는 망각만 뜻한다.",
        "둘 다 화자의 정서와 무관하다.",
        "둘 다 임이 화자를 찾아오는 상황이다."
      ],
      "answer": 1,
      "explanation": "두 자연물은 모두 임을 향한 소망과 관련되지만 속성과 접근 방식에 차이가 있다."
    },
    {
      "id": 10,
      "unit": "2(2) 속미인곡·진달래꽃",
      "q": "「진달래꽃」의 화자가 이별 상황에서 보이는 태도는?",
      "options": [
        "떠나는 임에게 분노를 직접 표출한다.",
        "담담하게 보내는 듯 말하면서 내면의 슬픔과 사랑을 드러낸다.",
        "임을 완전히 잊었다.",
        "이별의 원인을 사회 제도에서 찾는다.",
        "이별을 즐거운 사건으로 받아들인다."
      ],
      "answer": 1,
      "explanation": "표면적 담담함과 내면의 슬픔·사랑이 대비된다."
    },
    {
      "id": 11,
      "unit": "2(3) 춘향전·유자소전",
      "q": "판소리계 소설의 특징에 대한 설명으로 적절하지 않은 것은?",
      "options": [
        "서술자가 인물이나 상황에 개입하기도 한다.",
        "구어적 표현으로 현장감을 높인다.",
        "과장과 열거로 장면을 확대한다.",
        "해학과 풍자로 부정적 현실을 드러낸다.",
        "서술자의 평가와 청중을 의식한 표현을 철저히 배제하는 것이 핵심이다."
      ],
      "answer": 4,
      "explanation": "판소리계 소설에는 서술자의 개입과 청중을 의식한 말하기가 나타날 수 있다."
    },
    {
      "id": 12,
      "unit": "2(3) 춘향전·유자소전",
      "q": "「춘향전」의 인물과 사건에 대한 이해로 가장 적절한 것은?",
      "options": [
        "춘향은 수청 요구를 받아들인다.",
        "몽룡은 남원에 오자마자 신분을 공개한다.",
        "변 사또의 횡포와 춘향의 저항은 가치관의 대립을 드러내는 핵심 갈등이다.",
        "월매는 춘향의 저항을 끝까지 비난한다.",
        "암행어사 출두는 변 사또의 권력을 강화한다."
      ],
      "answer": 2,
      "explanation": "권력의 횡포와 춘향의 가치관이 충돌하는 핵심 갈등이다."
    },
    {
      "id": 13,
      "unit": "2(3) 춘향전·유자소전",
      "q": "「춘향전」과 근원 설화의 관계에 대한 설명으로 가장 적절한 것은?",
      "options": [
        "하나의 설화를 그대로 기록했다.",
        "여러 설화의 모티프가 복합적으로 결합·변형되어 작품 형성에 작용했다고 볼 수 있다.",
        "근원 설화는 작품 완성 뒤 새로 만들어졌다.",
        "암행어사 설화는 춘향의 정절만 설명한다.",
        "관탈 민녀 설화는 관리의 백성 구제만 다룬다."
      ],
      "answer": 1,
      "explanation": "여러 근원 설화의 모티프가 판소리 전승 과정에서 결합·변형된 것으로 이해한다."
    },
    {
      "id": 14,
      "unit": "3(1) 영화 「업(UP)」 비평문",
      "q": "「업(UP)」 비평문의 서술 방식으로 가장 적절한 것은?",
      "options": [
        "모든 장면을 빠짐없이 요약한다.",
        "구체적인 장면·인물·사물을 근거로 작품의 의미를 해석하고 평가한다.",
        "작품과 무관한 경험만 나열한다.",
        "평가를 피하고 제작 정보만 제공한다.",
        "경제적 성과만 분석한다."
      ],
      "answer": 1,
      "explanation": "비평문은 구체적 요소를 근거로 작품의 의미와 가치를 해석·평가한다."
    },
    {
      "id": 15,
      "unit": "3(1) 영화 「업(UP)」 비평문",
      "q": "영화 「업(UP)」에서 ‘집’과 ‘여행’을 해석한 것으로 가장 적절한 것은?",
      "options": [
        "집은 경제적 재산 가치만 상징한다.",
        "집은 과거의 기억을 품지만 칼의 변화는 현재의 삶과 새로운 관계로 나아가는 문제까지 보여 준다.",
        "여행은 모든 관계를 끊는 과정이다.",
        "여행은 내적 변화와 무관하다.",
        "영화는 현재의 관계를 희생하라고 말한다."
      ],
      "answer": 1,
      "explanation": "칼은 과거의 기억을 품되 새로운 관계와 현재의 삶을 받아들이는 방향으로 변화한다."
    }
  ],
  "essay": [
    {
      "id": 16,
      "unit": "1(1) 인공 지능을 보는 다양한 관점",
      "q": "「저건 사람도 아니다」에서 ‘나’가 ‘그것’ 때문에 정체성의 혼란을 겪는 까닭을 서술하시오.",
      "cond": "‘사회적 위치’와 ‘존재 가치’를 모두 사용하고 주변 사람들의 기대 변화를 포함할 것.",
      "model": "‘그것’이 실제 ‘나’보다 업무와 가사·육아를 더 완벽하게 수행하면서 주변 사람들은 ‘나’가 아니라 ‘그것’의 성과를 기대하게 된다. 그 결과 ‘나’는 자신의 사회적 위치와 존재 가치가 대체될 수 있다는 사실을 깨닫고 정체성의 혼란을 느낀다.",
      "rubric": [
        "‘그것’과 ‘나’의 능력 차이를 설명한다.",
        "주변 사람들의 기대가 ‘그것’의 성과를 향하게 됨을 설명한다.",
        "사회적 위치와 존재 가치의 흔들림을 정체성 혼란과 연결한다."
      ]
    },
    {
      "id": 17,
      "unit": "1(1) 인공 지능을 보는 다양한 관점",
      "q": "글쓴이가 인공 지능 시대에 ‘사유와 성찰의 힘’을 강조하는 이유를 서술하시오.",
      "cond": "‘자율성’과 ‘주체성’을 모두 사용하고 기계 의존의 문제와 해결 방향을 연결할 것.",
      "model": "기계에 판단과 결정을 계속 맡기면 인간은 스스로 판단하는 능력을 약화시키고 자율성을 잃을 수 있다. 따라서 인간은 사유와 성찰을 통해 판단의 주체로 남아 자신의 주체성을 지켜야 한다.",
      "rubric": [
        "기계 의존으로 인간의 판단 능력이 약화될 수 있음을 설명한다.",
        "인간의 자율성 상실 가능성을 제시한다.",
        "사유와 성찰을 통해 주체성을 유지해야 함을 제시한다."
      ]
    },
    {
      "id": 18,
      "unit": "1(2) 생각을 나누는 독서와 발표",
      "q": "‘공감의 구심력’과 ‘공감의 원심력’의 차이와 더 강화해야 할 힘을 서술하시오.",
      "cond": "두 개념을 각각 설명하고 ‘공감의 반경’을 사용할 것.",
      "model": "공감의 구심력은 자기 집단을 향해 깊고 정서적으로 공감하게 하는 힘이고, 공감의 원심력은 외부 집단의 처지까지 인지적으로 고려하여 공감의 반경을 넓히는 힘이다. 글쓴이는 공감의 원심력을 강화해야 한다고 본다.",
      "rubric": [
        "공감의 구심력을 자기 집단 중심의 깊은 공감으로 설명한다.",
        "공감의 원심력을 외부 집단까지 고려하는 넓은 공감으로 설명한다.",
        "공감의 반경 확대와 원심력의 필요성을 연결한다."
      ]
    },
    {
      "id": 19,
      "unit": "1(2) 생각을 나누는 독서와 발표",
      "q": "두 모둠이 자기편의 억울함만 강조하며 갈등하고 있다. 필요한 공감 태도를 서술하시오.",
      "cond": "‘인지적 공감’을 사용하고 구체적인 행동을 제시할 것.",
      "model": "각 모둠은 자기편의 감정에만 몰입하기보다 상대 모둠이 어떤 조건과 이유에서 행동했는지 질문하고 자료를 확인하는 인지적 공감을 발휘해야 한다.",
      "rubric": [
        "인지적 공감을 명시한다.",
        "상대의 조건·이유를 파악하는 구체적 행동을 제시한다.",
        "자기 집단에만 치우치지 않고 관점을 넓히는 방향을 제시한다."
      ]
    },
    {
      "id": 20,
      "unit": "1(2) 생각을 나누는 독서와 발표",
      "q": "‘공감이 부족해서 갈등이 생긴다’는 통념을 글쓴이가 그대로 받아들이지 않는 이유를 서술하시오.",
      "cond": "‘자기 집단’과 ‘과잉 공감’을 모두 사용할 것.",
      "model": "자기 집단에 대한 과잉 공감이 외부 집단에 사용할 공감을 줄이고 편 가르기를 심화할 수 있기 때문에 갈등을 단순한 공감 부족으로만 설명할 수 없다.",
      "rubric": [
        "자기 집단에 대한 과잉 공감을 원인으로 제시한다.",
        "외부 집단에 대한 공감 감소 또는 배제를 설명한다.",
        "편 가르기·갈등 심화와 연결한다."
      ]
    },
    {
      "id": 21,
      "unit": "2(1) 청산별곡·십 년을 경영하여",
      "q": "「청산별곡」의 ‘청산’이 화자에게 갖는 의미를 서술하시오.",
      "cond": "‘현실’과 ‘이상적 공간’을 모두 사용하고 화자의 정서를 포함할 것.",
      "model": "청산은 시름과 고통이 존재하는 현실에서 벗어나 화자가 살고 싶어 하는 이상적 공간이며, 현실에서 벗어나고자 하는 소망을 드러낸다.",
      "rubric": [
        "현실의 시름·고통을 제시한다.",
        "청산을 이상적 공간으로 설명한다.",
        "화자의 탈현실 소망 또는 정서를 연결한다."
      ]
    },
    {
      "id": 22,
      "unit": "2(1) 청산별곡·십 년을 경영하여",
      "q": "두 작품에서 자연 공간을 대하는 화자의 태도 차이를 서술하시오.",
      "cond": "공통점 1가지를 먼저 쓰고 차이점에는 ‘반면’을 사용할 것.",
      "model": "두 작품 모두 자연을 긍정한다. 「청산별곡」의 자연은 현실의 시름에서 벗어나고자 지향하는 공간인 반면, 「십 년을 경영하여」의 자연은 이미 더불어 살아가며 만족과 풍류를 느끼는 공간이다.",
      "rubric": [
        "두 작품 모두 자연을 긍정한다는 공통점을 제시한다.",
        "「청산별곡」의 자연을 현실에서 벗어나 지향하는 공간으로 설명한다.",
        "「십 년을 경영하여」의 자연을 함께 살아가며 만족하는 공간으로 설명한다.",
        "조건에 따라 ‘반면’을 사용한다."
      ]
    },
    {
      "id": 23,
      "unit": "2(2) 속미인곡·진달래꽃",
      "q": "「속미인곡」의 ‘낙월’과 ‘구즌비’의 공통점과 차이점을 서술하시오.",
      "cond": "공통점은 임을 향한 소망과, 차이점은 자연물의 속성과 태도와 연결할 것.",
      "model": "둘은 모두 임에게 다가가고자 하는 소망을 드러낸다. 낙월은 멀리서 임을 비추는 절제된 접근인 반면, 구즌비는 임에게 더 가까이 닿고자 하는 적극적이고 절실한 태도를 드러낸다.",
      "rubric": [
        "두 소재가 임에게 다가가려는 소망이라는 공통점을 제시한다.",
        "낙월의 속성과 화자의 태도를 연결한다.",
        "구즌비의 속성과 화자의 태도를 연결한다.",
        "공통점과 차이점을 명확히 구분한다."
      ]
    },
    {
      "id": 24,
      "unit": "2(2) 속미인곡·진달래꽃",
      "q": "「진달래꽃」에서 ‘눈물을 흘리지 않겠다’는 표현이 화자의 정서를 어떻게 드러내는지 서술하시오.",
      "cond": "‘표면’과 ‘내면’을 대비할 것.",
      "model": "표면적으로는 임을 담담하게 보내는 태도를 보이지만 내면에는 이별의 슬픔과 깊은 사랑이 자리하며, 이 대비로 슬픔을 억누르는 태도가 강조된다.",
      "rubric": [
        "표면적으로 담담히 보내는 태도를 설명한다.",
        "내면의 슬픔과 사랑을 설명한다.",
        "표면과 내면의 대비가 주는 효과를 설명한다."
      ]
    },
    {
      "id": 25,
      "unit": "2(2) 속미인곡·진달래꽃",
      "q": "「속미인곡」과 「진달래꽃」의 이별 태도의 공통점과 차이점을 서술하시오.",
      "cond": "공통점 1가지와 차이점 1가지를 쓸 것.",
      "model": "둘 다 이별한 대상에 대한 사랑과 그리움을 드러낸다. 「속미인곡」은 임에게 다가가고 재회하려는 소망을 적극적으로 드러내는 반면, 「진달래꽃」은 떠나는 임을 보내는 태도를 표면에 내세우며 슬픔을 절제한다.",
      "rubric": [
        "사랑·그리움이라는 공통점을 제시한다.",
        "「속미인곡」의 재회·접근 소망을 설명한다.",
        "「진달래꽃」의 보내 줌과 슬픔의 절제를 설명한다."
      ]
    },
    {
      "id": 26,
      "unit": "2(3) 춘향전·유자소전",
      "q": "「춘향전」 암행어사 출두 장면에서 확인할 수 있는 판소리계 소설의 특징 두 가지와 효과를 서술하시오.",
      "cond": "서로 다른 특징 두 가지와 ‘해학’ 또는 ‘풍자’를 사용할 것.",
      "model": "관리들이 허둥대는 모습을 과장·열거하여 장면을 생동감 있게 만들고 해학과 풍자의 효과를 낸다. 또한 서술자의 직접 개입을 통해 판소리의 현장감과 청중을 의식하는 말하기 방식을 드러낸다.",
      "rubric": [
        "판소리계 소설의 특징 한 가지를 정확히 제시하고 효과와 연결한다.",
        "서로 다른 두 번째 특징을 정확히 제시하고 효과와 연결한다.",
        "해학 또는 풍자를 적절히 사용한다."
      ]
    },
    {
      "id": 27,
      "unit": "2(3) 춘향전·유자소전",
      "q": "「춘향전」과 근원 설화의 관계를 서술하시오.",
      "cond": "‘복합적’을 사용하고 작품 형성 방식을 설명할 것.",
      "model": "「춘향전」은 하나의 설화를 그대로 옮긴 것이 아니라 여러 근원 설화의 모티프가 복합적으로 결합되어 형성되었으며, 전승 과정에서 사건 요소가 결합·변형되어 서사 구조를 이루었다.",
      "rubric": [
        "여러 설화가 복합적으로 결합되었음을 설명한다.",
        "근원 설화의 모티프·사건 요소가 수용되었음을 설명한다.",
        "전승 과정에서 결합·변형되었다고 설명한다."
      ]
    },
    {
      "id": 28,
      "unit": "3(1) 영화 「업(UP)」 비평문",
      "q": "비평문에서 줄거리만 요약하지 않고 장면·인물·사물의 의미를 해석하는 이유를 서술하시오.",
      "cond": "‘근거’와 ‘평가’를 모두 사용할 것.",
      "model": "비평문은 작품 내용을 전달하는 데 그치지 않고 구체적인 장면·인물·사물을 근거로 작품의 의미와 가치를 해석하고 평가하는 글이기 때문이다.",
      "rubric": [
        "비평문의 해석·평가 기능을 설명한다.",
        "구체적인 작품 요소를 근거로 삼음을 설명한다.",
        "단순 줄거리 소개와의 차이를 드러낸다."
      ]
    },
    {
      "id": 29,
      "unit": "3(1) 영화 「업(UP)」 비평문",
      "q": "칼의 여행과 변화를 바탕으로 영화가 ‘꿈’을 바라보는 태도를 서술하시오.",
      "cond": "‘과거’와 ‘현재’를 모두 사용할 것.",
      "model": "작품은 과거의 꿈과 약속을 소중히 여기면서도 그것에만 매달려 현재의 삶과 관계를 놓쳐서는 안 된다는 태도를 보여 준다.",
      "rubric": [
        "과거의 꿈·약속의 가치를 인정한다.",
        "현재의 삶·관계의 중요성을 설명한다.",
        "과거와 현재를 조화시키는 태도를 설명한다."
      ]
    },
    {
      "id": 30,
      "unit": "3(1) 영화 「업(UP)」 비평문",
      "q": "“이 영화는 목표 달성을 위해 주변 사람들과의 관계를 끊어야 한다고 말한다.”라는 반응의 문제점을 서술하시오.",
      "cond": "칼의 ‘변화’와 후반부의 새로운 관계를 포함할 것.",
      "model": "이 반응은 여행 출발 장면만 보고 전체 의미를 단정했다. 칼은 여행 과정에서 변화하여 러셀 등과의 새로운 관계를 받아들이므로 영화는 현재의 삶과 관계로 다시 나아가는 가치를 보여 준다.",
      "rubric": [
        "일부 장면만으로 작품 전체를 단정한 문제를 지적한다.",
        "칼의 변화를 설명한다.",
        "새로운 관계와 작품의 의미를 연결한다."
      ]
    }
  ]
};
const FALLBACK_REGISTRY={sets:[{id:"korean2-midterm",subject:"국어",title:"공통국어2 중간고사 대비",description:"객관식 15 + 서술형 15 · AI 서술형 채점",file:"./sets/korean2-midterm.json",tags:["고1","중간고사","공통국어2"]}]};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const nums=['①','②','③','④','⑤'];

function storeKey(){return 'letsstudy:'+CURRENT_SET;}
function freshState(){return {mcq:{},essay:{},grades:{}};}
function loadState(){state=JSON.parse(localStorage.getItem(storeKey())||'null')||freshState();state.mcq||={};state.essay||={};state.grades||={};}
function save(){localStorage.setItem(storeKey(),JSON.stringify(state));$('#saveState').textContent='저장됨';renderDashboard();}
function esc(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function mcqScore(){return DATA.mcq.reduce((n,q)=>n+(Number(state.mcq[q.id])===q.answer?1:0),0);}
function essayAverage(){const gs=Object.values(state.grades);return gs.length?Math.round(gs.reduce((a,g)=>a+Number(g.score||0),0)/gs.length):null;}

function applyMeta(){
  const m=DATA.meta||{};
  document.title=(m.title||'Let\'s Study')+' · Let\'s Study';
  $('#brandSubject').textContent=m.subject||'문제풀이';
  $('#heroEyebrow').textContent=[m.subject,m.level].filter(Boolean).join(' · ')||'문제 세트';
  $('#heroTitle').textContent=m.title||'문제 세트';
  $('#heroDesc').textContent=m.description||'문제를 풀고 바로 채점하세요.';
}
function renderSetLibrary(){
  const box=$('#setLibrary');
  if(!box)return;
  box.innerHTML=REGISTRY.sets.map(x=>`
    <article class="set-card">
      <div class="set-subject">${esc(x.subject||'문제집')}</div>
      <h2>${esc(x.title)}</h2>
      <p>${esc(x.description||'')}</p>
      <div class="set-tags">${(x.tags||[]).map(t=>`<span>${esc(t)}</span>`).join('')}</div>
      <button class="btn primary set-open" data-open-set="${esc(x.id)}">문제 풀기</button>
    </article>`).join('');
  $$('[data-open-set]').forEach(b=>b.addEventListener('click',async()=>{
    await selectSet(b.dataset.openSet);
    switchView('mcq');
    document.querySelector('.tabs')?.scrollIntoView({behavior:'smooth',block:'start'});
  }));
}
function renderSetSelect(){
  const s=$('#setSelect');
  s.innerHTML=REGISTRY.sets.map(x=>`<option value="${esc(x.id)}" ${x.id===CURRENT_SET?'selected':''}>${esc(x.subject)} · ${esc(x.title)}</option>`).join('');
  s.onchange=()=>selectSet(s.value);
}
async function selectSet(id){
  const meta=REGISTRY.sets.find(x=>x.id===id)||REGISTRY.sets[0];
  CURRENT_SET=meta.id;
  const filePath=meta.file.startsWith('/')?'.'+meta.file:meta.file;
  try{
    const r=await fetch(filePath,{cache:'no-store'});
    if(!r.ok)throw new Error('HTTP '+r.status);
    DATA=await r.json();
  }catch(err){
    if(meta.id==="korean2-midterm") DATA=FALLBACK_SET;
    else throw new Error('문제 세트를 불러오지 못했습니다: '+err.message);
  }
  loadState();applyMeta();renderSetLibrary();renderSetSelect();renderDashboard();renderMcq();renderEssay();renderResults();
  const u=new URL(location.href);u.searchParams.set('set',CURRENT_SET);history.replaceState(null,'',u);
}
function renderDashboard(){
  const m=DATA.mcq.length,e=DATA.essay.length,answered=Object.keys(state.mcq).length,written=Object.values(state.essay).filter(x=>String(x).trim()).length,graded=Object.keys(state.grades).length,avg=essayAverage();
  $('#dashboard').innerHTML=[['객관식 응답',`${answered}/${m}`],['객관식 현재 정답',`${mcqScore()}/${m}`],['서술형 작성',`${written}/${e}`],['AI 채점',graded?`${graded}/${e} · ${avg}점`:`0/${e}`]].map(([a,b])=>`<div class="stat-card"><small>${a}</small><b>${b}</b></div>`).join('');
}
function renderMcq(){
  const view=$('#mcqView');
  if(!DATA.mcq.length){view.innerHTML='<div class="empty">이 세트에는 객관식 문항이 없습니다.</div>';return;}
  view.innerHTML=DATA.mcq.map(q=>{const selected=state.mcq[q.id];return `<article class="card" id="mcq-${q.id}"><div class="unit">${esc(q.unit||'')}</div><div class="question">${q.id}. ${esc(q.q)}</div>${q.options.map((o,i)=>`<label class="choice" data-index="${i}"><input type="radio" name="m${q.id}" value="${i}" ${Number(selected)===i?'checked':''}> <span>${nums[i]||((i+1)+'.')} ${esc(o)}</span></label>`).join('')}<div class="toolbar"><button class="btn primary" data-grade-mcq="${q.id}">바로 채점</button></div><div class="feedback hidden" id="mcqfb-${q.id}"></div></article>`;}).join('');
  $$('input[type=radio]').forEach(el=>el.addEventListener('change',e=>{const id=Number(e.target.name.slice(1));state.mcq[id]=Number(e.target.value);save();}));
  $$('[data-grade-mcq]').forEach(b=>b.addEventListener('click',()=>gradeMcq(Number(b.dataset.gradeMcq))));
}
function gradeMcq(id){
  const q=DATA.mcq.find(x=>x.id===id),card=$(`#mcq-${id}`),selected=state.mcq[id],labels=[...card.querySelectorAll('.choice')],fb=$(`#mcqfb-${id}`);
  labels.forEach(x=>x.classList.remove('correct','wrong'));labels[q.answer]?.classList.add('correct');fb.classList.remove('hidden');
  if(selected===undefined){fb.innerHTML=`<strong class="bad">미응답</strong> · 정답 ${nums[q.answer]||q.answer+1}<br>${esc(q.explanation||'')}`;return;}
  if(Number(selected)===q.answer)fb.innerHTML=`<strong class="good">정답</strong> · ${esc(q.explanation||'')}`;
  else{labels[Number(selected)]?.classList.add('wrong');fb.innerHTML=`<strong class="bad">오답</strong> · 정답 ${nums[q.answer]||q.answer+1}<br>${esc(q.explanation||'')}`;}
}
function renderEssay(){
  const view=$('#essayView');
  if(!DATA.essay.length){view.innerHTML='<div class="empty">이 세트에는 서술형 문항이 없습니다.</div>';return;}
  const staticMode=location.hostname.endsWith('github.io');
  view.innerHTML=`<div class="notice">${staticMode?'GitHub Pages에서는 직접 AI 서버를 실행할 수 없습니다. 답안을 쓴 뒤 <b>ChatGPT 채점용 복사</b>를 누르면 채점 요청문이 복사됩니다.':'AI 채점은 배포 서버에 <code>OPENAI_API_KEY</code>가 설정되어 있을 때 작동합니다.'} 답안과 채점 기록은 이 브라우저에 세트별로 저장됩니다.</div>`+DATA.essay.map(q=>`<article class="card" id="essay-${q.id}"><div class="unit">${esc(q.unit||'')}</div><div class="question">${q.id}. ${esc(q.q)}</div><div class="conditions"><b>&lt;조건&gt;</b><br>${esc(q.cond||'없음')}</div><textarea class="answer-box" data-answer="${q.id}" placeholder="내 답안을 작성하세요.">${esc(state.essay[q.id]||'')}</textarea><div class="toolbar"><button class="btn primary" data-ai-grade="${q.id}">${staticMode?'ChatGPT 채점용 복사':'AI 채점'}</button><button class="btn ghost" data-clear="${q.id}">답안 지우기</button></div><div class="grade-panel ${state.grades[q.id]?'':'hidden'}" id="grade-${q.id}">${state.grades[q.id]?gradeHtml(state.grades[q.id]):''}</div></article>`).join('');
  $$('[data-answer]').forEach(t=>t.addEventListener('input',e=>{state.essay[Number(e.target.dataset.answer)]=e.target.value;save();}));
  $$('[data-ai-grade]').forEach(b=>b.addEventListener('click',()=>location.hostname.endsWith('github.io')?copyForChatGPT(Number(b.dataset.aiGrade),b):gradeEssay(Number(b.dataset.aiGrade),b)));
  $$('[data-clear]').forEach(b=>b.addEventListener('click',()=>{const id=Number(b.dataset.clear);if(confirm('이 답안을 지울까요?')){state.essay[id]='';delete state.grades[id];save();renderEssay();}}));
}
function gradeHtml(g){
  const cls=g.score>=80?'score-good':g.score>=50?'score-mid':'score-bad';
  return `<div class="grade-head"><span class="grade-score ${cls}">${g.score}점</span><span class="verdict">${esc(g.verdict)}</span></div><p><b>평가</b><br>${esc(g.feedback)}</p><p><b>충족한 요소</b></p><div class="pillbox">${(g.met||[]).map(x=>`<span class="pill good">${esc(x)}</span>`).join('')||'<span class="pill">없음</span>'}</div><p><b>보완할 요소</b></p><div class="pillbox">${(g.missed||[]).map(x=>`<span class="pill bad">${esc(x)}</span>`).join('')||'<span class="pill good">없음</span>'}</div><p><b>최소 수정 답안</b></p><div class="improved">${esc(g.improved_answer)}</div>`;
}
async function copyForChatGPT(id,button){
  const q=DATA.essay.find(x=>Number(x.id)===Number(id));
  const answer=String(state.essay[id]||'').trim();
  if(!answer){alert('답안을 먼저 작성하세요.');return;}
  const rubric=(q.rubric||[]).map((x,i)=>`${i+1}. ${x}`).join('\n');
  const prompt=`다음 서술형 답안을 채점해줘. 모범답안과 표현이 달라도 의미가 같으면 인정하고, 부분점수를 허용해줘.

과목: ${DATA.meta?.subject||''}
문제 세트: ${DATA.meta?.title||''}

문제:
${q.q}

조건:
${q.cond||'없음'}

모범답안:
${q.model||''}

채점 요소:
${rubric||'없음'}

내 답안:
${answer}

100점 환산 점수, 정답/부분정답/오답, 충족한 요소, 부족한 요소, 감점 이유, 최소 수정 답안 순서로 채점해줘.`;
  try{
    await navigator.clipboard.writeText(prompt);
    const old=button.textContent;button.textContent='복사됨 ✓';
    setTimeout(()=>button.textContent=old,1600);
  }catch{
    window.prompt('아래 내용을 복사해서 ChatGPT에 붙여넣으세요.',prompt);
  }
}

async function gradeEssay(id,button){
  const answer=String(state.essay[id]||'').trim();if(!answer){alert('답안을 먼저 작성하세요.');return;}
  const old=button.innerHTML;button.disabled=true;button.innerHTML='<span class="spinner"></span> 채점 중…';
  try{
    const r=await fetch('/api/grade',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({set_id:CURRENT_SET,question_id:id,answer})});
    const data=await r.json();if(!r.ok)throw new Error(data.error||'채점에 실패했습니다.');
    state.grades[id]=data;save();const panel=$(`#grade-${id}`);panel.innerHTML=gradeHtml(data);panel.classList.remove('hidden');panel.scrollIntoView({behavior:'smooth',block:'nearest'});
  }catch(e){alert(e.message);}finally{button.disabled=false;button.innerHTML=old;}
}
function unitStats(){
  const out={};DATA.mcq.forEach(q=>{out[q.unit]||={mcq:[0,0],essay:[]};out[q.unit].mcq[1]++;if(Number(state.mcq[q.id])===q.answer)out[q.unit].mcq[0]++;});
  DATA.essay.forEach(q=>{out[q.unit]||={mcq:[0,0],essay:[]};if(state.grades[q.id])out[q.unit].essay.push(Number(state.grades[q.id].score));});return out;
}
function renderResults(){
  if(!DATA)return;const ea=essayAverage(),stats=unitStats(),m=DATA.mcq.length,e=DATA.essay.length;
  $('#resultsView').innerHTML=`<div class="results-grid"><div class="result-card"><div>객관식</div><div class="big">${mcqScore()} / ${m}</div><div>현재 선택 기준</div></div><div class="result-card"><div>서술형 AI 채점 평균</div><div class="big">${ea===null?'—':ea+'점'}</div><div>${Object.keys(state.grades).length} / ${e}문항 채점</div></div></div><article class="card"><div class="question">단원별 현황</div><table class="unit-table"><thead><tr><th>단원</th><th>객관식</th><th>서술형</th></tr></thead><tbody>${Object.entries(stats).map(([u,s])=>`<tr><td>${esc(u||'기타')}</td><td>${s.mcq[0]}/${s.mcq[1]}</td><td>${s.essay.length?Math.round(s.essay.reduce((a,b)=>a+b,0)/s.essay.length)+'점 평균':'미채점'}</td></tr>`).join('')}</tbody></table></article><article class="card"><div class="question">데이터 관리</div><p class="small">현재 문제 세트의 답안과 채점 기록만 초기화합니다.</p><button class="btn secondary" id="resetAll">현재 세트 초기화</button></article>`;
  $('#resetAll').onclick=()=>{if(confirm('현재 문제 세트의 답안과 채점 기록을 모두 삭제할까요?')){localStorage.removeItem(storeKey());loadState();renderDashboard();renderMcq();renderEssay();renderResults();}};
}
function switchView(v){$$('.view').forEach(x=>x.classList.add('hidden'));$$('.tab').forEach(x=>x.classList.toggle('active',x.dataset.view===v));$(`#${v}View`).classList.remove('hidden');if(v==='results')renderResults();window.scrollTo({top:0,behavior:'smooth'});}
$$('.tab').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));

async function init(){
  try{
    const rr=await fetch('./sets/index.json',{cache:'no-store'});
    if(!rr.ok) throw new Error('HTTP '+rr.status);
    REGISTRY=await rr.json();
  }catch{
    REGISTRY=FALLBACK_REGISTRY;
  }
  if(!REGISTRY?.sets?.length) REGISTRY=FALLBACK_REGISTRY;
  const requested=new URL(location.href).searchParams.get('set');
  renderSetLibrary();
  await selectSet(REGISTRY.sets.some(x=>x.id===requested)?requested:REGISTRY.sets[0].id);
}
init().catch(e=>{document.body.innerHTML=`<main class="shell"><div class="card"><h2>문제 세트를 불러오지 못했습니다.</h2><p>${esc(e.message)}</p></div></main>`;});
