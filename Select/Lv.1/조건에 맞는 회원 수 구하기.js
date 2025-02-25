/*
문제
다음은 어느 의류 쇼핑몰에 가입한 회원 정보를 담은 USER_INFO 테이블입니다.
USER_INFO 테이블은 아래와 같은 구조로 되어있으며 
USER_ID, GENDER, AGE, JOINED는 각각 회원 ID, 성별, 나이, 가입일을 나타냅니다.

 name	      Type	    Nullable
USER_ID	    INTEGER	    FALSE
GENDER	    TINYINT(1)	TRUE
AGE	        INTEGER	    TRUE
JOINED	    DATE	    FALSE
GENDER 컬럼은 비어있거나 0 또는 1의 값을 가지며 
0인 경우 남자를, 1인 경우는 여자를 나타냅니다.

USER_INFO 테이블에서 2021년에 가입한 회원 중 나이가 20세 이상 29세 이하인 회원이 
몇 명인지 출력하는 SQL문을 작성해주세요.

2021년에 가입한 회원 중 나이가 20세 이상 29세 이하인 회원은 USER_ID 가 1, 3, 5 인 회원들 이므로, 다음과 같이 결과가 나와야 합니다.

USERS
3
*/

`
SELECT COUNT(user_id) as users     // USERS가 나와야하기 떄문에 AS를 사용해서 COUNT를 USERS로 바꿔준다.
FROM user_info
WHERE YEAR(joined) = '2021'        // 2021년에 해당되는 회원을 찾아야 함으로 YEAR()를 사용하고 조건을 걸어준다.
AND age >= 20 AND age <= 29
`;
