<%--
  Created by IntelliJ IDEA.
  User: 李兴运
  Date: 2021/2/14
  Time: 13:05
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
<html>
    <head>
        <title>Title</title>
    </head>
    <body>
        <!-- Page Head-->
        <header class="page-head">
            <!-- RD Navbar minimal-->
            <div class="rd-navbar-wrap">
                <nav class="rd-navbar rd-navbar-minimal rd-navbar-light" data-md-device-layout="rd-navbar-fixed"
                     data-lg-device-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static"
                     data-xxl-device-layout="rd-navbar-static" data-sm-layout="rd-navbar-fixed"
                     data-md-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-fixed"
                     data-xl-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static"
                     data-md-stick-up-offset="120px" data-lg-stick-up-offset="120px" data-lg-auto-height="true"
                     data-stick-up="true">
                    <div class="rd-navbar-inner">
                        <div class="rd-navbar-top-panel">
                            <div>
                                <address class="contact-info d-md-inline-block text-left offset-none">
                                    <div class="p unit unit-spacing-xs flex-row">
                                        <div class="unit-left"><span class="icon icon-xs icon-circle icon-gray-light mdi mdi-phone text-primary"></span>
                                        </div>
                                        <div class="unit-body"><a class="link-inherit font-weight-medium"
                                                                  href="${pageContext.request.contextPath}/tel:#">1-800-1234-567</a><br/><a
                                                class="link-inherit font-weight-medium"
                                                href="${pageContext.request.contextPath}/tel:#">1-800-3214-654</a></div>
                                    </div>
                                </address>
                            </div>
                            <!--Navbar Brand-->
                            <div class="rd-navbar-brand d-none d-xl-inline-block"><a href="${pageContext.request.contextPath}/index.jsp"><img
                                    src="${pageContext.request.contextPath}/images/logo.bmp" alt="" width="280" height="55"/></a></div>
                            <div>
                                <address class="contact-info d-md-inline-block text-left">
                                    <div class="p unit flex-row unit-spacing-xs">
                                        <div class="unit-left"><img src="${pageContext.request.contextPath}/images/icons/head.png"
                                                                    style="height: 50px;"/></div>
                                        <div class="unit-body"><a
                                                class="link-inherit font-weight-medium white-space-wrap"
                                                href="${pageContext.request.contextPath}/login">您好,<security:authentication property="principal.username"/></a>
                                            <br/>
                                            <a href="${pageContext.request.contextPath}/logout"
                                               class="link-inherit font-weight-medium white-space-wrap">退出登录</a>
                                        </div>
                                    </div>
                                </address>
                            </div>
                        </div>
                        <!-- RD Navbar Panel-->
                        <div class="rd-navbar-panel">
                            <!-- RD Navbar Toggle-->
                            <button class="rd-navbar-toggle"
                                    data-rd-navbar-toggle=".rd-navbar, .rd-navbar-nav-wrap"><span></span></button>
                            <!--Navbar Brand-->
                            <div class="rd-navbar-brand d-xl-none"><a href="${pageContext.request.contextPath}/index.jsp"><img
                                    src="${pageContext.request.contextPath}/images/logo-default-404x92.png" alt="" width="202" height="46"/></a></div>
                            <button class="rd-navbar-top-panel-toggle"
                                    data-rd-navbar-toggle=".rd-navbar, .rd-navbar-top-panel"><span></span></button>
                        </div>
                        <div class="rd-navbar-menu-wrap">
                            <div class="rd-navbar-nav-wrap">
                                <div class="rd-navbar-mobile-scroll">
                                    <!--Navbar Brand Mobile-->
                                    <div class="rd-navbar-mobile-brand"><a href="${pageContext.request.contextPath}/index.jsp"><img
                                            src="${pageContext.request.contextPath}/images/logo-default-404x92.png" alt="" width="202"
                                            height="46"/></a></div>
                                    <div class="form-search-wrap">
                                        <!-- RD Search Form-->
                                        <form class="form-search rd-search" action="search-results.jsp"
                                              method="GET">
                                            <div class="form-wrap">
                                                <label class="form-label form-search-label form-label-sm"
                                                       for="rd-navbar-form-search-widget">Search</label>
                                                <input class="form-search-input form-control form-control-gray-lightest input-sm"
                                                       id="rd-navbar-form-search-widget" type="text" name="s"
                                                       autocomplete="off"/>
                                            </div>
                                            <button class="form-search-submit" type="submit"><span
                                                    class="fa fa-search"></span></button>
                                        </form>
                                    </div>
                                    <!-- RD Navbar Nav-->
                                    <ul class="rd-navbar-nav">
                                        <li class="active"><a href="${pageContext.request.contextPath}/index.jsp"><span>首页</span><span
                                                class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                        <li>
                                            <a href="${pageContext.request.contextPath}/pages/about.jsp"><span>关于我们</span>
                                                <span class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                        <li><a href="${pageContext.request.contextPath}/our-team.jsp"><span>线上问诊</span><span
                                                class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                        <li><a href="${pageContext.request.contextPath}/doctor/findAll"><span>预约挂号</span><span
                                                class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>

                                        </li>
                                        <li><a href="${pageContext.request.contextPath}/services.jsp"><span>医院查询</span><span
                                                class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                        <li><a href="${pageContext.request.contextPath}/timetable.jsp"><span>常识科普</span><span
                                                class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                        <li><a href="${pageContext.request.contextPath}/grid-gallery.jsp"><span>诊断记录</span><span
                                                class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                        <li>
                                            <a href="${pageContext.request.contextPath}/pages/login.jsp"><span>注册登录</span><span
                                                    class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                        <li><a href="${pageContext.request.contextPath}/doctor-index.jsp"><span>医生入口</span><span
                                                class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                        <li><a href="${pageContext.request.contextPath}/pages/doctor-join.jsp"><span>医生入驻</span><span
                                                class="rd-navbar-label text-middle label-custom label-danger label-xs-custom label-rounded-custom label"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <!--RD Navbar Search-->
                            <div class="rd-navbar-search"><a class="rd-navbar-search-toggle mdi"
                                                             data-rd-navbar-toggle=".rd-navbar-menu-wrap,.rd-navbar-search"
                                                             href="${pageContext.request.contextPath}/#"><span></span></a>
                                <form class="rd-navbar-search-form search-form-icon-right rd-search"
                                      action="search-results.jsp" data-search-live="rd-search-results-live"
                                      method="GET">
                                    <div class="form-wrap">
                                        <label class="form-label" for="rd-navbar-search-form-control">Type and hit
                                            enter...</label>
                                        <input class="rd-navbar-search-form-control form-control form-control-gray-lightest"
                                               id="rd-navbar-search-form-control" type="text" name="s"
                                               autocomplete="off"/>
                                    </div>
                                    <div class="rd-search-results-live" id="rd-search-results-live"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    </body>
</html>
