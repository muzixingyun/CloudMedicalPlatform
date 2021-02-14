package club.qlulxy;

import club.qlulxy.domain.Disease;
import club.qlulxy.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/14 15:18
 * @description：
 * @modified By：
 * @version:
 */

@Controller
@RequestMapping("/department")
public class DepartmentController {

    @Autowired
    private IDepartmentService departmentService;

    @RequestMapping("findAllDiseaseByDepartmentName")
    public String findAllDiseaseByDepartmentName(Model model, String departmentName) throws Exception {
        List<Disease> diseaseList = departmentService.findAllDiseaseByDepartmentName(departmentName);
        model.addAttribute("diseaseList", diseaseList);
        return "disease-List";
    }
}
