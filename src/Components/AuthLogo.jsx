function AuthLogo(){
    return (
        <div className="auth-brand text-center text-lg-left">
            <div className="auth-logo">
                <a href="index.php" className="logo logo-dark text-center">
                    <span className="logo-lg">
                        <img src="/assets/images/logo-dark.png" alt="" height="22"/>
                    </span>
                </a>

                <a href="index.php" className="logo logo-light text-center">
                    <span className="logo-lg">
                        <img src="/assets/images/logo-light.png" alt="" height="22"/>
                    </span>
                </a>
            </div>
        </div>
    );
}

export default AuthLogo;