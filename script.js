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


    // 검색 결과를 표시할 공간에 iframe 추가 또는 '검색결과가 존재하지 않습니다!' 표시
    if (iframeSrc) {
    var iframe = document.createElement("iframe");
    iframe.width = '640';
    iframe.height = '360';
    iframe.src = iframeSrc;
    searchResultsSection.innerHTML = '<h3>추천된 컨텐츠!</h3>';
    searchResultsSection.appendChild(iframe);
} else {
    searchResultsSection.innerHTML = '<h3>해당 키워드로는 컨텐츠 추천이 어려워요 ㅜ.ㅠ</h3>';
}
}