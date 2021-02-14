package club.qlulxy.service.impl;

import club.qlulxy.dao.IDepartmentDao;
import club.qlulxy.domain.Disease;
import club.qlulxy.service.IDepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author ：李兴运
 * @date ：Created in 2021/2/14 15:38
 * @description：
 * @modified By：
 * @version:
 */
@Service
@Transactional
public class DepartmentServiceImpl implements IDepartmentService {
    @Autowired
    private IDepartmentDao departmentDao;

    public List<Disease> findAllDiseaseByDepartmentName(String departmentName) throws Exception {
        return departmentDao.findAllDiseaseByDepartmentName(departmentName);
    }
}
