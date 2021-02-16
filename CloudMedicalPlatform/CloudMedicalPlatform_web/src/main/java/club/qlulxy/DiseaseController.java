package club.qlulxy;

import club.qlulxy.domain.Disease;
import club.qlulxy.service.IDiseaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/15 14:43
 * @description：
 * @modified By：
 * @version:
 */
@Controller
@RequestMapping("/disease")
public class DiseaseController {

    @Autowired
    private IDiseaseService diseaseService;


    /**
     * 用于在某个科室下添加一个疾病
     * @param disease
     * @param departmentName
     * @return
     * @throws Exception
     */
    @RequestMapping("/save")
    public String save(Disease disease, String departmentName) throws Exception {
        diseaseService.save(disease,departmentName);
        return "forward:/department/findAllDiseaseByDepartmentName?role=_d_o_c_";
    }
}
