(function(){
    
    const schwBootstrapLoader = bootstrapLoader();
    
    schwBootstrapLoader.load([""])


    function bootstrapLoader() {

        return window.schwLoader;
    };
    function commonContent(){

        const initialTemplate = `
                    <div class="ponaco-main" role="application">
                    <div class="ponaco-splitview">
                        <div class="content-header">
                            <div class="ponaco-common-header">
                                <div class="wx-component-header-section" role="heading">
                                    <div class="wx-header-component-area">
                                        <div class="wx-badge-wrapper">
                                            <div class="badge-icon">
                                            </div>
                                            <div class="badge-title">NDEJJE SENIOR SECONDARY SCHOOL</div>
                                        </div>
                                        <div class="registration-btn">Enroll Now</div>
                                    </div>
                                    <div class="wx-navigation-bar-half-area">
                                        <div class="navigation-bar-wrapper">
                                            <div class="main-navigation-bar">
                                                <ul class="navigation-items">
                                                    <li class="Home-nav-control">
                                                        <a href="#">Home</a>
                                                    </li>
                                                    <li class="Home-nav-control">
                                                        <a href="#">Blog</a>
                                                    </li>
                                                    <li class="Home-nav-control">
                                                        <a href="#">About us</a>
                                                    </li>
                                                    <li class="Home-nav-control">
                                                        <a href="#">Academics</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ponaco-content-section">
                            <!--
                                Content in Here will Be Preloaded with JavaScript
                            -->
                        </div>
                        <div class="content-footer">
                            <footer class="component-footer">
                                <div class="component-footer-wrapper">
                                    <div class="component-section-1 section-comp">
                                        <div class="xtr-1 xtr-w">
                                            <div class="wrapper">
                                                <div class="tr1">Ndejje Senior Secondary School</div>
                                                <div class="tr2">No Pains No Gains</div>
                                            </div>
                                        </div>
                                        <div class="xtr-2 xtr-w">
                                            <div class="wrapper">
                                                <div class="tr1">Join The Community</div>
                                                <div class="tr2 enroll-btn">Enroll Now</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="component-section-2 section-comp">
                                        <div class="xtr-1 xtr-component">
                                            <div class="content-wrapper">
                                                <div class="xtr-component-title">Info</div>
                                                <div class="xtr-data-wrapper">
                                                    <span class="x-number item">772410852</span>
                                                    <span class="x-email item">ndejje@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="xtr-2 xtr-component">
                                            <div class="content-wrapper">
                                                <div class="xtr-component-title">Address</div>
                                                <div class="xtr-data-wrapper">
                                                    <span class="x-address-1 item">P.O.Box 193</span>
                                                    <span class="x-address-2 item">Bombo, Uganda</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="xtr-3 xtr-component">
                                            <div class="content-wrapper">
                                                <div class="xtr-component-title">Follow</div>
                                                <div class="xtr-data-wrapper">
                                                    <span class="x-fl-link x-fl-facebook item"
                                                        title="Follow us on Facebook">Facebook</span>
                                                    <span class="x-fl-link x-fl-instagram item"
                                                        title="Follow us on Instagram">Instagram</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="control-component">&UpArrow;</div>
                                    </div>
                                </div>
                            </footer>
                        </div>
                        <div class="ponaco-common-components"></div>
                    </div>
                </div>
        `;
        document.body.innerHTML = initialTemplate;
    }

})();