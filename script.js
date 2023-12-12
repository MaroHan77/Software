function displaySearchResults() {
    // 검색어 가져오기
    var searchTerm = document.getElementById("searchInput").value;

    // 검색 결과를 표시할 요소 가져오기
    var searchResultsSection = document.getElementById("search-results");

    // 검색어에 따라 다른 종류의 iframe 주소 설정
    var iframeSrc = '';
    // 검색어에 따라 다른 종류의 iframe 주소 설정
    if (searchTerm === '넷플릭스' || searchTerm === '공포' || searchTerm === '스위트홈') {
    iframeSrc = 'https://www.youtube.com/embed/VMZBhtnCk4I';
    }
    else if (searchTerm === '게임' || searchTerm === '롤') {
    iframeSrc = 'https://www.youtube.com/embed/C3GouGa0noM';
    }
    else if (searchTerm === '뉴진스' || searchTerm === '아이돌' || searchTerm === '뮤비') {
    iframeSrc = 'https://www.youtube.com/embed/Km71Rr9K-Bw';
    }
    // 몇개 경우의 수 더 추가하기


    // 원래는 특정 알고리즘에 의한 추천이 필요하고 동영상을 띄워줘야 함
    // 알고리즘을은 특정 단어와 연관된 영상을 띄워주는 것으로 대체
    // 동영상을 저장하고 띄워놓기 어려워 부득이하게 유튜브 영상을 iframe에 띄우는 방식 사용


    // 검색 결과를 표시할 공간에 iframe 추가 또는 '해당 키워드로는 컨텐츠 추천이 어려워요 ㅜ.ㅠ' 표시
    if (iframeSrc) {
    var iframe = document.createElement("iframe");
    iframe.width = '640';
    iframe.height = '360';
    iframe.src = iframeSrc;
    searchResultsSection.innerHTML = '<h3>추천된 컨텐츠!</h3>';
    searchResultsSection.appendChild(iframe);
    }
    else {
    searchResultsSection.innerHTML = '<h3> " ' + searchTerm + ' " 키워드로는 컨텐츠 추천이 어려워요 ㅜ.ㅠ</h3>';
    }
}