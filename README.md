# heewon's blog

## 테스트 배포
http://35.75.138.20:8080

## 목적

티스토리를 이용해 개발 블로그를 쓰고 있었는데 완전히 개인 블로그 사이트를 한번 만들겸 리액트도 연습할겸 해볼려고 한다.

## 요건

- 글 작성시 해당 글이 검색엔진에 잘 노출 되도록 SSG를 이용
- 관리자 페이지 필요
- 글 작성시 코드 및 이미지 추가도 가능하게 한다.
- 모바일 대응
- 글 검색 가능하게
- 참고할 디자인 모델
  - [티스토리](https://www.tistory.com/)
  - [Qiita](https://qiita.com/)
  - [DEEPLIFY](https://deeplify.dev/)
  - [기억 보다 기록을](https://kyounghwan01.github.io/blog)
  - [평범한 직장인의 공부 정리](https://developer-talk.tistory.com/)
- 실제 책갈피와 같이 인덱스 기능을 넣어서 인덱스 링크 리스트를 보존 관리해서 정보를 찾는데 좀더 간단하게 찾을 수 있는? 기능도 있으면 좋겠다.

## 기술

- 클라우드는 AWS를 이용
- 웹서버는 Nginx DB는 MySQL
- 백엔드는 Go, Fiber, Gorm
- 프론트는 관리자화면 클라이언트화면 둘다 리액트로 하고자 하는데 관리자 화면은 vue로 할지도?
- Material UI, Styled Components 사용

## 화면구성도

https://drive.google.com/file/d/1W5-BhfUbjhmsByyS4zp85V20y9neYsT8/view?usp=sharing

## ERD

https://www.erdcloud.com/d/g6asDHhkRHc9qbFXr

## 기타사항

- 카테고리는 무한확장 가능하게 depth와 상위카테고리를 가지게 한다.
- 카테고리마다 로고를 둬서 로고의 이미지는 로고 아이디로 추적 가능하게 한다.
- 카테고리에 대한 마스터 정보를 프론트에서 유지 하도록 하면 글 리스트를 갖고 올때 조인 안해도 될듯하다.
- 카테고리 리스트는 왼쪽 책갈피 정보는 오른쪽으로 하도록 한다.
- 글 리스트를 볼 때 contents 내용들은 태그가 제거된 내용으로 미리보기를 제공
- 글 상세에서는 저장된 태그와 글 내용 그대로 렌더링해서 보여주기
- 글 작성 md로 작성 -> HTML 변환된 그대로 문자열로써 DB에 저장 -> html-parser를 이용해서 렌더링

| 글 작성                                                                                        | 글 상세                                                                                         |
| ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| ![글 작성](https://github.com/gmldnjs26/react-heewon-blog/blob/develop/img/write.png?raw=true) | ![글 상세](https://github.com/gmldnjs26/react-heewon-blog/blob/develop/img/detail.png?raw=true) |

| 글 작성 2                                                                                       | 글 임시저장                                                                                       |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| ![글 작성](https://github.com/gmldnjs26/react-heewon-blog/blob/develop/img/write2.png?raw=true) | ![글 상세](https://github.com/gmldnjs26/react-heewon-blog/blob/develop/img/임시저장.png?raw=true) |
