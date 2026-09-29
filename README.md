# Let's Study

여러 과목의 문제 세트를 같은 엔진에서 풀고 AI로 서술형을 채점할 수 있는 재사용형 학습 웹앱입니다.

## 현재 기능
- 문제 세트 선택
- 객관식 즉시 채점 + 해설
- 서술형 AI 채점
- 부분점수, 충족/보완 요소, 최소 수정 답안
- 세트별 브라우저 자동 저장
- 단원별 결과 분석
- 모바일 대응
- 브라우저용 문제 세트 JSON 제작기: `/builder.html`

## 새 문제 세트 추가
1. `public/sets/template.json`을 복사하거나 사이트의 `/builder.html`에서 JSON을 만듭니다.
2. 새 파일을 `public/sets/<set-id>.json`에 추가합니다.
3. `public/sets/index.json`의 `sets` 배열에 해당 세트를 등록합니다.
4. 배포가 갱신되면 문제 세트 선택 메뉴에 자동으로 나타납니다.

즉, 이후에는 프런트엔드 코드나 AI 채점 코드를 수정할 필요 없이 **문제 데이터 파일만 추가**하면 됩니다.

## 문제 세트 스키마

```json
{
  "meta": {
    "id": "physics-midterm",
    "subject": "물리학",
    "title": "1학기 중간고사",
    "description": "문제 세트 설명",
    "level": "고등학교 1학년",
    "version": 1,
    "grader_context": "고등학교 물리학 서술형 채점"
  },
  "mcq": [
    {
      "id": 1,
      "unit": "단원명",
      "q": "문제",
      "options": ["A","B","C","D","E"],
      "answer": 0,
      "explanation": "해설"
    }
  ],
  "essay": [
    {
      "id": 2,
      "unit": "단원명",
      "q": "서술형 문제",
      "cond": "조건",
      "model": "모범답안",
      "rubric": ["채점 요소 1","채점 요소 2"]
    }
  ]
}
```

## Vercel 배포
1. Vercel에서 `moon-jin-woo/letsstudy` 저장소를 Import합니다.
2. Environment Variables에 `OPENAI_API_KEY`를 추가합니다.
3. 선택 사항으로 `OPENAI_MODEL`을 지정할 수 있습니다.
4. Deploy합니다.

API 키는 GitHub 파일이나 브라우저 JavaScript에 넣지 않습니다. `/api/grade` 서버리스 함수만 환경 변수에서 키를 읽습니다.

## 앞으로 ChatGPT로 새 과목 추가할 때
자료를 업로드하고 “이 자료로 letsstudy에 문제 세트 추가해줘”라고 요청하면 됩니다. 기존 엔진은 그대로 두고 `public/sets/<새-id>.json`과 `public/sets/index.json`만 갱신하면 됩니다.
