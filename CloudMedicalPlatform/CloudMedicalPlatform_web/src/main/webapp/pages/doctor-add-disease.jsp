<%--
  Created by IntelliJ IDEA.
  User: 李兴运
  Date: 2021/2/15
  Time: 13:37
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" isELIgnored="false" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <!-- 页面meta -->
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>数据 - AdminLTE2定制版</title>
        <meta name="description" content="AdminLTE2定制版">
        <meta name="keywords" content="AdminLTE2定制版">

        <!-- Tell the browser to be responsive to screen width -->
        <meta
                content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
                name="viewport">


        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/font-awesome/css/font-awesome.min.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/ionicons/css/ionicons.min.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/iCheck/square/blue.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/morris/morris.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/jvectormap/jquery-jvectormap-1.2.2.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/datepicker/datepicker3.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/daterangepicker/daterangepicker.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/datatables/dataTables.bootstrap.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/treeTable/jquery.treetable.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/treeTable/jquery.treetable.theme.default.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/select2/select2.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/colorpicker/bootstrap-colorpicker.min.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/adminLTE/css/AdminLTE.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/adminLTE/css/skins/_all-skins.min.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/css/style.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/ionslider/ion.rangeSlider.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/ionslider/ion.rangeSlider.skinNice.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/bootstrap-slider/slider.css">
        <link rel="stylesheet"
              href="${pageContext.request.contextPath}/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.css">
    </head>

    <body class="hold-transition skin-purple sidebar-mini">

        <div class="wrapper">

            <!-- 页面头部 -->
            <jsp:include page="../doctor-header.jsp"></jsp:include>
            <!-- 页面头部 /-->
            <!-- 导航侧栏 -->
            <jsp:include page="../doctor-aside.jsp"></jsp:include>
            <!-- 导航侧栏 /-->

            <!-- 内容区域 -->
            <div class="content-wrapper">

                <!-- 内容头部 -->
                <section class="content-header">
                    <h1>
                        疾病管理<small>新增疾病</small>
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="${pageContext.request.contextPath}/doctor-index.jsp"><i
                                class="fa fa-dashboard"></i> 首页</a></li>
                        <li><a href="${pageContext.request.contextPath}/department/findAll">科室与疾病管理</a></li>
                        <li class="active">疾病表单</li>
                    </ol>
                </section>
                <!-- 内容头部 /-->

                <form action="${pageContext.request.contextPath}/disease/save?departmentName=${departmentName}"
                      method="post">
                    <!-- 正文区域 -->
                    <section class="content"> <!--产品信息-->

                        <div class="panel panel-default">
                            <div class="panel-heading">在${departmentName}下新增疾病信息</div>
                            <div class="row data-type">

                                <div class="col-md-2 title">疾病名称</div>
                                <div class="col-md-10 data">
                                    <input type="text" class="form-control" name="diseaseName"
                                           placeholder="疾病名称" value="">
                                </div>
                                <div class="col-md-2 title rowHeight2x">病因</div>
                                <div class="col-md-10 data rowHeight2x">
                                    <textarea class="form-control" rows="3" placeholder="请输入病因" name="reason"></textarea>
                                </div>
                                <div class="col-md-2 title rowHeight2x">症状</div>
                                <div class="col-md-10 data rowHeight2x">
                                    <textarea class="form-control" rows="3" placeholder="请输入症状" name="symptom"></textarea>
                                </div>

                                <div class="col-md-2 title rowHeight2x">治疗手段</div>
                                <div class="col-md-10 data rowHeight2x">
                                    <textarea class="form-control" rows="3" placeholder="请输入治疗手段" name="treatment"></textarea>
                                </div>
                                <div class="col-md-2 title rowHeight2x">预防手段</div>
                                <div class="col-md-10 data rowHeight2x">
                                    <textarea class="form-control" rows="3" placeholder="请输入预防手段" name="prevention"></textarea>
                                </div>
                            </div>
                        </div>
                        <!--订单信息/--> <!--工具栏-->
                        <div class="box-tools text-center">
                            <button type="submit" class="btn bg-maroon">保存</button>
                            <button type="button" class="btn bg-default"
                                    onclick="history.back(-1);">返回</button>
                        </div>
                        <!--工具栏/--> </section>
                    <!-- 正文区域 /-->
                </form>
            </div>
            <!-- 内容区域 /-->

            <!-- 底部导航 -->
            <footer class="main-footer">
                <div class="pull-right hidden-xs">
                    <b>Version</b> 1.0.8
                </div>
                <strong>Copyright &copy; 2014-2017 <a
                        href="http://www.itcast.cn">研究院研发部</a>.
                </strong> All rights reserved. </footer>
            <!-- 底部导航 /-->

        </div>


        <script
                src="${pageContext.request.contextPath}/plugins/jQuery/jquery-2.2.3.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/jQueryUI/jquery-ui.min.js"></script>
        <script>
            $.widget.bridge('uibutton', $.ui.button);
        </script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/raphael/raphael-min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/morris/morris.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/sparkline/jquery.sparkline.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/knob/jquery.knob.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/daterangepicker/moment.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/daterangepicker/daterangepicker.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/daterangepicker/daterangepicker.zh-CN.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/datepicker/bootstrap-datepicker.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/datepicker/locales/bootstrap-datepicker.zh-CN.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/slimScroll/jquery.slimscroll.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/fastclick/fastclick.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/iCheck/icheck.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/adminLTE/js/app.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/treeTable/jquery.treetable.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/select2/select2.full.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/colorpicker/bootstrap-colorpicker.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.zh-CN.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap-markdown/js/bootstrap-markdown.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap-markdown/locale/bootstrap-markdown.zh.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap-markdown/js/markdown.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap-markdown/js/to-markdown.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/ckeditor/ckeditor.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/input-mask/jquery.inputmask.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/input-mask/jquery.inputmask.extensions.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/datatables/jquery.dataTables.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/datatables/dataTables.bootstrap.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/chartjs/Chart.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/flot/jquery.flot.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/flot/jquery.flot.resize.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/flot/jquery.flot.pie.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/flot/jquery.flot.categories.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/ionslider/ion.rangeSlider.min.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap-slider/bootstrap-slider.js"></script>
        <script
                src="${pageContext.request.contextPath}/plugins/bootstrap-datetimepicker/bootstrap-datetimepicker.min.js"></script>

        <script>
            $(document).ready(function() {
                // 选择框
                $(".select2").select2();

                // WYSIHTML5编辑器
                $(".textarea").wysihtml5({
                    locale : 'zh-CN'
                });
            });

            // 设置激活菜单
            function setSidebarActive(tagUri) {
                var liObj = $("#" + tagUri);
                if (liObj.length > 0) {
                    liObj.parent().parent().addClass("active");
                    liObj.addClass("active");
                }
            }

        </script>


    </body>

</html>