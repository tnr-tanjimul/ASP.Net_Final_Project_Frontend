import AuthLogo from "../AuthLogo";
import AuthQuotes from "../AuthQuotes";
import AuthSocialButton from "../AuthSocialButton";

function AuthRegistration(){
    return (
        <div class="auth-fluid">
        {/*Auth fluid left content */}
        <div class="auth-fluid-form-box">
            <div class="align-items-center d-flex h-100">
                <div class="card-body">

                    {/* Logo */}
                    <AuthLogo></AuthLogo>

                    {/* title*/}
                    <h4 class="mt-0"></h4>
                    <p class="text-muted mb-4">Don't have an account? Create your account, it takes less than a minute</p>

                    {/* form */}
                    <form action="/Auth/Registration" method="post">


                        <input name="__RequestVerificationToken" type="hidden" value="sBKFvC8UGCaQDQUD8Ekrx9y607TTYUGOKX-UZodOyKDeLpSPHbeE_XgZVo_dqrs7MVthHfD1NZVrSltzzsEVsG-qQb-IenUeJ_tsPJeX4dI1" />

                        <div class="form-group">


                            


                        </div>

                        <div class="form-group">
                            <label for="Name">Full Name</label>
                            <input class="form-control " type="text" name="Name" id="Name" placeholder="Enter your name" autocomplete="name" autofocus/>
                            <span class="field-validation-valid text-danger" data-valmsg-for="Name" data-valmsg-replace="true"></span>

                        </div>



                        <div class="form-group">
                            <label for="Email">Email address</label>
                            <input class="form-control " type="text" name="Email" id="Email" placeholder="Enter your email" autocomplete="email" autofocus/>
                            <span class="field-validation-valid text-danger" data-valmsg-for="Email" data-valmsg-replace="true"></span>
                        </div>
                        <div class="form-group">
                            <a href="auth-recoverpw-2.php" class="text-muted float-right"><small>Forgot your password?</small></a>
                            <label for="Password">Password</label>
                            <div class="input-group input-group-merge">
                                <input type="password" name="Password" id="Password" class="form-control " value="" placeholder="Enter your password"/>



                                <div class="input-group-append" data-password="false">
                                    <div class="input-group-text">
                                        <span class="password-eye"></span>
                                    </div>
                                </div>

                                <span class="field-validation-valid text-danger" data-valmsg-for="Password" data-valmsg-replace="true"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" name="terms" class="custom-control-input" id="checkbox-signup"/>
                                <label class="custom-control-label" for="checkbox-signup">I accept <a href="javascript: void(0);" class="text-dark">Terms and Conditions</a></label>
                            </div>
                        </div>
                        <div class="form-group mb-0 text-center">
                            <button class="btn btn-primary waves-effect waves-light btn-block" type="submit"> Sign Up </button>
                        </div>
                        {/* social*/}
                        <AuthSocialButton></AuthSocialButton>
                    </form>
                    {/* end form*/}
                    {/* Footer*/}
                    <footer class="footer footer-alt">
                        <p class="text-muted">Already have account? <a href="/Auth/Login" class="text-muted ml-1"><b>Log In</b></a></p>
                    </footer>

                </div> {/* end .card-body */}
            </div> {/* end .align-items-center.d-flex.h-100*/}
        </div>
        {/* end auth-fluid-form-box*/}
        {/* Auth fluid right content */}
        <AuthQuotes></AuthQuotes>
        {/* end Auth fluid right content */}
    </div>
    );
}

export default AuthRegistration;