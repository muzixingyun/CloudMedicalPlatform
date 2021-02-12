package club.qlulxy;

import club.qlulxy.service.ITestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/12 22:27
 * @description：
 * @modified By：
 * @version:
 */
@Controller
@RequestMapping("/test")
public class TestController {

    @Autowired
    private ITestService testService;

    @RequestMapping("findAll")
    public String findAll(){
        System.out.println("这是视图层可以工作");
        testService.findAll();
        return "index";
    }
}
