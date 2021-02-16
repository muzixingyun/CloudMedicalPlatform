<%--
  Created by IntelliJ IDEA.
  User: 李兴运
  Date: 2021/2/12
  Time: 22:26
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" isELIgnored="false" %>
<%@taglib prefix="security" uri="http://www.springframework.org/security/tags" %>
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
        <link rel="icon" href="images/favicon.ico" type="image/x-icon">
        <!-- Stylesheets-->
        <%--<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400&amp;display=swap">--%>
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/fonts.css">
        <link rel="stylesheet" href="${pageContext.request.contextPath}/css/style.css">
        <!--[if lt IE 10]>
        <!--<div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;">-->
            <!--<a href="http://windows.microsoft.com/en-US/internet-explorer/"><img-->
                    <!--src="../images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820"-->
                    <!--alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a>-->
        <!--</div>-->
        <%--<script src="${pageContext.request.contextPath}/js/html5shiv.min.js"></script>--%>
        <![endif]-->
    </head>
    <body>
        <!-- Page-->
        <div class="page text-center">
            <!-- Page Head-->
            <jsp:include page="head.jsp"/>
            <!-- Main services-->
            <section class="section-60 section-sm-110 novi-background bg-cover">
                <div class="container">
                        <h3>科室常见病情自查</h3>
                    <p class="font-weight-normal">点击进入各科室详情可查看病因及防治策略</p>
                    <div class="row row-30 row-lg-50 offset-top-30 offset-sm-top-60 text-lg-left">
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-stethoscope-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">预约挂号</a></h5>
                                <div class="service-desc">全国500多家三甲医院入住并接入网上挂号系统。直通名医专家<br><br><br></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-brain-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="${pageContext.request.contextPath}/department/findAllDiseaseByDepartmentName?departmentName=心血管内科">心血管内科</a></h5>
                                <div class="service-desc">治疗的疾病包括心绞痛、高血压、猝死、心律失常、心力衰竭、早搏、心律不齐、心肌梗死、心肌病、心肌炎、心肌梗塞等心血管疾病。
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-kidneys-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">呼吸内科</a></h5>
                                <div class="service-desc">主要治疗哮喘、肺炎、肺心病、支气管炎、慢性阻塞性肺疾病、肺结核、肺癌、胸膜炎、感冒、肺栓塞等肺部疾病的科室。<br><br>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-heartbeat-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">消化内科</a></h5>
                                <div class="service-desc">常见的疾病：急性腹痛、腹水、消化道出血、食管炎、急性胃炎、功能性便秘、急慢性肠炎、胃癌等<br><br></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-tooth-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">血液内科</a></h5>
                                <div class="service-desc">治疗血液范畴疾病的科室。如贫血、白血病、血友病、血小板异常、过敏性紫癜。骨髓异常等疾病<br><br></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">神经内科</a></h5>
                                <div class="service-desc">
                                    主要诊治脑血管疾病、偏头痛、脑部炎症性疾病、脊髓炎、癫痫、痴呆、神经系统变性病、代谢病和遗传病、三叉神经痛、坐骨神经病、周围神经病及重症肌无力等
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-stethoscope-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">免疫内科</a></h5>
                                <div class="service-desc">
                                    主治风湿性关节炎、类风湿性关节炎、强直性脊柱炎、牛皮癣关节炎、痛风性关节炎、骨性关节炎等各种关节炎；系统性红斑狼疮，皮肌炎、多发性肌炎，系统性硬化，干燥综合症等结缔组织病；大动脉炎、白塞氏病、结节性动脉炎等系统性血管炎。
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-brain-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">内分泌科</a></h5>
                                <div class="service-desc">
                                    内分泌科是医院中一个专门治疗内分泌科疾病的地方，主要负责糖尿病、肥胖症、骨质疏松、痛风、脂质代谢紊乱以及甲状腺、垂体、肾上腺、性腺、甲状旁腺等疾病的临床诊治。
                                    <br/><br/><br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-kidneys-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">肾内科</a></h5>
                                <div class="service-desc">肾炎、肾病综合症、尿毒症、肾衰<br/><br/><br/><br/><br/><br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-heartbeat-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">感染内科</a></h5>
                                <div class="service-desc">又可分为肝病科、传染病科、艾滋病病科、传染危重室等。主治：乙肝、肝炎、肝硬化、细菌性痢疾<br><br></div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-tooth-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">普外科</a></h5>
                                <div class="service-desc">普外科是以手术为主要方法治疗肝脏、胆道、胰腺、胃肠、肛肠、血管疾病、甲状腺和乳房的肿瘤及外伤等其它疾病<br><br>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">心胸外科</a></h5>
                                <div class="service-desc">
                                    肺癌、食道癌、气胸、胸腔积液<br/><br/><br/><br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">心脏外科</a></h5>
                                <div class="service-desc">
                                    心包疾病：缩窄性心包炎；、瓣膜外科：二尖瓣狭窄及关闭不全、主动脉瓣狭窄及关闭不全、三尖瓣狭窄及关闭不全；冠状动脉外科：冠心病、左心室室壁瘤、室间隔穿孔、二尖瓣乳头肌功能不全、冠状动脉瘘。<br/><br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">心脏肿瘤</a></h5>
                                <div class="service-desc">
                                    先心病：动脉异常未闭、主肺动脉间隔缺损、原发孔及继发孔房间隔缺损、房室共同通道、室间隔缺损、主动脉窦瘤破裂、三房心、部分性或完全性肺静脉畸型连接、肺动脉瓣狭窄、右室漏斗部狭窄、法三、法四、三尖瓣下移、三尖瓣闭锁。
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">泌尿外科</a></h5>
                                <div class="service-desc">
                                    各种尿结石和复杂性肾结石；肾脏和膀胱肿瘤；前列腺增生和前列腺炎；睾丸附睾的炎症和肿瘤；睾丸精索鞘膜积液；各种泌尿系损伤；泌尿系先天性畸形如尿道下裂、隐睾、肾盂输尿管连接部狭窄所导致的肾积水等等。<br/><br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">骨科</a></h5>
                                <div class="service-desc">
                                    髌骨骨折、尺神经损伤、先天性髋内翻、断指再植、趾间神经痛、距骨后外结节骨折、拇指再造、先天性胫骨缺如、僵鉧、感染性肋软骨炎、颞下颌关节强直、风湿热、眼眶击出性骨折、腘肌肌腱炎、跖趾关节痛、胫后神经痛、跟腱前囊炎、纤维肌痛症、滑囊炎、感染性关节炎、足舟状骨骨软骨病、姿态性腰腿痛、赖特综合征、灼性神经痛、纤维肌痛综合症等
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">神经外科</a></h5>
                                <div class="service-desc">研究人体神经系统（脑、脊髓和周围神经）及其附属机构（颅骨、脑膜、脑血管等）的损伤、炎症、肿瘤、畸形和某些功能紊乱疾患（如神经痛、癫痫等）的病因、发病原理、病理、症状、诊断与防治的理论和技术。<br/><br/><br/><br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">血管外科</a></h5>
                                <div class="service-desc">
                                    主要针对除脑血管、心脏血管以外的外周血管疾病的预防、诊断和治疗。静脉曲张、动静脉瘘、动脉瘤<br/><br/><br/><br/><br/><br/>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">妇科</a></h5>
                                <div class="service-desc">
                                    妇科疾病包括：女性生殖系统的疾病即为妇科疾病，包括外阴疾病、阴道疾病、子宫疾病、输卵管疾病、卵巢疾病等
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="#">儿科</a></h5>
                                <div class="service-desc">
                                    凡涉及儿童和青少年时期的健康与卫生问题都属于儿科范围。其医治的对象处于生长发育期。
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4">
                            <div class="service"><img src="images/icons/icon-lungs-80x80.png" alt="" width="80"
                                                      height="80"/>
                                <h5 class="service-title"><a href="${pageContext.request.contextPath}/department/findAllDiseaseByDepartmentName?departmentName=五官科（耳鼻咽喉科）">五官科（耳鼻咽喉科）</a></h5>
                                <div class="service-desc">
                                    耳鼻咽喉相关常见疾病：睡眠呼吸综合暂停症（鼾症·打呼噜）、支气管炎、哮喘、头痛、眩晕症、失眠症、面神经疼。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Page Contents-->

            <!-- Our Team-->
            <section>
                <div class="thumbnail-josip-wrap-big">
                    <!-- Thumbnail Josip-->
                    <figure class="thumbnail-josip thumbnail-big odd"><a href="team-member.html"><img width="384"
                                                                                                      height="410"
                                                                                                      src="images/pages/our-team-05-384x410.jpg"
                                                                                                      alt=""/></a>
                        <div class="thumbnail-desc">
                            <h5 class="thumbnail-josip-title">捅主任</h5>
                            <p class="d-none d-lg-block offset-top-0">专业人流</p>
                        </div>
                        <figcaption><a class="btn-primary btn btn-block btn-rect text-lg-left" href="team-member.html">view
                            full profile</a></figcaption>
                    </figure>
                    <!-- Thumbnail Josip-->
                    <figure class="thumbnail-josip thumbnail-big"><a href="team-member.html"><img width="384"
                                                                                                  height="410"
                                                                                                  src="images/pages/our-team-06-384x410.jpg"
                                                                                                  alt=""/></a>
                        <div class="thumbnail-desc">
                            <h5 class="thumbnail-josip-title">李四</h5>
                            <p class="d-none d-lg-block offset-top-0">看弟弟的</p>
                        </div>
                        <figcaption><a class="btn-primary btn btn-block btn-rect text-lg-left" href="team-member.html">view
                            full profile</a></figcaption>
                    </figure>
                    <!-- Thumbnail Josip-->
                    <figure class="thumbnail-josip thumbnail-big odd"><a href="team-member.html"><img width="384"
                                                                                                      height="410"
                                                                                                      src="images/pages/our-team-07-384x410.jpg"
                                                                                                      alt=""/></a>
                        <div class="thumbnail-desc">
                            <h5 class="thumbnail-josip-title">王五</h5>
                            <p class="d-none d-lg-block offset-top-0">妇女之友</p>
                        </div>
                        <figcaption><a class="btn-primary btn btn-block btn-rect text-lg-left" href="team-member.html">view
                            full profile</a></figcaption>
                    </figure>
                    <!-- Thumbnail Josip-->
                    <figure class="thumbnail-josip thumbnail-big"><a href="team-member.html"><img width="384"
                                                                                                  height="410"
                                                                                                  src="images/pages/our-team-08-384x410.jpg"
                                                                                                  alt=""/></a>
                        <div class="thumbnail-desc">
                            <h5 class="thumbnail-josip-title">赵六</h5>
                            <p class="d-none d-lg-block offset-top-0">肛肠科专家，辣手摧花</p>
                        </div>
                        <figcaption><a class="btn-primary btn btn-block btn-rect text-lg-left" href="team-member.html">view
                            full profile</a></figcaption>
                    </figure>
                    <!-- Thumbnail Josip-->
                    <figure class="thumbnail-josip thumbnail-big odd"><a href="team-member.html"><img width="384"
                                                                                                      height="410"
                                                                                                      src="images/pages/our-team-09-384x410.jpg"
                                                                                                      alt=""/></a>
                        <div class="thumbnail-desc">
                            <h5 class="thumbnail-josip-title">高老四</h5>
                            <p class="d-none d-lg-block offset-top-0">一针包治梅毒</p>
                        </div>
                        <figcaption><a class="btn-primary btn btn-block btn-rect text-lg-left" href="team-member.html">view
                            full profile</a></figcaption>
                    </figure>
                </div>
            </section>

            <!-- Page Footer-->
            <jsp:include page="foot.jsp"/>
        </div>
        <!-- Preloader-->
        <div class="preloader">
            <div class="preloader-body">
                <div class="preloader-inner">
                    <div class="preloader-item"><span></span><span></span><span></span></div>
                    <div class="preloader-item"><span></span><span></span><span></span></div>
                    <div class="preloader-item"><span></span><span></span><span></span></div>
                    <div class="preloader-item"><span></span><span></span><span></span></div>
                </div>
            </div>
        </div>
        <!-- Global Mailform Output-->
        <div class="snackbars" id="form-output-global"></div>
        <!-- Java script-->
        <script src="${pageContext.request.contextPath}/js/core.min.js"></script>
        <script src="${pageContext.request.contextPath}/js/script.js"></script>
    </body>
</html>
