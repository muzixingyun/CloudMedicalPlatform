package club.qlulxy;

import club.qlulxy.domain.User;
import club.qlulxy.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/10 20:17
 * @description：这是一个user的视图层实例
 * @modified By：
 * @version: 1.0
 */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private IUserService userService;

    //新建用户
    @RequestMapping("/saveUser")
    public String saveUser(User user) {
        userService.saveUser(user);
        return "login";
    }
}
