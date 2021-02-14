<%--
  Created by IntelliJ IDEA.
  User: 李兴运
  Date: 2021/2/14
  Time: 15:47
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html class="wide wow-animation smoothscroll scrollTo" lang="en">
    <head>
        <!-- Site Title-->
        <title>Home</title>
        <meta charset="utf-8">
        <meta name="format-detection" content="telephone=no">
        <meta name="viewport"
              content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge">
        <meta name="keywords" content="SANA design multipurpose template">
        <meta name="date" content="Dec 26">
        <link rel="icon" href="${pageContext.request.contextPath}/images/favicon.ico"
              type="${pageContext.request.contextPath}/image/x-icon">
        <!-- Stylesheets-->
        <link rel="stylesheet" type="text/css"
              href="${pageContext.request.contextPath}/fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&amp;display=swap">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/fonts.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
        <!--[if lt IE 10]>
        <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;">
            <a href="http://windows.microsoft.com/en-US/internet-explorer/"><img
                    src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"
                    alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a>
        </div>
        <script src="${pageContext.request.contextPath}/js/html5shiv.min.js"></script>
        <![endif]-->

    </head>
    <body>
        <jsp:include page="../head.jsp"/>


        <section class="section-60 section-sm-110 bg-default">
            <!-- Classic Responsive Table-->
            <table class="table table-custom table-automatic" data-responsive="true">
                <tr>
                    <td >编号</td>
                    <td >疾病名称</td>
                    <td >症状</td>
                    <td >操作</td>
                </tr>
                <c:forEach items="${diseaseList}" var="disease">
                    <tr>
                        <td>${disease.id}</td>
                        <td>${disease.diseaseName}</td>
                        <td>${disease.symptom}</td>
                        <td><a href="">查看病因及防治策略</a></td>
                    </tr>
                </c:forEach>
            </table>

        </section>
        <jsp:include page="../foot.jsp"/>
        <!-- Java script-->
        <script src="${pageContext.request.contextPath}/js/core.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/script.js"></script>
    </body>
</html>
