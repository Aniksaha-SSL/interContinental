
export default function Payment() {

    const toggleOtherService = (selectElement: HTMLSelectElement) => {
        const otherInput = document.getElementById('otherServiceInput') as HTMLElement;
        const otherField = otherInput.querySelector('input') as HTMLInputElement;

        if (selectElement.value === 'others') {
            otherInput.style.display = 'block';
            otherField.required = true;
        } else {
            otherInput.style.display = 'none';
            otherField.required = false;
            otherField.value = '';
        }
    };

  return (
    <div className="page basicpage ">
        <div>
            <div>
                <header id="uhf_headerWrapper" className="uhf_headerFooter sl_norewrite">
                <div className="uhf_header_utility_bar">
                    <div id="svgSprites" style={{display: 'none'}}>
                    <svg xmls="http://www.w3.org/2000/svg" xmls:xlink="http://www.w3.org/1999/xlink" />
                    </div>hoteldetail
                    {/* Regent specific labels for Wallet form */}
                    {/* (empty currentStyle.travelAdvisoryLink ) && */}
                    <input id="UHF_country" type="hidden" defaultValue="us" />
                    <input id="UHF_language" type="hidden" defaultValue="en" />
                    <input id="UHF_brand" type="hidden" defaultValue="ic" />
                    <div className="darkenContent" />
                    <div id="sessionTimeoutCounter" className="sessionWillExpire notificationBar">
                    <div className="container">
                        <div className="row">
                        <div className="sessionWillExpireCol col-xs-12">
                            <span className="sessionWillExpireText">
                            <i className="expireWarningIcon fa fa-exclamation-triangle" />
                            Your session will expire in <span id="numMinutesLeft" className="minutes bold">5</span> <span id="minutesText">minutes</span>, <span id="numSecondsLeft" className="seconds bold">0</span> <span id="secondsText">seconds</span>, due to inactivity.</span>
                            <a id="staySignedInLink" className="sessionWillExpireLink" href="javascript:void(0);">Stay Logged In</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div id="uhf_countryLanguagePushDown" hidden>
                    <div id="uhf_countryLanguagePushDownContainer" className="container">
                        <span data-uhf-clp="description">You're currently viewing this site in a different language. Would you like this to make your default language? </span>
                        <span className="buttonContainer">
                        <button id="uhf_countryLanguagePushDown_yes" data-uhf-clp="pdYes" value="Yes">YES</button>
                        <button id="uhf_langNotSupported_yes" data-uhf-clp="pdYes" value="Yes" hidden>YES</button>
                        <button id="uhf_countryLanguagePushDown_no" data-uhf-clp="pdNo" value="No">NO</button>
                        </span>
                        <div className="subText" data-uhf-clp="subDescription">You can change your country and language settings in the future by using the selector at the top of the page.</div>
                        <button id="uhf_countryLanguagePushDownClose" value="No"><i className="fa fa-times buttonClose" /></button>
                    </div>
                    </div>
                    {/* UHF : START of Utility bar markup */}
                    <div className="utilityNavWrapper visible-sm visible-md visible-lg">
                    <div className="utilityNavContainer container">
                        <div className="row">
                        <div className="col-md-12 clearfix">
                            <nav className="utilityNav">
                            <ul className="utilityNav-list u-list clearfix">
                                <li className="utilityNav-list-item u-list-item">
                                <a className="utilityNav-link u-link nav-middle resDirectIcon-link" data-uhf-hook="resDirectNumber" data-uhf-hook-two="mobileResDirectLink" data-uhftrigger="nothing" data-no-replace="content" href="tel:18778343613"><i className="fa fa-phone" style={{fontSize: '1.3em', verticalAlign: 'middle', paddingRight: '.3em'}} /></a><span className="utilityNav-link u-link nav-middle resDirectNum-link" data-uhf-hook="resDirectNumber" />
                                </li>
                                <li className="utilityNav-list-item u-list-item">
                                <a className="utilityNav-link u-link nav-middle uhfpopup" rel="nofollow" href="javascript:void(0);" title="Chat with us" data-slnm-ihg="NeedHelpHeaderLinkSID">Chat with us</a>
                                </li>
                               
                                <li className="utilityNav-resDir-item utilityNav-list-item u-list-item" data-uhf-hook="resDirectMessage" hidden>
                                <span className="utilityNav-message utilityNav-link u-link nav-middle">Costs 13p per minute + phone company's access charge</span>
                                <a href="javascript:void(0);" className="tooltipQuestion hasBlankPopover utilityNav-link nav-middle" tabIndex={0} data-content="Calls to 0871 numbers, when dialed from the UK, cost 13p per minute. Standard network rates apply. Calls from mobiles will be higher." data-toggle="popover" data-placement="auto" data-trigger="focus" data-animation="true"><i className="fa fa-question-circle" /></a>                                                             
                                </li>
                            </ul>
                            </nav>
                            <div className="logIn">
                            <div className="utilityNav-list-item u-list-item">
                                <a className="utilityNav-link language u-link nav-middle " id="uhfCountryLanguageLink" data-toggle="popover" data-placement="bottom" data-trigger="click" href="javascript:void(0);">
                                <div className="language-icon nav-middle" alt="language-icon" />
                                <span className="language-text nav-middle" />
                                <i className="fa fa-angle-down nav-middle" />
                                </a>
                            </div>
                            <div className="utilityNav-list-item u-list-item my-stay">
                                <a className="utilityNav-link my-stay-link nav-middle " href="https://www.ihg.com/hotels/us/en/stay-mgmt/ManageYourStay" data-original-title title="My stays" style={{display: 'block'}}>
                                <img className="my-stays-icon nav-middle" alt="my-stays-icon" src="https://digital.ihg.com/is/image/ihg/Stays?fmt=png-alpha" /><span className="my-stays-text nav-middle">My stays</span>
                                </a>
                            </div>
                            <div className="">
                                <a className="logIn-link login-join" href="https://www.ihg.com/rewardsclub/us/en/join" data-uhf-hook="joinRewardsClub" title="Join for free"><span>Join for free</span></a>
                                <a className="logIn-link login-signin" data-uhf-si="hub" data-uhf-hook="signInToggle" href="javascript:void(0);" data-slnm-ihg="SignInAnonymous" title="Sign in">
                                <div className="login-signin-icon" />
                                <span>Sign in</span>
                                </a>
                            </div>
                            <div className="logIn-implicit logIn-State">
                                <a className="logIn-link login-join" href="https://www.ihg.com/rewardsclub/us/en/join" title="Join for free"><span>Join for free</span></a>
                                <a className="logIn-link logIn-block login-signin" data-uhf-hook="signInToggle" href="javascript:void(0);">
                                <div className="login-signin-icon" />
                                <span>Sign in</span>                
                                <div style={{display: 'none'}}><span data-slnm-ihg="SignInImplicit">Sign in</span></div>
                                <div style={{display: 'none'}}><span className="user-first-name" data-slnm-ihg="UserFirstNameImplicit">user first name</span></div>
                                </a>
                            </div>
                            <div className="logIn-explicit logIn-State">
                                <a className="logIn-link logOut login-signout" data-uhf-rememberme="cookie" href="javascript:void(0);" data-slnm-ihg="SignOut">Sign out</a>
                                <a className="logIn-link logIn-block login-signin" href="https://www.ihg.com/rewardsclub/us/en/account-mgmt/home">
                                <div className="login-signin-icon" />
                                <div><span className="user-first-name" data-slnm-ihg="UserFirstNameExplicit">user first name</span></div>
                                <span>· </span>                                    
                                <div className="user-points-text"><span className="user-points" data-slnm-ihg="UserPointsExplicit">user points</span> pts</div>
                                </a>
                            </div>
                        
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="sessionTimeoutCounter" className="error_message sessionWillExpire notificationBar" style={{display: 'none !important'}}>
                    <div className="container">
                    <div className="row">
                        <div className="errorSessiontTimeOut sessionWillExpireCol col-xs-12">
                        <span className="sessionWillExpireText">
                            <i className="expireWarningIcon fa fa-exclamation-triangle" />
                            Your session has expired. Please <span data-uhf-hook="signInToggle"> <a href="javascript:void(0);">sign in </a> </span> to your profile
                        </span></div>
                    </div>
                    </div>
                </div>
                <div className="login_modal_background" />
                <div className="login_modal">
                    <div className="login_modal_container" style={{display: 'none'}}>
                    <div className="login_modal_content">
                        <div className="login_modal_header">
                        <button className="login_modal_close" aria-label="Close" />
                        </div>
                        <div id="gigyaLoginModalScreen" className="login_modal_body" data-gigya-global-key="4_jpzahMO4CBnl9Elopzfr0A" role="dialog" aria-label="Sign In">
                        </div>
                    </div>
                    </div>
                </div>
                
                <div data-uhf-brandname="intercontinental" className="mobileNavManuWrapper hidden-sm hidden-md hidden-lg hidden-xl wrapper-UBE bn-intercontinental">
                    <div className="mobileNavMenuContainer container">
                    <div className="row">
                        <div className="brandLogo">
                        <a className="brandLogo-link" href="https://www.ihg.com/intercontinental/hotels/us/en/reservation" title="InterContinental Hotels & Resorts">
                            <img className="brandLogo-image" alt="InterContinental Hotels & Resorts" src="https://digital.ihg.com/is/image/ihg/IC_logo_mobile?fmt=png-alpha" />
                        </a>                                
                        </div>
                        <div className="mobileNav ">
                        <a className="mobileNav-link menuCTA" href="javascript:void(0);">
                            <img className="fa fa-bars fa-2x" src="https://digital.ihg.com//is/image/ihg/xsvp-hamburger-nav-white?fmt=png-alpha" alt="Menu" style={{width: 20}} />
                        </a>
                        </div>
                        <div className="logIn login-mobile-intercontinental logIn-mobile hotel-detail">
                        
                        <div className="logIn-anonymous logIn-State">
                            <a className="logIn-link logIn-link-signIn" data-uhf-si="not6c" data-uhf-hook="signInToggle" href="javascript:void(0);" data-slnm-ihg="SignInAnonymousUbe" title="Sign in / Join for free">
                            <div className="login-signin-mobile-icon" />
                            Sign in / Join for free
                            </a>
                        </div>
                        <div className="logIn-State logIn-implicit">
                            <a className="logIn-link logIn-link-signIn" data-uhf-hook="signInToggle" href="javascript:void(0);" data-slnm-ihg="SignInImplicitUbe" title="Sign in / Join for free">
                            <div className="login-signin-mobile-icon" />
                            Sign in / Join for free
                            </a>
                            {/* <span class="logIn-slash-symbol">/</span>
                                    <a class="logIn-link logIn-link-join" href="https://www.ihg.com/rewardsclub/us/en/join" title="Join">Join</a> */}
                        </div>
                        <div className="logIn-explicit logIn-State">
                            <a className="logIn-link logIn-block" href="https://www.ihg.com/rewardsclub/us/en/account-mgmt/home">
                            <div className="first-name-container"><span className="login-signin-mobile-icon" /><span className="user-first-name" data-slnm-ihg="UserFirstNameExplicitXsvpUbe">user first name</span></div>
                            <div style={{display: 'none'}}><span className="user-points" data-slnm-ihg="UserPointsExplicitXsvpUbe">user points</span> pts</div>
                            </a>
                        </div>
                        </div>
                        <div className="mobileNav ">
                        <a className="mobileNav-link mobileResDirectNumber" href="tel:18778343613" data-uhf-hook="resDirectNumber" data-uhf-hook-two="mobileResDirectLink" data-uhftrigger="0871Disc" data-no-replace="content" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="mobileNavListBase hidden-sm hidden-md hidden-lg hidden-xl clearfix">
                        <div className="mobileNavContainer">
                            <div className="mobileNavInner mobileNav-hidden">
                            <div className="mobileNavMenu">
                                {/* START : Hamburger : Mobile Brand nav menu */}
                                <ul className="mobileNavMenu-list list-unstyled">
                                <li className="mobileNavHeading">
                                    <a className="mobileNavLink" href="javascript:void(0);">INTERCONTINENTAL HOTELS AND RESORTS</a>
                                    <ul className="mobileNavMenu-subList list-unstyled uhfmobilebrandnav">
                                    </ul>
                                </li>
                                
                                <li className="mobileNavHeading hotelDetail">
                                    <a className="mobileNavLink" href="javascript:void(0);">INTERCONTINENTAL HOTEL DETAILS</a>
                                    <ul className="mobileNavMenu-subList list-unstyled uhfmobilebrandnav">
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink site-int-link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail">Our Hotel</a>
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink site-int-link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/concierge">Concierge</a>
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink site-int-link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/meetings-events">Events</a>
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink site-int-link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/hotel-packages">OFFERS</a>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                                <ul className="mobileNavMenu-list list-unstyled">
                                <li>
                                    <ul className="mobileNavMenu-subList list-unstyled uhftravel-cc">
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink site-int-link rc signIn" data-uhf-si="not6c" data-uhf-hook="walletToggle" href="javascript:void(0);">Sign in</a>
                                        {/* <a class="mobileNavLink site-int-link rc join" data-uhf-hook="walletToggle" href="https://www.ihg.com/rewardsclub/us/en/join" title="Join">Join</a>                                         */}
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink site-int-link rc join" data-uhf-si="not6c" data-uhf-hook="walletToggle" href="https://www.ihg.com/rewardsclub/us/en/join">Join for free</a>
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink site-int-link rc myAccount" data-uhf-hook="walletToggle" href="javascript:void(0)">My Account</a>
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink" href="https://www.ihg.com/hotels/us/en/stay-mgmt/ManageYourStay" title="My stays">My stays</a>
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink uhfpopup" href="javascript:void(0);" title="Chat with us" data-slnm-ihg="NeedHelpHamburguerLinkSID">Chat with us</a>
                                    </li>
                                                                
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink" href="https://www.ihg.com/intercontinental/hotels/us/en/stay-mgmt/ManageYourStay" title="Manage Reservations">Manage Reservations</a>
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink" href="#" id="feedbackQs" target="_blank">Feedback</a>
                                    </li>
                                    <li className="mobileNavMenu-list-item">
                                        <a className="mobileNavLink site-int-link rc signOut" data-uhf-hook="walletToggle" href="#">Sign out</a>
                                    </li>
                                    </ul>
                                </li>
                                </ul>
                            </div>
                            <div className="mobileNavCL">
                                <a className="language " id="uhfCountryLanguageMobileLink" href="javascript:void(0);"><span className="language-icon" alt="language-icon" /><span className="language-text" /> <i className="fa fa-angle-down" /></a>
                                <div id="uhfCountryLanguageMobileContainer" className="">
                                {/* UHF country/language markup */}
                                <div id="uhfLocale">
                                    <div id="uhfLocaleSelection">
                                    <form id="uhfLocaleSelectionForm" method="post" action="/">
                                        <div id="uhfCountrySelectionContainer">
                                        <label htmlFor="uhfCountrySelection">Country / Region</label>
                                        <select id="uhfCountrySelection" />
                                        </div>
                                        <div id="uhfLanguagesSelectionContainer">
                                        <label htmlFor="uhfLanguageSelection">language</label>
                                        <select id="uhfLanguageSelection" />
                                        </div>
                                        <a href="javascript:void(0);" id="uhfCountryLanguageCTA" aria-label="Buttons for Save and Close of language selection pop-up" tabIndex={-1}>
                                        <button type="button" className="buttonSave" role="button" aria-label="Save Language Selection Change">save</button>
                                        <i className="fa fa-times" role="button" aria-label="Close Language Selection" tabIndex={0} />
                                        </a>
                                    </form>
                                    <div id="uhfCountryLanguageImageContainer" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="brandLogoNavWrapper visible-sm visible-md visible-lg uhf-walletPushOver primary-nav wrapper-UBE" id="primary-nav">
                    <div className="brandLogoNavContainer container">
                    <div className="row">
                        <div className="col-md-12 clearfix">
                        <div className="brandLogo">
                            <a className="brandLogo-link" href="https://www.ihg.com/intercontinental/hotels/us/en/reservation" title="InterContinental Hotels & Resorts">
                            <img className="brandLogo-image" alt="InterContinental Hotels & Resorts" src="https://digital.ihg.com/is/image/ihg/IC-Logo?fmt=png-alpha" />
                            </a>                                 
                        </div>
                        <div className="brandNavContainer visible-sm visible-md visible-lg">
                            <nav className="brandNav">
                            <ul className="brandNav-list u-list clearfix">
                                <li className="brandNav-list-item u-list-item">                                                 
                                <a className="brandNav-link u-link site-int-link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail">Our Hotel</a>
                                </li>
                                <li className="brandNav-list-item u-list-item">                                                 
                                <a className="brandNav-link u-link site-int-link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/concierge">Concierge</a>
                                </li>
                                <li className="brandNav-list-item u-list-item">                                                 
                                <a className="brandNav-link u-link site-int-link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/meetings-events">Events</a>
                                </li>
                                <li className="brandNav-list-item u-list-item">                                                 
                                <a className="brandNav-link u-link site-int-link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/hotel-packages">OFFERS</a>
                                </li>
                            </ul>
                            <a className="booknow" href="#"><span>BOOK NOW</span></a>
                            </nav>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                </header>
                <div id="applicationWrapper" className="uhf-walletPushOver">
                <input type="hidden" id="guestapi-url" defaultValue="/guestapi/v1" name="guestapi" />
                <input type="hidden" id="brand-name" defaultValue="intercontinental" name="brandname" />
                <input type="hidden" id="host-name" defaultValue name="host-name" />
                <input type="hidden" id="locale" defaultValue="en_US" name="locale" />
                <input type="hidden" id="brandcode" defaultValue="ic" name="brandcode" />
                <input type="hidden" id="country-code" defaultValue="us" name="country" />
                <input type="hidden" id="language-code" defaultValue="en_US" name="language-code" />
                <input type="hidden" id="localeZone" defaultValue="EST" name="localeZone" />
                <input type="hidden" id="rewardsclub" defaultValue="rewardsclub" name="rewardsclub" />
                <input type="hidden" id="hotelCode" defaultValue="dachb" name="hotelCode" />
                <input type="hidden" id="rewards" defaultValue="rewards" name="rewards" />
                <input type="hidden" id="wallet-tpiurl" defaultValue="https://www.ihg.com" name="tpiurl" />
                <input type="hidden" id="wallet-guestinfo" defaultValue="/gs-json/ssoWalletInfo" name="wallet-guestinfo" />
                <input type="hidden" id="wallet-activities" defaultValue="/gs-json/walletActivities" name="wallet-activities" />
                <input type="hidden" id="wallet-signout" defaultValue="/gs-json/sso/signOut?rememberMe=" name="wallet-signout" />
                <input type="hidden" id="wallet-rewardsclub" defaultValue="https://www.ihg.com" name="wallet-rewardsclub" />
                <input type="hidden" id="hotelcountrycode" defaultValue="BD" name="hotelcountrycode" />
                <div className="root responsivegrid">
                    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                    <div className="experiencefragment aem-GridColumn aem-GridColumn--default--12">
                        <div className="cmp-experiencefragment" id="hotel-header">
                        <div className="xf-content-height">
                            <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                            <div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">
                                <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                <div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">
                                    <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                    <div className="container responsivegrid aem-GridColumn aem-GridColumn--default--12">
                                        <span className="noffers" data-error-keyword1="No offers are available at the moment." data-error-keyword2="Check back with us soon!" data-alert="https://digital.ihg.com/is/content/ihg/icon-outline-alert">
                                        </span>
                                        <div id="xf-primary-nav" className="cmp-container ">
                                        <div className="image">
                                            <div data-cmp-is="image" className="cmp-image" itemScope itemType="https://schema.org/ImageObject">
                                            <a className="cmp-image__link" href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail" target="_self">
                                                <picture className="cmp-image__image">
                                                <source media="(max-width:991px)" srcSet="https://digital.ihg.com/is/image/ihg/IC-Logo?fmt=png-alpha" alt="logo" />
                                                <img src="https://digital.ihg.com/is/image/ihg/IC-Logo?fmt=png-alpha" alt="logo" />
                                                </picture>
                                            </a>
                                            </div>
                                        </div>
                                        <div className="navigation cmp-navigation--text-uppercase">
                                            <nav className="cmp-navigation" role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement" aria-label="IHG Header Navigation">
                                            <ul className="cmp-navigation__group" aria-label="IHG Header navigation">
                                                <li className="cmp-navigation__item cmp-navigation__item--level-0">
                                                <a href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/rooms" title="Rooms" className="cmp-navigation__item-link">Rooms</a>
                                                </li>
                                                <li className="cmp-navigation__item cmp-navigation__item--level-0">
                                                <a href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/amenities" title="Amenities" className="cmp-navigation__item-link">Amenities</a>
                                                </li>
                                                <li className="cmp-navigation__item cmp-navigation__item--level-0">
                                                <a href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/dining" title="Dining" className="cmp-navigation__item-link">Dining</a>
                                                </li>
                                                <li className="cmp-navigation__item cmp-navigation__item--level-0">
                                                <a href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/local-area-guide" title="Destination" className="cmp-navigation__item-link">Destination</a>
                                                </li>
                                                <li className="cmp-navigation__item cmp-navigation__item--level-0">
                                                <a href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/meetings-events" title="Groups & Events" className="cmp-navigation__item-link">Groups &amp; Events</a>
                                                </li>
                                                <li className="cmp-navigation__item cmp-navigation__item--level-0">
                                                <a href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/hotel-offers" title="Offers" className="cmp-navigation__item-link">Offers</a>
                                                </li>
                                                <li className="cmp-navigation__item cmp-navigation__item--level-0">
                                                <a href="https://www.ihg.com/intercontinental/hotels/us/en/dhaka/dachb/hoteldetail/gallery" title="Gallery" className="cmp-navigation__item-link">Gallery</a>
                                                </li>
                                            </ul>
                                            </nav>
                                        </div>
                                        <div className="calltoaction button cmp-button--primary text-transform-uppercase">
                                            <div className="cmp-button-wrapper nav-booknowbutton show" data-component-xfbooknow="true" style={{display: 'block'}}>
                                            <a className="cmp-button" href="javascript:void(0);" target="_self">
                                                <img className="convert-to-svg" src="https://digital.ihg.com/is/content/ihg/ruby-highlight-button-flexible?fmt=svg" alt="Button Image" hidden />
                                                <span className="cmp-button__text">View prices</span>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                        <style dangerouslySetInnerHTML={{__html: "\n                                                #xf-primary-nav. > :nth-child(2){\n                                                left:0px;\n                                                top:0px;\n                                                right:0px;\n                                                bottom:0px;\n                                                }\n                                             " }} />
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">
                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        </div>
                    </div>
                    <div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">
                        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        </div>
                    </div>
                    </div>
                    <div className="hotel-detail-container no-padding cmp-hotel-detail-container--nomargin aem-GridColumn aem-GridColumn--default--12">
                    </div>
                </div>
                </div>
                <div className="breadcrumb aem-GridColumn aem-GridColumn--default--12 online-paymentLink">
                <nav className="cmp-breadcrumb" aria-label="Breadcrumb" data-component-breadcrumb>
                    <ol className="cmp-breadcrumb__list" itemScope itemType="https://schema.org/BreadcrumbList">
                    <li className="cmp-breadcrumb__item" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <a href="/hotels/us/en/reservation" className="cmp-breadcrumb__item-link" itemProp="item">
                        <span itemProp="name">Home</span>
                        </a>
                        {/* <meta itemProp="position" content={1} /> */}
                    </li>
                    <li className="cmp-breadcrumb__item " itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                        <a href="#" className="cmp-breadcrumb__item-link" itemProp="item">
                        <span itemProp="name"> Online Payment Collection</span>
                        </a>
                        {/* <meta itemProp="position" content={3} /> */}
                    </li>
                    </ol>
                </nav>
                </div>
                <div className="payment-form-section">
                <div className="cmp-container">
                    <h3 className="paytitle" data-testid="enrollmentTitleSID">Reservation : Online Payment</h3>
                    <div className="cmp-payment-layout">
                    <div className="cmp-payment-image">
                        <div className="cmp-image">
                        <img src="../public/payment.jpg" alt="InterContinental Dhaka" />
                        </div>
                    </div>
                    <div className="cmp-payment-form">
                        <form>
                        <div className="form-required-text">*Indicates Required Field</div>
                        <div className="cmp-form-field">
                            <label>Amount</label>
                            <div className="cmp-form-field-input">
                            <input type="number" defaultValue={0} required inputMode="decimal" />
                            </div>
                        </div>
                        <div className="cmp-form-field">
                            <label>Service</label>
                            <div className="cmp-form-field-select">
                            <select id="serviceSelect" name="service" required onChange={(e) => toggleOtherService(e.currentTarget)}>
                                <option value="room">Room Booking</option>
                                <option value="meeting">Meeting /Conference &amp; Banquet</option>
                                <option value="restaurant">Restaurant</option>
                                <option value="others">Others (Please specify)</option>
                            </select>
                            </div>
                        </div>
                        <div className="cmp-form-field" id="otherServiceInput" style={{display: 'none', marginTop: 10}}>
                            <label>Specify Service</label>
                            <div className="cmp-form-field-input">
                            <input type="text" name="otherService" placeholder="Please specify service" />
                            </div>
                        </div>
                        <div className="cmp-form-field">
                            <label>Date of Service/Arrival:</label>
                            <div className="cmp-form-field-input">
                            <input type="date" required />
                            </div>
                        </div>
                        <div className="cmp-form-field">
                            <label>Name of Customer:</label>
                            <div className="cmp-form-field-input">
                            <input type="text" placeholder="Enter your name" required />
                            </div>
                        </div>
                        <div className="cmp-form-field">
                            <label>Mobile:</label>
                            <div className="cmp-form-field-input">
                            <input type="tel" placeholder="Enter your phone number" required />
                            </div>
                        </div>
                        <div className="cmp-form-field">
                            <label>Email:</label>
                            <div className="cmp-form-field-input">
                            <input type="email" placeholder="Enter your email" required />
                            </div>
                        </div>
                        <div className="cmp-form-field">
                            <label>Reference (e.g., Name of Company/Event/Invoice# etc):</label>
                            <div className="cmp-form-field-input">
                            <input type="text" placeholder="Enter your reference number" required />
                            </div>
                        </div>
                        <div className="cmp-form-field">
                            <label>Comments:</label>
                            <div className="cmp-form-field-input">
                            <input type="text" placeholder="Enter your comments" />
                            </div>
                        </div>
                        <div className="cmp-form-field-checkbox">
                            <input type="checkbox" id="terms" required />
                            <label htmlFor="terms">I agree with the <a href="#" className="cmp-link">Terms &amp; Conditions</a>, <a href="#" className="cmp-link">Privacy Policy</a> and <a href="#" className="cmp-link">Return &amp; Refund Policy</a></label>
                        </div>
                        <div className="cmp-button-wrapper">
                            <button type="submit" className="cmp-button">
                            <span className="cmp-button__text">Proceed to Pay</span>
                            </button>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <footer id="uhf_footerWrapper" className="uhf_headerFooter sl_norewrite">
                <section className="footer-brandbar">
                <div className="footer-container">
                    <div className="footer-banner">
                    <div className="footer-banner__container footer-banner__head">
                        <a className="footer-banner__link" href="/hotels/us/en/reservation" target="_self" title="Selecting will reload the IHG website in this browser window.">
                        <svg className="footer-banner__img footer-banner__img--horizontalem">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-6c-horizontalem" className="footer-banner__img footer-banner__img--horizontalem">
                            <title id="logos-title-6c">Selecting will reload the IHG website in this browser window.</title>
                            <desc id="logos-desc-6c">Selecting will reload the IHG website in this browser window.</desc>
                            </image>
                        </svg>
                        <svg className="footer-banner__img footer-banner__img--verticalis">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-6c-verticalis" className="footer-banner__img footer-banner__img--verticalis">
                            <title id="logos-title-6c">Selecting will reload the IHG website in this browser window.</title>
                            <desc id="logos-desc-6c">Selecting will reload the IHG website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    </div>
                    <div className="footer-section footer-brands">
                    <div className="footer-brands__item footer-list__item footer-brands__item-sx">
                        <a className="footer-list__item-link" href="https://www.sixsenses.com/en" target="_blank" title="Selecting will load the Six Senses website in a new browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-sx" className="footer-list__item-img">
                            <title id="title-logos-sx">Selecting will load the Six Senses website in a new browser window.</title>
                            <desc id="desc-logos-sx">Selecting will load the Six Senses website in a new browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-re">
                        <a className="footer-list__item-link" href="https://www.ihg.com/regent/hotels/us/en/reservation" target="_self" title="Selecting will reload the Regent hotels website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-re" className="footer-list__item-img">
                            <title id="title-logos-re">Selecting will reload the Regent hotels website in this browser window.</title>
                            <desc id="desc-logos-re">Selecting will reload the Regent hotels website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-ic">
                        <a className="footer-list__item-link" href="https://www.ihg.com/intercontinental/hotels/us/en/reservation" target="_self" title="Selecting will reload the InterContinental Hotels & Resorts website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-ic" className="footer-list__item-img">
                            <title id="title-logos-ic">Selecting will reload the InterContinental Hotels &amp; Resorts website in this browser window.</title>
                            <desc id="desc-logos-ic">Selecting will reload the InterContinental Hotels &amp; Resorts website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-lx">
                        <a className="footer-list__item-link" href="https://www.ihg.com/vignettecollection/hotels/us/en/reservation" target="_self" title="Selecting will reload the Vignette Collection Website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-lx" className="footer-list__item-img">
                            <title id="title-logos-lx">Selecting will reload the Vignette Collection Website in this browser window.</title>
                            <desc id="desc-logos-lx">Selecting will reload the Vignette Collection Website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-ki">
                        <a className="footer-list__item-link" href="https://www.ihg.com/kimptonhotels/hotels/us/en/reservation" target="_self" title="Selecting will reload the Kimpton® Hotels & Restaurants website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-ki" className="footer-list__item-img">
                            <title id="title-logos-ki">Selecting will reload the Kimpton® Hotels &amp; Restaurants website in this browser window.</title>
                            <desc id="desc-logos-ki">Selecting will reload the Kimpton® Hotels &amp; Restaurants website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-in">
                        <a className="footer-list__item-link" href="https://www.ihg.com/hotelindigo/hotels/us/en/reservation" target="_self" title="Selecting will reload the Hotel Indigo website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-in" className="footer-list__item-img">
                            <title id="title-logos-in">Selecting will reload the Hotel Indigo website in this browser window.</title>
                            <desc id="desc-logos-in">Selecting will reload the Hotel Indigo website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-vx">
                        <a className="footer-list__item-link" href="https://www.ihg.com/voco/hotels/us/en/reservation" target="_self" title="Selecting will reload the voco hotels website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-vx" className="footer-list__item-img">
                            <title id="title-logos-vx">Selecting will reload the voco hotels website in this browser window.</title>
                            <desc id="desc-logos-vx">Selecting will reload the voco hotels website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-ul">
                        <a className="footer-list__item-link" href="https://www.ihg.com/hualuxe/hotels/us/en/reservation" target="_self" title="Selecting will reload the HUALUXE Hotels & Resorts website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-ul" className="footer-list__item-img">
                            <title id="title-logos-ul">Selecting will reload the HUALUXE Hotels &amp; Resorts website in this browser window.</title>
                            <desc id="desc-logos-ul">Selecting will reload the HUALUXE Hotels &amp; Resorts website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-cp">
                        <a className="footer-list__item-link" href="https://www.ihg.com/crowneplaza/hotels/us/en/reservation" target="_self" title="Selecting will reload the Crowne Plaza Hotels & Resorts website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-cp" className="footer-list__item-img">
                            <title id="title-logos-cp">Selecting will reload the Crowne Plaza Hotels &amp; Resorts website in this browser window.</title>
                            <desc id="desc-logos-cp">Selecting will reload the Crowne Plaza Hotels &amp; Resorts website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-sn">
                        <a className="footer-list__item-link" href="https://www.ihg.com/iberostar-beachfront-resorts/hotels/us/en/reservation" target="_self" title="Selecting will reload Iberostar Beachfront Resorts in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-sn" className="footer-list__item-img">
                            <title id="title-logos-sn">Selecting will reload Iberostar Beachfront Resorts in this browser window.</title>
                            <desc id="desc-logos-sn">Selecting will reload Iberostar Beachfront Resorts in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-vn">
                        <a className="footer-list__item-link" href="https://www.ihg.com/evenhotels/hotels/us/en/reservation" target="_self" title="Selecting will reload the EVEN Hotels website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-vn" className="footer-list__item-img">
                            <title id="title-logos-vn">Selecting will reload the EVEN Hotels website in this browser window.</title>
                            <desc id="desc-logos-vn">Selecting will reload the EVEN Hotels website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-ex">
                        <a className="footer-list__item-link" href="https://www.ihg.com/holidayinnexpress/hotels/us/en/reservation" target="_self" title="Selecting will reload the Holiday Inn Express Hotels website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-ex" className="footer-list__item-img">
                            <title id="title-logos-ex">Selecting will reload the Holiday Inn Express Hotels website in this browser window.</title>
                            <desc id="desc-logos-ex">Selecting will reload the Holiday Inn Express Hotels website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-hi">
                        <a className="footer-list__item-link" href="https://www.ihg.com/holidayinn/hotels/us/en/reservation" target="_self" title="Selecting will reload the Holiday Inn website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-hi" className="footer-list__item-img">
                            <title id="title-logos-hi">Selecting will reload the Holiday Inn website in this browser window.</title>
                            <desc id="desc-logos-hi">Selecting will reload the Holiday Inn website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-rn">
                        <a className="footer-list__item-link" href="https://www.ihg.com/garner-hotels/hotels/us/en/reservation" target="_self" title="Selecting will reload the Garner Hotels Website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-rn" className="footer-list__item-img">
                            <title id="title-logos-rn">Selecting will reload the Garner Hotels Website in this browser window.</title>
                            <desc id="desc-logos-rn">Selecting will reload the Garner Hotels Website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-va">
                        <a className="footer-list__item-link" href="https://www.ihg.com/avidhotels/hotels/us/en/reservation" target="_self" title="Selecting will reload the avid hotels website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-va" className="footer-list__item-img">
                            <title id="title-logos-va">Selecting will reload the avid hotels website in this browser window.</title>
                            <desc id="desc-logos-va">Selecting will reload the avid hotels website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-we">
                        <a className="footer-list__item-link" href="https://www.ihg.com/atwellsuites/hotels/us/en/reservation" target="_self" title="Selecting will reload the Atwell Suites website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-we" className="footer-list__item-img">
                            <title id="title-logos-we">Selecting will reload the Atwell Suites website in this browser window.</title>
                            <desc id="desc-logos-we">Selecting will reload the Atwell Suites website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-sb">
                        <a className="footer-list__item-link" href="https://www.ihg.com/staybridge/hotels/us/en/reservation" target="_self" title="Selecting will reload the Staybridge Suites website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-sb" className="footer-list__item-img">
                            <title id="title-logos-sb">Selecting will reload the Staybridge Suites website in this browser window.</title>
                            <desc id="desc-logos-sb">Selecting will reload the Staybridge Suites website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-cv">
                        <a className="footer-list__item-link" href="https://www.ihg.com/holidayinnclubvacations/hotels/us/en/reservation" target="_self" title="Selecting will reload the Holiday Inn Club Vacations website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-cv" className="footer-list__item-img">
                            <title id="title-logos-cv">Selecting will reload the Holiday Inn Club Vacations website in this browser window.</title>
                            <desc id="desc-logos-cv">Selecting will reload the Holiday Inn Club Vacations website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    <div className="footer-brands__item footer-list__item footer-brands__item-cw">
                        <a className="footer-list__item-link" href="https://www.ihg.com/candlewood/hotels/us/en/reservation" target="_self" title="Selecting will reload the Candlewood Suites website in this browser window.">
                        <svg className="footer-list__item-img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-grey-cw" className="footer-list__item-img">
                            <title id="title-logos-cw">Selecting will reload the Candlewood Suites website in this browser window.</title>
                            <desc id="desc-logos-cw">Selecting will reload the Candlewood Suites website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    </div>
                    <div className="footer-banner">
                    <div className="footer-banner__container  footer-banner__foot">
                        <a className="footer-banner__link" href="https://www.ihg.com/onerewards/content/us/en/home" target="_self" title="Selecting opens the IHG One Rewards website in this browser window.">
                        <svg className="footer-banner__img">
                            <image href="https://digital.ihg.com/is/content/ihg/logos-onerewards" className="footer-banner__img">
                            <title id="title-logos-onerewards">Selecting opens the IHG One Rewards website in this browser window.</title>
                            <desc id="desc-logos-onerewards">Selecting opens the IHG One Rewards website in this browser window.</desc>
                            </image>
                        </svg>
                        </a>
                    </div>
                    </div>
                </div>
                </section>
                <div className="footerWrap">
                <div className="container contentContainer">
                    {/* container fluid */}
                    <div className="row">
                    <div className="col-xs-12 col-ihg-tablet-4 col-sm-3 stackingModule socialMedia">
                        <h5 className="brandNav__heading">
                        Social Media
                        </h5>
                        <ul className="list-inline social">
                        <li className="socialElement">
                            <a title="Facebook" href="https://www.facebook.com/intercontinental" target="_blank" className="socialElement__icon uhf_facebook-1">
                            <img className="fa" src="https://digital.ihg.com/is/image/ihg/facebook-1?fmt=png-alpha" alt="Facebook" />
                            </a>
                        </li>
                        <li className="socialElement">
                            <a title="Twitter" href="https://twitter.com/interconhotels" target="_blank" className="socialElement__icon uhf_x">
                            <img className="fa" src="https://digital.ihg.com/is/image/ihg/x?fmt=png-alpha" alt="Twitter" />
                            </a>
                        </li>
                        <li className="socialElement">
                            <a title="Instagram" href="https://www.instagram.com/intercontinental/" target="_blank" className="socialElement__icon uhf_instagram-1">
                            <img className="fa" src="https://digital.ihg.com/is/image/ihg/instagram-1?fmt=png-alpha" alt="Instagram" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="hrCol col-xs-12 visible-xs-block">
                        <hr className="footerHr visible-xs-block" />
                    </div>
                    <div className="footer-brandNav col-xs-12 col-ihg-tablet-8 col-sm-9 stackingModule marketingNav">
                        <div className="navColumns">
                        <div className="colOne">
                            <div className="navHeaders">
                            <div className="brandNav__heading colOneheader">
                                Company
                            </div>
                            </div>
                            <span className="brandNav__navItem first-xs ">
                            <a href="https://www.ihg.com/intercontinental/content/us/en/support/about-intercontinental" title="About InterContinental" data-slnm-ihg="NeedHelpFooterLinkSID">
                                About InterContinental</a>
                            </span>
                            <span className="brandNav__navItem second-xs ">
                            <a href="https://www.ihg.com/intercontinental/content/us/en/support/mobile" title="InterContinental Mobile" data-slnm-ihg="NeedHelpFooterLinkSID">
                                InterContinental Mobile</a>
                            </span>
                            <span className="brandNav__navItem first-xs ">
                            <a className="utilityNav-link u-link nav-middle footer_Customer_Care uhfpopup" href="http://customerservice.ihg.com/ihg/bot.html?isJSEnabled=1&businessArea=Root.InterContinental" title="Chat with us" data-slnm-ihg="NeedHelpFooterLinkSID">
                                Chat with us</a>
                            </span>
                            <span className="brandNav__navItem second-xs ">
                            <a href="https://www.ihg.com/content/us/en/customer-care/tc" title="Terms of Use" target="_blank" data-slnm-ihg="NeedHelpFooterLinkSID">
                                Terms of Use</a>
                            </span>
                        </div>
                        <div className="colTwo">
                            <span className="brandNav__navItem first-xs ">
                            <a href="https://www.ihg.com/content/us/en/about/brands" title="IHG Global Brands">
                                IHG Global Brands</a>
                            </span>
                            <span className="brandNav__navItem second-xs ">
                            <a href="https://development.ihg.com/" title="Hotel Development" target="_blank">
                                Hotel Development</a>
                            </span>
                            <span className="brandNav__navItem first-xs ">
                            <a href="https://www.ihg.com/intercontinental/content/us/en/hotel-directory" title="Hotel Directory">
                                Hotel Directory</a>
                            </span>
                            <span className="brandNav__navItem second-xs ">
                            <a href="https://partnerconnect.ihg.com/" title="Affiliate Program" target="_blank">
                                Affiliate Program</a>
                            </span>
                        </div>
                        <div className="colThree">
                            <span className="brandNav__navItem first-xs ">
                            <a href="https://www.ihg.com/content/us/en/about/brands" title="About IHG">
                                About IHG</a>
                            </span>
                            <span className="brandNav__navItem second-xs ">
                            <a href="https://www.ihg.com/content/us/en/customer-care/privacy-and-cookie-center" title="Privacy and Cookie Center">
                                Privacy and Cookie Center</a>
                            </span>
                            <span className="brandNav__navItem first-xs ">
                            <a href="https://www.ihg.com/hotels/us/en/customer-care/forms/privacy?hideBack=true&option=doNotSell" title="Do Not Sell or Share My Personal Information">
                                Do Not Sell or Share My Personal Information</a>
                            </span>
                            <span className="brandNav__navItem second-xs ">
                            <a href="https://www.ihg.com/content/us/en/customer-care/privacy_statement#5" rel="nofollow" title="AdChoices" target="_blank">
                                AdChoices<img className="adChoiceImage" src="https://digital.ihg.com/is/image/ihg/uhf_AdChoices_12x12?fmt=png-alpha" alt="AdChoices" />
                            </a>
                            </span>
                            <span className="brandNav__navItem first-xs ">
                            <a href="https://careers.ihg.com/" title="IHG Careers">
                                IHG Careers</a>
                            </span>
                            <span className="brandNav__navItem second-xs feedback">
                            <a href="javascript:void(0);" id="feedback" title="Feedback">
                                Feedback</a>
                            </span>
                            <span className="brandNav__navItem first-xs feedbackLink">
                            <a href="javascript:void(0);" id="feedbackLink" title="Feedback">
                                Feedback</a>
                            </span>
                        </div>
                        </div>
                    </div>
                    <div className="hrCol col-xs-12 visible-xs-block">
                        <hr className="footerHr visible-xs-block" />
                    </div>
                    </div>
                 
                    <div className="row">
                    <div className="col-xs-12 col-ihg-tablet-8 col-sm-9 bpgResDirectWrapper">
                        <div className="stackingModule BPGstackingModule">
                        <a href="https://www.ihg.com/content/us/en/customer-care/best-price-guarantee" target="_blank">
                            <img src="https://digital.ihg.com/is/image/ihg/ihg-bpg-lockup-universal-footer-en-168x81?fmt=png-alpha" alt="Best price" className="footer-bpg" />
                        </a>
                        </div>
                        <div className="resDirectCol stackingModule">
                        <p className="resDirectText">
                            Book online or call: <br />
                            <a className="resDirectNum" data-uhf-hook="resDirectNumber" href="tel:18778343613">1 877 834 3613</a>
                        </p>
                        <p className="resDirectDisclaimer" hidden data-uhf-hook="resDirectMessage">
                            <span>Costs 13p per minute + phone company's access charge</span>
                            <a href="javascript:void(0);" className="tooltipQuestion hasBlankPopover" tabIndex={0} data-content="Calls to 0871 numbers, when dialed from the UK, cost 13p per minute. Standard network rates apply. Calls from mobiles will be higher." data-toggle="popover" data-placement="top" data-trigger="focus" data-animation="true">
                            <i className="fa fa-question-circle" />
                            </a>
                        </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-ihg-tablet-4 col-sm-3 stackingModule ourAppsWrapper">
                        <div className="row">
                        <div className="col-xs-12 col-ihg-tablet-12 col-sm-12">
                            <div className="ourApps">
                            <div className="row">
                                <div className="col-xs-12 col-ihg-tablet-12 col-sm-12">
                                <a href="http://go.onelink.me/ihg?pid=global_desktop&c=global_desktop_us_en_footer&af_web_dp=http://www.ihg.com/hotels/us/en/global/offers/mobile&cm_sp=OSMGL-US-EN-MAN-Footer-AppDownload" title="Available on the App Store" target="_blank">
                                    <img className="iosApp" src="https://digital.ihg.com/is/image/ihg/uhf_ios_badge_en_gb?fmt=png-alpha" alt="Available on the App Store" />
                                </a>
                                <a href="http://go.onelink.me/ihg?pid=global_desktop&c=global_desktop_us_en_footer&af_web_dp=http://www.ihg.com/hotels/us/en/global/offers/mobile&cm_sp=OSMGL-US-EN-MAN-Footer-AppDownload" title="[Ljava.lang.String;@9ce137e" target="_blank">
                                    <img className="androidApp" src="https://digital.ihg.com/is/image/ihg/uhf_android_badge_en_gb?fmt=png-alpha" alt="[Ljava.lang.String;@9ce137e" />
                                </a>
                                </div>
                            </div>
                            <span className="ourAppsText socialElement__text--ourApps socialElement__text">
                                <b>Download the IHG One Rewards app</b><br /><a className="coloredLink" href="https://www.ihg.com/content/us/en/support/mobile">Learn more </a>about fast booking and Rewards on the go</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* END : Resdirect & App */}
                    {/* Start BPG Drawer */}
                </div>
                </div>
                {/*------- Html For Disclaimer Message */}
                <div className="container">
                <div className="row">
                    <div className="row footer-disclaimerBlock">
                    <div className="col-xs-12">
                        <small className="footer-disclaimerText com-domain">To ensure that we give you the best experience on our website, we use machine translation for portions of the content featured on this page.</small>
                    </div>
                    <div className="col-xs-12">
                        <img src="../public/footer-ssl.png" alt="sslcommerz footer logo" width="100%" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="brand-color-bkg">
                <div className="footerWrap">
                    <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                        <div className="footer-copyrightBlock">
                            <small className="footer-copyrightText com-domain">© 2025 IHG. All rights reserved. Most hotels are independently owned and operated.</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/* UHF : FOOTER : START : EU Cookie + extras */}
                <div id="dialog-euCookie" className="euCookieContainer">
                <div className="euCookieContent">
                    <div className="euCookieCloseIcon">
                    <i className="fa fa-times" />
                    </div>
                    <div className="euCookieText">
                    <div className="text parbase LinkMorpher">
                        <h3>Cookie Usage and Settings</h3>
                        <p>The standard cookie policy for this website is to allow all cookies. This helps to ensure you have the optimal experience. If you would like to continue with our optimal website experience, you don't need to make any changes. If you would like to <a href="https://www.ihg.com/content/gb/en/customer-care/privacy_statement" className="underLine">learn more about how we use cookies</a> or change your settings, you can use the link at the bottom of any page at any time.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="backdrop-transparent uhfSharedDialog modal" id="modal0871Disclaimer" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-body">
                        <p data-uhf-hook="resDirectMessage">Calls to 0871 numbers, when dialed from the UK, cost 13p per minute. Standard network rates apply. Calls from mobiles will be higher.</p>
                    </div>
                    <div className="modal-footer">
                        <a data-uhf-hook="resDirectNumber" href="tel:18774242449" data-no-replace="content" className="btn btn-primary">Call</a>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                    </div>
                    </div>
                </div>
                </div>
                <div id="dialog-ajaxDefaultError">
                <div className="ajaxDefaultError-Container">
                    <div className="errorIcon-container">
                    <i className="fa fa-exclamation-circle" />
                    </div>
                    <div className="errorMessage-container">
                    <div className="errorMsg">We are sorry, our system is temporarily unavailable.  Please try again later or contact the <a href="/hotels/us/en/customer-care/contact-us">IHG<sup>®</sup> Rewards Club Customer Care Center</a> for assistance.</div>
                    </div>
                </div>
                </div>
                <div id="ssoImagesDiv" hidden />
                <form id="tpiDivForm" action="/" method="POST" hidden>
                <input type="hidden" defaultValue="true" name="displayCaptcha" />
                <input type="hidden" defaultValue={""} name="fwdest" id="fwdest" />
                </form>
            
            </footer>
        </div>
    </div>
  )
}
