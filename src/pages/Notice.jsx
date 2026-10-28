import axios from 'axios';
import { useEffect, useState } from 'react';

function Notice() {
  const [notices, setNotices] = useState([]); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        setNotices(response.data);
      } catch (error) {
        console.error("데이터를 불러오는 중 에러가 발생했습니다:", error);
      }
    };

    fetchNotices();
  }, []);

  const filteredNotices = notices.filter((notice) => {
    return notice.title.includes(searchTerm);
  });

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h2>공지 사항</h2>

      <input
        type="text"
        className="search"
        placeholder="제목 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ margin: '10px 0', color: '#555' }}>
        {filteredNotices.length}건
      </div>

      <ul className="notice-list">
        {filteredNotices.map((notice) => (
          <li key={notice.id}>
            <span className="notice-id">{notice.id}.</span>
            {notice.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notice;