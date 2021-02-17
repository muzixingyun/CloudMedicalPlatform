package club.qlulxy;

import club.qlulxy.domain.Doctor;
import club.qlulxy.domain.User;
import club.qlulxy.service.IDoctorService;
import club.qlulxy.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/16 11:11
 * @description：
 * @modified By：
 * @version:
 */
@RequestMapping("/doctor")
@Controller
public class DoctorController {

    @Autowired
    private IUserService userService;

    @Autowired
    private IDoctorService doctorService;

    @RequestMapping(value = "/checkRegist",produces = "text/html;charset=UTF-8")
    public @ResponseBody
    String checkRegist(@RequestBody String requestBody) throws Exception {
        String name = requestBody.split(":")[1].split("}")[0];
        User user = userService.checkRegist(name);
        if (user != null) {
            return "用户已注册，入驻后请直接登录";
        } else {
            return "用户未注册，将直接进行注册，用户名为--医生姓名---，默认密码为---123，请登陆后尽快修改";
        }
    }

    @RequestMapping("/join")
    public String join(Doctor doctor) throws Exception{
        doctorService.doctorJoin(doctor);
        return "../index";
    }
    @RequestMapping("/findAll")
    public String findAll(Model model) throws Exception{
        List<Doctor> doctorList = doctorService.findAll();
        model.addAttribute("doctorList",doctorList);
        return "user-register";
    }
}
