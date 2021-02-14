package club.qlulxy.service;

import club.qlulxy.domain.Disease;

import java.util.List;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/14 15:37
 * @description：
 * @modified By：
 * @version:
 */
public interface IDepartmentService {
    List<Disease> findAllDiseaseByDepartmentName(String departmentName) throws Exception;
}
