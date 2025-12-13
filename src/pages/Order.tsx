import  '@/assets/css/order.css'

const Order = () => {
    return (
        <div className='main-container'>
        <div className="container ">
            <div className="header" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                {/* <!-- 사용자 정보 및 로그아웃 버튼 --> */}
                <div className="user-info">
                    👤 <span>admin1234</span>
                    <button className="logout-btn">🚪 로그아웃</button>
                </div>

                <h1>📋 전체 주문관리</h1>

                {/* <!-- 네비게이션 메뉴 --> */}
                <div className="nav-menu" style={{ marginTop: 15 }}>
                    <span 
                        className="nav-active">
                        📋 전체 주문
                    </span>
                    <span 
                        className="nav-item">
                        ⏳ 입금대기
                    </span>
                    <span 
                        className="nav-item">
                        ✅ 구매완료
                    </span>
                    <span 
                        className="nav-item">
                        ❌ 입금취소
                    </span>
                    <span 
                        className="nav-item">
                        👥 회원관리
                    </span>
                    <span 
                        className="nav-item">
                        👥 주문 없는 회원
                    </span>
                    
                </div>
            </div>

            {/* <!-- 회사 정보 섹션 --> */}
            <div className="company-info-section">
                <div className="company-info-header">
                    <h3>🏢 회사 정보</h3>
                    <button type="button" className="btn btn-edit">✏️ 수정</button>
                </div>

                <div className="company-info-content">
                    {/* <!-- 보기 모드 --> */}
                    <div id="viewMode" className="company-info-view">
                        <div className="info-item">
                            <label>회사명:</label>
                            <span>계좌 확인 후 입금 부탁드립니다.</span>
                        </div>
                        <div className="info-item">
                            <label>계좌정보:</label>
                            <span>OO</span>
                        </div>
                    </div>

                    {/* <!-- 수정 모드 --> */}
                    <div id="editMode" className="company-info-edit" style={{ display: 'none' }}>
                        <form id="companyInfoForm">
                            <div className="edit-group">
                                <label>회사명:</label>
                                <input type="text" id="companyName" name="companyName"
                                    value="계좌 확인 후 입금 부탁드립니다." required />
                            </div>
                            <div className="edit-group">
                                <label>계좌정보:</label>
                                <input type="text" id="companyBankInfo" name="companyBankInfo"
                                    value="OO" required />
                            </div>
                            <div className="edit-buttons">
                                <button type="submit" className="btn btn-save">💾 저장</button>
                                <button type="button" className="btn btn-cancel" >❌ 취소</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* <!-- 회사 정보 섹션 다음에 추가 --> */}
            {/* <!-- 도메인별 계좌정보 섹션 --> */}
            {/* <!-- 도메인별 계좌정보 섹션 수정 --> */}
            <div className="domain-account-section" style={{ padding: '20px', backgroundColor: '#ffffff', borderBottom: '1px solid #dee2e6' }}>
                <div className="domain-account-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0, color: '#495057', fontSize: 18, fontWeight: 600 }}>🌐 도메인별 계좌정보</h3>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button type="button" className="btn btn-edit" id="toggleDomainListBtn">📋 접기</button>
                        <button type="button" className="btn btn-edit">➕ 추가</button>
                    </div>
                </div>

                {/* <!-- 도메인 계좌 목록 --> */}
                <div className="domain-account-list" id="domainAccountList">
                    <table className="domain-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                        <tr>
                            <th style={{ padding: '10px', backgroundColor: '#f8f9fa', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>도메인</th>
                            <th style={{ padding: '10px', backgroundColor: '#f8f9fa', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>계좌정보</th>
                            <th style={{ padding: '10px', backgroundColor: '#f8f9fa', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>상점번호</th>
                            <th style={{ padding: '10px', backgroundColor: '#f8f9fa', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>chatId</th>
                            <th style={{ padding: '10px', backgroundColor: '#f8f9fa', textAlign: 'center', borderBottom: '2px solid #dee2e6', width: '150px' }}>관리</th>
                        </tr>
                        </thead>
                        <tbody id="domainAccountTableBody">
                        {/* <!-- 기존 도메인 계좌 정보 표시 --> */}
                        <tr>
                            <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                                <span>gle-gift.com</span>
                            </td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                                <span>신협 (주) 우솔루션  131-022-802415</span>
                            </td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                                <span>6</span>
                            </td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6' }}>
                                <span></span>
                            </td>
                            <td style={{ padding: '10px', borderBottom: '1px solid #dee2e6', textAlign: 'center' }}>
                                <button className="btn-small btn-edit-small"
                                data-id="1"
                                data-domain="gle-gift.com"
                                data-account="신협 (주) 우솔루션  131-022-802415"
                                data-facility="6"
                                // TODO: Replace with React event handler
                                >
                                ✏️ 수정
                                </button>
                                {/* data 속성을 사용하여 데이터 전달 */}
                                <button className="btn-small btn-delete-small"
                                        data-id="1"
                                        // TODO: Replace with React event handler
                                        >
                                    🗑️ 삭제
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <!-- 도메인 계좌정보 추가/수정 모달 -->
            <div id="domainModal" className="modal" style="display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);">
                <div className="modal-content" style="background-color: #fefefe; margin: 10% auto; padding: 0; border-radius: 8px; width: 500px; max-width: 90%; box-shadow: 0 4px 20px rgba(0,0,0,0.2);">
                    <div className="modal-header" style="padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px 8px 0 0;">
                        <h3 id="modalTitle" style="margin: 0; font-size: 18px;">도메인 계좌정보 추가</h3>
                    </div>
                    <div className="modal-body" style="padding: 20px;">
                        <form id="domainAccountForm">
                            <input type="hidden" id="domainAccountId" />
                            <div className="form-group" style="margin-bottom: 15px;">
                                <label for="domainInput" style="display: block; font-weight: 600; color: #495057; margin-bottom: 8px;">도메인</label>
                                <input type="text" id="domainInput" className="form-control"
                                    placeholder="예: example.com" required
                                    style="width: 90%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px;">
                            </div>
                            <div className="form-group" style="margin-bottom: 20px;">
                                <label for="accountInput" style="display: block; font-weight: 600; color: #495057; margin-bottom: 8px;">계좌정보</label>
                                <textarea id="accountInput" className="form-control" rows="3"
                                        placeholder="예: 은행정보 or 카카오 아이디" required
                                        style="width: 90%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px; resize: vertical;"></textarea>
                            </div>
                            <div className="form-group" style="margin-bottom: 20px;">
                                <label for="facilityIdInput" style="display: block; font-weight: 600; color: #495057; margin-bottom: 8px;">지점번호</label>
                                <textarea id="facilityIdInput" className="form-control" rows="3"
                                        placeholder="예: 숫자만, 대리점번호"
                                        style="width: 90%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px; resize: vertical;"></textarea>
                            </div>
                            <div className="form-group" style="margin-bottom: 20px;">
                                <label for="alarmInput" style="display: block; font-weight: 600; color: #495057; margin-bottom: 8px;">알람번호</label>
                                <textarea id="alarmInput" className="form-control" rows="3"
                                        placeholder="예: id"
                                        style="width: 90%; padding: 10px; border: 1px solid #ced4da; border-radius: 4px; resize: vertical;"></textarea>
                            </div>
                            <div className="modal-buttons" style="display: flex; gap: 10px; justify-content: flex-end;">
                                <button type="button" className="btn btn-cancel" onclick="closeDomainModal()">취소</button>
                                <button type="submit" className="btn btn-save">저장</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}
            {/* <!-- 검색 섹션 --> */}
            <div className="search-section">
                <form className="search-form">
                    <div className="search-group">
                        <label>주문자명</label>
                        <input type="text" id="username" name="username"
                            value="" placeholder="주문자명 입력"/>
                    </div>

                    <div className="search-group">
                        <label>전화번호</label>
                        <input type="text" id="phoneNumber" name="phoneNumber"
                            value="" placeholder="전화번호 입력"/>
                    </div>

                    <div className="search-group">
                        <label>핀번호</label>
                        <input type="text" id="virtualPin" name="virtualPin"
                            value="" placeholder="핀번호 입력"/>
                    </div>

                    <div className="search-group" style={{ height: 54 }}>
                        <label>사용안한핀</label>
                        <input type="checkbox" id="pinStatus" name="pinStatus" value="ISSUED"/>
                    </div>

                    <div className="search-buttons">
                        <button type="submit" className="btn btn-search">🔍 검색</button>
                        <button type="button" className="btn btn-reset">🔄 초기화</button>
                    </div>
                </form>
            </div>

            <div className="stats">
                <div className="stats-item">
                    총 <strong>91187</strong>건의 주문
                </div>
                <div className="stats-item">
                    <strong>1</strong> / <strong>1824</strong> 페이지
                </div>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>가상핀번호</th>
                        <th>가상핀상태</th>
                        <th>문자발송상태</th>
                        <th>주문금액</th>
                        <th>상태</th>
                        <th>주문일시</th>
                        <th>주문자명</th>
                        <th>전화번호</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <strong></strong>
                        </td>
                        <td>
                        <span className="status-badge"></span>
                            
                        </td>
                        <td>
                            {/* <span className="gift-type-badge"></span> */}

                            {/* <!-- 완료 상태일 때만 재발송 버튼 표시 --> */}
                            
                        </td>
                        <td>
                            <span className="amount">50,000원</span>
                        </td>
                        <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="status-badge status-pending">입금대기</span>

                                <div style={{ display: 'flex', gap: '4px' }}>
                                    <button type="button"
                                            className="status-btn status-btn-complete"
                                            >
                                        ✅ 완료
                                    </button>
                                    <button type="button"
                                            className="status-btn status-btn-cancel"
                                            >
                                        ❌ 취소
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td>2025-12-02 16:35</td>
                        <td>
                            <strong>박종진</strong>
                        </td>
                        <td>
                            <span>01041688704</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <strong>8486937147244037</strong>
                        </td>
                        <td>
                        <span className="status-badge">USED</span>
                            
                        </td>
                        <td>
                            <span className="gift-type-badge">완료</span>

                            {/* <!-- 완료 상태일 때만 재발송 버튼 표시 --> */}
                            <button type="button"
                                    className="retry-btn"
                                    >
                                📱 재발송
                            </button>
                        </td>
                        <td>
                            <span className="amount">1,000,000원</span>
                        </td>
                        <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="status-badge status-completed">구매완료</span>

                                
                            </div>
                        </td>
                        <td>2025-12-02 16:32</td>
                        <td>
                            <strong>김종필</strong>
                        </td>
                        <td>
                            <span>01088804656</span>
                        </td>
                    </tr>
                    

                    <tr>
                        <td>
                            <strong></strong>
                        </td>
                        <td>
                        <span className="status-badge"></span>
                            
                        </td>
                        <td>
                            {/* <span className="gift-type-badge"></span> */}

                            {/* <!-- 완료 상태일 때만 재발송 버튼 표시 --> */}
                            
                        </td>
                        <td>
                            <span className="amount">150,000원</span>
                        </td>
                        <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="status-badge status-cancelled">입금취소</span>

                                
                            </div>
                        </td>
                        <td>2025-12-02 16:37</td>
                        <td>
                            <strong>박경도</strong>
                        </td>
                        <td>
                            <span>01039810548</span>
                        </td>
                    </tr>
                    </tbody>
                </table>

                
            </div>

            {/* <!-- 페이징 --> */}
            <div className="pagination">
                {/* <!-- 이전 페이지 --> */}
                
                <span className="disabled">‹ 이전</span>

                {/* <!-- 페이지 번호들 --> */}
                    <span className="current">1</span>
                        <a>2</a>
                        <a>3</a>
                        <a>4</a>
                        <a>5</a>
                    
                {/* <!-- 다음 페이지 --> */}
                <a title="다음 페이지">다음 ›</a>
                
            </div>
        </div>
        </div>
    )
}

export default Order