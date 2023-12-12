function displaySearchResults() {
    // 검색어 가져오기
    var searchTerm = document.getElementById("searchInput").value;

    // 검색 결과를 표시할 요소 가져오기
    var searchResultsSection = document.getElementById("search-results");

    // 검색어에 따라 다른 종류의 iframe 주소 설정
    var tags = {
        '넷플릭스': ['https://www.youtube.com/embed/VMZBhtnCk4I', 'https://www.youtube.com/embed/2Aa_W61eqKY', 'https://www.youtube.com/embed/B_bPHHLkLu8'],
        '공포': ['https://www.youtube.com/embed/VMZBhtnCk4I', 'https://www.youtube.com/embed/gk9urSdhbzg'],
        '스위트홈': ['https://www.youtube.com/embed/VMZBhtnCk4I'],
        '게임': ['https://www.youtube.com/embed/C3GouGa0noM', 'https://www.youtube.com/embed/CjaJVaTzt-4'],
        '롤': ['https://www.youtube.com/embed/C3GouGa0noM', 'https://www.youtube.com/embed/CjaJVaTzt-4'],
        '뉴진스': ['https://www.youtube.com/embed/Km71Rr9K-Bw', 'https://www.youtube.com/embed/C3GouGa0noM', 'https://www.youtube.com/embed/ArmDp-zijuc'],
        '아이돌': ['https://www.youtube.com/embed/Km71Rr9K-Bw', 'https://www.youtube.com/embed/ArmDp-zijuc'],
        '뮤비': ['https://www.youtube.com/embed/Km71Rr9K-Bw', 'https://www.youtube.com/embed/gdZLi9oWNZg'],
        '행복': ['https://www.youtube.com/embed/B_bPHHLkLu8'],
        // 다른 태그들도 필요에 따라 추가
    };

    // gpt api를 활용하여 영상에 적절한 태그를 추가하는 기능을 개발하고 싶었으나..

    var iframeSrcs = tags[searchTerm];

    // 검색 결과를 표시할 공간에 iframe 추가 또는 '해당 키워드로는 컨텐츠 추천이 어려워요 ㅜ.ㅠ' 표시
    if (iframeSrcs && iframeSrcs.length > 0) {
        searchResultsSection.innerHTML = '<h3>" ' + searchTerm + ' " 키워드로 추천된 컨텐츠!</h3>';
        iframeSrcs.forEach(function (src) {
            var iframe = document.createElement("iframe");
            iframe.width = '640';
            iframe.height = '360';
            iframe.src = src;
            searchResultsSection.appendChild(iframe);
        });
    } else {
        searchResultsSection.innerHTML = '<h3> " ' + searchTerm + ' " 키워드로는 컨텐츠 추천이 어려워요 ㅜ.ㅠ</h3>';
    }
}
