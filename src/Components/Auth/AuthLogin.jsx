import AuthLogo from "../AuthLogo";
import AuthQuotes from "../AuthQuotes";
import AuthSocialButton from "../AuthSocialButton";

function AuthLogin(){
    return(

    <div class="auth-fluid">
        {/* Auth fluid left content */}
        <div class="auth-fluid-form-box">
            <div class="align-items-center d-flex h-100">
                <div class="card-body">

                    {/* Logo */} 
                    <AuthLogo></AuthLogo>

                    {/** title*/}  
                    <h4 class="mt-0">Sign In</h4>
                    <p class="text-muted mb-4">Enter your email address and password to access account.</p>

                    {/**{/* form */} 
                    <form action="/Auth/Login" method="post">

                        <input name="__RequestVerificationToken" type="hidden" value="mSs95QLde_MdW6VUPnkgIWAgAUuoTuJ_NrplrDZdU8k_ySrlVEMdyLrXGDNBJSsbhwaBgd_OXYNahIpceRa_PbMv3MVLJG__jKoknMlwUWE1" />

                        <div class="form-group">


                            


                        </div>
                        <div class="form-group">
                            <label for="Email">Email address</label>
                            <input class="form-control" type="text" name="Email" id="Email" required="" placeholder="Enter your email"/>
                            <span class="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                        </div>
                        <div class="form-group">
                            <a href="auth-recoverpw-2.php" class="text-muted float-right"><small>Forgot your password?</small></a>
                            <label for="Password">Password</label>
                            <div class="input-group input-group-merge">
                                <input type="password" name="Password" id="Password" class="form-control" placeholder="Enter your password"/>
                                <div class="input-group-append" data-password="false">
                                    <div class="input-group-text">
                                        <span class="password-eye"></span>
                                    </div>
                                </div>
                                <span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                            </div>
                        </div>

                        <div class="form-group mb-3">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" name="remember" class="custom-control-input" id="checkbox-signin"/>
                                <label class="custom-control-label" for="checkbox-signin">Remember me</label>
                            </div>
                        </div>
                        <div class="form-group mb-0 text-center">
                            <button class="btn btn-primary btn-block" type="submit">Log In </button>
                        </div>
                       {/** {/* social*/} 
                        <AuthSocialButton></AuthSocialButton>
                    </form>
                    {/**{/* end form*/} 
                    {/* Footer*/}
                    <footer class="footer footer-alt">
                        <p class="text-muted">Don't have an account? <a href="/Auth/Registration" class="text-muted ml-1"><b>Sign Up</b></a></p>
                    </footer>

                </div> {/* end .card-body */}
            </div> {/* end .align-items-center.d-flex.h-100*/}
        </div>
        {/* end auth-fluid-form-box*/}
        <AuthQuotes></AuthQuotes>
    </div>

    );
}

export default AuthLogin;