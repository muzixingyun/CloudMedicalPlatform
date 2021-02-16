package club.qlulxy;

import club.qlulxy.domain.Department;
import club.qlulxy.domain.Disease;
import club.qlulxy.service.IDepartmentService;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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

    /**
     * 根据科室名称查询科室所属的所有疾病并展示
     * @param model
     * @param departmentName
     * @return
     * @throws Exception
     */
    @RequestMapping("findAllDiseaseByDepartmentName")
    public String findAllDiseaseByDepartmentName(Model model, String departmentName,@RequestParam(defaultValue = "user") String role) throws Exception {
        List<Disease> diseaseList = departmentService.findAllDiseaseByDepartmentName(departmentName);
        model.addAttribute("diseaseList", diseaseList);
        model.addAttribute("departmentName", departmentName);
        if (role.equals("_d_o_c_")){
            return "doctor-disease-List";
        }else if (role.equals("user")){
            return "disease-List";
        }
        return "index";
    }

    /**
     * 查询所有科室
     * @param model
     * @param page
     * @param num
     * @return
     * @throws Exception
     */
    @RequestMapping("findAll")
    public String findAll(Model model, @RequestParam(defaultValue = "1") Integer page, @RequestParam(defaultValue = "9") Integer num) throws Exception {
        List<Department> departmentList = departmentService.findAll(page,num);
        PageInfo pageInfo = new PageInfo(departmentList);
        model.addAttribute("pageInfo", pageInfo);
        return "doctor-department-List";
    }

    /**
     * 异步查询所有科室
     *
     * @return
     * @throws Exception
     */
    @RequestMapping("/ajaxFindAll")
    public @ResponseBody List<Department> ajaxFindAll() throws Exception {
        List<Department> departmentList = departmentService.findAll(1,100);
        return departmentList;
    }

}
