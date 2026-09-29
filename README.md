# Let's Study — 공통국어2 AI 채점

고1 공통국어2 중간고사 대비용 웹앱입니다.

## 기능
- 객관식 15문항 즉시 채점 + 해설
- 서술형 15문항 AI 채점
- 0~100점, 정답/부분정답/오답, 충족 요소, 보완 요소, 최소 수정 답안
- 브라우저 자동 저장
- 단원별 결과 분석
- 모바일 대응

## Vercel 배포
1. Vercel에서 이 저장소 `moon-jin-woo/letsstudy`를 Import
2. Project Settings → Environment Variables에 `OPENAI_API_KEY` 추가
3. 선택: `OPENAI_MODEL` (기본값 `gpt-5.6-luna`)
4. Deploy

API 키는 프런트엔드나 GitHub에 직접 넣지 마세요. `/api/grade` 서버리스 함수만 환경 변수에서 키를 읽습니다.

OpenAI Responses API의 Structured Outputs(JSON Schema)를 사용해 채점 결과 형식을 고정합니다.
