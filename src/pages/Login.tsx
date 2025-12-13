import '@assets/css/login.css'

const Login = () => {
    return (
        <div className='login-main-container'>
            <div className="login-container">
                <div className="login-header">
                    <h1>🔐 관리자 로그인</h1>
                    <p>시스템 관리를 위해 로그인해주세요</p>
                </div>

                {/* <!-- 로그아웃 성공 메시지 --> */}
                {/* <div className="alert alert-success">
                    로그아웃되었습니다.
                </div> */}

                {/* <!-- 에러 메시지 --> */}
                {/* <div id="errorMessage" className="alert alert-error" style={{ display: 'none' }}>
                    <span id="errorText"></span>
                </div> */}

                {/* <!-- 로딩 인디케이터 --> */}
                {/* <div id="loading" className="loading">
                    🔄 로그인 중...
                </div> */}

                <form id="loginForm" >
                    <div className="form-group">
                    <label>아이디</label>
                    <input type="text" id="loginId" name="loginId" required
                            placeholder="아이디를 입력하세요"  />
                    </div>

                    <div className="form-group">
                    <label>비밀번호</label>
                    <input type="password" id="password" name="password" required
                            placeholder="비밀번호를 입력하세요" />
                    </div>

                    <button type="submit" className="login-btn" id="loginButton">
                    🚀 로그인
                    </button>
                </form>

                <div className="form-footer">
                    <p>© 2025 관리자 시스템. 권한이 있는 사용자만 접근 가능합니다.</p>
                </div>
            </div>
        </div>
    )
}

export default Login