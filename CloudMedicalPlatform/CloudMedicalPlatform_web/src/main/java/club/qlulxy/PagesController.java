package club.qlulxy;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/15 14:12
 * @description：
 * @modified By：
 * @version:
 */
@Controller
@RequestMapping("/pages")
public class PagesController {

    /**
     * 跳转到doctor-add-disease页面
     * @param model
     * @param departmentName
     * @return
     */
    @RequestMapping("/doctor-add-disease-redirect")
    public String doctorAddDiseaseRedirect(Model model,String departmentName){
        model.addAttribute("departmentName",departmentName);
        return "doctor-add-disease";
    }
}
