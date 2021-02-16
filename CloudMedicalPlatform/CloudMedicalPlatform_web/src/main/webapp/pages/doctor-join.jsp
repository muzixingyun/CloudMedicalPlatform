<%--
  Created by IntelliJ IDEA.
  User: 李兴运
  Date: 2021/2/16
  Time: 10:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<html>

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">


        <title>登录</title>
        <meta name="format-detection" content="telephone=no,email=no,address=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=yes, shrink-to-fit=no">
        <meta content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" name="viewport">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/ionicons/css/ionicons.min.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/adminLTE/css/AdminLTE.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/plugins/iCheck/square/blue.css">
    </head>

    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">


                <a href="all-admin-index.html"><b>数据</b>后台管理系统</a>


            </div>
            <!-- /.login-logo -->
            <div class="login-box-body">
                <p class="login-box-msg">医生入驻</p>

                <form action="${pageContext.request.contextPath}/doctor/join" method="post">
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="姓名" id="doctorName" name="doctorName" >
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <div style="height: 100px;width: 150px">
                        <h5>请选择你所在城市</h5>
                        <select name="province" id="province" onchange="setCity()">
                            <option hidefocus="true">请选择省市</option>
                        </select>
                        <select name="city"id="city" onchange="setCounty()">
                            <option hidefocus="true">请选择城市</option>
                        </select>
                        <select name="county"id="county">
                            <option hidefocus="true">请选择县</option>
                        </select>
                    </div>

                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="医院" name="hospital">
                        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    </div>
                    <!--下拉框-->
                    <div class="tab-pane" id="tab-select">
                        <div class="row data-type">
                            <div class="col-md-2 title">科室</div>
                            <div class="col-md-10 data">
                                <select class="form-control" id="department" name="department">
                                </select>
                            </div>
                        </div>
                    </div>
                    <!--下拉框/-->

                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="擅长" name="excel">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control" placeholder="执业医师资格证号" name="certificateNo">
                        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div class="row">
                        <div class="col-xs-4">
                            <button type="submit" class="btn btn-primary btn-block btn-flat">入驻</button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
            </div>
            <!-- /.login-box-body -->
        </div>
        <!-- /.login-box -->

        <!-- jQuery 2.2.3 -->
        <!-- Bootstrap 3.3.6 -->
        <!-- iCheck -->
        <script src="${pageContext.request.contextPath}/plugins/jQuery/jquery-2.2.3.min.js"></script>
        <script src="${pageContext.request.contextPath}/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="${pageContext.request.contextPath}/plugins/iCheck/icheck.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/jquery.min.js"></script>
        <script>
            $(function () {
                $('input').iCheck({
                    checkboxClass: 'icheckbox_square-blue',
                    radioClass: 'iradio_square-blue',
                    increaseArea: '20%' // optional
                });
            });


            /*异步加载所有科室*/
            $(function() {
                $.ajax({
                    type: "POST",
                    url: "${pageContext.request.contextPath}/department/ajaxFindAll",
                    contentType:"application/json;charset=utf-8",
                    dataType:"json",
                    success: function(data){
                        $("#department").empty();
                       for (var i = 0;i < data.length; i++){
                           var de = data[i]["partName"]
                           $("#department").append("<option value='"+de+"'>"+de+"</option>");
                       }
                    }
                });
            })
            /*异步查看是否已经注册*/

            $("#doctorName").focusout(function () {
                var doctorName = $("#doctorName").val();
                $.ajax({
                    type: "POST",
                    url: "${pageContext.request.contextPath}/doctor/checkRegist",
                    contentType:"application/json;charset=utf-8",
                    data:'{"username":'+doctorName+'}',
                    dataType:"text",
                    success: function(text){
                        alert(text)
                    }
                });
            })

            /*城市选择开始*/
            $(function() {
                $.getJSON("../json/area.json", function(data) {
                    $.each(data["86"],function(i,n){
                        $("#province").append("<option value='"+i+" "+n+"'>"+n+"</option>");
                    })

                });
            })
            function setCity(){
                var province = $("#province").val();
                var provinceNum = province.split(" ")[0];
                $.getJSON("../json/area.json", function(data) {
                    $("#city").empty();
                    $("#county").empty();
                    $.each(data[provinceNum],function(i,n){
                        $("#city").append("<option value='"+i+" "+n+"'>"+n+"</option>");
                    })

                });
            }
            function setCounty(){
                var city = $("#city").val();
                var cityNum = city.split(" ")[0];
                $.getJSON("../json/area.json", function(data) {
                    $("#county").empty();
                    $.each(data[cityNum],function(i,n){
                        $("#county").append("<option value='"+i+" "+n+"'>"+n+"</option>");
                    })

                });
            }
            /*城市选择结束*/

        </script>
    </body>
</html>

