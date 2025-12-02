import '@/assets/css/member.css'

const Member = () => {
    return (
        <div className='main-container'>
        <div className="container">
            <div className="header" style={{ background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' }}>
                {/* <!-- 사용자 정보 및 로그아웃 버튼 추가 --> */}
                <div className="user-info">
                    👤 <span>admin1234</span>
                    <button className="logout-btn">🚪 로그아웃</button>
                </div>

                <h1>👥 회원관리</h1>

                {/* <!-- 네비게이션 메뉴 --> */}
                <div className="nav-menu">
                    <a className="nav-item">
                        📋 전체 주문
                    </a>
                    <a className="nav-item">
                        ⏳ 입금대기
                    </a>
                    <a className="nav-item">
                        ✅ 구매완료
                    </a>
                    <a className="nav-item">
                        ❌ 입금취소
                    </a>
                    <a className="nav-active">
                        👥 회원관리
                    </a>
                    <a className="nav-item">
                        👥 주문 없는 회원
                    </a>
                    
                </div>
            </div>

            <div className="search-container">
                {/* <!-- 회원 검색 섹션 --> */}
                <div className="search-section search-half">
                    <h4 style={{ marginBottom: '15px', color: '#28a745' }}>🔍 회원 검색</h4>
                    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="search-group">
                            <label>회원명</label>
                            <input type="text" id="username" name="username"
                                defaultValue="" placeholder="주문자명 입력" />
                        </div>

                        <div className="search-group">
                            <label htmlFor="phoneNumber">전화번호</label>
                            <input type="text" id="phoneNumber" name="phoneNumber"
                                defaultValue="" placeholder="전화번호 입력" />
                        </div>

                        <div className="search-buttons">
                            <button type="submit" className="btn btn-search">🔍 검색</button>
                            <button type="button" className="btn btn-reset" >🔄 초기화</button>
                        </div>
                    </form>
                </div>

                {/* <!-- 블랙리스트 추가 섹션 --> */}
                <div className="search-section search-half" style={{ borderLeft: '2px solid #dee2e6' }}>
                    <h4 style={{ marginBottom: '15px', color: '#dc3545' }}>🚫 블랙리스트 추가</h4>
                    <form className="search-form">
                        <div className="search-group">
                            <label htmlFor="blackName">이름</label>
                            <input type="text" id="blackName" name="blackName" placeholder="이름 입력" required />
                        </div>

                        <div className="search-group">
                            <label htmlFor="blackPhoneNumber">전화번호</label>
                            <input type="text" id="blackPhoneNumber" name="blackPhoneNumber" placeholder="전화번호 입력" required />
                        </div>

                        <div className="search-buttons">
                            <button type="submit" className="btn btn-black">🚫 블랙리스트 추가</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="stats">
                <div className="stats-item">
                    총 <strong>4399</strong>명의 회원
                </div>
                <div className="stats-item">
                    <strong>1</strong> / <strong>5</strong> 페이지
                </div>
            </div>

            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>회원번호</th>
                        <th>회원명</th>
                        <th>아이디</th>
                        <th>전화번호</th>
                        <th>상태</th>
                        <th>주문횟수</th>
                        <th>주문금액</th>
                        <th>가입일</th>
                        <th>관리</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <strong>1</strong>
                        </td>
                        <td>
                            <span className="member-name">황정현</span>
                        </td>
                        <td>gm200</td>
                        <td>01043632163</td>
                        <td>
                            <span className="status-badge status-active">활성</span>
                        </td>
                        <td>
                            <strong>18</strong>회
                        </td>
                        <td>
                            <span className="amount">2,600,000원</span>
                        </td>
                        <td>2025-10-02</td>
                        <td>
                            {/* <!-- BANNED 상태가 아닌 경우: 블랙 버튼 --> */}
                            <button type="button"
                                    className="btn btn-black"
                                    >
                                🚫 블랙
                            </button>

                            {/* <!-- BANNED인 경우: 복구 버튼 --> */}
                            

                            {/* <!-- 비밀번호 초기화 버튼 --> */}
                            <button type="button"
                                    className="btn-reset-password"
                                    data-member-id="1"
                                    data-member-name="황정현"
                                    >
                                🔑 비밀번호
                            </button>

                            {/* <!-- 회원 탈퇴 버튼 --> */}
                            <button type="button"
                                    className="btn-delete-member"
                                    data-member-id="1"
                                    data-member-name="황정현"
                                    >
                                🗑️ 탈퇴
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <strong>62</strong>
                        </td>
                        <td>
                            <span className="member-name">배승규</span>
                        </td>
                        <td>bangkyu7</td>
                        <td>01075065606</td>
                        <td>
                            <span className="status-badge status-inactive">비활성</span>
                        </td>
                        <td>
                            <strong>30</strong>회
                        </td>
                        <td>
                            <span className="amount">24,060,000원</span>
                        </td>
                        <td>2025-10-09</td>
                        <td>
                            {/* <!-- BANNED 상태가 아닌 경우: 블랙 버튼 --> */}
                            

                            {/* <!-- BANNED인 경우: 복구 버튼 --> */}
                            <button type="button"
                                    className="btn btn-success"
                                    >
                                ✅ 복구
                            </button>

                            {/* <!-- 비밀번호 초기화 버튼 --> */}
                            <button type="button"
                                    className="btn-reset-password"
                                    data-member-id="62"
                                    data-member-name="배승규"
                                    >
                                🔑 비밀번호
                            </button>

                            {/* <!-- 회원 탈퇴 버튼 --> */}
                            <button type="button"
                                    className="btn-delete-member"
                                    data-member-id="62"
                                    data-member-name="배승규"
                                    >
                                🗑️ 탈퇴
                            </button>
                        </td>
                    </tr>
                    
                    </tbody>
                </table>

                
            </div>

            {/* <!-- 페이징은 JavaScript로 처리 --> */}
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
                <a 
                title="다음 페이지" style={{ cursor: 'pointer' }}>다음 ›</a>
                
            </div>
        </div>
        </div>

        // {/* <!-- 비밀번호 초기화 모달 --> */}
        // <div id="passwordResetModal" className="modal">
        //     <div className="modal-content">
        //         <div className="modal-header">
        //             <h3>🔑 비밀번호 초기화</h3>
        //         </div>
        //         <div className="modal-body">
        //             <div className="form-group">
        //                 <label htmlFor="memberNameDisplay">회원명</label>
        //                 <input type="text" id="memberNameDisplay" readOnly style={{ backgroundColor: '#e9ecef' }} />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="newPassword">새 비밀번호</label>
        //                 <input type="password" id="newPassword" placeholder="새 비밀번호를 입력하세요" />
        //             </div>
        //             <div className="form-group">
        //                 <label htmlFor="confirmPassword">비밀번호 확인</label>
        //                 <input type="password" id="confirmPassword" placeholder="비밀번호를 다시 입력하세요" />
        //             </div>
        //             <input type="hidden" id="resetMemberId" />
        //         </div>
        //         <div className="modal-footer">
        //             <button type="button" className="btn-modal-cancel" onClick={() => closePasswordResetModal && closePasswordResetModal()}>취소</button>
        //             <button type="button" className="btn-modal-save" onClick={() => resetPassword && resetPassword()}>비밀번호 초기화</button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Member